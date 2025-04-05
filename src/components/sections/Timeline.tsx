import { ArrowsClockwise } from '@phosphor-icons/react';

const timelineData = [
  { phase: "Diagnóstico", duration: "T+1 Dia", step: "01" },
  { phase: "Estratégia e Wireframe", duration: "T+3 Dias", step: "02" },
  { phase: "Design de Interface", duration: "T+5 Dias", step: "03" },
  { phase: "Desenvolvimento", duration: "T+14 Dias", step: "04" },
  { phase: "Validação e Go-Live", duration: "T+7 Dias", step: "05" },
];

const TimelineNode = ({ phase, duration, step, isLeft }: { phase: string; duration: string; step: string; isLeft: boolean }) => (
  <div className={`relative flex items-center w-full mb-10 md:${isLeft ? 'justify-start' : 'justify-end'}`}>
    {/* Node Content Box */}
    <div className={`relative w-full md:w-5/12 p-4 border border-text/10 bg-background/80 group 
                     ${isLeft ? 'md:pr-8' : 'md:pl-8'}
                     transition-all duration-300 hover:border-primary/30 hover:bg-background/90`}>
      {/* Step Number */}
      <div className={`absolute top-2 font-mono text-3xl text-primary/10 group-hover:text-primary/20 transition-colors right-3`}>
        {step}
      </div>
      {/* Content */}
      <h3 className="text-md font-semibold text-text/80 group-hover:text-text transition-colors mb-1">{phase}</h3>
      <p className="text-xs font-mono text-primary/50 group-hover:text-primary/70 transition-colors">{duration}</p>
      {/* Decorative corner hidden on mobile */}
      <div className={`hidden md:absolute w-3 h-3 border-primary/20 group-hover:border-primary/40 transition-colors 
                       ${isLeft ? 'bottom-[-1px] left-[-1px] border-b border-l' : 'top-[-1px] right-[-1px] border-t border-r'}`}/> 
    </div>

    {/* Connector Line & Circle hidden on mobile */}
    <div className={`hidden md:absolute w-1/2 md:w-[8.33%] h-[2px] 
                   ${isLeft ? 'left-1/2 bg-gradient-to-r' : 'right-1/2 bg-gradient-to-l'} 
                   from-transparent via-text/10 to-text/10`} />
    <div className={`hidden md:absolute w-3 h-3 rounded-full border-2 border-text/10 bg-background group-hover:border-primary/50 transition-colors 
                   ${isLeft ? 'left-1/2 -translate-x-1/2' : 'right-1/2 translate-x-1/2'}`} />
  </div>
);

const Timeline = () => {
  return (
    <section id="processo" className="relative py-24 lg:py-32 bg-background scroll-mt-20 overflow-hidden">
        {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-70">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"/>
         {/* Technical markings */}
         <div className="absolute top-12 right-12 text-xs font-mono text-text/10 text-right space-y-1">
           <div>PROCESS_FLOW: VNT.EXE.25</div>
           <div>MODE: SEQUENTIAL</div>
           <div>EFFICIENCY_TARGET: 99%</div>
         </div>
          <div className="absolute bottom-12 left-12 text-xs font-mono text-text/10 space-y-1">
           <div>TIMELINE_INTEGRITY: CHECKED</div>
           <div>EST_DURATION: T+30 Dias</div>
         </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
         {/* Section Header */}
        <div className="mb-20 lg:mb-24 relative text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-[1px] bg-primary/40 mr-3" />
            <span className="font-mono text-sm text-primary/50 tracking-widest">// PROJECT EXECUTION PROTOCOL</span>
            <div className="w-8 h-[1px] bg-primary/40 ml-3" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text flex items-center justify-center">
            Timeline do Projeto
            <span className="text-primary">.</span>
             <ArrowsClockwise size={20} className="text-primary/50 ml-4 animate-spin"/>
          </h2>
        </div>

        {/* Timeline Container - Central line hidden on mobile */}
        <div className="relative max-w-xl mx-auto md:max-w-3xl lg:max-w-4xl">
           {/* Central Vertical Line - Hidden on mobile */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-text/10 to-transparent -translate-x-1/2 hidden md:block"></div>

          {/* Timeline Nodes */}
          {timelineData.map((item, index) => (
            <TimelineNode 
              key={item.step} 
              {...item} 
              isLeft={index % 2 === 0} // This prop now only affects md+ layout
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline; 