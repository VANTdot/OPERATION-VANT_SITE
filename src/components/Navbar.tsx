import { useState } from 'react';
import { HiX, HiDotsHorizontal } from 'react-icons/hi';

const NavLink = ({ children, to }: { children: React.ReactNode; to: string }) => (
  <a 
    href={`#${to}`}
    className="text-text/70 hover:text-text transition-colors"
    onClick={(e) => {
      e.preventDefault();
      document.querySelector(`#${to}`)?.scrollIntoView({
        behavior: 'smooth'
      });
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
              className="md:hidden p-2 text-text/70 hover:text-text"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX size={24} /> : <HiDotsHorizontal size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="flex flex-col space-y-6">
                <NavLink to="sobre">Sobre</NavLink>
                <NavLink to="servicos">Serviços</NavLink>
                <NavLink to="portfolio">Portfólio</NavLink>
                <NavLink to="processo">Processo</NavLink>
                <NavLink to="contato">Consulta Gratuita</NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 