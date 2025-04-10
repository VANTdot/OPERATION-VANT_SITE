import { FaArrowRight, FaPaintBrush, FaBolt, FaChartLine, FaUserTie, FaPalette, FaRocket, FaChartBar, FaCode } from 'react-icons/fa';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import Differentials from '../components/sections/Differentials';
import Timeline from '../components/sections/Timeline';
import Pricing from '../components/sections/Pricing';
import { ArrowRight } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';

const CTAButton = ({ children, href }: { children: string; href?: string }) => {
  const commonClasses = "relative inline-flex items-center justify-center bg-primary px-8 py-4 text-base text-white group overflow-hidden border border-transparent hover:border-primary/50 transition-colors duration-300 font-medium";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={commonClasses}>
        <span className="relative z-10 flex items-center">
          {children}
          <ArrowRight size={18} className="ml-2 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        </span>
        <div className="absolute inset-0 bg-text/20 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
      </a>
    );
  } else {
    return (
      <button className={commonClasses}>
        <span className="relative z-10 flex items-center">
           {children}
           <ArrowRight size={18} className="ml-2 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        </span>
        <div className="absolute inset-0 bg-text/20 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
      </button>
    );
  }
};

const Home = () => {
  const whatsappNumber = "5511914106730";
  const finalCtaMessage = encodeURIComponent("Olá! Visitei o site da VANT e gostaria de agendar uma conversa sobre meu projeto.");
  const finalCtaUrl = `https://wa.me/${whatsappNumber}?text=${finalCtaMessage}`;
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  // State and Ref for Contact Section animation
  const [isContactVisible, setIsContactVisible] = useState(false);
  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const heroTimer = setTimeout(() => {
      setIsHeroVisible(true);
    }, 150);
    const typingTimer = setTimeout(() => {
       setStartTyping(true);
    }, 500);

    return () => {
      clearTimeout(heroTimer);
      clearTimeout(typingTimer);
    }
  }, []);

  // Effect for Contact Section visibility ONLY
  useEffect(() => {
    let visibilityTimer: number | null = null;
    if (contactInView) {
      visibilityTimer = setTimeout(() => {
        setIsContactVisible(true);
      }, 200);
    }
    return () => {
      if (visibilityTimer) clearTimeout(visibilityTimer);
    };
  }, [contactInView]);
  
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div id="hero" className="h-screen relative overflow-hidden">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>

        {/* Technical Background Elements - Typing animation */}
        <div className="absolute inset-0 pointer-events-none select-none">
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-text/10 opacity-50" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-text/10 opacity-50" />

          {/* Top-right Technical markings - MOVED FROM HERE */}

          {/* Bottom-left Technical markings */}
          {startTyping && (
            <div 
              className="absolute bottom-12 sm:bottom-16 left-4 sm:left-8 text-xs font-mono text-text/10 hidden sm:block"
            >
               <TypeAnimation
                sequence={[
                  'COORD: 23.55S/46.63W\nSIGNAL: STRONG\nGRID: H23KML0549',
                ]}
                wrapper="div"
                speed={70} 
                style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
                cursor={true} // Keep cursor blinking
                />
            </div>
          )}
        </div>

        {/* Background Image - Faster fade-in */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            isHeroVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Desktop Image */}
          <div className="absolute top-0 right-0 w-1/2 h-full hidden sm:block">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent z-10" />
            </div>
            <img
              src="https://minio-minio.m7nkeb.easypanel.host/vant/hero.png"
              alt="Featured Project"
              className="w-full h-full object-cover object-bottom"
            />
          </div>
          {/* Mobile Image with Parallax Effect */}
          <div className="sm:hidden relative h-full overflow-hidden">
            <div className="absolute inset-0 transform scale-110 animate-float">
              <img
                src="https://minio-minio.m7nkeb.easypanel.host/vant/hero.png"
                alt="Featured Project"
                className="w-full h-full object-cover object-center opacity-50"
              />
            </div>
            {/* Overlay gradient for better text visibility - Reduced opacity */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background/30" />
          </div>
        </div>

        {/* Content - Appear together, smoother easing */}
        <div className="relative z-20 h-full">
          {/* Add relative positioning here */}
          <div className="max-w-7xl mx-auto px-4 h-full relative">
            
             {/* Top-right Technical markings - MOVED HERE */}
             {startTyping && (
              <div 
                // Position relative to this container, adjusted right padding
                className="absolute top-4 sm:top-8 right-4 text-xs font-mono text-text/10 hidden sm:block"
              >
                <TypeAnimation
                  sequence={[
                    'SYS_REF: HERO.VNT.25\nSTATUS: ONLINE\nSEC_LVL: ALPHA',
                  ]}
                  wrapper="div"
                  speed={70} 
                  style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
                  cursor={true} // Keep cursor blinking
                />
              </div>
             )}

            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              <div 
                className={`flex flex-col justify-center space-y-6 sm:space-y-8 py-12 sm:py-20 transition-all duration-1000 ease-in-out delay-200 ${
                  isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                <div>
                  <span className="text-primary/70 text-xs sm:text-sm tracking-wider font-mono">// OPERATION: VANGUARD</span>
                  <h1 className="text-[15vw] sm:text-[12vw] lg:text-[8rem] font-bold text-text mt-1 leading-none">
                    vant<span className="text-primary">.</span>
                  </h1>
                </div>
                
                <p className="text-sm sm:text-base text-text/70 max-w-md">
                  Presença digital que gera reconhecimento.
                </p>

                <div className="flex items-center space-x-4 sm:space-x-6">
                  <CTAButton>Consultoria Gratuita</CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Differentials Section */}
      <Differentials />

      {/* Timeline Section */}
      <Timeline />

      {/* Pricing Section - Use the new component */}
      <Pricing />

      {/* Enhanced CTA Section */}
      <section 
        ref={contactRef}
        id="contato" 
        className="py-24 sm:py-40 scroll-mt-20 relative bg-gradient-to-b from-background/80 to-background overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-50">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"/>
          {/* More subtle angled lines */}
          <div className="absolute top-0 left-0 w-1/4 h-full border-r border-text/5 transform -skew-x-12 origin-top-left opacity-30" />
          <div className="absolute bottom-0 right-0 w-1/4 h-full border-l border-text/5 transform -skew-x-12 origin-bottom-right opacity-30" />
        </div>

        {/* Bottom Operation Code - Static, always visible */}
        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 font-mono text-[10px] sm:text-xs text-text/20 z-10">
           // END_TRANSMISSION :: VANT.OP.CLOSE.2025
        </div>

         {/* Top Left Accent - Static, always visible */}
         <div className={`absolute top-8 left-8 font-mono text-xs text-primary/40 z-10 space-y-1 hidden sm:block`}>
           <div>[STATUS: AWAITING_CONTACT]</div>
           <div>[SIGNAL: ESTABLISHED]</div>
        </div>

        {/* Main Content - Fade/slide-in animation */}
        <div 
          className={`max-w-4xl mx-auto px-4 text-center relative z-10 transition-all duration-700 ease-out ${isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          {/* Section Header */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-[1px] bg-primary/30 mr-4" />
            <span className="font-mono text-sm text-primary/50 tracking-widest">// INICIAR PROTOCOLO DE CONTATO</span>
            <div className="w-12 h-[1px] bg-primary/30 ml-4" />
          </div>
          
          {/* Reverted Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text mb-5">
            Você não precisa de um site<span className="text-primary">.</span>
          </h2>
          {/* Reverted Paragraph */}
          <p className="text-lg sm:text-xl text-text/60 mb-12 max-w-2xl mx-auto">
            Você precisa de <strong className="text-text/80 font-medium">presença digital</strong> que gere <strong className="text-text/80 font-medium">reconhecimento</strong>.
          </p>
          {/* Updated CTA Button */}
          <CTAButton href={finalCtaUrl}>Agendar Diagnóstico Estratégico</CTAButton>
        </div>
      </section>
    </div>
  );
};

export default Home; 