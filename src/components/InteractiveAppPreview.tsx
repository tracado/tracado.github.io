import React, { useState } from 'react';
import {
  LayoutDashboard,
  ShieldCheck,
  Layers,
  AlertOctagon,
  FileSpreadsheet,
  Server,
  Compass,
  AlertTriangle,
  ListTodo,
  FileCheck,
  FileText,
  ClipboardCheck,
  LineChart,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  Search,
  ChevronRight,
  TrendingUp,
  Cpu,
  RefreshCw,
  ExternalLink,
  ShieldAlert,
  Info
} from 'lucide-react';
import { FRAMEWORKS_DATA, GRAPH_STEPS_DATA } from '../data/mockProductData';

export const InteractiveAppPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'postura' | 'frameworks' | 'gap' | 'grafo' | 'ia'>('dashboard');
  const [activeRiskFilter, setActiveRiskFilter] = useState<'all' | 'critical' | 'actionable'>('all');
  const [selectedGraphStep, setSelectedGraphStep] = useState<number>(1);

  return (
    <div id="interactive-product-preview" className="relative rounded-[28px] sm:rounded-[36px] bg-slate-900/40 border border-white/10 shadow-2xl shadow-blue-950/40 overflow-hidden backdrop-blur-xl p-1 sm:p-2">
      {/* OS Bar & Window Controls */}
      <div className="bg-black/40 border-b border-white/5 px-4 py-3 flex items-center justify-between text-xs text-slate-400 rounded-t-[24px] sm:rounded-t-[30px]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
          </div>
          <span className="ml-3 font-mono text-[11px] text-slate-400 hidden sm:inline">
            app.tracado.local / <span className="text-blue-400">instância: on-premise-9DBEFA</span>
          </span>
        </div>

        {/* Global System Indicators from real screenshot */}
        <div className="flex items-center gap-3 text-[11px]">
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <span className="font-bold">0%</span> Anexo A implementado
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400">
            <span className="font-bold">1</span> Risco crítico
          </div>
          <span className="text-slate-400 font-mono hidden sm:inline">Setembro / 2026</span>
          <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px] shadow-sm shadow-blue-500/30">
            A
          </div>
        </div>
      </div>

      {/* Main App Layout with Authentic Sidebar & Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] bg-[#05070A]/80 rounded-b-[24px] sm:rounded-b-[30px] overflow-hidden">
        {/* Left App Sidebar */}
        <div className="lg:col-span-3 bg-black/30 border-r border-white/5 p-3 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Org badge */}
            <div className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl bg-slate-900/50 border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white text-xs shadow-md shadow-blue-500/20">
                M
              </div>
              <div className="overflow-hidden">
                <div className="font-bold text-xs text-white truncate">Minha Empresa S.A.</div>
                <div className="text-[10px] text-slate-400 font-mono truncate">Traçado • ISO 27001 • CIS • NIST</div>
              </div>
            </div>

            {/* Quick Search */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-500" />
              <input
                type="text"
                disabled
                placeholder="Buscar controle, risco..."
                className="w-full bg-slate-900/40 border border-white/5 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-400 placeholder:text-slate-600 focus:outline-none cursor-default"
              />
              <span className="absolute right-2 top-2 text-[10px] font-mono text-slate-600 bg-white/5 px-1.5 rounded">⌘K</span>
            </div>

            {/* Navigation Groups */}
            <div className="space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-2 py-1">
                Visão Geral
              </div>
              
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === 'dashboard'
                    ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  <LayoutDashboard className="w-3.5 h-3.5 text-blue-400" />
                  <span>Dashboard Executivo</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('postura')}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === 'postura'
                    ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Postura GRC</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('frameworks')}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === 'frameworks'
                    ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Frameworks GRC</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('gap')}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === 'gap'
                    ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <AlertOctagon className="w-3.5 h-3.5 text-rose-400" />
                  <span>Análise de GAP</span>
                </div>
                <span className="text-[10px] font-bold px-1.5 py-0.2 bg-rose-600 text-white rounded-full">23</span>
              </button>

              <div className="pt-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 px-2 py-1">
                Motor do SGSI
              </div>

              <button
                onClick={() => setActiveTab('grafo')}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === 'grafo'
                    ? 'bg-gradient-to-r from-blue-600/20 to-indigo-600/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
                  <span>Grafo de Causa e Efeito</span>
                </div>
                <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">Motor</span>
              </button>

              <button
                onClick={() => setActiveTab('ia')}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === 'ia'
                    ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Analista IA Local</span>
                </div>
                <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">100% Local</span>
              </button>
            </div>
          </div>

          {/* Footer watermark inside mockup */}
          <div className="pt-4 border-t border-slate-800/80 text-[10px] text-slate-500 flex items-center justify-between">
            <span className="font-mono">Traçado v2.1.0</span>
            <span className="text-emerald-500 flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              On-Premise Ativo
            </span>
          </div>
        </div>

        {/* Right Main Content Pane */}
        <div className="lg:col-span-9 bg-slate-900/60 p-4 sm:p-6 overflow-y-auto max-h-[620px]">
          {/* TAB 1: DASHBOARD EXECUTIVO */}
          {activeTab === 'dashboard' && (
            <div className="space-y-5 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white">Dashboard Executivo</h3>
                  <p className="text-xs text-slate-400">
                    Visão consolidada do GRC — maturidade, riscos, compliance e planos de ação.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    Exportar PDF / CSV
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded bg-blue-600 text-white font-medium">
                    + Nova Avaliação
                  </span>
                </div>
              </div>

              {/* Briefing do Analista IA (from screenshot 1) */}
              <div className="rounded-xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-amber-500/30 p-4 relative overflow-hidden">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      Briefing do Analista IA • Prioridades da Semana
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    determinístico • sem alucinação
                  </div>
                </div>

                <div className="mb-3">
                  <span className="text-xs text-slate-300">
                    Situação: <strong className="text-rose-400 font-bold">ALTA</strong> — 3 decisão(ões) nesta semana
                  </span>
                </div>

                {/* 3 Priority Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {/* P1 */}
                  <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-rose-400">P1</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/30">
                        SCORE RESIDUAL 25
                      </span>
                    </div>
                    <div className="text-xs font-bold text-slate-100 line-clamp-2">
                      Reduzir exposição crítica — ERP corporativo
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2">
                      Ação: Aprovar tratamento do RC-0003 — PARÂMETROS DE SENHAS NO BANCO DE DADOS.
                    </p>
                    <div className="flex items-center gap-1.5 pt-1">
                      <span className="text-[9px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-300 font-mono">RC-0003</span>
                      <span className="text-[9px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-300 font-mono">A.5.15</span>
                    </div>
                  </div>

                  {/* P2 */}
                  <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-400">P2</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                        1 VENCIDO • 30/09
                      </span>
                    </div>
                    <div className="text-xs font-bold text-slate-100 line-clamp-2">
                      Regularizar os planos de ação vencidos
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2">
                      Ação: Reprogramar com justificativa, novo prazo e responsável formal.
                    </p>
                    <div className="flex items-center gap-1.5 pt-1">
                      <span className="text-[9px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-300 font-mono">PA-0006</span>
                      <span className="text-[9px] bg-amber-500/10 text-amber-300 px-1.5 py-0.5 rounded font-mono text-[9px]">SLA 0%</span>
                    </div>
                  </div>

                  {/* P3 */}
                  <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-indigo-400">P3</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                        3 ABERTAS • MTTR 122D
                      </span>
                    </div>
                    <div className="text-xs font-bold text-slate-100 line-clamp-2">
                      Destravar as não conformidades mais antigas
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2">
                      Ação: Priorizar NC-0007 e remover o impedimento de evidência operacional.
                    </p>
                    <div className="flex items-center gap-1.5 pt-1">
                      <span className="text-[9px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-300 font-mono">NC-0007</span>
                      <span className="text-[9px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-300 font-mono">Cl. 10.2</span>
                    </div>
                  </div>
                </div>

                {/* Meta da semana */}
                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span><strong>Meta da semana:</strong> 1 risco crítico com tratamento aprovado • 1 plano regularizado</span>
                  </div>
                  <span className="text-slate-400 hidden sm:inline text-[10px]">Diagnóstico Preliminar</span>
                </div>
              </div>

              {/* Indicadores-Chave de Risco (KRI) */}
              <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <span>Indicadores-Chave de Risco (KRI)</span>
                    <Info className="w-3.5 h-3.5 text-slate-500" />
                  </h4>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    <span className="text-slate-300 font-mono font-bold text-[11px]">Atingimento 56%</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-slate-400">Riscos críticos (residual ≥16)</div>
                      <div className="text-lg font-bold text-amber-400">1 <span className="text-xs font-normal text-slate-500">meta 0</span></div>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-slate-400">Riscos críticos sem plano</div>
                      <div className="text-lg font-bold text-emerald-400">0 <span className="text-xs font-normal text-slate-500">meta 0</span></div>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-slate-400">Execução de planos de ação</div>
                      <div className="text-lg font-bold text-amber-400">67% <span className="text-xs font-normal text-slate-500">meta ≥ 80%</span></div>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: POSTURA GRC */}
          {activeTab === 'postura' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="pb-3 border-b border-slate-800">
                <h3 className="text-lg font-bold text-white">Postura GRC — Multi-Framework</h3>
                <p className="text-xs text-slate-400">
                  Cada framework medido na <strong>sua própria natureza</strong> — ISO por prontidão de certificação, CIS por Implementation Groups, NIST por Funções, LGPD por obrigações.
                </p>
              </div>

              {/* Banner Filosofia Traçado */}
              <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800/60 text-xs text-blue-200 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Não existe um "número único" de compliance aqui:</strong> somar ISO + NIST + CIS + LGPD num só índice esconde a realidade. A ISO 27001 é o eixo de certificação (HUB); os demais são lentes que enriquecem a evidência.
                </span>
              </div>

              {/* Prontidão por Framework (from screenshot 2) */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <span>Prontidão por Framework</span>
                  <span className="text-[9px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full">Lentes do Hub</span>
                </div>

                {[
                  { name: 'ISO/IEC 27001', hub: true, mapped: '93/93 mapeados', ready: '78%', status: 'Hub Central' },
                  { name: 'CIS Controls v8', hub: false, mapped: '12/153 mapeados', ready: '35%', status: 'IG1 Base' },
                  { name: 'NIST CSF 2.0', hub: false, mapped: '9/107 mapeados', ready: '24%', status: '6 Funções' },
                  { name: 'LGPD & Privacidade', hub: false, mapped: '18/23 mapeados', ready: '62%', status: 'Obrigações' },
                  { name: 'COBIT 2019', hub: false, mapped: '14/41 mapeados', ready: '30%', status: 'Governança TI' },
                  { name: 'ISO/IEC 42001 (IA)', hub: false, mapped: '10/38 mapeados', ready: '28%', status: 'IA Responsável' },
                ].map((fw) => (
                  <div key={fw.name} className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      <span className="font-bold text-xs text-white">{fw.name}</span>
                      {fw.hub && (
                        <span className="text-[9px] bg-purple-500/20 text-purple-300 px-1.5 py-0.2 rounded font-mono">HUB</span>
                      )}
                      <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">({fw.mapped})</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full" style={{ width: fw.ready }}></div>
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-300 w-10 text-right">{fw.ready}</span>
                      <span className="text-[10px] text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer">
                        abrir lente <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: FRAMEWORKS GRC */}
          {activeTab === 'frameworks' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="pb-3 border-b border-slate-800">
                <h3 className="text-lg font-bold text-white">Frameworks GRC Habilitados</h3>
                <p className="text-xs text-slate-400">
                  Maturidade, aplicabilidade, políticas e evidências de cada norma interligadas pelo Hub SOA.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {FRAMEWORKS_DATA.map((fw) => (
                  <div key={fw.id} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 space-y-3 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {fw.version}
                      </span>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded border ${fw.color}`}>
                        {fw.badge}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">{fw.name}</h4>
                      <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">{fw.description}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-center">
                      <div>
                        <div className="text-base font-bold text-white">{fw.controlsCount}</div>
                        <div className="text-[9px] text-slate-400 uppercase">controles</div>
                      </div>
                      <div>
                        <div className="text-base font-bold text-emerald-400">93</div>
                        <div className="text-[9px] text-slate-400 uppercase">mapeados</div>
                      </div>
                      <div>
                        <div className="text-base font-bold text-cyan-400">CMMI 3</div>
                        <div className="text-[9px] text-slate-400 uppercase">maturidade</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: ANÁLISE DE GAP */}
          {activeTab === 'gap' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="pb-3 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Análise de GAP Consolidada</h3>
                  <p className="text-xs text-slate-400">
                    Maturidade atual vs meta em todos os frameworks ativos • priorizada por criticidade.
                  </p>
                </div>
                <div className="text-xs font-mono text-rose-400 font-bold px-2.5 py-1 rounded bg-rose-950/40 border border-rose-800/50">
                  23 Bloqueadores ISO 27001
                </div>
              </div>

              {/* Stat Boxes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-[10px] text-slate-400">Prontidão Global (ISA)</div>
                  <div className="text-lg font-bold text-amber-400">19/100</div>
                  <div className="text-[9px] text-slate-500">Segurança inicial</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-[10px] text-slate-400">Risco Alto/Crítico</div>
                  <div className="text-lg font-bold text-rose-400">3 (1 crít.)</div>
                  <div className="text-[9px] text-slate-500">1 sem plano de ação</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-[10px] text-slate-400">Planos Atrasados</div>
                  <div className="text-lg font-bold text-amber-400">2</div>
                  <div className="text-[9px] text-slate-500">Gap de execução</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-[10px] text-slate-400">Bloqueadores ISO</div>
                  <div className="text-lg font-bold text-purple-400">23 req.</div>
                  <div className="text-[9px] text-slate-500">0 NC Maior</div>
                </div>
              </div>

              {/* Fila Priorizada de GAPs */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  <span>Fila Priorizada de GAPs — 79 itens</span>
                  <span className="text-[10px] text-slate-500 font-normal">Ordenada por Obrigatoriedade → Risco → Distância</span>
                </div>

                {[
                  { clause: 'Cláusula 4 — Contexto da Organização', tag: 'MANDATÓRIO', count: '4 requisitos não implementados (4.1, 4.2, 4.3)', progress: '25%' },
                  { clause: 'Cláusula 5 — Liderança e Comprometimento', tag: 'MANDATÓRIO', count: '3 requisitos não implementados (5.1, 5.2, 5.3)', progress: '30%' },
                  { clause: 'Cláusula 6 — Planejamento e Riscos', tag: 'MANDATÓRIO', count: '3 requisitos não implementados (6.1, 6.2, 6.3)', progress: '40%' },
                  { clause: 'Cláusula 7 — Apoio e Recursos', tag: 'MANDATÓRIO', count: '5 requisitos não implementados (7.1, 7.2, 7.3)', progress: '50%' },
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3 hover:border-slate-700 transition-colors">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">{item.clause}</span>
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono">{item.tag}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">{item.count}</p>
                    </div>
                    <button className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 shrink-0">
                      Tratar cláusula <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: MOTOR DO GRAFO (COMO PENSA) */}
          {activeTab === 'grafo' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    O DIFERENCIAL TRAÇADO
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">Como o Traçado pensa: O Grafo de Causa e Efeito</h3>
                <p className="text-xs text-slate-400">
                  O produto é um grafo de 9 nós, não um amontoado de telas soltas. Você <strong>nunca digita a mesma informação duas vezes</strong>.
                </p>
              </div>

              {/* Interactive Step Navigator */}
              <div className="grid grid-cols-3 sm:grid-cols-9 gap-1.5 bg-slate-950 p-2 rounded-xl border border-slate-800 text-center">
                {GRAPH_STEPS_DATA.map((step) => (
                  <button
                    key={step.step}
                    onClick={() => setSelectedGraphStep(step.step)}
                    className={`py-2 px-1 rounded-lg text-xs font-bold transition-all ${
                      selectedGraphStep === step.step
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-105'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    <div className="text-[10px] opacity-70">NÓ {step.step}</div>
                    <div className="truncate text-[11px]">{step.title.split(' ')[0]}</div>
                  </button>
                ))}
              </div>

              {/* Selected Step Detail Card */}
              {(() => {
                const currentStep = GRAPH_STEPS_DATA.find((s) => s.step === selectedGraphStep) || GRAPH_STEPS_DATA[0];
                return (
                  <div className="rounded-xl bg-slate-950/90 border border-cyan-500/30 p-5 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                      <div>
                        <div className="text-xs font-mono text-cyan-400 font-semibold">
                          PASSO {currentStep.step} DE 9 • {currentStep.normReference}
                        </div>
                        <h4 className="text-base font-bold text-white mt-0.5">{currentStep.title}</h4>
                      </div>
                      <div className="text-xs bg-slate-900 px-3 py-1 rounded-full border border-slate-800 text-slate-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Cadeia de Rastreabilidade</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">{currentStep.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                      <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                        <div className="text-[10px] uppercase font-bold text-emerald-400 flex items-center gap-1">
                          <ArrowRight className="w-3 h-3 rotate-180" />
                          <span>O que entra aqui</span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1">{currentStep.input}</p>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                        <div className="text-[10px] uppercase font-bold text-cyan-400 flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          <span>O que sai daqui</span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1">{currentStep.output}</p>
                      </div>
                    </div>

                    {/* Market Error Warning */}
                    <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-800/40 text-xs text-rose-200">
                      <strong className="text-rose-400 block mb-0.5 flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                        Onde o mercado erra:
                      </strong>
                      {currentStep.commonMarketMistake}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* TAB 6: IA LOCAL & PARECER */}
          {activeTab === 'ia' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="pb-3 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>Motor Semântico & Parecer do Analista IA</span>
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  </h3>
                  <p className="text-xs text-slate-400">
                    A IA roda 100% on-premise no seu servidor. <strong>A IA sugere, você confirma</strong>.
                  </p>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                  Zero Vazamento Externo
                </span>
              </div>

              {/* Interactive Simulation of Evidence Analysis */}
              <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 space-y-3">
                <div className="text-xs font-bold text-slate-300 flex items-center justify-between">
                  <span>Evidência Analisada: Politica_Gestao_Acessos_ERP_v2.pdf</span>
                  <span className="text-[10px] font-mono bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded">
                    OCR + Extração Semântica
                  </span>
                </div>

                <div className="p-3 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 leading-relaxed">
                  "Seção 4.3: Todas as solicitações de alteração de privilégios no ERP corporativo devem ser solicitadas formalmente via ITSM com aprovação do gestor de centro de custos. Revisão trimestral de acessos críticos."
                </div>

                {/* AI Proposed Mapping */}
                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-bold text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Sugestão de Controles Multidomínio (96% Confiança):</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-cyan-300">ISO/IEC 27001</div>
                        <div className="text-[11px] text-slate-400">A.5.15 Controle de acesso</div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">Cobriu</span>
                    </div>

                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-emerald-300">CIS Controls v8</div>
                        <div className="text-[11px] text-slate-400">Controle 5.1 / 6.1 (Contas)</div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">Cobriu</span>
                    </div>

                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-indigo-300">NIST CSF 2.0</div>
                        <div className="text-[11px] text-slate-400">PR.AC-1 Gestão de Identidades</div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">Cobriu</span>
                    </div>

                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-rose-300">LGPD (Art. 46)</div>
                        <div className="text-[11px] text-slate-400">Medidas Técnicas de Acesso</div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">Cobriu</span>
                    </div>
                  </div>
                </div>

                {/* Human in the loop confirmation button */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    Ação Humana Obrigatória: <strong>Revisar e Aprovar</strong>
                  </span>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded">
                      Ajustar Escopo
                    </button>
                    <button className="px-3 py-1 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Aprovar Evidência</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
