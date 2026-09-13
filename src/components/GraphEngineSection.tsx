import React, { useState } from 'react';
import {
  Compass,
  Server,
  ShieldAlert,
  FileCheck,
  FileSearch,
  AlertTriangle,
  ListTodo,
  ClipboardCheck,
  LineChart,
  ArrowRight,
  CheckCircle2,
  AlertOctagon,
  GitCommit,
  Layers,
  ArrowDown
} from 'lucide-react';
import { GRAPH_STEPS_DATA, DEPENDENCY_LINKS } from '../data/mockProductData';

export const GraphEngineSection: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'chain' | 'dependencies'>('chain');

  const currentStep = GRAPH_STEPS_DATA.find((s) => s.step === activeStepId) || GRAPH_STEPS_DATA[0];

  const getStepIcon = (name: string) => {
    switch (name) {
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5" />;
      case 'FileSearch': return <FileSearch className="w-5 h-5" />;
      case 'AlertTriangle': return <AlertTriangle className="w-5 h-5" />;
      case 'ListTodo': return <ListTodo className="w-5 h-5" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-5 h-5" />;
      case 'LineChart': return <LineChart className="w-5 h-5" />;
      default: return <GitCommit className="w-5 h-5" />;
    }
  };

  return (
    <section id="como-funciona" className="py-24 bg-[#05070A] border-t border-white/5 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-[-5%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest font-mono">
            <span>MOTOR DE GRAFO SGSI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Como o Traçado Pensa: A Cadeia de Causa e Efeito
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Um SGSI não é uma pilha estática de documentos Word ou planilhas. É uma <strong className="text-white">cadeia contínua</strong> que precisa ficar de pé na frente de qualquer auditor internacional.
          </p>

          {/* Toggle view mode */}
          <div className="inline-flex p-1 bg-black/40 rounded-full border border-white/10 text-xs font-semibold backdrop-blur-md">
            <button
              onClick={() => setViewMode('chain')}
              className={`px-5 py-2 rounded-full transition-all ${
                viewMode === 'chain' ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'text-slate-400 hover:text-white'
              }`}
            >
              Navegar pelos 9 Elos da Cadeia
            </button>
            <button
              onClick={() => setViewMode('dependencies')}
              className={`px-5 py-2 rounded-full transition-all ${
                viewMode === 'dependencies' ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'text-slate-400 hover:text-white'
              }`}
            >
              Matriz "O que puxa o quê"
            </button>
          </div>
        </div>

        {viewMode === 'chain' ? (
          <div className="space-y-8">
            {/* Step Selector Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2">
              {GRAPH_STEPS_DATA.map((step) => {
                const isActive = step.step === activeStepId;
                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveStepId(step.step)}
                    className={`p-3 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between backdrop-blur-md ${
                      isActive
                        ? 'bg-blue-600/20 border-blue-500/50 shadow-lg shadow-blue-500/10 scale-[1.02]'
                        : 'bg-slate-900/30 border-white/5 hover:border-white/15 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-blue-400' : 'text-slate-500'}`}>
                        ELO 0{step.step}
                      </span>
                      <div className={isActive ? 'text-blue-300' : 'text-slate-500'}>
                        {getStepIcon(step.iconName)}
                      </div>
                    </div>
                    <div className={`text-xs font-bold leading-tight ${isActive ? 'text-white' : 'text-slate-300'}`}>
                      {step.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Elo Detail Box */}
            <div className="rounded-[28px] bg-slate-900/30 border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center font-bold text-sm">
                      {currentStep.step}
                    </span>
                    <div>
                      <span className="text-xs font-mono font-semibold text-blue-400">
                        {currentStep.normReference}
                      </span>
                      <h3 className="text-2xl font-extrabold text-white mt-0.5">
                        {currentStep.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 mt-4 leading-relaxed max-w-3xl">
                    {currentStep.description}
                  </p>
                </div>

                <div className="shrink-0 bg-black/40 border border-white/10 px-4 py-3 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="text-[11px] text-slate-400">Regra do Sistema:</div>
                    <div className="text-xs font-bold text-white">Rastreabilidade Inviolável</div>
                  </div>
                </div>
              </div>

              {/* Input vs Output Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    <span>O que entra aqui (Input)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {currentStep.input}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    <span>O que sai daqui (Output)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {currentStep.output}
                  </p>
                </div>
              </div>

              {/* Where Market Fails */}
              <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/20 text-rose-200 text-xs sm:text-sm flex items-start gap-3">
                <AlertOctagon className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-rose-300 font-bold block">
                    Onde as outras soluções e o mercado erram neste elo:
                  </strong>
                  <span className="text-rose-200/90 leading-relaxed">
                    {currentStep.commonMarketMistake}
                  </span>
                </div>
              </div>

              {/* Next step navigation */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  disabled={currentStep.step === 1}
                  onClick={() => setActiveStepId(currentStep.step - 1)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all ${
                    currentStep.step === 1
                      ? 'border-white/5 text-slate-600 cursor-not-allowed'
                      : 'border-white/10 text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  ← Elo Anterior
                </button>

                <div className="text-xs font-mono text-slate-500">
                  {currentStep.step} de 9 elos
                </div>

                <button
                  disabled={currentStep.step === 9}
                  onClick={() => setActiveStepId(currentStep.step + 1)}
                  className={`text-xs font-semibold px-5 py-2 rounded-full border transition-all ${
                    currentStep.step === 9
                      ? 'border-white/5 text-slate-600 cursor-not-allowed'
                      : 'border-blue-500 text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/20'
                  }`}
                >
                  Próximo Elo →
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Dependencies "O que puxa o quê" Table */
          <div className="rounded-[28px] bg-slate-900/30 border border-white/10 p-6 sm:p-8 shadow-2xl overflow-x-auto backdrop-blur-xl">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white">Matriz de Relações: "O que puxa o quê"</h3>
              <p className="text-xs text-slate-400 mt-1">
                Estas são as ligações reais do banco de dados em grafo. Cada uma existe para você não redigitar e para o auditor conseguir percorrer a cadeia nos dois sentidos.
              </p>
            </div>

            <table className="w-full text-left text-xs border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 uppercase font-mono text-[10px]">
                  <th className="py-3 px-3">De (Origem)</th>
                  <th className="py-3 px-3">Para (Destino)</th>
                  <th className="py-3 px-3">O que viaja junto (Payload)</th>
                  <th className="py-3 px-3">Por que importa na auditoria?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {DEPENDENCY_LINKS.map((link, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-3 font-bold text-blue-400">{link.from}</td>
                    <td className="py-3.5 px-3 font-bold text-indigo-300">{link.to}</td>
                    <td className="py-3.5 px-3 text-slate-300 font-mono text-[11px]">{link.payload}</td>
                    <td className="py-3.5 px-3 text-slate-400">{link.businessReason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
