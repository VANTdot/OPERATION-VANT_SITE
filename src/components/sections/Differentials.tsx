import { User, Palette, RocketLaunch, Target, ChartLineUp, Power, Code, ArrowsClockwise } from '@phosphor-icons/react';
import { useInView } from 'react-intersection-observer';

// Restore the DifferentialItem component structure
const DifferentialItem = ({ 
    icon: Icon, 
    title, // Use title for the main text
    // description, // Remove description if not needed or use code as description?
    code,     // Use code here
    inView, 
    delay 
}: { 
    icon: any; 
    title: string; 
    // description: string; 
    code: string;
    inView: boolean; 
    delay: string; 
}) => (
  <div 
    className={`border border-text/10 p-6 transition-all duration-500 ease-in-out ${delay} ${
      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}
  >
    <div className="flex items-center mb-3"> {/* Reduced bottom margin */}
      <div className="p-3 bg-primary/10 border border-primary/20 mr-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      {/* Main text from user list */}
      <h3 className="text-lg font-semibold text-text">{title}</h3> 
    </div>
     {/* Code below title */}
    <p className="font-mono text-sm text-primary/60 pl-[64px]">{code}</p> 
    {/* <p className="text-text/70 text-sm mt-2">{description}</p> */}
  </div>
);

// Main section component
const Differentials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Use the user's titles and codes
  const differentialsData = [
    { icon: User, title: "Atendimento 1:1 Foco Total", code: "DIF-001" },
    { icon: Palette, title: "Design Exclusivo Sem Templates", code: "DIF-002" },
    { icon: RocketLaunch, title: "Execução Rápida e Precisa", code: "DIF-003" },
    { icon: Target, title: "Visão Estratégica de Mercado", code: "DIF-004" },
    { icon: Code, title: "Expertise Técnica: SW & IA", code: "DIF-005" },
    { icon: ArrowsClockwise, title: "Suporte Contínuo & Evolução", code: "DIF-006" },
  ];

  return (
    <section 
      ref={ref} 
      id="differentials-section" 
      className="py-24 lg:py-32 bg-background relative overflow-hidden scroll-mt-20"
    >
      {/* === Background Elements === */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-90">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"/>
        {/* Angled Lines - REMOVED */}
        {/* <div className="absolute top-0 right-0 w-1/3 h-full border-l border-text/5 transform skew-x-12 origin-top-right opacity-60" /> */}
        {/* <div className="absolute bottom-0 left-0 w-1/3 h-full border-r border-text/5 transform skew-x-12 origin-bottom-left opacity-60" /> */}
        
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
        {/* Section Header - Animated */}
        <div 
           className={`mb-16 text-center transition-all duration-700 ease-in-out ${
             inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
           }`}
        >
          <span className="font-mono text-sm text-primary/50 tracking-widest">// NOSSOS PILARES</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-text mt-3">
            Diferenciais VANT<span className="text-primary">.</span>
          </h2>
        </div>

        {/* Differentials Grid - Using DifferentialItem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentialsData.map((item, index) => (
            // Use DifferentialItem with the updated data structure
            <DifferentialItem 
              key={item.code} 
              icon={item.icon}
              title={item.title} 
              code={item.code} 
              inView={inView} 
              delay={`delay-[${index * 150 + 300}ms]`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials; 