import React from 'react';
import {
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  Compass,
  Layers,
  Cpu,
  UserCheck,
  FileCheck2,
  Database,
  Building2,
} from 'lucide-react';
import { InteractiveAppPreview } from './InteractiveAppPreview';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenCommunityModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onOpenCommunityModal }) => {
  return (
    <section id="hero-section" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Badges & Pill */}
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest shadow-inner shadow-blue-500/10">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span>GRC Intelligence Suite</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 font-normal tracking-normal uppercase text-[11px]">ISO 27001, CIS, NIST, COBIT, ISO 42001 & LGPD</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            A Peça Central do seu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-indigo-500">
              SGSI Multi-Framework
            </span>
            , em Grafo Vivo.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed font-normal">
            Consolide ISO 27001, CIS, NIST, COBIT e LGPD em uma única infraestrutura com <strong className="text-white font-semibold">IA Local e Motor Semântico</strong> para análise preditiva de evidências e <strong className="text-white font-semibold">acompanhamento contínuo por Auditores Líderes certificados</strong>.
          </p>

          {/* Core Trust Pillars Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl pt-2 text-xs text-slate-300">
            <div className="flex items-start gap-3 p-3 bg-slate-900/40 rounded-xl border border-white/10 backdrop-blur-md">
              <div className="p-1.5 bg-slate-800/60 rounded-lg border border-white/10 text-emerald-400 shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <span className="text-left text-xs text-slate-300 leading-snug">
                <strong className="block text-white font-semibold">100% On-Premise</strong>
                Zero dados ou políticas saem da sua rede.
              </span>
            </div>

            <div className="flex items-start gap-3 p-3 bg-slate-900/40 rounded-xl border border-white/10 backdrop-blur-md">
              <div className="p-1.5 bg-slate-800/60 rounded-lg border border-white/10 text-blue-400 shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <span className="text-left text-xs text-slate-300 leading-snug">
                <strong className="block text-white font-semibold">Grafo Causa e Efeito</strong>
                Uma evidência propaga em todas as normas.
              </span>
            </div>

            <div className="flex items-start gap-3 p-3 bg-slate-900/40 rounded-xl border border-white/10 backdrop-blur-md">
              <div className="p-1.5 bg-slate-800/60 rounded-lg border border-white/10 text-indigo-400 shrink-0">
                <UserCheck className="w-4 h-4" />
              </div>
              <span className="text-left text-xs text-slate-300 leading-snug">
                <strong className="block text-white font-semibold">Auditoria Híbrida</strong>
                Mentoria direta por Auditores Líderes ISO.
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3 w-full sm:w-auto">
            <button
              id="hero-demo-cta"
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/25 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2 group"
            >
              <UserCheck className="w-4 h-4 text-blue-200" />
              <span>Agendar Demonstração</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-community-cta"
              onClick={onOpenCommunityModal}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-sm text-slate-200 bg-slate-900/60 hover:bg-slate-800/90 border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Acessar Edição Comunidade (Grátis)</span>
            </button>
          </div>

          {/* Market proof badges */}
          <div className="pt-3 text-[11px] text-slate-400 flex flex-wrap items-center justify-center gap-5">
            <span className="flex items-center gap-1.5">
              {/* Era "Sem cartão de crédito" — vocabulário de SaaS, onde significa
                  "experimente sem cadastrar cartão". Aqui era lido como "não
                  aceitamos cartão", o oposto do que se quer dizer, e freava a
                  venda. O que é verdade e vende melhor: baixar e usar não passa
                  por cadastro nem cobrança de espécie alguma. */}
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Sem cadastro e sem cobrança
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Container Docker / Appliance
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Sem lock-in de dados
            </span>
          </div>
        </div>

        {/* Live Interactive Product Preview Container */}
        <div className="mt-14 sm:mt-18 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-blue-500/15 rounded-full blur-[100px] pointer-events-none animate-pulse -z-10" />

          <div className="text-center mb-4">
            <span className="text-xs uppercase font-mono tracking-widest text-blue-400 bg-slate-900/60 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
              Simulador Interativo • Navegue pelas telas reais do Traçado abaixo
            </span>
          </div>
          <InteractiveAppPreview />
        </div>
      </div>
    </section>
  );
};
