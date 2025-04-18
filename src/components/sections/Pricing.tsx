import { CheckCircle, Star } from '@phosphor-icons/react';
import { FaWhatsapp } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

const PricingCard = ({ title, price, features, isFeatured = false, index }: { title: string; price: string; features: string[]; isFeatured?: boolean; index: number }) => {
  const whatsappNumber = "5511914106730";
  const message = encodeURIComponent(`Olá! Tenho interesse no plano ${title}. Podemos conversar?`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [startTyping, setStartTyping] = useState(false);

  const animationDelay = index * 150;

  useEffect(() => {
    let timer: number | null = null;
    if (inView) {
      timer = setTimeout(() => {
        setStartTyping(true);
      }, animationDelay);
    }
    return () => { if (timer) clearTimeout(timer); };
  }, [inView, animationDelay]);

  return (
    <div 
      ref={ref}
      className={`relative border p-8 group overflow-hidden flex flex-col 
                    ${isFeatured ? 'border-primary/40 bg-primary/5' : 'border-text/10 bg-background/50 hover:border-text/20'} 
                    transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${inView ? animationDelay : 0}ms` }}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] z-0"/>
      
      {/* Decorative Corner */}
      <div className={`absolute top-0 right-0 w-6 h-6 border-t border-r transition-colors duration-300 
                     ${isFeatured ? 'border-primary/60' : 'border-primary/30 group-hover:border-primary/50'}`}></div>

      {/* Content Wrapper */}
      <div className={`relative z-10 flex-grow`}> 
        {/* Header with Logo, Title, and conditional Badge */}
        <div className="flex items-center justify-between mb-6">
          {/* Group for Logo and Title */}
          <div className="flex items-center">
            <img src="https://minio-minio.m7nkeb.easypanel.host/vant/logovant2.png" alt="VANT Logo" className="h-5 mr-3" /> 
            <div className="h-7">
              {startTyping ? (
                 <TypeAnimation
                    key={title}
                    sequence={[title]}
                    wrapper="h3"
                    speed={50}
                    className={`text-xl font-bold ${isFeatured ? 'text-primary' : 'text-text group-hover:text-primary'} transition-colors duration-300`}
                    cursor={false}
                    repeat={0}
                  />
              ) : (
                <h3 className={`text-xl font-bold invisible ${isFeatured ? 'text-primary' : 'text-text group-hover:text-primary'}`}>{title}</h3>
              )}
            </div>
          </div>
          
          {/* Featured Badge - Added negative margin */}
          {isFeatured && (
            <div className="flex items-center bg-primary/10 border border-primary/20 px-2 py-1 rounded-full -mr-2">
              <Star size={12} className="text-primary mr-1.5" weight="fill"/>
              <span className="font-mono text-xs text-primary/80">MAIS POPULAR</span>
            </div>
          )}
        </div>

        {/* Price */}
        <div className="mb-8">
          <span className={`text-4xl font-bold ${isFeatured ? 'text-text' : 'text-text'}`}>{price}</span>
        </div>

        {/* Features List */}
        <ul className="space-y-3 text-text/70 mb-10">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle size={18} className={`${isFeatured ? 'text-primary/70' : 'text-primary/50'} mr-3 mt-1 flex-shrink-0 transition-colors duration-300`} weight="fill" />
              <span className={isFeatured ? 'text-text/80' : 'text-text/70'}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* CTA Button Area */}
      <div className="mt-auto z-10">
        <a 
          href={whatsappUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-full px-6 py-3 text-sm font-medium border transition-all duration-300 group 
                      ${isFeatured 
                        ? 'bg-primary text-background border-primary hover:bg-primary/90' 
                        : 'bg-transparent text-primary/80 border-primary/50 hover:bg-primary/10 hover:text-primary'}`}>
            Selecionar Plano
            <FaWhatsapp size={18} className="ml-2 opacity-80 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
      
      {/* Bottom Border Highlight */}
      <div className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 
                     ${isFeatured ? 'bg-primary/60' : 'bg-primary/40 group-hover:w-full'}`}/>
       {isFeatured && <div className="absolute bottom-0 left-0 h-[2px] w-full bg-primary/60"/>}
    </div>
  );
};

const Pricing = () => {
  const vantBasicsFeatures = [
    "Landing Page única e otimizada",
    "Design profissional (baseado no modelo VANT)",
    "SEO inicial básico",
    "Entrega rápida (até 7 dias úteis)"
  ];

  const vantProFeatures = [
    "Site de até 5 páginas",
    "Design exclusivo e sob medida",
    "Otimização SEO On-Page completa",
    "Entrega prioritária (até 21 dias úteis)",
    "Suporte dedicado pós-lançamento (30 dias)"
  ];

  const blackOpsFeatures = [
    "Solução 100% personalizada (páginas ilimitadas)",
    "Design e estratégia de UX/UI avançados",
    "Consultoria SEO e performance contínua",
    "Integrações complexas (IA, Pagamentos, etc.)",
    "Entrega e acompanhamento VIP",
    "Suporte e manutenção prioritários (90 dias)"
  ];

  const { ref: footerRef, inView: footerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [startFooterTyping, setStartFooterTyping] = useState(false);

  useEffect(() => {
    let timer: number | null = null;
    if (footerInView) {
      timer = setTimeout(() => {
        setStartFooterTyping(true);
      }, 300);
    }
    return () => { if(timer) clearTimeout(timer); };
  }, [footerInView]);

  return (
    <section id="investimento" className="py-24 lg:py-32 bg-background/80 scroll-mt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-80">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"/>
        {/* Technical Markings - Hidden on mobile */}
         <div className="absolute top-12 left-12 text-xs font-mono text-text/10 space-y-1 hidden sm:block">
           <div>MODULE_ID: PRICING_MATRIX_V2</div>
           <div>PLAN_REFS: VBS, VPRO, BLKOPS</div>
           <div>CURRENCY: BRL</div>
         </div>
         {/* Technical Markings - Hidden on mobile */}
          <div className="absolute bottom-12 right-12 text-xs font-mono text-text/10 text-right space-y-1 hidden sm:block">
           <div>ACCESS_POINT: PUBLIC_FACING</div>
           <div>INTEGRITY_HASH: ...b7e5f2</div> 
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-16 lg:mb-20 text-center relative">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-[1px] bg-primary/40 mr-3" />
            <span className="font-mono text-sm text-primary/50 tracking-widest">// INVESTMENT PROTOCOL</span>
            <div className="w-8 h-[1px] bg-primary/40 ml-3" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text flex items-center justify-center">
            Investimento
            <span className="text-primary">.</span>
          </h2>
        </div>

        {/* Pricing Grid - Updated for 3 cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          <PricingCard 
            title="VANT BASICS" 
            price="R$ 3.500"
            features={vantBasicsFeatures}
            index={0}
          />
          <PricingCard 
            title="VANT PRO" 
            price="R$ 7.900"
            features={vantProFeatures}
            isFeatured={true}
            index={1}
          />
          <PricingCard 
            title="BLACK OPS" 
            price="Sob Consulta"
            features={blackOpsFeatures}
            index={2}
          />
        </div>
        
         {/* Optional: Add notes or contact links below */}
         <div 
           ref={footerRef}
           className="text-center mt-12 font-mono text-xs text-text/40 h-5"
         >
            {startFooterTyping ? (
              <TypeAnimation
                sequence={[
                  'Condições de pagamento flexíveis disponíveis. Entre em contato para discutir necessidades específicas ou o plano Black Ops.'
                ]}
                wrapper="span"
                speed={80}
                cursor={false}
                repeat={0}
              />
            ) : (
              <span className="invisible">
                Condições de pagamento flexíveis disponíveis. Entre em contato para discutir necessidades específicas ou o plano Black Ops.
              </span>
            )}
         </div>
      </div>
    </section>
  );
};

export default Pricing; 