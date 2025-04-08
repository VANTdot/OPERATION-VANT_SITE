import { ArrowUpRight, CircleNotch } from '@phosphor-icons/react';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

interface PortfolioItemProps {
  title: string;
  sector: string;
  result: string;
  image: string;
  status?: string;
  code?: string;
  link?: string;
}

const PortfolioItem = ({ title, sector, result, image, status = "ACTIVE", code = "PRJ", link }: PortfolioItemProps) => (
  <div className="group relative">
    {/* Main Container */}
    <div className="relative overflow-hidden bg-background border border-text/10">
      {/* Image Container with Overlay */}
      <div className="relative h-[180px] sm:h-[220px] md:h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/90 z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain sm:object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Technical Overlay */}
        <div className="absolute inset-0 z-20">
          {/* Top Left Technical Details */}
          <div className="absolute top-4 left-4 font-mono text-xs">
            <div className="flex items-center space-x-2">
              <CircleNotch weight="bold" className="w-3 h-3 text-primary animate-spin" />
              <span className="text-text/70">{status}</span>
            </div>
            <div className="mt-1 flex items-center space-x-2">
              <div className="w-3 h-3 border border-primary/30" />
              <span className="text-primary/40">{code}</span>
            </div>
          </div>

          {/* Top Right Grid Pattern */}
          <div className="absolute top-4 right-4 w-16 h-16 grid grid-cols-3 gap-[1px] opacity-30">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border border-text/20" />
            ))}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative p-6">
        {/* Left Border Accent */}
        <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />

        {/* Content */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-text flex items-center">
              {title}
              <ArrowUpRight className="w-5 h-5 ml-2 text-primary/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </h3>
            <p className="text-sm text-text/70 mt-1">{sector}</p>
          </div>

          {/* Results with Technical Border */}
          <div className="relative inline-block">
            <div className="absolute -inset-1 border border-primary/20" />
            <div className="relative px-3 py-2 text-sm text-primary/80 font-medium">
              {result}
            </div>
          </div>
        </div>

        {/* Bottom Technical Details */}
        <div className="absolute bottom-4 right-4 flex items-center space-x-1">
          <div className="w-1 h-1 bg-primary/30" />
          <div className="w-2 h-1 bg-primary/20" />
          <div className="w-8 h-[1px] bg-gradient-to-r from-primary/20 to-transparent" />
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary/40 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-primary/40 to-transparent" />
      </div>

      {/* Link Overlay */}
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute inset-0 z-30"
          aria-label={`Visitar ${title}`}
        />
      )}
    </div>
  </div>
);

const portfolioData = [
  {
    title: "UpSummit",
    sector: "Evento Empresarial",
    result: "Palco para Joel Jota, Paulo Vieira, Pablo Marçal e mais.",
    image: "https://minio-minio.m7nkeb.easypanel.host/vant/portfolio/upsummit.png",
    status: "DELIVERED",
    code: "UPS-01",
    link: "https://upsummit.netlify.app/",
  },
  {
    title: "D14 Basketball Academy",
    sector: "Formação Esportiva de Elite",
    result: "Fundada por ex-jogador e atual comentarista da Band.",
    image: "https://minio-minio.m7nkeb.easypanel.host/vant/portfolio/d14.png",
    status: "ACTIVE",
    code: "D14-02",
    link: "https://d14basketballacademy.com.br",
  },
];

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [startDetailTyping, setStartDetailTyping] = useState(false);

  useEffect(() => {
    let timer: number | null = null;
    if (inView) {
      const lastItemAnimEndTime = ((portfolioData.length - 1) * 150) + 300 + 500;
      const typingDelay = lastItemAnimEndTime + 200;

      timer = setTimeout(() => {
        setStartDetailTyping(true);
      }, typingDelay);
    }
    return () => { if (timer) clearTimeout(timer); };
  }, [inView]);

  return (
    <section 
      ref={ref}
      id="portfolio" 
      className="min-h-screen bg-background/50 scroll-mt-20 relative overflow-hidden flex items-center"
    >
      {/* Technical Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern Top Right */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
          <div className="absolute inset-0 grid grid-cols-8 gap-[1px]">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="border border-text/20" />
            ))}
          </div>
        </div>

        {/* Grid Pattern Bottom Left */}
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5">
          <div className="absolute inset-0 grid grid-cols-8 gap-[1px]">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="border border-text/20" />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 w-full">
        {/* Section Header - Add animation */}
        <div 
          className={`mb-16 relative transition-all duration-700 ease-in-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <div className="flex items-center mb-4">
            <div className="w-4 h-[2px] bg-primary/40 mr-2" />
            <span className="font-mono text-sm text-primary/40">OPERATION: VANT_RESULTS</span>
            <div className="w-4 h-[2px] bg-primary/40 ml-2" />
          </div>
          <h2 className="text-4xl font-bold text-text flex items-center">
            Portfólio
            <span className="text-primary ml-1">.</span>
            <div className="w-2 h-2 border border-primary/30 ml-4" />
          </h2>
        </div>

        {/* Portfolio Grid - Add animation to items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioData.map((item, index) => (
            <div
              key={`${item.code}-wrapper`}
              className={`transition-all duration-500 ease-in-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${inView ? index * 150 + 300 : 0}ms` }}
            >
              <PortfolioItem {...item} />
            </div>
          ))}
        </div>

        {/* Bottom Technical Element - Typing animation */}
        <div className="absolute bottom-8 left-8 font-mono text-xs text-text/10 hidden sm:block">
          {startDetailTyping ? (
            <div className="space-y-1">
              <div className="flex items-center h-4">
                <div className="w-2 h-2 border border-text/10 mr-2" />
                <TypeAnimation
                  sequence={['PROJECTS: 100% SUCCESS RATE']}
                  wrapper="span"
                  speed={70}
                  cursor={true}
                  repeat={0}
                />
              </div>
              <div className="flex items-center h-4">
                <div className="w-2 h-2 border border-text/10 mr-2" />
                <TypeAnimation
                  sequence={[100, 'AVG PERFORMANCE: +65%']}
                  wrapper="span"
                  speed={70}
                  cursor={true}
                  repeat={0}
                />
              </div>
            </div>
          ) : (
            <div className="space-y-1 invisible">
              <div className="flex items-center h-4">
                <div className="w-2 h-2 border border-text/10 mr-2" />
                <span>PROJECTS: 100% SUCCESS RATE</span>
              </div>
              <div className="flex items-center h-4">
                <div className="w-2 h-2 border border-text/10 mr-2" />
                <span>AVG PERFORMANCE: +65%</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 