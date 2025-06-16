
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const titles = ['DEVELOPER', 'SINGER-GUITARIST', 'POET', 'DESIGNER'];

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => {
      clearInterval(titleInterval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-1 h-96 bg-black/10 rotate-45"
          style={{ transform: `translateY(${scrollY * 0.5}px) rotate(45deg)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-1 h-64 bg-black/5 -rotate-45"
          style={{ transform: `translateY(${scrollY * -0.3}px) rotate(-45deg)` }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-px h-32 bg-black/20"
          style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.2}px)` }}
        />
      </div>

      {/* Large background name */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div 
          className="font-mono text-[15vw] md:text-[12vw] font-bold text-black/5 select-none"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          VYSAKH T
        </div>
      </div>

      <div className="text-center z-10 px-4 max-w-4xl">
        {/* Main rotating title - This is now the hero */}
        <div className="mb-16">
          <div className="font-sans text-5xl md:text-7xl font-bold text-black mb-8 tracking-tight">
            <span className="inline-block transition-all duration-500 ease-in-out">
              {titles[currentTitle]}
            </span>
          </div>
          
          {/* Subtitle */}
          <div className="font-mono text-lg md:text-xl text-black/60 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences through code, music, words & design.
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-black text-white hover:bg-black/90 font-mono font-semibold px-8 py-4 text-lg tracking-wider hover:scale-105 transition-all duration-200"
            onClick={() => scrollToSection('about')}
          >
            EXPLORE WORK
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-black text-black hover:bg-black hover:text-white font-mono font-semibold px-8 py-4 text-lg tracking-wider hover:scale-105 transition-all duration-200"
            onClick={() => scrollToSection('contact')}
          >
            GET IN TOUCH
          </Button>
        </div>

        {/* Minimal scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 font-mono text-black/40 text-sm">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-black/20 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-black/40 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute font-mono text-xs text-black/10 whitespace-nowrap"
            style={{
              left: `${(i * 30) + 10}%`,
              top: `${(i * 20) + 20}%`,
              animationDuration: `${6 + i * 2}s`,
              animationDelay: `${i * 1}s`,
            }}
          >
            <div className="animate-float">
              {i === 0 && 'function create() { return magic; }'}
              {i === 1 && '// Building dreams with code'}
              {i === 2 && 'const passion = true;'}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
