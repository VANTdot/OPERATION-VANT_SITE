import { Target, Gauge, Lightning } from '@phosphor-icons/react';
import { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';

const DetailItem = ({ 
  label, 
  value, 
  unit, 
  inView, 
  startDelay 
}: { 
  label: string; 
  value: string; 
  unit?: string; 
  inView: boolean;
  startDelay: number; 
}) => {
  const [displayValue, setDisplayValue] = useState<string | null>(null);
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const finalValue = value + (unit || '');
  const isNumeric = !isNaN(parseFloat(value));
  const valueLength = value.length;

  const getRandomChar = () => {
    const chars = isNumeric 
      ? '0123456789.' // Allow dot for numeric values
      : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*#$%';
    return chars[Math.floor(Math.random() * chars.length)];
  };

  const generateRandomValue = () => {
    let random = '';
    for (let i = 0; i < valueLength; i++) {
      random += getRandomChar();
    }
    // Keep unit separate during randomization unless it's % for precision
    if (label === 'PRECISION' && unit === '%') {
       return random + unit;
    } else if (label === 'SPEED' && unit === 's') {
       return random + unit;
    }
    return random;
    // return value === 'MAX' ? random : random + (unit || '');
  };

  useEffect(() => {
    const cleanup = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    if (inView) {
      timeoutRef.current = window.setTimeout(() => {
        // Start interval - Slower update speed
        intervalRef.current = window.setInterval(() => {
          setDisplayValue(generateRandomValue());
        }, 80); // Increased from 50ms

        // Stop interval and set final value - Longer duration
        timeoutRef.current = window.setTimeout(() => {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setDisplayValue(finalValue);
        }, 700); // Increased from 400ms

      }, startDelay);

    } 
    // else { // Optional: Reset if element scrolls out of view 
    //   cleanup();
    //   setDisplayValue(null);
    // }

    return cleanup;

  }, [inView, startDelay, finalValue, label, unit, valueLength]); // Added dependencies that generateRandomValue uses

  return (
    <div className="border border-text/10 p-3"> 
      <div className="font-mono text-xs text-primary/50 mb-1">{label}</div>
      <div className="font-bold text-lg text-text h-6 overflow-hidden"> 
         {displayValue !== null ? (
            <span>{displayValue}</span>
         ) : (
            <span className="invisible">{finalValue}</span> 
         )}
      </div>
    </div>
  );
};

const About = () => {
  const [startHeaderTyping, setStartHeaderTyping] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2,
  });

  useEffect(() => {
    let headerTimer: number | null = null;

    if (inView) {
      headerTimer = setTimeout(() => {
        setStartHeaderTyping(true);
      }, 300); 
    }

    return () => {
      if (headerTimer) window.clearTimeout(headerTimer);
    }
  }, [inView]);

  return (
    <section 
      ref={ref} 
      id="sobre" 
      className="min-h-screen bg-background relative overflow-hidden flex items-center py-20"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-70">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        {/* Angled Lines */}
        <div className="absolute top-0 left-0 w-1/2 h-full border-r border-text/5 transform -skew-x-12 origin-top-left opacity-50" />
        <div className="absolute bottom-0 right-0 w-1/2 h-full border-l border-text/5 transform -skew-x-12 origin-bottom-right opacity-50" />
        
        {/* Technical markings - Hidden on mobile */}
        <div className="absolute top-8 right-8 text-xs font-mono text-text/10 hidden sm:block">
          <div className="space-y-1 text-right">
            <div>SYS_REF: VNT.ABT.2025</div>
            <div>CLASSIFICATION: LVL-3 / SECURE</div>
            <div>GRID_TARGET: 8A-DELTA</div>
          </div>
        </div>
        {/* Bottom-left markings - Hidden on mobile */}
        <div className="absolute bottom-8 left-8 text-xs font-mono text-text/10 hidden sm:block">
          <div className="space-y-1">
            <div>COORDINATES: 23.55S / 46.63W</div>
            <div>SYSTEM_STATUS: OPERATIONAL</div>
            <div>SIGNAL_STRENGTH: 98.7%</div>
          </div>
        </div>
      </div>

      {/* Operation Code - Adjusted position for mobile */}
      <div className="absolute top-8 left-4 sm:top-12 sm:left-8 font-mono text-sm text-primary/60 z-10 bg-background/50 px-2 py-1 border border-primary/20">
        OPERATION: VANT_ABOUT
      </div>

      {/* Main Content - Updated Layout */}
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Title & Simplified Details */}
          <div className="lg:col-span-5 space-y-12">
            {/* Section Title */}
            <div className="relative">
              {/* Background Accent */}
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 to-transparent" />
              <h2 className="text-[10vw] md:text-[8vw] lg:text-[7rem] font-black leading-none text-text relative z-10">
                Sobre<span className="text-primary">.</span>
              </h2>
              <div className="flex gap-4 items-center mt-4 pl-1 sm:pl-2 h-5">
                <div className="h-[2px] w-16 bg-primary/50" />
                {startHeaderTyping ? (
                  <TypeAnimation
                    sequence={['Digital Operations Taskforce']}
                    wrapper="span"
                    speed={60}
                    className="font-mono text-sm text-text/60 uppercase tracking-wider"
                    cursor={true}
                    repeat={0}
                  />
                ) : (
                  <span className="font-mono text-sm text-text/60 uppercase tracking-wider invisible">Digital Operations Taskforce</span> 
                )}
              </div>
            </div>

            {/* Integrated Detail Grid */}
            <div className="grid grid-cols-3 gap-4 font-mono text-sm">
                <DetailItem label="PRECISION" value="99.8" unit="%" inView={inView} startDelay={1800} />
                <DetailItem label="SPEED" value="1.2" unit="s" inView={inView} startDelay={2000} />
                <DetailItem label="POWER" value="MAX" inView={inView} startDelay={2200} />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="lg:col-span-7 space-y-6 text-lg lg:text-xl text-text/70 font-light">
              <p className="border-l-2 border-primary/20 pl-4 hover:text-text/90 hover:border-primary/40 transition-all duration-300">
                A VANT é uma empresa de desenvolvimento de software especializada em <strong className="font-semibold text-text/90">performance, clareza e posicionamento</strong>.
              </p>
              <p className="pl-4 hover:text-text/90 transition-colors duration-300">
                Desenvolvemos websites e plataformas com <strong className="font-semibold text-text/90">foco total em resultado</strong>. Carregamento rápido, estrutura limpa, comunicação de autoridade e experiência de usuário sem atrito.
              </p>
              <p className="border-l-2 border-primary/20 pl-4 hover:text-text/90 hover:border-primary/40 transition-all duration-300">
                Nosso diferencial está na execução: <strong className="font-semibold text-text/90">nada de templates prontos ou soluções genéricas</strong>. Cada projeto é desenhado do zero, com estratégia, design e código alinhados à visão e ambição de cada marca.
              </p>
              <p className="pl-4 hover:text-text/90 transition-colors duration-300">
                No cenário digital atual, quem não <strong className="font-semibold text-text/90">impõe presença, desaparece</strong>.
              </p>
              <p className="border-l-2 border-primary/20 pl-4 hover:text-text/90 hover:border-primary/40 transition-all duration-300">
                A VANT assegura que sua marca seja <strong className="font-semibold text-text/90">vista, lembrada e reconhecida</strong>.
              </p>
          </div>

        </div>
      </div>

      {/* Bottom Right Technical Corner */}
      <div className="absolute bottom-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
         <div className="absolute -bottom-8 -right-8 w-24 h-24 border-4 border-primary/20 rounded-full opacity-30" />
         <div className="absolute bottom-4 right-4 w-8 h-8 border border-primary/30" />
      </div>
    </section>
  );
};

export default About; 