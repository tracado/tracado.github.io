import React from 'react';
import {
  UserCheck,
  Award,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck,
  FileBadge,
  ArrowRight,
  TrendingUp,
  MessageSquare,
  Users,
  Compass
} from 'lucide-react';

interface AuditorMentorshipSectionProps {
  onOpenDemo: () => void;
}

export const AuditorMentorshipSection: React.FC<AuditorMentorshipSectionProps> = ({ onOpenDemo }) => {
  return (
    <section id="auditores" className="py-24 bg-[#05070A] border-t border-white/5 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest font-mono">
            <Award className="w-3.5 h-3.5 text-blue-400" />
            <span>TECNOLOGIA + AUDITORES CERTIFICADOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            A ferramenta mestra guiada por quem audita no mais alto nível.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Ter um software potente é fundamental, mas estar acompanhado por <strong className="text-white">Auditores Líderes ISO 27001 experientes e certificados</strong> garante que sua organização passe na auditoria de certificação com tranquilidade e zero retrabalho.
          </p>
        </div>

        {/* 4 Steps of Auditor Mentorship */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Step 1 */}
          <div className="p-6 rounded-[28px] bg-slate-900/30 border border-white/10 space-y-3 relative hover:border-white/20 transition-all backdrop-blur-xl">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center font-bold text-blue-400 shadow-inner">
              01
            </div>
            <h3 className="text-base font-bold text-white">Diagnóstico & Setup do SGSI</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              O auditor líder mapeia seu contexto (Cl. 4), ativos primários e de suporte, e calibra a matriz de riscos e apetite diretamente no Traçado.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-[28px] bg-slate-900/30 border border-white/10 space-y-3 relative hover:border-white/20 transition-all backdrop-blur-xl">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-bold text-cyan-400 shadow-inner">
              02
            </div>
            <h3 className="text-base font-bold text-white">Curadoria de Evidências & SOA</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Revisão rigorosa da Declaração de Aplicabilidade (93 controles) e validação técnica das evidências operacionais anexadas pela sua equipe.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-[28px] bg-slate-900/30 border border-white/10 space-y-3 relative hover:border-white/20 transition-all backdrop-blur-xl">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-bold text-amber-400 shadow-inner">
              03
            </div>
            <h3 className="text-base font-bold text-white">Auditoria Interna Oficial (Cl. 9.2)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Condução da auditoria interna formal obrigatória por auditor independente, apontando não conformidades antes do órgão certificador chegar.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-6 rounded-[28px] bg-slate-900/30 border border-white/10 space-y-3 relative hover:border-white/20 transition-all backdrop-blur-xl">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 shadow-inner">
              04
            </div>
            <h3 className="text-base font-bold text-white">Análise Crítica & Certificação</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Facilitação da reunião executiva com a diretoria (Cl. 9.3) e acompanhamento presencial ou remoto durante os dias da auditoria externa.
            </p>
          </div>
        </div>

        {/* Featured Auditor Banner Callout */}
        <div className="rounded-[28px] bg-gradient-to-r from-blue-950/30 via-slate-900/50 to-indigo-950/30 border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>PROGRAMA DE ADESÃO COM MENTORIA</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Quer acelerar sua certificação ISO 27001 ou adequação LGPD/NIST?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Nossos auditores parceiros possuem mais de 15 anos de experiência prática, certificações Lead Auditor IRCA, CISA, CRISC e histórico comprovado de aprovação sem Não Conformidades Maiores.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Plantão de Dúvidas Semanal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Simulados de Entrevista</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Modelos de Políticas Inclusos</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="bg-black/40 border border-white/10 p-6 rounded-2xl text-center space-y-4 w-full max-w-sm backdrop-blur-md">
                <div className="text-xs text-slate-400">Consulte o plano com auditoria:</div>
                <div className="text-lg font-bold text-white">Mentoria Contínua + Licença</div>
                <button
                  onClick={onOpenDemo}
                  className="w-full py-3 px-5 rounded-full font-bold text-xs text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Falar com Auditor Especialista</span>
                </button>
                <div className="text-[10px] text-slate-500 font-mono">Sem compromisso inicial • Sessão de 30 min</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
