import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  UserCheck,
  CheckCircle2,
  Calendar,
  Building,
  Mail,
  User,
  Phone,
  Shield,
  Layers,
  ArrowRight,
  Terminal,
  Copy,
  Check
} from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
  isCommunityModal?: boolean;
}

// Values must match the <option> values in the "interest" select below.
const INTEREST_OPTIONS = [
  { value: 'Certificação ISO 27001', label: 'Certificação Oficial ISO/IEC 27001:2022' },
  { value: 'Multi-Framework (ISO + CIS + NIST + LGPD)', label: 'Unificação Multi-Framework (ISO, CIS, NIST, LGPD)' },
  { value: 'Adequação LGPD & RoPA', label: 'Adequação LGPD & Registro de Operações' },
  { value: 'Auditoria Interna Cláusula 9.2', label: 'Realização de Auditoria Interna Oficial (Cl. 9.2)' },
  { value: 'Migração de Planilhas para IA On-Premise', label: 'Migração de Planilhas para IA Local' },
  { value: 'Enterprise com Mentoria', label: 'Plano Enterprise com Mentoria de Auditores' },
  { value: 'Outros', label: 'Outro assunto (descreva abaixo)' },
];
const INTERESSE_OUTROS = 'Outros';
const DEFAULT_INTEREST = INTEREST_OPTIONS[0].value;

// Callers pass either a matching interest value or a free-text/plan-id
// context (e.g. "essencial", "Simulação de ROI"). The select can only be
// set to one of its own options, so anything else falls back to the
// default and is shown separately as a context hint instead.
const PLAN_CONTEXT_LABELS: Record<string, string> = {
  essencial: 'Traçado Essencial',
  avancado: 'Traçado Avançado',
  enterprise_mentoria: 'Enterprise + Mentoria de Auditores',
};

const resolveInterest = (initialPlan?: string): string => {
  if (!initialPlan) return DEFAULT_INTEREST;
  if (INTEREST_OPTIONS.some((opt) => opt.value === initialPlan)) return initialPlan;
  if (initialPlan === 'enterprise_mentoria') return 'Enterprise com Mentoria';
  return DEFAULT_INTEREST;
};

const resolveContextLabel = (initialPlan?: string): string | null => {
  if (!initialPlan) return null;
  if (PLAN_CONTEXT_LABELS[initialPlan]) return PLAN_CONTEXT_LABELS[initialPlan];
  const matched = INTEREST_OPTIONS.find((opt) => opt.value === initialPlan);
  return matched ? matched.label : initialPlan;
};

/* ---------------------------------------------------------------------------
 * Validação.
 *
 * O `required` e o `type="email"` do HTML são o piso, não o teto: o navegador
 * aceita "a@b" como e-mail válido (não exige domínio com ponto) e não valida
 * NADA num `type="tel"` — foi por isso que um telefone de três dígitos passou.
 * Cada função devolve a mensagem do erro, ou null quando o campo está bom.
 * ------------------------------------------------------------------------- */

const soDigitos = (v: string) => v.replace(/\D+/g, '');

/** Exige usuário, arroba, domínio e um TLD de ao menos duas letras. */
const RE_EMAIL = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[A-Za-z]{2,}$/;

const validarNome = (v: string): string | null => {
  const t = v.trim();
  if (!t) return 'Informe seu nome.';
  if (t.length < 3) return 'Nome muito curto.';
  // Um nome só de números ou de símbolos não é nome.
  if (!/[A-Za-zÀ-ÿ]{2}/.test(t)) return 'Informe seu nome como ele se escreve.';
  return null;
};

const validarEmail = (v: string): string | null => {
  const t = v.trim();
  if (!t) return 'Informe seu e-mail.';
  if (!t.includes('@')) return 'Falta o @ no endereço.';
  if (!RE_EMAIL.test(t)) return 'E-mail incompleto — falta o domínio (ex.: nome@empresa.com.br).';
  if (/\.{2,}/.test(t)) return 'Há um ponto a mais no endereço.';
  return null;
};

const validarEmpresa = (v: string): string | null => {
  const t = v.trim();
  if (!t) return 'Informe a empresa ou organização.';
  if (t.length < 2) return 'Nome muito curto.';
  return null;
};

/** Aceita número brasileiro (DDD + 8 ou 9 dígitos) ou internacional com "+". */
const validarTelefone = (v: string): string | null => {
  const t = v.trim();
  if (!t) return 'Informe um telefone ou WhatsApp.';
  const d = soDigitos(t);
  if (t.startsWith('+')) {
    if (d.length < 8 || d.length > 15) return 'Número internacional inválido.';
    return null;
  }
  if (d.length < 10) return 'Faltam dígitos — use DDD + número, ex.: (11) 99999-9999.';
  if (d.length > 11) return 'Dígitos demais. Para número de fora, comece com "+".';
  // DDD brasileiro nunca começa com 0 nem com 1 sozinho: a faixa real é 11–99.
  if (Number(d.slice(0, 2)) < 11) return 'DDD inválido.';
  // Celular no Brasil tem 11 dígitos e o nono é sempre 9.
  if (d.length === 11 && d[2] !== '9') return 'Celular com 11 dígitos precisa começar com 9 após o DDD.';
  // Deliberadamente NÃO há filtro de "dígitos repetidos": (99) 99999-9999 é um
  // celular válido do Maranhão. Barrar um cliente real custa muito mais caro
  // que receber um e-mail falso, que a gente simplesmente ignora.
  return null;
};

/** Máscara aplicada enquanto a pessoa digita, para o erro ficar óbvio antes
 *  mesmo da validação: (11) 99999-9999. Número com "+" passa sem máscara. */
const formatarTelefone = (v: string): string => {
  if (v.trim().startsWith('+')) return '+' + soDigitos(v).slice(0, 15);
  const d = soDigitos(v).slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

/** Sitekey COMPARTILHADA do hCaptcha, publicada pelo próprio Web3Forms para
 *  integração sem configuração: não exige conta no hCaptcha nem chave nossa.
 *  Documentada em docs.web3forms.com — é pública por desenho, como a de baixo. */
const HCAPTCHA_SITEKEY = '50b2fe65-b00b-4b9e-ad62-3ba471098be2';

declare global {
  interface Window {
    hcaptcha?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
      remove: (id: string) => void;
    };
  }
}

/** Chave PÚBLICA do Web3Forms — por desenho ela fica no código do navegador.
 *  Identifica para qual caixa de entrada o contato vai; não dá acesso a nada. */
const WEB3FORMS_KEY = '6b6fa9cc-3cde-4ffc-be29-c5728ac1e12c';

const buildInitialFormData = (initialPlan?: string) => ({
  name: '',
  email: '',
  company: '',
  phone: '',
  interest: resolveInterest(initialPlan),
  detalhe: '',
});

type CampoForm = 'name' | 'email' | 'company' | 'phone' | 'detalhe';

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  initialPlan,
  isCommunityModal = false,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erroEnvio, setErroEnvio] = useState<string | null>(null);
  // Honeypot: fica fora da tela, ninguém o vê para marcar. Se vier marcado,
  // quem preencheu foi um robô lendo o HTML.
  const [botcheck, setBotcheck] = useState(false);
  // Token devolvido pelo hCaptcha quando a pessoa passa no desafio. Sem ele o
  // Web3Forms recusa o envio, então ele também trava o botão aqui.
  const [captcha, setCaptcha] = useState<string | null>(null);
  const captchaBox = useRef<HTMLDivElement>(null);
  const captchaId = useRef<string | null>(null);
  const [copiedDocker, setCopiedDocker] = useState(false);
  const [formData, setFormData] = useState(() => buildInitialFormData(initialPlan));
  // Um campo vazio que a pessoa ainda nem tocou não é erro dela — é o
  // formulário recém-aberto. Só acende o vermelho depois que ela saiu do campo.
  const [tocado, setTocado] = useState<Partial<Record<CampoForm, boolean>>>({});

  // The modal stays mounted while closed (isOpen just hides it), so its
  // state must be reset explicitly on every open — otherwise a previous
  // submission's success screen (or stale plan context) reappears.
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setFormData(buildInitialFormData(initialPlan));
      setTocado({});
      setErroEnvio(null);
      setCaptcha(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, initialPlan]);

  // O script do hCaptcha carrega async, então pode não estar pronto quando o
  // modal abre. Em vez de assumir, espera-o aparecer — e desiste depois de 10s
  // para não ficar um intervalo girando para sempre numa rede que o bloqueou.
  useEffect(() => {
    if (!isOpen || submitted) return;
    let vivo = true;
    let tentativas = 0;

    const montar = () => {
      if (!vivo) return;
      const h = window.hcaptcha;
      if (!h || !captchaBox.current) {
        if (++tentativas > 100) return;      // ~10 s
        window.setTimeout(montar, 100);
        return;
      }
      if (captchaId.current !== null) {
        h.reset(captchaId.current);
        setCaptcha(null);
        return;
      }
      captchaId.current = h.render(captchaBox.current, {
        sitekey: HCAPTCHA_SITEKEY,
        theme: 'dark',
        size: 'normal',
        callback: (token: string) => setCaptcha(token),
        'expired-callback': () => setCaptcha(null),
        'error-callback': () => setCaptcha(null),
      });
    };

    montar();
    return () => { vivo = false; };
  }, [isOpen, submitted]);

  if (!isOpen) return null;

  const contextLabel = resolveContextLabel(initialPlan);

  const querOutroAssunto = formData.interest === INTERESSE_OUTROS;

  const erros: Partial<Record<CampoForm, string | null>> = {
    name: validarNome(formData.name),
    email: validarEmail(formData.email),
    company: validarEmpresa(formData.company),
    phone: validarTelefone(formData.phone),
    // Um contato que diz apenas "Outros" não informa nada a quem vai responder.
    detalhe: querOutroAssunto && formData.detalhe.trim().length < 5
      ? 'Conte em uma linha do que se trata.'
      : null,
  };
  // O captcha entra na mesma trava dos campos: sem ele o Web3Forms recusaria o
  // envio de qualquer jeito, e a pessoa veria um erro depois de preencher tudo.
  const formValido = !Object.values(erros).some(Boolean) && Boolean(captcha);

  const FALTANDO: Record<CampoForm, string> = {
    name: 'nome', email: 'e-mail', company: 'empresa',
    phone: 'telefone', detalhe: 'assunto',
  };
  const pendencias = [
    ...(Object.keys(erros) as CampoForm[]).filter((k) => erros[k]).map((k) => FALTANDO[k]),
    ...(captcha ? [] : ['a verificação anti-robô']),
  ];

  const marcarTocado = (campo: CampoForm) =>
    setTocado((t) => ({ ...t, [campo]: true }));

  /** Classe da borda: vermelha só quando a pessoa já passou pelo campo. */
  const borda = (campo: CampoForm) =>
    tocado[campo] && erros[campo]
      ? 'border-red-400/60 focus:border-red-400'
      : 'border-white/10 focus:border-blue-500';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // O botão já fica travado, mas o Enter no teclado e um DOM adulterado
    // contornam isso — a última palavra sobre validade é aqui.
    if (!formValido) {
      setTocado({ name: true, email: true, company: true, phone: true, detalhe: true });
      return;
    }
    setErroEnvio(null);
    setEnviando(true);
    try {
      const r = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Traçado — contato de ${formData.name}${formData.company ? ` (${formData.company})` : ''}`,
          from_name: 'Landing page do Traçado',
          nome: formData.name,
          email: formData.email,
          empresa: formData.company,
          telefone: formData.phone,
          interesse: querOutroAssunto
            ? `Outro assunto: ${formData.detalhe.trim()}`
            : formData.interest,
          // Campo anti-robô do próprio Web3Forms: invisível na tela, então só
          // um preenchedor automático o preenche.
          botcheck: botcheck ? 'on' : '',
          'h-captcha-response': captcha,
        }),
      });
      const d = await r.json().catch(() => ({}));
      // O Web3Forms responde 200 com success:false em alguns erros, então não
      // basta olhar o status: mostrar sucesso sem envio faria a pessoa ir
      // embora achando que fez contato.
      if (!r.ok || d.success === false) {
        // O plano gratuito do Web3Forms para em 250 envios por mês e RECUSA os
        // seguintes até o mês virar (confirmado com o suporte deles). Nesse
        // caso a mensagem volta em inglês e falando de cota — o que não diz
        // nada para quem só queria agendar uma conversa. Traduzimos para o que
        // interessa a essa pessoa: o contato não foi perdido, existe outro
        // caminho, e ele está logo abaixo.
        const cru = String(d.message || '');
        const cota = /limit|quota|exceed|upgrade|plan/i.test(cru);
        throw new Error(cota
          ? 'Nosso formulário atingiu o limite de envios deste mês.'
          : (cru || 'Não foi possível enviar agora.'));
      }
      setSubmitted(true);
    } catch (err) {
      // Nunca mostrar sucesso sem envio confirmado: a pessoa iria embora
      // achando que fez contato, e o contato nunca chegaria.
      setErroEnvio(err instanceof Error ? err.message : 'Falha no envio.');
      // Um token de captcha só vale uma vez. Depois de um envio falho é preciso
      // refazer o desafio, senão a segunda tentativa é recusada sem explicação.
      if (captchaId.current !== null) window.hcaptcha?.reset(captchaId.current);
      setCaptcha(null);
    } finally {
      setEnviando(false);
    }
  };

  const handleCopyDocker = () => {
    navigator.clipboard.writeText('git clone https://github.com/tracado/tracado.git && cd tracado && ./install.sh');
    setCopiedDocker(true);
    setTimeout(() => setCopiedDocker(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-slate-900/90 border border-white/10 rounded-[28px] shadow-2xl p-6 sm:p-8 overflow-hidden text-slate-100 backdrop-blur-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {isCommunityModal ? (
          /* Community Edition Flow */
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Traçado Edição Comunidade</h3>
                <p className="text-xs text-slate-400">100% Gratuita • Sem limite de tempo • Instalação Local</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Você pode rodar o Traçado imediatamente em sua infraestrutura utilizando o container Docker oficial com a ISO/IEC 27001 completa e exportações CSV liberadas:
            </p>

            <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  Comando Docker Run:
                </span>
                <button
                  onClick={handleCopyDocker}
                  className="flex items-center gap-1 text-[11px] text-blue-400 hover:text-blue-300"
                >
                  {copiedDocker ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedDocker ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>
              <pre className="p-3 bg-black/60 rounded-xl text-xs font-mono text-blue-300 overflow-x-auto border border-white/5">
                git clone https://github.com/tracado/tracado.git &amp;&amp; cd tracado &amp;&amp; ./install.sh
              </pre>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 text-xs text-slate-300 space-y-1">
              <div className="font-bold text-white">O que está liberado nesta edição:</div>
              <ul className="list-disc list-inside text-slate-400 space-y-0.5 text-[11px]">
                <li>Hub ISO/IEC 27001 com 93 controles do Anexo A</li>
                <li>Matriz de Riscos e KRI determinísticos</li>
                <li>SSO corporativo via SAML ou OIDC (Keycloak embarcado)</li>
                <li>Usuários ilimitados, com um administrador</li>
              </ul>
            </div>

            <div className="pt-3 border-t border-white/5 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full font-bold text-xs text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all"
              >
                Concluído
              </button>
            </div>
          </div>
        ) : submitted ? (
          /* Success Screen */
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Demonstração Solicitada!</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Obrigado, <strong className="text-white">{formData.name}</strong>. Um de nossos Auditores Líderes certificados entrará em contato pelo e-mail <strong className="text-white">{formData.email}</strong> para apresentar a suíte com foco no contexto da <strong>{formData.company}</strong>.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full font-bold text-xs text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all"
              >
                Fechar Janela
              </button>
            </div>
          </div>
        ) : (
          /* Auditor Meeting Scheduler Form */
          <form onSubmit={handleSubmit} className="space-y-4">
            {erroEnvio && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-400/30 text-xs text-red-300 space-y-1.5">
                <p>{erroEnvio}</p>
                <p className="text-red-200">
                  Seu contato não se perdeu — escreva direto para{' '}
                  <a
                    className="underline font-semibold"
                    href={`mailto:tracadogrc@gmail.com?subject=${encodeURIComponent(
                      `Traçado — contato de ${formData.name || 'novo interessado'}`,
                    )}&body=${encodeURIComponent(
                      [
                        `Nome: ${formData.name}`,
                        `E-mail: ${formData.email}`,
                        `Empresa: ${formData.company}`,
                        `Telefone: ${formData.phone}`,
                        `Interesse: ${formData.interest}`,
                        formData.detalhe ? `Detalhe: ${formData.detalhe}` : '',
                      ].filter(Boolean).join('\n'),
                    )}`}
                  >
                    tracadogrc@gmail.com
                  </a>{' '}
                  — o e-mail já vai preenchido com o que você digitou.
                </p>
              </div>
            )}
            <div className="flex items-center gap-3 pb-3 border-b border-white/5">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Agendar c/ Auditor Especialista</h3>
                <p className="text-xs text-slate-400">Sessão guiada de 30 minutos sem compromisso</p>
              </div>
            </div>

            {contextLabel && (
              <div className="-mt-1 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] font-semibold">
                <Layers className="w-3 h-3" />
                <span>Contexto: {contextLabel}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase text-slate-400">Seu Nome</label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 absolute left-3.5 top-3 text-slate-500" />
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Silva"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onBlur={() => marcarTocado('name')}
                    aria-invalid={Boolean(tocado.name && erros.name)}
                    className={`w-full bg-black/40 border rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none transition-colors ${borda('name')}`}
                  />
                </div>
                {tocado.name && erros.name && (
                  <p className="text-[10px] text-red-300 leading-snug">{erros.name}</p>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase text-slate-400">E-mail Corporativo</label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 absolute left-3.5 top-3 text-slate-500" />
                  <input
                    type="email"
                    required
                    placeholder="carlos@empresa.com.br"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onBlur={() => marcarTocado('email')}
                    aria-invalid={Boolean(tocado.email && erros.email)}
                    className={`w-full bg-black/40 border rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none transition-colors ${borda('email')}`}
                  />
                </div>
                {tocado.email && erros.email && (
                  <p className="text-[10px] text-red-300 leading-snug">{erros.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase text-slate-400">Empresa / Organização</label>
                <div className="relative">
                  <Building className="w-3.5 h-3.5 absolute left-3.5 top-3 text-slate-500" />
                  <input
                    type="text"
                    required
                    placeholder="Ex: Banco Alfa / Health S.A."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    onBlur={() => marcarTocado('company')}
                    aria-invalid={Boolean(tocado.company && erros.company)}
                    className={`w-full bg-black/40 border rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none transition-colors ${borda('company')}`}
                  />
                </div>
                {tocado.company && erros.company && (
                  <p className="text-[10px] text-red-300 leading-snug">{erros.company}</p>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase text-slate-400">Telefone / WhatsApp</label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 absolute left-3.5 top-3 text-slate-500" />
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: formatarTelefone(e.target.value) })}
                    onBlur={() => marcarTocado('phone')}
                    aria-invalid={Boolean(tocado.phone && erros.phone)}
                    className={`w-full bg-black/40 border rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none transition-colors ${borda('phone')}`}
                  />
                </div>
                {tocado.phone && erros.phone && (
                  <p className="text-[10px] text-red-300 leading-snug">{erros.phone}</p>
                )}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase text-slate-400">Principal Objetivo ou Norma</label>
              <select
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
              >
                {INTEREST_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {querOutroAssunto && (
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase text-slate-400">
                  Sobre o que você quer falar
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: parceria, licenciamento para vários CNPJs, dúvida técnica de instalação…"
                  value={formData.detalhe}
                  onChange={(e) => setFormData({ ...formData, detalhe: e.target.value })}
                  onBlur={() => marcarTocado('detalhe')}
                  aria-invalid={Boolean(tocado.detalhe && erros.detalhe)}
                  className={`w-full bg-black/40 border rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none transition-colors resize-none ${borda('detalhe')}`}
                />
                {tocado.detalhe && erros.detalhe && (
                  <p className="text-[10px] text-red-300 leading-snug">{erros.detalhe}</p>
                )}
              </div>
            )}

            <div className="pt-3 border-t border-white/5 space-y-3">
              <input
                type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off"
                aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}
                onChange={(ev) => setBotcheck(ev.target.checked)} checked={botcheck}
              />

              {/* O desafio fica junto do botão, no fim do fluxo: pedi-lo antes de a
                  pessoa preencher os campos é fricção no lugar errado. */}
              <div ref={captchaBox} className="flex justify-center min-h-[78px]" />

              {/* Aviso de privacidade. Afirma só o que é verdade e o que se pode
                  cumprir: um contato que passa por um provedor de formulários e
                  pode ser lido pelo auditor que vai responder JÁ envolve
                  terceiros — prometer "não compartilhamos com terceiros" seria
                  falso no instante em que a pessoa clica em enviar. */}
              <p className="text-[10px] text-slate-500 leading-relaxed">
                <span className="text-slate-400 font-semibold">Privacidade.</span>{' '}
                Tratamos nome, e-mail, empresa e telefone <span className="text-slate-400">apenas
                para responder a este contato</span> — base legal: LGPD, art. 7&ordm;, V
                (procedimentos preliminares a pedido do titular). <span className="text-slate-400">Não
                vendemos, alugamos nem cedemos seus dados.</span> Para o envio funcionar, a
                mensagem trafega por um provedor de formulários que atua como operador sob
                contrato, e é lida pela equipe de auditores que conduzirá seu atendimento.
                Guardamos enquanto durar o contato comercial. Você pode pedir acesso, correção
                ou exclusão a qualquer momento, respondendo ao e-mail que receber de nós.
              </p>

              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] leading-snug min-h-[1rem]">
                  {!formValido && pendencias.length > 0 && (
                    <span className="text-slate-500">
                      Para liberar o agendamento, falta conferir:{' '}
                      <span className="text-slate-400">{pendencias.join(', ')}</span>.
                    </span>
                  )}
                </span>
                <button
                  type="submit"
                  disabled={enviando || !formValido}
                  className={`px-5 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 shrink-0 transition-all ${
                    enviando || !formValido
                      ? 'bg-white/5 text-slate-500 border border-white/10 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                  }`}
                >
                  <span>{enviando ? 'Enviando…' : 'Confirmar Agendamento'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
