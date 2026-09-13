import React from 'react';
import {
  FileX2,
  GitBranch,
  ShieldCheck,
  Server,
  Lock,
  UserCheck2,
  CheckCircle,
  XCircle,
  DatabaseZap,
  TrendingDown,
  Sparkles,
  Layers,
  FileSpreadsheet
} from 'lucide-react';

export const WhyTracado: React.FC = () => {
  return (
    <section id="por-que-tracado" className="py-24 bg-[#05070A] border-t border-white/5 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-[-10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <span>A VERDADE SOBRE O GRC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Por que as planilhas e GRCs tradicionais falham na hora da auditoria?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            A maioria dos softwares de GRC se resume a formulários isolados ou planilhas com interface web. Quando o auditor pergunta <span className="text-slate-200 font-medium">"de onde veio esse controle e o que ele protege?"</span>, a equipe entra em pânico.
          </p>
        </div>

        {/* Side by side comparison: Legacy GRC vs Traçado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Legacy GRC & Spreadsheets */}
          <div className="rounded-[28px] bg-slate-900/30 border border-rose-500/20 p-6 sm:p-8 space-y-6 relative backdrop-blur-md">
            <div className="flex items-center justify-between pb-4 border-b border-rose-500/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-200">Planilhas & GRCs Antigos</h3>
                  <p className="text-xs text-rose-400 font-mono">Trabalho duplicado e silos</p>
                </div>
              </div>
              <span className="text-xs font-bold text-rose-400 bg-rose-950/60 px-3 py-1 rounded-full border border-rose-800/60">
                Frágil em Auditoria
              </span>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Digitação duplicada em cada norma:</strong> a mesma evidência de backup precisa ser anexada manualmente em abas separadas de ISO 27001, CIS, NIST e LGPD.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong>"Número único" falso de conformidade:</strong> criar uma média matemática somando normas de naturezas incomparáveis, escondendo riscos críticos sob uma nota 85% ilusória.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Dados enviados para nuvens de terceiros:</strong> IA de nuvem pública lendo políticas confidenciais, violando segredos de negócio e exigências bancárias.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Sequestro de dados (Vendor Lock-in):</strong> se a assinatura não for renovada, seu histórico de SGSI é trancado e inacessível.
                </span>
              </li>
            </ul>
          </div>

          {/* The Traçado Method */}
          <div className="rounded-[28px] bg-gradient-to-b from-blue-950/30 via-slate-900/60 to-slate-950/80 border border-blue-500/40 p-6 sm:p-8 space-y-6 shadow-2xl shadow-blue-600/10 relative backdrop-blur-xl">
            <div className="flex items-center justify-between pb-4 border-b border-blue-500/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30 font-bold">
                  <GitBranch className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">O Método Traçado</h3>
                  <p className="text-xs text-blue-300 font-mono">Grafo Vivo de Causa e Efeito</p>
                </div>
              </div>
              <span className="text-xs font-bold text-blue-300 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-500/40">
                Auditável de Ponta a Ponta
              </span>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Herança automática de evidências:</strong> cadastre no Hub da ISO 27001 (SOA) e a evidência propaga cobertura automaticamente para CIS, NIST, COBIT e LGPD.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Cada norma medida na sua própria régua:</strong> ISO por prontidão de certificação, CIS por Implementation Groups (IG1/2/3), NIST por 6 Funções e LGPD por obrigações legais.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>IA 100% Local (On-Premise):</strong> toda inferência e OCR rodam dentro do seu próprio servidor. Nenhum byte confidencial sai da sua infraestrutura.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Seus dados são sempre seus:</strong> mesmo se você suspender a licença, a instância entra em somente leitura e as exportações CSV continuam liberadas para sempre.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3 Inviolable Truths */}
        <div className="rounded-[28px] bg-slate-900/30 border border-white/10 p-6 sm:p-10 backdrop-blur-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400">
              PRINCÍPIOS INEGOCIÁVEIS
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Três coisas que você precisa saber sobre o Traçado
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">A IA roda na sua máquina</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Nenhum conteúdo do seu SGSI sai da sua rede corporativa. Se você desligar o serviço de IA, o produto continua funcionando 100% inteiro — ela é acessória e potencializadora, nunca estrutural.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">A IA sugere, você confirma</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Correlação de evidência, rascunho de parecer e proposta de mapeamento entre normas são sugestões determinísticas. A confirmação e responsabilidade humana no Traçado não são opcionais.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <DatabaseZap className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Seus dados são sempre seus</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Se a licença vencer, o sistema entra em modo somente leitura e a exportação em CSV permanece liberada. Vencimento nunca vira sequestro do que é seu. Na Edição Comunidade, é gratuita e sem prazo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
