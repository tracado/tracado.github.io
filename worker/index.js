/**
 * Traçado — recebedor do formulário de contato da landing page.
 *
 * Existe por um motivo de segurança: a landing page é estática, então tudo que
 * estiver no JavaScript dela é público — qualquer pessoa lê com Ctrl+U. Uma
 * credencial de e-mail ali seria extraída em segundos e usada para disparar
 * phishing com o remetente do Traçado. Aqui a chave vive como secret do Worker,
 * no servidor, e nunca chega ao navegador.
 */

const CORS = (origem) => ({
  'Access-Control-Allow-Origin': origem,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
});

const json = (dados, status, origem) =>
  new Response(JSON.stringify(dados), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS(origem) },
  });

/** Escapa para interpolar em HTML sem abrir injeção via campo do formulário. */
const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const LIMITES = { name: 120, email: 160, company: 160, phone: 40, interest: 60 };

export default {
  async fetch(request, env) {
    // Só as origens declaradas em ORIGENS_PERMITIDAS podem postar aqui.
    const permitidas = (env.ORIGENS_PERMITIDAS || '').split(',').map((o) => o.trim()).filter(Boolean);
    const origem = request.headers.get('Origin') || '';
    const liberada = permitidas.includes(origem) ? origem : (permitidas[0] || '');

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS(liberada) });
    if (request.method !== 'POST') return json({ erro: 'Método não permitido.' }, 405, liberada);
    if (permitidas.length && !permitidas.includes(origem))
      return json({ erro: 'Origem não autorizada.' }, 403, liberada);

    let dados;
    try { dados = await request.json(); }
    catch { return json({ erro: 'Requisição inválida.' }, 400, liberada); }

    // Honeypot: campo invisível ao humano. Se veio preenchido, é robô.
    // Responde 200 de propósito — negar ensina o robô a tentar de novo.
    if (dados.website) return json({ ok: true }, 200, liberada);

    const campo = (k) => String(dados[k] ?? '').trim().slice(0, LIMITES[k] || 200);
    const nome = campo('name'), email = campo('email');
    const empresa = campo('company'), telefone = campo('phone'), interesse = campo('interest');

    if (!nome || !email) return json({ erro: 'Nome e e-mail são obrigatórios.' }, 422, liberada);
    if (!/^[^@\s]+@[^@\s.]+\.[^@\s]+$/.test(email))
      return json({ erro: 'E-mail inválido.' }, 422, liberada);

    const quando = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const pais = request.headers.get('CF-IPCountry') || '—';

    const html = `
      <h2>Novo contato pela landing page do Traçado</h2>
      <table cellpadding="6" style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">
        <tr><td><b>Nome</b></td><td>${esc(nome)}</td></tr>
        <tr><td><b>E-mail</b></td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
        <tr><td><b>Empresa</b></td><td>${esc(empresa) || '—'}</td></tr>
        <tr><td><b>Telefone</b></td><td>${esc(telefone) || '—'}</td></tr>
        <tr><td><b>Interesse</b></td><td>${esc(interesse) || '—'}</td></tr>
        <tr><td><b>Quando</b></td><td>${esc(quando)} (Brasília)</td></tr>
        <tr><td><b>País de origem</b></td><td>${esc(pais)}</td></tr>
      </table>
      <p style="font-size:12px;color:#666">Responda direto a este e-mail para falar com a pessoa.</p>`;

    const envio = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: env.REMETENTE,
        to: [env.DESTINATARIO],
        reply_to: email,
        subject: `Traçado — contato de ${nome}${empresa ? ` (${empresa})` : ''}`,
        html,
      }),
    });

    if (!envio.ok) {
      // Não devolve o corpo do erro ao navegador: pode conter detalhe do provedor.
      console.error('Falha no envio:', envio.status, await envio.text());
      return json({ erro: 'Não foi possível enviar agora. Tente novamente em instantes.' }, 502, liberada);
    }
    return json({ ok: true }, 200, liberada);
  },
};
