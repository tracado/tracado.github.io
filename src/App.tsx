import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyTracado } from './components/WhyTracado';
import { GraphEngineSection } from './components/GraphEngineSection';
import { MultiFrameworkSection } from './components/MultiFrameworkSection';
import { AiLocalEngineSection } from './components/AiLocalEngineSection';
import { AuditorMentorshipSection } from './components/AuditorMentorshipSection';
import { InteractiveGapSimulator } from './components/InteractiveGapSimulator';
import { LicensingSection } from './components/LicensingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export const App: React.FC = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [communityModalOpen, setCommunityModalOpen] = useState(false);
  const [selectedPlanForDemo, setSelectedPlanForDemo] = useState<string | undefined>(undefined);

  const handleOpenDemo = (planId?: string) => {
    setSelectedPlanForDemo(planId);
    setDemoModalOpen(true);
  };

  const handleOpenCommunity = () => {
    setCommunityModalOpen(true);
  };

  const handleCloseModals = () => {
    setDemoModalOpen(false);
    setCommunityModalOpen(false);
    setSelectedPlanForDemo(undefined);
  };

  return (
    <div className="min-h-screen bg-[#05070A] text-slate-200 font-sans selection:bg-blue-600 selection:text-white antialiased relative overflow-x-hidden">
      {/* Immersive UI Ambient Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[750px] max-h-[750px] rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-[45%] right-[-5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none z-0" />

      {/* Navigation Header */}
      <Navbar
        onOpenDemo={handleOpenDemo}
        onOpenCommunityModal={handleOpenCommunity}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero with headline & interactive product mockup */}
        <Hero
          onOpenDemo={() => handleOpenDemo()}
          onOpenCommunityModal={handleOpenCommunity}
        />

        {/* 2. Contrast: Legacy Spreadsheets vs Traçado & 3 Inviolable Principles */}
        <WhyTracado />

        {/* 3. The 9-step Graph of Cause & Effect (Como o Traçado Pensa) */}
        <GraphEngineSection />

        {/* 4. Multi-Framework Architecture & Interactive Cross-Inheritance */}
        <MultiFrameworkSection />

        {/* 5. 100% Local AI, Semantic Engine, OCR & Human in the Loop */}
        <AiLocalEngineSection />

        {/* 6. Human Dimension: Certified Lead Auditor Mentorship & Mock Audits */}
        <AuditorMentorshipSection
          onOpenDemo={() => handleOpenDemo('Enterprise com Mentoria')}
        />

        {/* 7. Interactive GAP & Time-Savings ROI Simulator */}
        <InteractiveGapSimulator
          onOpenDemo={() => handleOpenDemo('Simulação de ROI')}
        />

        {/* 8. Licensing & Transparent Pricing Plans */}
        <LicensingSection
          onSelectPlan={(planId) => handleOpenDemo(planId)}
          onOpenCommunityModal={handleOpenCommunity}
        />

        {/* 9. Testimonials — OCULTA ATÉ A SESSÃO DE TESTES.
            Os depoimentos hoje em TESTIMONIALS_DATA são de exemplo: pessoas e
            empresas que não existem. Publicá-los seria endosso fabricado numa
            página de venda — vedado pelo CDC art. 37 e pelo CONAR, e corrosivo
            justamente num produto cujo valor é conformidade.
            Nada foi removido: o componente, os dados e o estilo continuam aqui.
            Para reativar, basta descomentar a linha abaixo DEPOIS de substituir
            TESTIMONIALS_DATA pelos nomes reais colhidos na sessão de testes,
            com autorização de uso de cada pessoa. */}
        {/* <TestimonialsSection /> */}

        {/* 10. Frequently Asked Questions */}
        <FaqSection
          onOpenDemo={() => handleOpenDemo('Dúvida Técnica')}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenDemo={() => handleOpenDemo()}
        onOpenCommunityModal={handleOpenCommunity}
      />

      {/* Lead Capture & Scheduling Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={handleCloseModals}
        initialPlan={selectedPlanForDemo}
        isCommunityModal={false}
      />

      {/* Community Edition Instant Docker Modal */}
      <DemoModal
        isOpen={communityModalOpen}
        onClose={handleCloseModals}
        isCommunityModal={true}
      />
    </div>
  );
};

export default App;
