> **ARQUIVADO — 13/09/2026. Este Worker não está em uso.**
>
> O formulário da landing page passou a usar o **Web3Forms**, que resolve o mesmo
> problema sem exigir conta na Cloudflare, sem provedor de e-mail separado e sem
> nenhum segredo para guardar. A ligação está em
> `src/components/DemoModal.tsx`, na constante `WEB3FORMS_KEY`.
>
> Nada aqui foi apagado. Se um dia o Web3Forms não bastar — volume alto, campos
> maiores, gravar os contatos num banco em vez de só receber e-mail — este
> diretório é o ponto de partida pronto: basta seguir os passos abaixo.

---

# Formulário de contato — Cloudflare Worker

A landing page é estática: tudo que estiver no JavaScript dela é público. Por
isso a chave de e-mail vive aqui, como *secret* do Worker, e nunca chega ao
navegador de quem visita.

## Passos (todos seus — envolvem credencial)

**1. Chave do Resend.** Crie conta em <https://resend.com>, gere uma API key.
No plano gratuito são 3.000 e-mails/mês, de sobra para a POC.

**2. Instale e autentique o Wrangler:**

```bash
npm install -g wrangler
wrangler login          # abre o navegador na sua conta Cloudflare
```

**3. Cadastre a chave como secret** (o valor é pedido de forma interativa e
não fica em arquivo nenhum):

```bash
cd worker
wrangler secret put RESEND_API_KEY
```

**4. Publique:**

```bash
wrangler deploy
```

Anote a URL que ele imprime — algo como
`https://tracado-contato.SEU-SUBDOMINIO.workers.dev`.

**5. Aponte a landing page para ela.** Na raiz do projeto, crie `.env`:

```
VITE_CONTATO_URL="https://tracado-contato.SEU-SUBDOMINIO.workers.dev"
```

E acrescente essa mesma URL de origem em `ORIGENS_PERMITIDAS`, no
`wrangler.toml`, quando a página tiver endereço definitivo.

## Teste local, sem publicar

```bash
cd worker && wrangler dev        # sobe em http://127.0.0.1:8787
```

Com `VITE_CONTATO_URL="http://127.0.0.1:8787"` no `.env`, o formulário da
landing page em `npm run dev` já bate no Worker local.

## O que o Worker faz

- aceita apenas POST, e apenas das origens em `ORIGENS_PERMITIDAS`
- exige nome e e-mail, valida o formato e corta campos longos
- descarta robô pelo *honeypot* (campo `website`, invisível na tela) devolvendo
  200 — negar só ensinaria o robô a tentar de outro jeito
- escapa todo campo antes de montar o HTML, contra injeção
- põe o e-mail de quem preencheu no `reply_to`: você responde direto
- nunca devolve ao navegador o erro cru do provedor

## Remetente

Enquanto não houver domínio verificado no Resend, `REMETENTE` usa
`onboarding@resend.dev`, que só entrega para o e-mail dono da conta — suficiente
para testar. Com domínio próprio, verifique-o no Resend e troque por
`contato@seudominio.com.br`, o que melhora muito a entregabilidade.
