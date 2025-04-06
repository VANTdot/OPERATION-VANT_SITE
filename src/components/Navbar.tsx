import { useState, useEffect } from 'react';
import { HiX, HiDotsHorizontal } from 'react-icons/hi';

const NavLink = ({ children, to, onClick }: { children: React.ReactNode; to: string; onClick?: () => void }) => (
  <a 
    href={`#${to}`}
    className="text-text/70 hover:text-text transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
    onClick={(e) => {
      e.preventDefault();
      document.querySelector(`#${to}`)?.scrollIntoView({
        behavior: 'smooth'
      });
      if (onClick) onClick();
    }}
  >
    {children}
  </a>
);

const CTAButton = ({ children }: { children: string }) => (
  <button className="relative inline-flex items-center justify-center bg-primary px-6 py-3 text-text group overflow-hidden">
    <span className="relative z-10">{children}</span>
    <div className="absolute inset-0 bg-text/10 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
  </button>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Close menu when window is resized beyond mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Left */}
          <div className="flex items-center pl-4">
            <a 
              href="#hero" 
              className="font-bold text-xl text-text"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              vant.
            </a>
          </div>

          {/* Center - Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="sobre">Sobre</NavLink>
            <NavLink to="servicos">Serviços</NavLink>
            <NavLink to="portfolio">Portfólio</NavLink>
            <NavLink to="processo">Processo</NavLink>
          </div>

          {/* Right */}
          <div className="flex items-center pr-4">
            <a 
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contato')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
              className="hidden md:block"
            >
              <CTAButton>Consulta Gratuita</CTAButton>
            </a>
            <button 
              className="md:hidden p-2 text-text/70 hover:text-text transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              <div className="relative w-6 h-6">
                <div className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                  <HiX size={24} />
                </div>
                <div className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                  <HiDotsHorizontal size={24} />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-md transform transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen 
              ? 'opacity-100 max-h-[400px] translate-y-0' 
              : 'opacity-0 max-h-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col space-y-6">
              <NavLink to="sobre" onClick={closeMenu}>Sobre</NavLink>
              <NavLink to="servicos" onClick={closeMenu}>Serviços</NavLink>
              <NavLink to="portfolio" onClick={closeMenu}>Portfólio</NavLink>
              <NavLink to="processo" onClick={closeMenu}>Processo</NavLink>
              <div className="pt-3">
                <a 
                  href="#contato"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contato')?.scrollIntoView({
                      behavior: 'smooth'
                    });
                    closeMenu();
                  }}
                  className="inline-block"
                >
                  <CTAButton>Consulta Gratuita</CTAButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 