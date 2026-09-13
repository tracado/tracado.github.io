/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL do Worker que recebe o formulário de contato (ver .env.example). */
  /** Não usado hoje: o formulário fala direto com o Web3Forms. Mantido para o
   *  caso de o envio voltar a passar por um endpoint próprio (ver worker/). */
  readonly VITE_CONTATO_URL?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
