
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Shuffle, ChevronDown } from "lucide-react";
import { useAspect } from "@/context/AspectContext";
import { ASPECTS } from "@/lib/constants";

const Hero = () => {
  const { currentAspectIndex, setCurrentAspectIndex, aspect } = useAspect();
  const [scrollY, setScrollY] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const randomizeAspect = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    let newAspect;
    do {
      newAspect = Math.floor(Math.random() * ASPECTS.length);
    } while (newAspect === currentAspectIndex);

    setCurrentAspectIndex(newAspect);
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const selectAspect = (index: number) => {
    if (isAnimating || index === currentAspectIndex) return;
    
    setIsAnimating(true);
    setCurrentAspectIndex(index);
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Simplified Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className={`absolute top-1/4 left-1/4 w-1 h-64 bg-gradient-to-b ${aspect.theme.bgGradient} rotate-45 transition-all duration-700`}
          style={{ transform: `translateY(${scrollY * 0.5}px) rotate(45deg)` }}
        />
        <div 
          className={`absolute bottom-1/4 right-1/4 w-1 h-48 bg-gradient-to-t ${aspect.theme.bgGradient} -rotate-45 transition-all duration-700`}
          style={{ transform: `translateY(${scrollY * -0.3}px) rotate(-45deg)` }}
        />
      </div>

      {/* Large background name with parallax */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div 
          className="modern-text text-[20vw] md:text-[15vw] lg:text-[12vw] font-black text-black/5 select-none transition-all duration-700"
          style={{ 
            transform: `translateY(${scrollY * 0.1}px)`,
            letterSpacing: '-0.05em'
          }}
        >
          {aspect.hero.title}
        </div>
      </div>

      <div className="text-center z-10 px-6 max-w-6xl">
        {/* Main title */}
        <div className="mb-16">
          <div 
            className={`modern-text text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter relative transition-all duration-700 ${isAnimating ? 'scale-105' : 'scale-100'}`}
            style={{ 
              transform: `translateY(${scrollY * -0.1}px)`,
              background: `linear-gradient(to right, ${aspect.theme.primaryColor}, ${aspect.theme.primaryColor}DD)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {aspect.hero.title}
          </div>
          
          <div 
            className="code-text text-xl md:text-2xl lg:text-3xl text-black/70 max-w-4xl mx-auto leading-relaxed transition-all duration-700"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          >
            {aspect.hero.subtitle}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <Button 
            size="lg" 
            onClick={randomizeAspect}
            disabled={isAnimating}
            className={`p-4 hover:scale-110 transition-all duration-300 shadow-lg ${aspect.theme.glowColor} border-2 rounded-full`}
            style={{ 
              backgroundColor: aspect.theme.primaryColor,
              borderColor: aspect.theme.primaryColor,
              color: 'white',
              transform: `translateY(${scrollY * -0.02}px)`,
            }}
          >
            <Shuffle size={24} />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline"
                size="lg"
                className="font-mono border-2 hover:scale-105 transition-all duration-300 px-6"
                style={{ 
                  borderColor: aspect.theme.primaryColor + '66',
                  color: aspect.theme.primaryColor,
                  transform: `translateY(${scrollY * -0.01}px)`
                }}
              >
                🎭 <ChevronDown size={16} className="ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {ASPECTS.map((aspectOption, index) => (
                <DropdownMenuItem 
                  key={index}
                  onClick={() => selectAspect(index)}
                  className="cursor-pointer"
                >
                  {aspectOption.hero.title}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Scroll to About */}
        <div className="flex justify-center">
          <Button 
            variant="outline"
            onClick={() => scrollToSection('about')}
            className="font-mono border-2 hover:scale-105 transition-all duration-300"
            style={{ 
              borderColor: aspect.theme.primaryColor + '66',
              color: aspect.theme.primaryColor,
              transform: `translateY(${scrollY * -0.01}px)`
            }}
          >
            EXPLORE MORE
          </Button>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 font-mono text-black/40 text-sm"
          style={{ transform: `translateX(-50%) translateY(${scrollY * -0.1}px)` }}
        >
          <div className="animate-bounce">
            <div 
              className="w-8 h-12 border-2 rounded-full flex justify-center relative transition-all duration-700"
              style={{ borderColor: aspect.theme.primaryColor + '66' }}
            >
              <div 
                className="w-1 h-4 rounded-full mt-2 animate-pulse"
                style={{ backgroundColor: aspect.theme.primaryColor }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
