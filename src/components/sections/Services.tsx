import { Code, Rocket, ChartLineUp, WarningCircle, Palette } from '@phosphor-icons/react';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

interface ServiceCardProps {
  code: string;
  title: string;
  description: string;
  icon: any;
  classification?: string;
  warning?: boolean;
  inView: boolean;
  startDelay: number;
}

const ServiceCard = ({ 
  code, 
  title, 
  description, 
  icon: Icon, 
  classification = "CLEARANCE LEVEL 1", 
  warning = false, 
  inView, 
  startDelay 
}: ServiceCardProps) => {

  const [startInternalAnimation, setStartInternalAnimation] = useState(false);

  useEffect(() => {
    let timer: number | null = null;
    if (inView) {
      timer = setTimeout(() => {
        setStartInternalAnimation(true);
      }, startDelay);
    }
    return () => { if (timer) clearTimeout(timer); };
  }, [inView, startDelay]);

  return (
    <div className="group relative h-[450px] [perspective:1000px]">
      {/* Main Card Body with rotation on hover */}
      <div className="relative bg-background border border-text/10 h-full transition-all duration-500 
                      group-hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] group-hover:border-primary/30
                      [transform-style:preserve-3d] group-hover:[transform:rotateY(5deg)_rotateX(2deg)]">
        
        {/* Background Pattern Layer */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>

        {/* Content Padding */}
        <div className="relative z-10 p-6 flex flex-col h-full">

          {/* === Top Section === */}
          <div className="flex justify-between items-center mb-4">
            {/* Code & Classification */}
            <div className="font-mono text-xs space-y-1">
              <div className="flex items-center space-x-2 h-4">
                <div className="w-2 h-2 bg-primary/50 group-hover:bg-primary/70 transition-colors" />
                {startInternalAnimation ? (
                  <TypeAnimation
                    sequence={[code]}
                    wrapper="span"
                    speed={65}
                    className="text-primary/60 group-hover:text-primary/80 transition-colors"
                    cursor={false}
                    repeat={0}
                  />
                ) : (
                  <span className="text-primary/60 invisible">{code}</span>
                )}
              </div>
              <span className="text-text/40 group-hover:text-text/60 transition-colors block pl-4">{classification}</span>
            </div>
            {/* Warning Icon (Conditional) */}
            {warning && (
              <div className="flex items-center space-x-1 p-1 bg-red-900/30 border border-red-500/50 text-red-400">
                <WarningCircle weight="bold" className="w-4 h-4" />
                <span className="font-mono text-xs">ALERT</span>
              </div>
            )}
          </div>

          {/* Decorative Separator */}
          <div className="w-full h-[1px] bg-gradient-to-r from-primary/20 via-primary/5 to-transparent mb-6"></div>

          {/* === Middle Section (Icon & Title) === */}
          <div className="flex items-center mb-6 space-x-4">
            {/* Icon Container with Angular Shape */}
            <div className="relative w-16 h-16">
              {/* Background Shape - Removed skew */}
              <div className="absolute inset-0 bg-primary/5 border border-primary/20 transition-colors duration-300 group-hover:bg-primary/10 group-hover:border-primary/30"></div>
              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" weight="light" />
              </div>
               {/* Corner Accent */}
               <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-primary/40 group-hover:border-primary/60 transition-colors"></div>
            </div>
            {/* Title */}
            <h3 className="text-xl font-bold text-text flex-grow">{title}</h3>
          </div>

          {/* === Bottom Section (Description & Details) === */}
          <div className="flex-grow flex flex-col justify-between">
            {/* Description */}
            <p className="text-text/70 text-sm mb-6">{description}</p>

            {/* Technical Details & Status Bar */}
            <div className="mt-auto">
              <div className="w-full h-2 bg-text/5 border border-text/10 p-[2px] mb-2 overflow-hidden">
                {/* Animated Progress Bar */}
                <div 
                  className={`h-full bg-primary/40 transition-[width] duration-1000 ease-out ${
                    startInternalAnimation ? 'w-[75%]' : 'w-0'
                  }`}
                ></div>
              </div>
              <div className="flex justify-between items-center font-mono text-xs text-text/40">
                <span>STATUS: OPERATIONAL</span>
                <div className="flex space-x-1">
                  <span className="w-2 h-2 bg-primary/20"></span>
                  <span className="w-2 h-2 bg-primary/30"></span>
                  <span className="w-2 h-2 bg-primary/40"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

         {/* === Corner & Edge Decorations === */}
         {/* Top Left Cutout */}
         <div className="absolute top-0 left-0 w-10 h-10 bg-background border-r border-b border-text/10 
                         transform origin-top-left -rotate-45 translate-x-[-21px] translate-y-[5px]"></div>
         {/* Bottom Right Cutout */}
         <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
              <div className="absolute w-full h-[1px] bg-primary/30 bottom-4 left-0"></div>
              <div className="absolute w-[1px] h-full bg-primary/30 right-4 bottom-0"></div>
              <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-primary/50"></div>
         </div>

         {/* Subtle Glow Effect on Hover */}
          <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 transition-colors duration-500 pointer-events-none rounded-sm"></div>

      </div>
    </div>
  );
};

const servicesData = [
  {
    code: "DEV-001",
    title: "Desenvolvimento Web & Plataformas",
    description: "Criamos desde websites institucionais e landing pages otimizadas até plataformas web complexas com funcionalidades avançadas (áreas de membros, dashboards, integrações). Soluções sob medida para suas necessidades.",
    icon: Code,
  },
  {
    code: "OPT-002",
    title: "Otimização de Performance & SEO",
    description: "Foco total em velocidade, responsividade e acessibilidade. Implementamos as melhores práticas de SEO para garantir máxima visibilidade e performance técnica impecável.",
    icon: Rocket,
    classification: "PRIORITY LEVEL",
    warning: true,
  },
  {
    code: "DSN-003",
    title: "Design Estratégico & UI/UX",
    description: "Mapeamos a jornada do usuário e criamos interfaces (UI) intuitivas e experiências (UX) engajadoras. Design que não é só estético, mas funcional e alinhado aos seus objetivos de negócio.",
    icon: Palette,
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      id="servicos" 
      className="min-h-screen bg-background/50 scroll-mt-20 relative overflow-hidden flex flex-col justify-center py-24 lg:py-32"
    >
      {/* Technical Background Pattern */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Angular Decorative Lines */}
        <div className="absolute top-0 left-0 w-32 h-32">
          <div className="absolute top-8 left-8 w-full h-[1px] bg-text/5 transform -rotate-45" />
          <div className="absolute top-16 left-8 w-full h-[1px] bg-text/5 transform -rotate-45" />
        </div>
        <div className="absolute top-0 right-0 w-32 h-32">
          <div className="absolute top-8 right-8 w-full h-[1px] bg-text/5 transform rotate-45" />
          <div className="absolute top-16 right-8 w-full h-[1px] bg-text/5 transform rotate-45" />
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"/>
      </div>

      {/* Technical Markings - Hidden on mobile */}
      <div className="absolute top-12 right-12 text-xs font-mono text-text/10 text-right space-y-1 z-10 hidden sm:block">
           <div>SVC_MODULE_ID: SRV_CORE</div>
           <div>DEPLOYMENT_TARGET: GLOBAL</div>
           <div>ACCESS_LEVEL: PUBLIC</div>
      </div>
      {/* Technical Markings - Hidden on mobile */}
      <div className="absolute bottom-12 left-12 text-xs font-mono text-text/10 space-y-1 z-10 hidden sm:block">
           <div>OPERATION_STATUS: ACTIVE</div>
           <div>SYSTEM_INTEGRITY: NOMINAL</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-20">
        {/* Section Header - Animate this container */}
        <div 
          className={`mb-20 lg:mb-24 relative text-center transition-all duration-700 ease-in-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
           {/* Operation Line Above Title */}
          <div className="flex items-center justify-center mb-4">
            <span className="font-mono text-sm text-primary/50 tracking-widest">// VANT SERVICE PROTOCOLS</span>
          </div>
          {/* Large Title Style */}
          <h2 className="text-[10vw] md:text-[8vw] lg:text-[7rem] font-black leading-none text-text relative z-10">
            Serviços<span className="text-primary">.</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {servicesData.map((service, index) => (
            <div
              key={`${service.code}-wrapper`}
              className={`transition-all duration-500 ease-in-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${inView ? index * 150 + 300 : 0}ms` }}
            >
              <ServiceCard 
                key={service.code} 
                {...service} 
                inView={inView} 
                startDelay={index * 150 + 900}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services; 