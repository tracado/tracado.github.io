import React, { useState } from 'react';
import {
  Calculator,
  Shield,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
  TrendingUp,
  FileSpreadsheet,
  Download
} from 'lucide-react';

interface SimulatorProps {
  onOpenDemo: () => void;
}

export const InteractiveGapSimulator: React.FC<SimulatorProps> = ({ onOpenDemo }) => {
  const [industry, setIndustry] = useState<string>('financeiro');
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>(['iso27001', 'lgpd', 'cis']);
  const [currentTool, setCurrentTool] = useState<string>('planilhas');
  const [teamSize, setTeamSize] = useState<number>(3);

  const toggleFramework = (fw: string) => {
    if (selectedFrameworks.includes(fw)) {
      if (selectedFrameworks.length > 1) {
        setSelectedFrameworks(selectedFrameworks.filter((f) => f !== fw));
      }
    } else {
      setSelectedFrameworks([...selectedFrameworks, fw]);
    }
  };

  // Dynamic calculations based on selections
  const frameworkCount = selectedFrameworks.length;
  const hoursSavedPerMonth = frameworkCount * 32 * teamSize;
  const duplicateEvidenceReduction = Math.min(85, frameworkCount * 22);
  const readinessIndex = Math.min(94, 25 + (frameworkCount * 12));

  return (
    <section id="simulador" className="py-24 bg-[#05070A] border-t border-white/5 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest font-mono">
            <Calculator className="w-3.5 h-3.5" />
            <span>CALCULADORA DE ROI & PRONTIDÃO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Simule a economia de tempo e eliminação de retrabalho do seu SGSI
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Descubra quantas horas sua equipe de segurança deixará de perder com preenchimento manual redundante ao migrar para o motor em grafo do Traçado.
          </p>
        </div>

        {/* Interactive Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Config (Left 6 cols) */}
          <div className="lg:col-span-6 bg-slate-900/30 rounded-[28px] border border-white/10 p-6 sm:p-8 space-y-6 backdrop-blur-xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>1. Configuração do Cenário Atual</span>
            </h3>

            {/* Industry */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Segmento de Atuação
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full bg-black/40 border border-white/10 text-slate-200 text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-blue-500"
              >
                <option value="financeiro">Serviços Financeiros / Fintech / Meios de Pagamento</option>
                <option value="saude">Saúde / Hospitais / Healthtechs</option>
                <option value="saas">Software SaaS / Tecnologia / Cloud</option>
                <option value="varejo">Varejo & E-commerce</option>
                <option value="industria">Indústria & Energia</option>
                <option value="governo">Setor Público & Autarquias</option>
              </select>
            </div>

            {/* Frameworks multi-select */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Frameworks Necessários na sua Organização ({selectedFrameworks.length} selecionados)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'iso27001', label: 'ISO/IEC 27001' },
                  { id: 'lgpd', label: 'LGPD & Privacidade' },
                  { id: 'cis', label: 'CIS Controls v8' },
                  { id: 'nist', label: 'NIST CSF 2.0' },
                  { id: 'cobit', label: 'COBIT 2019' },
                  { id: 'iso42001', label: 'ISO 42001 (IA)' },
                ].map((fw) => {
                  const isChecked = selectedFrameworks.includes(fw.id);
                  return (
                    <button
                      key={fw.id}
                      type="button"
                      onClick={() => toggleFramework(fw.id)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all text-left flex items-center justify-between backdrop-blur-md ${
                        isChecked
                          ? 'bg-blue-600/20 border-blue-500 text-blue-300'
                          : 'bg-black/30 border-white/5 text-slate-400 hover:border-white/15'
                      }`}
                    >
                      <span className="truncate">{fw.label}</span>
                      {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 ml-1" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Current Method */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Como o SGSI é gerenciado hoje?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'planilhas', label: 'Planilhas Excel / Sheets' },
                  { id: 'grc_legado', label: 'Software de GRC Antigo' },
                  { id: 'docs', label: 'Pastas de Documentos / Word' },
                  { id: 'inicio', label: 'Começando do zero' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentTool(item.id)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-medium border text-left transition-all ${
                      currentTool === item.id
                        ? 'bg-blue-600/20 border-blue-500 text-white font-bold'
                        : 'bg-black/30 border-white/5 text-slate-400 hover:border-white/15'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Team Size Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-400 uppercase tracking-wider">Profissionais envolvidos em Segurança/Riscos:</span>
                <span className="text-blue-400 font-mono text-sm">{teamSize} {teamSize === 1 ? 'pessoa' : 'pessoas'}</span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                value={teamSize}
                onChange={(e) => setTeamSize(parseInt(e.target.value))}
                className="w-full h-2 bg-black/50 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          </div>

          {/* Results Display (Right 6 cols) */}
          <div className="lg:col-span-6 bg-slate-900/40 rounded-[28px] border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>2. Estimativa de Impacto & Produtividade</span>
              </h3>
              <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                ROI Calculado
              </span>
            </div>

            {/* Big Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Horas Economizadas/Mês</span>
                </div>
                <div className="text-3xl font-extrabold text-blue-300 font-mono">
                  ~{hoursSavedPerMonth}h
                </div>
                <p className="text-[11px] text-slate-400">
                  Eliminação de preenchimento duplo e coleta manual.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Redução de Evidência Duplicada</span>
                </div>
                <div className="text-3xl font-extrabold text-emerald-400 font-mono">
                  {duplicateEvidenceReduction}%
                </div>
                <p className="text-[11px] text-slate-400">
                  Graças ao motor de herança multi-norma.
                </p>
              </div>
            </div>

            {/* Diagnostic Summary Callout */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-3">
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Recomendação de Arquitetura Traçado para seu caso:</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Com base no seu perfil ({frameworkCount} normas ativas e equipe de {teamSize} pessoas), recomendamos o plano <strong className="text-blue-300">Traçado {frameworkCount > 3 ? 'Avançado' : 'Essencial'}</strong> com acompanhamento de Auditor Líder nos ciclos de auditoria interna.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="w-full py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Receber Diagnóstico Detalhado & Conversar com Auditor</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
