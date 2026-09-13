import React, { useState } from 'react';
import {
  Sparkles,
  Server,
  FileText,
  CheckCircle2,
  Lock,
  Cpu,
  ScanText,
  ShieldCheck,
  Play,
  ArrowRight,
  Eye,
  FileCheck2,
  RefreshCw,
  SlidersHorizontal,
  UserCheck
} from 'lucide-react';
import { DEMO_EVIDENCE_ITEMS } from '../data/mockProductData';

export const AiLocalEngineSection: React.FC = () => {
  const [selectedDemoId, setSelectedDemoId] = useState<string>('ev-01');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('Análise Concluída em 140ms');
  const [humanApproved, setHumanApproved] = useState<{ [key: string]: boolean }>({
    'ev-01': true,
  });

  const currentItem = DEMO_EVIDENCE_ITEMS.find((item) => item.id === selectedDemoId) || DEMO_EVIDENCE_ITEMS[0];

  const handleSimulateRun = (id: string) => {
    setSelectedDemoId(id);
    setIsProcessing(true);
    setStatusMessage('Processando OCR e Motor Semântico Local...');
    setTimeout(() => {
      setIsProcessing(false);
      setStatusMessage('Análise Concluída Localmente (0 bytes externos)');
    }, 600);
  };

  const toggleApproval = (id: string) => {
    setHumanApproved((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="ia-local" className="py-24 bg-[#05070A] border-t border-white/5 relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest font-mono">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>IA EMBARCADA LOCAL & MOTOR SEMÂNTICO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Inteligência Artificial que não vaza seus dados confidenciais.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Todas as análises semânticas, OCR de documentos e correlações de evidências rodam 100% on-premise na sua própria infraestrutura. Seus segredos de negócio e dados do SGSI nunca tocam a nuvem pública.
          </p>
        </div>

        {/* 3 Core Architecture Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <div className="p-6 rounded-[28px] bg-slate-900/30 border border-white/10 space-y-3 backdrop-blur-xl hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-inner">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">100% On-Premise / Edge AI</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              O motor de linguagem e indexação semântica é empacotado dentro do appliance do Traçado. Pode operar até em ambientes estritamente isolados (Air-Gapped).
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-[28px] bg-slate-900/30 border border-white/10 space-y-3 backdrop-blur-xl hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-inner">
              <ScanText className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">OCR & Leitor Multimodal</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Lê PDFs de políticas assinadas, documentos Word, apresentações, logs de servidores e prints de tela de configurações (Active Directory, Firewalls, AWS/Azure).
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-[28px] bg-slate-900/30 border border-white/10 space-y-3 backdrop-blur-xl hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">A IA Sugere, o Humano Confirma</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              O sistema calcula o índice de confiança e exibe a justificativa exata da recomendação. Nenhum controle é aprovado sem o crivo do responsável formal.
            </p>
          </div>
        </div>

        {/* Interactive AI Evidence Workbench Sandbox */}
        <div className="rounded-[28px] bg-slate-900/40 border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono font-bold uppercase text-blue-300">
                  Bancada Interativa de Análise de Evidências
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                Veja o Analista IA processando documentos reais em tempo real
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{statusMessage}</span>
            </div>
          </div>

          {/* Document Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6">
            {DEMO_EVIDENCE_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSimulateRun(item.id)}
                className={`p-3.5 rounded-2xl text-left border transition-all backdrop-blur-md ${
                  selectedDemoId === item.id
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/15'
                    : 'bg-black/30 border-white/5 text-slate-300 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 uppercase border border-white/5">
                    {item.fileType}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono font-bold">
                    {item.aiSuggestedControls.confidence}% Confiança
                  </span>
                </div>
                <div className="text-xs font-bold truncate">{item.filename}</div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">{item.sourceAsset}</div>
              </button>
            ))}
          </div>

          {/* Workbench Body */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Document Raw Text Extracted */}
            <div className="lg:col-span-5 bg-black/40 rounded-2xl border border-white/5 p-4 sm:p-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-blue-400" />
                  Texto Extraído do Documento
                </span>
                <span className="text-[10px] font-mono text-slate-500">Local OCR v2</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black/60 font-mono text-xs text-slate-300 leading-relaxed border border-white/5 min-h-[140px]">
                {isProcessing ? (
                  <div className="flex items-center justify-center h-28 text-slate-500 gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin text-blue-400" />
                    <span>Executando parsing semântico local...</span>
                  </div>
                ) : (
                  `"${currentItem.detectedText}"`
                )}
              </div>
              <div className="text-[11px] text-slate-400 flex items-center justify-between">
                <span>Ativo Vinculado: <strong className="text-slate-200">{currentItem.sourceAsset}</strong></span>
              </div>
            </div>

            {/* Right: AI Semantic Diagnosis & Suggested Controls */}
            <div className="lg:col-span-7 bg-black/40 rounded-2xl border border-white/5 p-4 sm:p-5 space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-amber-300">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Parecer do Analista IA (Semântica Normativa)
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {currentItem.aiSuggestedControls.confidence}% Aderência
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 text-xs text-slate-300 leading-relaxed">
                <strong>Justificativa Técnica:</strong> {currentItem.aiSuggestedControls.justification}
              </div>

              {/* Controls Mapping List */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Controles Identificados para Cobertura SOA:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-blue-400 font-bold">ISO/IEC 27001</div>
                      <div className="text-slate-300 text-[11px]">{currentItem.aiSuggestedControls.iso27001}</div>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-emerald-400 font-bold">CIS Controls</div>
                      <div className="text-slate-300 text-[11px]">{currentItem.aiSuggestedControls.cis}</div>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-indigo-400 font-bold">NIST CSF</div>
                      <div className="text-slate-300 text-[11px]">{currentItem.aiSuggestedControls.nist}</div>
                    </div>
                  </div>
                  {currentItem.aiSuggestedControls.lgpd && (
                    <div className="p-2.5 rounded-xl bg-black/60 border border-white/5 flex items-center justify-between">
                      <div>
                        <div className="text-rose-400 font-bold">LGPD</div>
                        <div className="text-slate-300 text-[11px]">{currentItem.aiSuggestedControls.lgpd}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* User Confirmation Action */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/5">
                <span className="text-[11px] text-slate-400">
                  Status de Validação: {humanApproved[currentItem.id] ? (
                    <strong className="text-emerald-400 font-semibold">Aprovado pelo Gestor do Controle</strong>
                  ) : (
                    <strong className="text-amber-400 font-semibold">Aguardando Validação Humana</strong>
                  )}
                </span>

                <button
                  onClick={() => toggleApproval(currentItem.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    humanApproved[currentItem.id]
                      ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-600/30'
                      : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{humanApproved[currentItem.id] ? 'Evidência Aprovada' : 'Aprovar Sugestão da IA'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
