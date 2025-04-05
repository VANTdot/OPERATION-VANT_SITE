import { Target, Gauge, Lightning } from '@phosphor-icons/react';

const DetailItem = ({ label, value, unit }: { label: string; value: string; unit?: string }) => (
  <div className="border border-text/10 p-3">
    <div className="font-mono text-xs text-primary/50 mb-1">{label}</div>
    <div className="font-bold text-lg text-text">{value}<span className="text-xs text-text/50 ml-1">{unit}</span></div>
  </div>
);

const ProgressBar = ({ label, value }: { label: string; value: number }) => (
  <div>
    <div className="flex justify-between items-center font-mono text-xs mb-1">
      <span className="text-text/50">{label}</span>
      <span className="text-primary/60">{value}%</span>
    </div>
    <div className="w-full h-1 bg-text/10">
      <div className="h-full bg-primary/50" style={{ width: `${value}%` }} />
    </div>
  </div>
);

const About = () => {
  return (
    <section 
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
        
        {/* Technical markings */}
        <div className="absolute top-8 right-8 text-xs font-mono text-text/10">
          <div className="space-y-1 text-right">
            <div>SYS_REF: VNT.ABT.2025</div>
            <div>CLASSIFICATION: LVL-3 / SECURE</div>
            <div>GRID_TARGET: 8A-DELTA</div>
          </div>
        </div>
        <div className="absolute bottom-8 left-8 text-xs font-mono text-text/10">
          <div className="space-y-1">
            <div>COORDINATES: 23.55S / 46.63W</div>
            <div>SYSTEM_STATUS: OPERATIONAL</div>
            <div>SIGNAL_STRENGTH: 98.7%</div>
          </div>
        </div>
      </div>

      {/* Operation Code */}
      <div className="absolute top-12 left-8 font-mono text-sm text-primary/60 z-10 bg-background/50 px-2 py-1 border border-primary/20">
        OPERATION: VANT_ABOUT
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-12">
            {/* Section Title */}
            <div className="relative">
              {/* Background Accent */}
              <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 to-transparent" />
              <h2 className="text-[10vw] md:text-[8vw] lg:text-[7rem] font-black leading-none text-text relative z-10">
                Sobre<span className="text-primary">.</span>
              </h2>
              <div className="flex gap-4 items-center mt-4 pl-2">
                <div className="h-[2px] w-16 bg-primary/50" />
                <span className="font-mono text-sm text-text/60 uppercase tracking-wider">Digital Operations Unit</span>
              </div>
            </div>

            {/* Text Content with Styling */}
            <div className="space-y-6 text-lg lg:text-xl text-text/70 max-w-2xl font-light">
              <p className="border-l-2 border-primary/20 pl-4 hover:text-text/90 hover:border-primary/40 transition-all duration-300">
                A VANT é uma unidade de operações digitais focada em <strong className="font-semibold text-text/90">performance, clareza e posicionamento</strong> estratégico através de websites de alto impacto.
              </p>
              <p className="pl-4 hover:text-text/90 transition-colors duration-300">
                Nossa doutrina é a <strong className="font-semibold text-text/90">obsessão pela excelência</strong>. Garantimos que cada ativo digital comunique autoridade, maximize a conversão e reflita a verdadeira identidade da marca.
              </p>
              <p className="border-l-2 border-primary/20 pl-4 hover:text-text/90 hover:border-primary/40 transition-all duration-300">
                Não vendemos templates. Desenvolvemos <strong className="font-semibold text-text/90">estratégias e designs sob medida</strong>, alinhados aos objetivos táticos e à visão de longo prazo de cada cliente.
              </p>
               <p className="pl-4 hover:text-text/90 transition-colors duration-300">
                No cenário digital, a <strong className="font-semibold text-text/90">imposição é a única alternativa ao desaparecimento</strong>. A VANT assegura a sua supremacia.
              </p>
            </div>
          </div>

          {/* Right Column - Technical Details Panel */}
          <div className="lg:col-span-5 relative font-mono text-sm">
            <div className="sticky top-24 border border-text/15 bg-background/30 backdrop-blur-sm p-6 space-y-6">
               {/* Panel Header */}
               <div className="flex justify-between items-center pb-3 border-b border-text/10">
                 <span className="text-primary/70 font-medium">SYSTEM DIAGNOSTICS</span>
                 <div className="flex items-center space-x-1">
                   <div className="w-2 h-2 bg-green-500 animate-pulse" />
                   <span className="text-green-400 text-xs">ONLINE</span>
                 </div>
               </div>
               
               {/* Detail Grid */}
               <div className="grid grid-cols-3 gap-4">
                 <DetailItem label="PRECISION" value="99.8" unit="%" />
                 <DetailItem label="SPEED" value="1.2" unit="s" />
                 <DetailItem label="POWER" value="MAX" />
               </div>

               {/* Progress Bars */}
               <div className="space-y-4 pt-4 border-t border-text/10">
                 <ProgressBar label="STRATEGY ALIGNMENT" value={95} />
                 <ProgressBar label="DESIGN EXECUTION" value={98} />
                 <ProgressBar label="PERFORMANCE OPT." value={92} />
               </div>

               {/* Icons / Status Indicators */}
                <div className="flex justify-around items-center pt-4 border-t border-text/10 text-text/40">
                    <div className="flex flex-col items-center">
                        <Target size={24} className="text-primary/50 mb-1" />
                        <span className="text-xs">TARGET LOCK</span>
                    </div>
                     <div className="flex flex-col items-center">
                        <Gauge size={24} className="text-primary/50 mb-1" />
                        <span className="text-xs">MAX OUTPUT</span>
                    </div>
                     <div className="flex flex-col items-center">
                        <Lightning size={24} className="text-primary/50 mb-1" />
                        <span className="text-xs">RAPID DEPLOY</span>
                    </div>
                </div>
                
                {/* Footer Code */}
                <div className="text-center text-xs text-text/20 pt-3">
                  X-LABS :: PROTOCOL_GAMMA :: SECURE_CHANNEL
                </div>
            </div>
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