import React from 'react';
import {
  Check,
  Shield,
  Sparkles,
  UserCheck,
  Zap,
  ArrowRight,
  HelpCircle,
  Lock,
  Building2,
  Server
} from 'lucide-react';
import { PRICING_PLANS } from '../data/mockProductData';

interface LicensingSectionProps {
  onSelectPlan: (planId: string) => void;
  onOpenCommunityModal: () => void;
}

export const LicensingSection: React.FC<LicensingSectionProps> = ({ onSelectPlan, onOpenCommunityModal }) => {
  return (
    <section id="planos" className="py-24 bg-[#05070A] border-t border-white/5 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest font-mono">
            <span>NÍVEIS DE LICENCIAMENTO TRANSPARENTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Escolha o nível de governança ideal para sua empresa
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Comece gratuitamente na Edição Comunidade ou conte com a suíte multi-framework completa acompanhada por nossos Auditores Líderes ISO 27001.
          </p>
          <p className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-xs sm:text-sm text-emerald-300 font-semibold">
            <Lock className="w-4 h-4 shrink-0" />
            SSO corporativo (SAML / OIDC) em todas as edições — inclusive na gratuita. Segurança não é item de upsell.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PLANS.map((plan) => {
            const isEnterprise = plan.id === 'enterprise_mentoria';
            const isCommunity = plan.id === 'comunidade';

            return (
              <div
                key={plan.id}
                className={`rounded-[28px] p-6 sm:p-7 flex flex-col justify-between transition-all relative backdrop-blur-xl ${
                  plan.isPopular
                    ? 'bg-gradient-to-b from-blue-950/40 via-slate-900/60 to-black/80 border-2 border-blue-500 shadow-2xl shadow-blue-950/40 scale-[1.03] z-10'
                    : 'bg-slate-900/30 border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular Pill */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-blue-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-lg shadow-blue-600/30">
                    {plan.highlightBadge || 'Mais Escolhido'}
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                    {isCommunity && (
                      <span className="text-[10px] font-mono font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full">
                        Sem Custo
                      </span>
                    )}
                    {isEnterprise && (
                      <span className="text-[10px] font-mono font-bold bg-amber-500/10 border border-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <UserCheck className="w-3 h-3" />
                        Auditores
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 min-h-[36px]">{plan.tagline}</p>

                  {/* Price */}
                  <div className="py-2 border-y border-white/5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl sm:text-2xl font-extrabold text-white">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-xs text-slate-400">{plan.period}</span>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      O que está incluso:
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-6 mt-6 border-t border-white/5">
                  <button
                    onClick={() => {
                      if (isCommunity) {
                        onOpenCommunityModal();
                      } else {
                        onSelectPlan(plan.id);
                      }
                    }}
                    className={`w-full py-3 px-5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      plan.isPopular
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                        : isCommunity
                        ? 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                        : 'bg-black/40 hover:bg-white/5 border border-white/10 text-slate-200'
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Como se paga. A página falava de preço e não dizia como comprar — e o
            único sinal sobre pagamento era um "Sem cartão de crédito" que se lia
            como recusa de cartão. O modelo é licença por VERSÃO, ou seja,
            transação única: não existe assinatura recorrente, e por isso nenhum
            dado de cartão precisa ser guardado. Numa empresa que vende
            conformidade isso não é limitação — é superfície de risco que
            simplesmente não existe. */}
        <div className="mt-10 p-4 rounded-2xl bg-blue-500/5 border border-blue-500/15 text-center text-xs text-slate-400 max-w-2xl mx-auto backdrop-blur-md">
          <span className="block text-slate-300 font-semibold mb-1">Como funciona o pagamento</span>
          <span>
            Boleto, Pix ou cartão, com possibilidade de parcelamento. A negociação é direta
            conosco — <strong className="text-slate-300">a cobrança não acontece na plataforma</strong>.
            Como o licenciamento é por versão, e não assinatura, a transação é única:{' '}
            <strong className="text-slate-300">nenhum dado de cartão passa pelo Traçado nem fica armazenado</strong>.
          </span>
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 p-4 rounded-2xl bg-black/40 border border-white/5 text-center text-xs text-slate-400 max-w-2xl mx-auto flex items-center justify-center gap-2 backdrop-blur-md">
          <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            <strong>Compromisso de Dados Abertos:</strong> sem fidelidade forçada. O banco roda no seu servidor e o backup é seu. Se uma licença vencer, o sistema entra em somente leitura e a exportação em CSV continua liberada — vencimento nunca vira sequestro de dado. Na Edição Comunidade, a exportação em CSV faz parte do plano Essencial.
          </span>
        </div>
      </div>
    </section>
  );
};
