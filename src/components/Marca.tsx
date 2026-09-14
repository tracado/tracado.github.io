/**
 * O símbolo do Traçado.
 *
 * Geometria medida na arte aprovada (marca/medicao/) e redesenhada em vetor:
 * três retas e dois círculos. Sem degradê e sem brilho — assim ela sobrevive
 * ao favicon de 16px, ao papel timbrado e ao PDF em preto e branco que o
 * auditor arquiva no dossiê de certificação.
 *
 * Os furos dos anéis são recortes de verdade na linha (calculados, não
 * pintados com a cor do fundo), então a marca funciona sobre qualquer campo.
 */
import React from 'react';

interface MarcaProps {
  /** Aresta do quadrado, em px. */
  tamanho?: number;
  /** Uma cor só, herdada do texto em volta — para impressão e monocromático. */
  mono?: boolean;
  className?: string;
}

const TRACOS = [
  'M8.75 49.5 L18.94 38.51',
  'M29.28 36.99 L31.52 38.31',
  'M40.99 36.11 L55.25 14.5',
];
const NOS = [
  { cx: 23.5, cy: 33.6 },
  { cx: 37.3, cy: 41.7 },
];

export const Marca: React.FC<MarcaProps> = ({ tamanho = 36, mono = false, className = '' }) => {
  const traco = mono ? 'currentColor' : '#2563EB';
  const anel = mono ? 'currentColor' : '#60A5FA';
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Traçado"
    >
      <title>Traçado</title>
      {TRACOS.map((d) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke={traco}
          strokeWidth={5.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      {NOS.map((n) => (
        <circle key={n.cx} {...n} r={5.05} fill="none" stroke={anel} strokeWidth={3.3} />
      ))}
    </svg>
  );
};
