
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md border-b border-black/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="modern-text text-2xl md:text-3xl font-black text-black hover:text-primary transition-colors duration-300 hover:scale-105 transition-transform"
          >
            VYSAKH T
          </button>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-black/60 hover:text-primary transition-colors duration-200 font-medium text-lg"
              >
                {item.name}
              </button>
            ))}
          </div>

          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            size="sm"
            className="border-primary/50 hover:bg-primary/10 font-mono"
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

