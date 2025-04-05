import { Code, Rocket, ChartLineUp, WarningCircle } from '@phosphor-icons/react';

interface ServiceCardProps {
  code: string;
  title: string;
  description: string;
  icon: any;
  classification?: string;
  warning?: boolean;
}

const ServiceCard = ({ code, title, description, icon: Icon, classification = "CLEARANCE LEVEL 1", warning = false }: ServiceCardProps) => (
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
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary/50 group-hover:bg-primary/70 transition-colors" />
              <span className="text-primary/60 group-hover:text-primary/80 transition-colors">{code}</span>
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
            <div className="w-full h-2 bg-text/5 border border-text/10 p-[2px] mb-2">
              <div className="h-full bg-primary/40 w-[75%] group-hover:w-[90%] transition-all duration-500"></div>
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

const Services = () => {
  return (
    <section id="servicos" className="min-h-screen bg-background/50 scroll-mt-20 relative overflow-hidden flex items-center">
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
      </div>

      {/* Technical Markings */}
      <div className="absolute top-8 right-8 text-xs font-mono text-text/5">
        <div className="space-y-1">
          <div className="flex items-center">
            <span className="w-2 h-[1px] bg-text/5 mr-2" />
            <span>XE-SRV-25</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-[1px] bg-text/5 mr-2" />
            <span>TACTICAL OPS</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-[1px] bg-text/5 mr-2" />
            <span>ACTIVE STATUS</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 w-full">
        {/* Section Header */}
        <div className="mb-16 relative">
          <div className="flex items-center mb-4">
            <div className="w-4 h-[2px] bg-primary/40 mr-2" />
            <span className="font-mono text-sm text-primary/40">OPERATION: VANT_SERVICES</span>
            <div className="w-4 h-[2px] bg-primary/40 ml-2" />
          </div>
          <h2 className="text-4xl font-bold text-text flex items-center">
            Serviços
            <span className="text-primary ml-1">.</span>
            <div className="w-2 h-2 border border-primary/30 ml-4" />
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <ServiceCard
            code="DSG-001"
            title="Design Estratégico"
            description="Interfaces que comunicam autoridade. Design funcional alinhado ao seu posicionamento. Sem templates, só soluções personalizadas."
            icon={Code}
          />
          <ServiceCard
            code="PRF-002"
            title="Performance Total"
            description="Sites rápidos e responsivos. SEO otimizado para dominar buscas. Segurança e estabilidade em primeiro lugar."
            icon={Rocket}
            classification="PRIORITY LEVEL"
            warning={true}
          />
          <ServiceCard
            code="CNV-003"
            title="Conversão Real"
            description="Experiência focada em resultados. Elementos estratégicos de conversão. Mensuração precisa de performance."
            icon={ChartLineUp}
            classification="RESTRICTED DATA"
          />
        </div>

        {/* Bottom Technical Element */}
        <div className="absolute bottom-4 left-8 font-mono text-xs text-text/5">
          <div className="space-y-1">
            <div className="flex items-center">
              <div className="w-2 h-2 border border-text/5 mr-2" />
              <span>DEPLOYMENT: ACTIVE</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 border border-text/5 mr-2" />
              <span>EFFICIENCY: 98.5%</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 border border-text/5 mr-2" />
              <span>UPTIME: 99.99%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 