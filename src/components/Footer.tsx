import React from 'react';
import { Marca } from './Marca';
import { Shield, Lock, Server, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenDemo: () => void;
  onOpenCommunityModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo, onOpenCommunityModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#05070A] border-t border-white/5 text-slate-400 text-xs relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Marca tamanho={38} className="shrink-0" />
              <div>
                <span className="marca-nome text-xl text-white">Traçado</span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 ml-2 font-mono">
                  GRC Hub
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm text-xs">
              A suíte de Governança, Riscos e Conformidade que pensa em Grafo Vivo de Causa e Efeito. Inteligência Artificial local, herança multi-norma e acompanhamento por Auditores Líderes ISO 27001.
            </p>

            <div className="flex items-center gap-4 text-[11px] text-slate-500 font-mono">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-400" /> 100% On-Premise
              </span>
              <span className="flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-blue-400" /> Sem Data Lock-in
              </span>
            </div>
          </div>

          {/* Col 3: O Produto & Grafo */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">O Grafo SGSI</div>
            <ul className="space-y-2 text-xs">
              <li><a href="#como-funciona" className="hover:text-white transition-colors">Os 9 Elos da Cadeia</a></li>
              <li><a href="#como-funciona" className="hover:text-white transition-colors">Matriz "O que puxa o quê"</a></li>
              <li><a href="#ia-local" className="hover:text-white transition-colors">IA Semântica & OCR Local</a></li>
              <li><a href="#simulador" className="hover:text-white transition-colors">Calculadora de ROI</a></li>
            </ul>
          </div>

          {/* Col 4: Multi-Framework */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Frameworks & Lentes</div>
            <ul className="space-y-2 text-xs">
              <li><a href="#frameworks" className="hover:text-white transition-colors">ISO/IEC 27001 (Hub SOA)</a></li>
              <li><a href="#frameworks" className="hover:text-white transition-colors">CIS Controls v8 (IG1/2/3)</a></li>
              <li><a href="#frameworks" className="hover:text-white transition-colors">NIST CSF 2.0 (6 Funções)</a></li>
              <li><a href="#frameworks" className="hover:text-white transition-colors">LGPD & RoPA (Art. 37/46)</a></li>
              <li><a href="#frameworks" className="hover:text-white transition-colors">COBIT 2019 & ISO 42001</a></li>
            </ul>
          </div>

          {/* Col 5: Auditoria & Acesso */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Auditoria & Licenças</div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenCommunityModal} className="text-left hover:text-white text-emerald-400 transition-colors">
                  Edição Comunidade (Grátis)
                </button>
              </li>
              <li><a href="#planos" className="hover:text-white transition-colors">Planos & Preços</a></li>
              <li><a href="#auditores" className="hover:text-white transition-colors">Mentoria c/ Auditores Líderes</a></li>
              <li>
                <button onClick={onOpenDemo} className="text-left text-blue-400 hover:text-blue-300 transition-colors">
                  Agendar Demonstração
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Traçado GRC. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span>Privacidade & Soberania de Dados</span>
            <span>Documentação Técnica</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
