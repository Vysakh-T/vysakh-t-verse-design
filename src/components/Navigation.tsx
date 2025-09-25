
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-effect border-b border-white/20 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="modern-text text-2xl md:text-3xl font-black text-black hover:scale-105 transition-all duration-300"
            style={{
              background: `linear-gradient(to right, ${getComputedStyle(document.documentElement).getPropertyValue('--current-primary') || 'hsl(271, 91%, 65%)'}, ${getComputedStyle(document.documentElement).getPropertyValue('--current-primary') || 'hsl(271, 91%, 65%)'}DD)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            VYSAKH T
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-black/70 hover:text-black transition-all duration-300 font-medium text-lg code-text group"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {item.name}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ 
                    backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--current-primary') || 'hsl(271, 91%, 65%)'
                  }}
                ></span>
              </button>
            ))}
          </div>

          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            size="sm"
            className="border-2 hover:scale-105 transition-all duration-300 font-mono px-6"
            style={{
              borderColor: getComputedStyle(document.documentElement).getPropertyValue('--current-primary') + '66' || 'hsl(271, 91%, 65%)',
              color: getComputedStyle(document.documentElement).getPropertyValue('--current-primary') || 'hsl(271, 91%, 65%)'
            }}
          >
            Connect
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

