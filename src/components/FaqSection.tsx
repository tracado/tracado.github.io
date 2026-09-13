import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_DATA } from '../data/mockProductData';

interface FaqProps {
  onOpenDemo: () => void;
}

export const FaqSection: React.FC<FaqProps> = ({ onOpenDemo }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#05070A] border-t border-white/5 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>PERGUNTAS FREQUENTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dúvidas comuns sobre o Traçado e a Mentoria
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Respostas diretas sobre arquitetura on-premise, herança multi-norma, auditorias e licenciamento.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/30 border border-white/10 overflow-hidden transition-all backdrop-blur-xl hover:border-white/20"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-bold text-white hover:text-blue-400 transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 sm:p-8 rounded-[28px] bg-slate-900/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-xl">
          <div className="text-left">
            <div className="text-sm font-bold text-white">Ainda tem dúvidas técnicas ou de auditoria?</div>
            <div className="text-xs text-slate-400">Nossa equipe de auditores responde em até 2 horas úteis.</div>
          </div>
          <button
            onClick={onOpenDemo}
            className="px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-full shrink-0 flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Falar com o time técnico</span>
          </button>
        </div>
      </div>
    </section>
  );
};
