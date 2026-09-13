import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // O site é publicado na raiz de https://tracado.github.io/, então os caminhos
  // dos arquivos gerados podem ser absolutos. Se um dia ele passar a viver num
  // subcaminho (…/tracado/, por exemplo), esta é a única linha a mudar.
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
