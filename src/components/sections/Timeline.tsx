import { ArrowsClockwise } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';

const timelineData = [
  { phase: "Diagnóstico", duration: "T+1 Dia", step: "01" },
  { phase: "Estratégia e Wireframe", duration: "T+3 Dias", step: "02" },
  { phase: "Design de Interface", duration: "T+5 Dias", step: "03" },
  { phase: "Desenvolvimento", duration: "T+14 Dias", step: "04" },
  { phase: "Validação e Go-Live", duration: "T+7 Dias", step: "05" },
];

const TimelineNode = ({ 
  phase, 
  duration, 
  step, 
  isLeft, 
  isActive, 
  onAnimationComplete 
}: { 
  phase: string; 
  duration: string; 
  step: string; 
  isLeft: boolean; 
  isActive: boolean; 
  onAnimationComplete: () => void; 
}) => {
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setTypingComplete(false);
    }
  }, [isActive]);

  const handleTypingComplete = () => {
    setTimeout(() => {
      setTypingComplete(true);
      if (onAnimationComplete) {
        setTimeout(() => {
           onAnimationComplete();
        }, 50);
      }
    }, 50);
  };

  return (
    <div 
      className={`relative flex items-center w-full mb-10 md:${isLeft ? 'justify-start' : 'justify-end'} transition-opacity duration-500 ease-out ${
        isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Node Content Box */}
      <div className={`relative w-full md:w-5/12 p-4 border border-text/10 bg-background/80 group 
                     md:${isLeft ? 'pr-8' : 'pl-8'}
                     transition-all duration-300 hover:border-primary/30 hover:bg-background/90`}>
        {/* Step Number - Highlight changes on typingComplete */}
        <div className={`absolute top-2 font-mono text-3xl transition-colors duration-500 ease-in-out right-3 ${ 
            typingComplete ? 'text-primary/50' : 'text-primary/10' 
          } group-hover:text-primary/30`}>
          {step}
        </div>
        {/* Content */}
        <div className="h-6 mb-1 overflow-hidden">
            {isActive ? (
                <TypeAnimation
                    key={step} 
                    sequence={[phase, handleTypingComplete]} 
                    wrapper="h3"
                    speed={80}
                    className="text-md font-semibold text-text/80 group-hover:text-text transition-colors"
                    cursor={false} 
                    repeat={0}
                />
            ) : (
                <h3 className="text-md font-semibold text-text/80 invisible">{phase}</h3>
            )}
        </div>
        <p className="text-xs font-mono text-primary/50 group-hover:text-primary/70 transition-colors">{duration}</p>
        {/* Decorative corner */}
        <div className={`absolute hidden md:block w-3 h-3 border-primary/20 group-hover:border-primary/40 transition-colors 
                         ${isLeft ? 'bottom-[-1px] left-[-1px] border-b border-l' : 'top-[-1px] right-[-1px] border-t border-r'}`}/> 
      </div>

      {/* Connector Line & Circle */}
      <div className={`absolute hidden md:block w-1/2 md:w-[8.33%] h-[2px] transition-opacity duration-300 delay-200 
                     ${isLeft ? 'left-1/2 bg-gradient-to-r' : 'right-1/2 bg-gradient-to-l'} 
                     from-transparent via-text/10 to-text/10 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`absolute hidden md:block w-3 h-3 rounded-full border-2 border-text/10 bg-background group-hover:border-primary/50 transition-all duration-300 delay-200 
                     ${isLeft ? 'left-1/2 -translate-x-1/2' : 'right-1/2 translate-x-1/2'} ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
    </div>
  );
};

const Timeline = () => {
  // State to track the index of the currently animating item
  const [activeItemIndex, setActiveItemIndex] = useState<number>(-1); // Start at -1 (none active)

  // Observer for the whole timeline section
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true, // Only trigger once when it enters view
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  // Effect to start the animation sequence when the section is in view
  useEffect(() => {
    if (sectionInView && activeItemIndex === -1) {
      // Start with the first item (index 0)
      setActiveItemIndex(0);
    }
    // We don't reset if it goes out of view because triggerOnce is true
  }, [sectionInView, activeItemIndex]);

  // Callback passed to TimelineNode
  const handleNodeAnimationComplete = () => {
    setActiveItemIndex((prevIndex) => {
      // If there's a next item, activate it. Otherwise, stay on the last item.
      if (prevIndex < timelineData.length - 1) {
        return prevIndex + 1;
      } else {
        return prevIndex; // Keep last item active
      }
    });
  };

  return (
    <section 
      ref={sectionRef} // Attach observer ref to the section
      id="processo" 
      className="relative py-24 lg:py-32 bg-background scroll-mt-20 overflow-hidden"
    >
        {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-70">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"/>
         {/* Technical markings - Hidden on mobile */}
         <div className="absolute top-12 right-12 text-xs font-mono text-text/10 text-right space-y-1 hidden sm:block">
           <div>PROCESS_FLOW: VNT.EXE.25</div>
           <div>MODE: SEQUENTIAL</div>
           <div>EFFICIENCY_TARGET: 99%</div>
         </div>
         {/* Technical markings - Hidden on mobile */}
          <div className="absolute bottom-12 left-12 text-xs font-mono text-text/10 space-y-1 hidden sm:block">
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

          {/* Timeline Nodes - Pass isActive and onAnimationComplete */}
          {timelineData.map((item, index) => (
            <TimelineNode 
              key={item.step} 
              {...item} 
              isLeft={index % 2 === 0}
              // isActive is true if this item's index is less than or equal to the current active index
              isActive={index <= activeItemIndex} 
              // Pass the callback function to trigger the next item
              onAnimationComplete={handleNodeAnimationComplete}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline; 