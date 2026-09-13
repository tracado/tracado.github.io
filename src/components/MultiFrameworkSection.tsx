import React, { useState } from 'react';
import {
  Layers,
  CheckCircle2,
  Shield,
  ArrowRight,
  Sparkles,
  Link2,
  ChevronRight,
  FileCheck2,
  Server,
  Zap,
  Lock,
  Compass
} from 'lucide-react';
import { FRAMEWORKS_DATA } from '../data/mockProductData';

interface SampleMappingItem {
  isoControl: string;
  isoTitle: string;
  isoDomain: string;
  evidenceExample: string;
  mappedFrameworks: {
    cis: { code: string; title: string; ig: string };
    nist: { code: string; title: string; function: string };
    cobit: { code: string; title: string; domain: string };
    lgpd: { code: string; title: string; article: string };
    iso42001?: { code: string; title: string };
  };
}

const SAMPLE_MAPPINGS: SampleMappingItem[] = [
  {
    isoControl: 'A.5.15 & A.5.18',
    isoTitle: 'Controle de Acesso & Direitos de Acesso',
    isoDomain: 'Organizacional',
    evidenceExample: 'Política formal de concessão por privilégio mínimo e workflow de aprovação trimestral.',
    mappedFrameworks: {
      cis: { code: 'CIS 5.1 & 6.1', title: 'Inventário de Contas & Privilégios Mínimos', ig: 'IG1 / IG2' },
      nist: { code: 'PR.AC-1 & PR.AC-4', title: 'Identity Management & Access Control', function: 'Protect (PR)' },
      cobit: { code: 'DSS05.04', title: 'Gerenciar Acesso às Identidades e Informações', domain: 'DSS' },
      lgpd: { code: 'Art. 46', title: 'Medidas Técnicas e Administrativas de Segurança', article: 'Segurança' },
      iso42001: { code: 'A.6.2', title: 'Controle de Acesso a Modelos e Datasets de Treino' },
    },
  },
  {
    isoControl: 'A.8.13',
    isoTitle: 'Cópia de Segurança das Informações (Backup)',
    isoDomain: 'Tecnológico',
    evidenceExample: 'Relatório diário de backup com criptografia AES-256 e teste de restauração trimestral.',
    mappedFrameworks: {
      cis: { code: 'CIS 11.1 & 11.2', title: 'Backups Automatizados & Armazenamento Isolado', ig: 'IG1' },
      nist: { code: 'PR.IP-4 & RC.RP-1', title: 'Backups Protegidos & Plano de Restauração', function: 'Protect / Recover' },
      cobit: { code: 'DSS04.07', title: 'Gerenciar Dados de Backup e Contingência', domain: 'DSS' },
      lgpd: { code: 'Art. 46 & 48', title: 'Salvaguarda contra perda acidental ou destruição', article: 'Continuidade' },
    },
  },
  {
    isoControl: 'A.5.24 - A.5.28',
    isoTitle: 'Gestão de Incidentes de Segurança da Informação',
    isoDomain: 'Organizacional',
    evidenceExample: 'Procedimento formal de triagem, comunicação, contenção e lições aprendidas.',
    mappedFrameworks: {
      cis: { code: 'CIS 17.1 - 17.9', title: 'Capacidade de Resposta e Gestão de Incidentes', ig: 'IG1 / IG2' },
      nist: { code: 'RS.MA-1 & RS.AN-1', title: 'Incident Management & Analysis', function: 'Respond (RS)' },
      cobit: { code: 'DSS02.05', title: 'Resolver e Conter Incidentes de Segurança', domain: 'DSS' },
      lgpd: { code: 'Art. 48', title: 'Notificação à ANPD em 3 dias úteis e aos Titulares', article: 'Comunicação' },
    },
  },
  {
    isoControl: 'A.8.20 & A.8.22',
    isoTitle: 'Segurança de Redes & Segregação de Ambientes',
    isoDomain: 'Tecnológico',
    evidenceExample: 'Diagrama de topologia com DMZ, regras de NextGen Firewall e segmentação VLAN.',
    mappedFrameworks: {
      cis: { code: 'CIS 4.4 & 9.2', title: 'Arquitetura de Rede Segura & Filtro de Tráfego', ig: 'IG2' },
      nist: { code: 'PR.AC-5 & PR.PT-4', title: 'Network Protection & Separation', function: 'Protect (PR)' },
      cobit: { code: 'DSS05.02', title: 'Gerenciar Segurança de Perímetro e Redes', domain: 'DSS' },
      lgpd: { code: 'Art. 46', title: 'Proteção perimetral de repositórios de dados pessoais', article: 'Proteção' },
    },
  },
];

export const MultiFrameworkSection: React.FC = () => {
  const [selectedMappingIndex, setSelectedMappingIndex] = useState<number>(0);
  const selectedMapping = SAMPLE_MAPPINGS[selectedMappingIndex];

  return (
    <section id="frameworks" className="py-24 bg-[#05070A] border-t border-white/5 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-[-5%] w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest font-mono">
            <span>MULTI-FRAMEWORK NATIVO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ISO 27001 como Hub Central. As demais normas como Lentes Vivas.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Esqueça o preenchimento redundante de questionários. No Traçado, uma única evidência comprovada no Anexo A da ISO propaga conformidade automaticamente para as normas correspondentes.
          </p>
        </div>

        {/* 6 Framework Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {FRAMEWORKS_DATA.map((fw) => (
            <div
              key={fw.id}
              className="rounded-[28px] bg-slate-900/30 border border-white/10 hover:border-white/20 p-6 space-y-4 transition-all backdrop-blur-xl hover:bg-slate-900/50"
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${fw.color}`}>
                  {fw.badge}
                </span>
                <span className="text-xs font-mono text-slate-400 font-semibold">{fw.version}</span>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">{fw.name}</h3>
                  <span className="text-xs font-mono font-bold text-slate-300 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                    {fw.controlsCount} controles
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{fw.description}</p>
              </div>

              <div className="pt-3 border-t border-white/5 space-y-2">
                <div className="text-[11px] font-bold text-slate-300">Domínios & Estrutura:</div>
                <div className="flex flex-wrap gap-1.5">
                  {fw.domains.map((d, i) => (
                    <span key={i} className="text-[10px] bg-black/40 text-slate-300 px-2 py-0.5 rounded-md font-mono border border-white/5">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-[11px] text-blue-400 font-medium">
                <Link2 className="w-3.5 h-3.5" />
                <span>{fw.mappingHub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Evidence Cross-Inheritance Simulator */}
        <div className="rounded-[28px] bg-gradient-to-b from-slate-900/40 via-blue-950/20 to-black/60 border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                  Simulador de Herança Cruzada em Tempo Real
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Suba a evidência uma vez. Veja 5 frameworks se iluminarem.
              </h3>
            </div>
            <span className="text-xs text-slate-400 bg-black/40 px-3 py-1.5 rounded-full border border-white/10 font-mono">
              Selecione um controle ISO abaixo:
            </span>
          </div>

          {/* Sample Control Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-6">
            {SAMPLE_MAPPINGS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedMappingIndex(idx)}
                className={`p-3 rounded-2xl text-left border transition-all backdrop-blur-md ${
                  selectedMappingIndex === idx
                    ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/30'
                    : 'bg-black/30 border-white/5 text-slate-300 hover:bg-white/5'
                }`}
              >
                <div className="text-[10px] font-mono font-bold opacity-80">{item.isoControl}</div>
                <div className="text-xs font-bold truncate mt-0.5">{item.isoTitle}</div>
              </button>
            ))}
          </div>

          {/* Active Mapping Visualization */}
          <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-black/40 border border-white/10 space-y-6">
            {/* The ISO Hub Node */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-blue-500/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center font-bold text-blue-300 shadow-inner">
                  ISO
                </div>
                <div>
                  <div className="text-xs font-mono text-blue-400 font-bold">
                    HUB ISO/IEC 27001 • {selectedMapping.isoControl}
                  </div>
                  <div className="text-base font-bold text-white">{selectedMapping.isoTitle}</div>
                  <div className="text-xs text-slate-300 mt-1">
                    <span className="text-slate-400">Evidência registrada:</span> "{selectedMapping.evidenceExample}"
                  </div>
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Status: Comprovado c/ Evidência</span>
              </div>
            </div>

            {/* Downstream Cross-Framework Lenses */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <span>Herança Automática Transmitida para as outras lentes:</span>
                <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">Zero digitação adicional</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* CIS */}
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-emerald-500/20 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400">CIS Controls v8</span>
                    <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-300 px-1.5 py-0.5 rounded">
                      {selectedMapping.mappedFrameworks.cis.ig}
                    </span>
                  </div>
                  <div className="font-bold text-xs text-white">{selectedMapping.mappedFrameworks.cis.code}</div>
                  <p className="text-[11px] text-slate-400">{selectedMapping.mappedFrameworks.cis.title}</p>
                </div>

                {/* NIST */}
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-blue-500/20 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-400">NIST CSF 2.0</span>
                    <span className="text-[10px] font-mono bg-blue-500/10 text-blue-300 px-1.5 py-0.5 rounded">
                      {selectedMapping.mappedFrameworks.nist.function}
                    </span>
                  </div>
                  <div className="font-bold text-xs text-white">{selectedMapping.mappedFrameworks.nist.code}</div>
                  <p className="text-[11px] text-slate-400">{selectedMapping.mappedFrameworks.nist.title}</p>
                </div>

                {/* COBIT */}
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-amber-500/20 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400">COBIT 2019</span>
                    <span className="text-[10px] font-mono bg-amber-500/10 text-amber-300 px-1.5 py-0.5 rounded">
                      {selectedMapping.mappedFrameworks.cobit.domain}
                    </span>
                  </div>
                  <div className="font-bold text-xs text-white">{selectedMapping.mappedFrameworks.cobit.code}</div>
                  <p className="text-[11px] text-slate-400">{selectedMapping.mappedFrameworks.cobit.title}</p>
                </div>

                {/* LGPD */}
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-rose-500/20 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-rose-400">LGPD</span>
                    <span className="text-[10px] font-mono bg-rose-500/10 text-rose-300 px-1.5 py-0.5 rounded">
                      {selectedMapping.mappedFrameworks.lgpd.article}
                    </span>
                  </div>
                  <div className="font-bold text-xs text-white">{selectedMapping.mappedFrameworks.lgpd.code}</div>
                  <p className="text-[11px] text-slate-400">{selectedMapping.mappedFrameworks.lgpd.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
