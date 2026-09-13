import React from 'react';
import { Star, ShieldCheck, Quote, Building2, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockProductData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-[#05070A] border-t border-white/5 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-[-5%] w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest font-mono">
            <span>QUEM JÁ PASSOU NA AUDITORIA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Aprovado por CISOs, DPOs e Auditores Líderes
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Veja a experiência de quem substituiu o caos das planilhas pelo motor em grafo do Traçado com mentoria especializada.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div
              key={idx}
              className="rounded-[28px] bg-slate-900/30 border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-white/20 transition-all backdrop-blur-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700" />
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{item.text}"
                </p>

                <div className="pt-2">
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    ★ {item.highlight}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white text-xs shadow-md">
                  {item.author.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{item.author}</div>
                  <div className="text-[11px] text-blue-400">{item.role}</div>
                  <div className="text-[10px] text-slate-500 font-mono">{item.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
