import { EnvelopeSimple, Phone, MapPin } from '@phosphor-icons/react';
import { FaWhatsapp } from 'react-icons/fa'; // Assuming you might want WhatsApp here too

const Footer = () => {
  return (
    <footer className="bg-background/90 text-text/70 relative overflow-hidden pt-12">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"/>
      </div>

      <div className="max-w-7xl mx-auto pb-12 px-4 relative z-10">
        {/* Reverted to grid, added justify-self properties */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          {/* Column 1: Brand & Tagline (Stays Left) */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center space-x-3">
                <img src="https://minio-minio.m7nkeb.easypanel.host/vant/logovant2.png" alt="VANT Logo" className="h-6" />
                <span className="font-bold text-xl text-text">vant<span className="text-text/80">.</span></span> 
            </div>
            <p className="text-sm font-light">
              Presença digital que gera reconhecimento.
            </p>
          </div>

          {/* Column 2: Quick Contact (Centered on Medium+) */}
          <div className="space-y-3 md:col-span-1 md:justify-self-center">
             <h3 className="font-semibold text-base text-text/90 mb-3 tracking-wide">Contato Rápido</h3>
             <a href="mailto:joseguilhermecosta@gmail.com" className="flex items-center space-x-2 group text-sm hover:text-primary transition-colors">
                <EnvelopeSimple size={16} className="text-primary/50 group-hover:text-primary transition-colors"/>
                <span>joseguilhermecosta@gmail.com</span>
             </a>
             <a href="https://wa.me/5511914106730" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 group text-sm hover:text-primary transition-colors">
               <FaWhatsapp size={16} className="text-primary/50 group-hover:text-primary transition-colors"/>
               <span>(11) 91410-6730</span>
             </a>
          </div>

          {/* Column 3: Location Info (Container pushed Right, Title Left, Content Right) */}
           <div className="space-y-3 md:col-span-1 md:justify-self-end">
             {/* Title remains left-aligned by default */}
             <h3 className="font-semibold text-base text-text/90 mb-3 tracking-wide">Base Operacional</h3>
             {/* Content items aligned right on medium+ */}
             <div className="flex items-center md:justify-end space-x-2 text-sm">
                <MapPin size={16} className="text-primary/50"/>
                <span>São Paulo, SP - Brasil</span>
             </div>
             {/* Coords hidden on mobile (up to md breakpoint) */}
             <p className="text-xs text-text/50 font-mono pt-1 md:text-right hidden md:block">
               COORD: 23.55S / 46.63W
             </p>
           </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Credits */}
      <div className="border-t border-text/10">
        <div className="max-w-7xl mx-auto py-4 px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs space-y-2 sm:space-y-0">
            <p className="text-text/50">
              © {new Date().getFullYear()} VANT :: Todos os direitos reservados :: PROTOCOL_GAMMA
            </p>
            {/* Design Credit */}
             <a href="https://wa.me/5511914106730" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 text-text/50 hover:text-primary transition-colors">
               <span className="font-mono">DESIGN_EXECUTION:</span>
               <span className="font-semibold text-primary/80">GUILHERME_COSTA</span>
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 