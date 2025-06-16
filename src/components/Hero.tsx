
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
      {/* Enhanced Parallax background elements with individual movement */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-2 h-96 bg-gradient-to-b from-primary/20 to-transparent rotate-45"
          style={{ transform: `translateY(${scrollY * 0.8}px) rotate(45deg)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-2 h-64 bg-gradient-to-t from-primary/30 to-transparent -rotate-45"
          style={{ transform: `translateY(${scrollY * -0.6}px) rotate(-45deg)` }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-1 h-48 bg-primary/40"
          style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.4}px)` }}
        />
        <div 
          className="absolute top-1/3 right-1/3 w-32 h-32 border border-primary/20 rounded-full"
          style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)` }}
        />
        <div 
          className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-primary/10 rounded-full"
          style={{ transform: `translateY(${scrollY * -0.4}px)` }}
        />
      </div>

      {/* Large background name with parallax */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div 
          className="modern-text text-[20vw] md:text-[15vw] lg:text-[12vw] font-black text-black/8 select-none"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px) scale(${1 + scrollY * 0.0002})`,
            letterSpacing: '-0.05em'
          }}
        >
          VYSAKH T
        </div>
      </div>

      <div className="text-center z-10 px-6 max-w-6xl">
        {/* Main rotating title - Enhanced with bigger fonts */}
        <div className="mb-12">
          <div className="modern-text text-6xl md:text-8xl lg:text-9xl font-black text-black mb-6 tracking-tighter relative">
            <span 
              className="inline-block transition-all duration-700 ease-out text-shadow-primary"
              style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            >
              {titles[currentTitle]}
            </span>
            <div className="absolute -top-4 -right-4 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
          </div>
          
          {/* Enhanced Subtitle */}
          <div 
            className="code-text text-xl md:text-2xl lg:text-3xl text-black/70 max-w-4xl mx-auto leading-relaxed"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          >
            Crafting digital experiences through{' '}
            <span className="text-primary font-semibold">code</span>,{' '}
            <span className="text-primary font-semibold">music</span>,{' '}
            <span className="text-primary font-semibold">words</span> &{' '}
            <span className="text-primary font-semibold">design</span>.
          </div>
        </div>

        {/* Single CTA Button */}
        <div className="flex justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-primary text-white hover:bg-primary/90 font-mono font-bold px-12 py-6 text-xl tracking-wider hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-primary/25"
            onClick={() => scrollToSection('about')}
            style={{ 
              transform: `translateY(${scrollY * -0.02}px)`,
              animation: 'glow-pulse 3s ease-in-out infinite'
            }}
          >
            EXPLORE WORK
          </Button>
        </div>

        {/* Enhanced scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 font-mono text-black/40 text-sm"
          style={{ transform: `translateX(-50%) translateY(${scrollY * -0.1}px)` }}
        >
          <div className="animate-bounce">
            <div className="w-8 h-12 border-2 border-primary/40 rounded-full flex justify-center relative">
              <div className="w-1 h-4 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating elements with more movement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute code-text text-sm text-black/15 whitespace-nowrap floating-elements"
            style={{
              left: `${(i * 25) + 5}%`,
              top: `${(i * 15) + 15}%`,
              animationDuration: `${8 + i * 2}s`,
              animationDelay: `${i * 1.5}s`,
              transform: `translateY(${scrollY * (0.1 + i * 0.05)}px)`,
            }}
          >
            {i === 0 && <><span className="text-primary">function</span> create() {'{ return '}<span className="text-primary">magic</span>{'; }'}</>}
            {i === 1 && <><span className="text-primary">//</span> Building dreams with code</>}
            {i === 2 && <><span className="text-primary">const</span> passion = <span className="text-primary">true</span>;</>}
            {i === 3 && <><span className="text-primary">while</span>(creating) {'{ inspire(); }'}</>}
          </div>
        ))}
      </div>

      {/* Additional floating geometric elements with individual parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/6 w-2 h-2 bg-primary/30 rounded-full"
          style={{ 
            transform: `translateY(${scrollY * 0.6}px) translateX(${Math.sin(scrollY * 0.01) * 10}px)`,
            animation: 'parallax-drift 12s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/5 w-3 h-3 border border-primary/40 rotate-45"
          style={{ 
            transform: `translateY(${scrollY * -0.5}px) translateX(${Math.cos(scrollY * 0.008) * 15}px) rotate(${45 + scrollY * 0.1}deg)`,
            animation: 'parallax-drift 15s ease-in-out infinite reverse'
          }}
        />
      </div>
    </section>
  );
};

export default Hero;

