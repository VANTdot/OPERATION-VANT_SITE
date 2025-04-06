import { User, Palette, Rocket, ChartBar, Code } from '@phosphor-icons/react';

// New DifferentialCard component
const DifferentialCard = ({ icon: Icon, text, code }: { icon: any; text: string; code: string }) => (
  <div className="relative group bg-background/70 border border-text/10 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-background/90 w-full max-w-sm mx-auto md:max-w-none">
    {/* Background Grid Pattern */}
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] z-0"/>

    {/* Decorative Corner Elements */}
    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/30 group-hover:border-primary/50 transition-colors duration-300"></div>
    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/30 group-hover:border-primary/50 transition-colors duration-300"></div>

    {/* Content Container */}
    <div className="relative z-10 flex flex-col items-start">
      {/* Icon Container */}
      <div className="relative w-12 h-12 mb-5 border border-primary/20 bg-background/50 flex items-center justify-center p-2">
        {/* Inner Accents */}
        <div className="absolute -top-[2px] -left-[2px] w-2 h-2 border-t border-l border-primary/40 group-hover:border-primary/60 transition-colors"/>
        <div className="absolute -bottom-[2px] -right-[2px] w-2 h-2 border-b border-r border-primary/40 group-hover:border-primary/60 transition-colors"/>
        <Icon 
          className="w-7 h-7 text-primary/70 transition-all duration-300 group-hover:text-primary"
          weight="light"
        />
      </div>
      {/* Text Content */}
      <h3 className="text-md font-semibold text-text/80 group-hover:text-text transition-colors duration-300 mb-1">{text}</h3>
      <p className="font-mono text-xs text-primary/40 group-hover:text-primary/60 transition-colors duration-300">{code}</p>
    </div>

     {/* Bottom Right Angled Line Decoration */}
     <div className="absolute bottom-0 right-0 h-full w-1/3 bg-gradient-to-bl from-transparent via-transparent to-primary/5 group-hover:to-primary/10 transition-all duration-300 pointer-events-none"/>
      {/* Thin Top Border Highlight */}
     <div className="absolute top-0 left-0 h-[1px] w-1/4 bg-primary/20 group-hover:w-1/2 group-hover:bg-primary/40 transition-all duration-300"/>
  </div>
);

const Differentials = () => {
  return (
    <section id="diferenciais" className="min-h-screen bg-background/50 scroll-mt-20 relative overflow-hidden flex flex-col justify-center py-24 lg:py-32">
      {/* === Background Elements === */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-90">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"/>
        {/* Angled Lines */}
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-text/5 transform skew-x-12 origin-top-right opacity-60" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full border-r border-text/5 transform skew-x-12 origin-bottom-left opacity-60" />
        
        {/* Technical Markings - Hidden on mobile */}
         <div className="absolute top-12 right-12 text-xs font-mono text-text/10 text-right space-y-1 hidden sm:block">
           <div>SYS_MODULE: CORE_ADVANTAGE</div>
           <div>REF_ID: VNT.DIFF.2025</div>
           <div>ACCESS_LEVEL: PUBLIC</div>
         </div>
         {/* Technical Markings - Hidden on mobile */}
          <div className="absolute bottom-12 left-12 text-xs font-mono text-text/10 space-y-1 hidden sm:block">
           <div>SECTOR: STRATEGIC_DIFFERENTIATION</div>
           <div>STATUS: ANALYSIS_COMPLETE</div>
         </div>
      </div>

      {/* === Main Content === */}
      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        {/* Section Header */}
        <div className="mb-20 lg:mb-24 relative text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-[1px] bg-primary/40 mr-3" />
            <span className="font-mono text-sm text-primary/50 tracking-widest">// VANT CORE DIRECTIVES</span>
            <div className="w-8 h-[1px] bg-primary/40 ml-3" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text flex items-center justify-center">
            Diferenciais
            <span className="text-primary">.</span>
            {/* Use a different icon or remove the spin if it doesn't fit */}
            <Code size={24} className="text-primary/50 ml-4 opacity-70 group-hover:opacity-100 transition-opacity"/> 
          </h2>
        </div>

        {/* Simplified Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          <DifferentialCard icon={User} text="Atendimento 1:1 Foco Total" code="DIF-001"/>
          <DifferentialCard icon={Palette} text="Design Exclusivo Sem Templates" code="DIF-002"/>
          <DifferentialCard icon={Rocket} text="Execução Rápida e Precisa" code="DIF-003"/>
          <DifferentialCard icon={ChartBar} text="Visão Estratégica de Mercado" code="DIF-004"/>
          <DifferentialCard icon={Code} text="Expertise Técnica: SW & IA" code="DIF-005"/>
          {/* You can add a sixth item here if needed, or adjust grid columns */}
        </div>
      </div>
    </section>
  );
}

export default Differentials; 