# Página do Traçado

Site institucional do **Traçado** — appliance de GRC auto-hospedado para
ISO/IEC 27001, LGPD, CIS Controls, NIST CSF, COBIT 2019 e ISO 42001.

O produto em si vive em **[tracado/tracado](https://github.com/tracado/tracado)**.
Este repositório contém **apenas a página pública**: nenhum código do appliance,
do portal ou do licenciador está aqui.

Publicado em **<https://tracado.github.io/>**.

## Como rodar

Requer Node.js 20 ou mais novo.

```bash
npm install
npm run dev      # abre em http://localhost:3000
```

Outros comandos:

| Comando         | O que faz                                        |
| --------------- | ------------------------------------------------ |
| `npm run build` | Gera o site estático em `dist/`                   |
| `npm run lint`  | Checagem de tipos (`tsc --noEmit`), sem emitir    |
| `npm run preview` | Serve o `dist/` já construído, como em produção |

## Como é publicado

Todo push na `main` dispara `.github/workflows/deploy.yml`, que roda o build e
publica o `dist/` no GitHub Pages. **Não existe passo manual** — e o `dist/` não
é versionado de propósito, para o histórico não encher de arquivos gerados.

## Formulário de contato

O formulário de agendamento fala direto com o [Web3Forms](https://web3forms.com),
que recebe o envio e encaminha por e-mail.

A chave em `src/components/DemoModal.tsx` (`WEB3FORMS_KEY`) é **pública por
desenho**: ela só endereça a caixa de entrada de destino e não dá acesso a nada.
Site estático não tem onde esconder segredo — tudo que vai no JavaScript é
legível por qualquer visitante —, e é exatamente por isso que se usa um serviço
cujo identificador pode ser público.

O Web3Forms só aceita envios vindos do domínio cadastrado na conta. Ao publicar
em outro endereço, é preciso registrar esse endereço lá, senão os envios passam a
ser recusados em silêncio.

Em `worker/` há uma implementação alternativa em Cloudflare Worker, **arquivada e
fora de uso**. Serve de ponto de partida caso um dia seja preciso gravar os
contatos num banco em vez de só recebê-los por e-mail.

## Pilha

React 19 · TypeScript · Vite 6 · Tailwind CSS 4 · lucide-react

## Licença

Conteúdo e marca do Traçado. Todos os direitos reservados.
