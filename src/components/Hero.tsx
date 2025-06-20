
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Shuffle, ChevronDown } from "lucide-react";

const aspects = [
  {
    title: 'DEVELOPER',
    subtitle: 'Crafting digital experiences through modern code',
    primaryColor: '#8B5CF6', // Purple
    bgGradient: 'from-purple-500/20 to-blue-500/20',
    textGradient: 'from-purple-600 to-blue-600',
    glowColor: 'shadow-purple-500/25'
  },
  {
    title: 'SINGER-GUITARIST',
    subtitle: 'Creating melodies that touch the soul',
    primaryColor: '#EC4899', // Pink
    bgGradient: 'from-pink-500/20 to-rose-500/20',
    textGradient: 'from-pink-600 to-rose-600',
    glowColor: 'shadow-pink-500/25'
  },
  {
    title: 'POET',
    subtitle: 'Weaving words into profound narratives',
    primaryColor: '#10B981', // Emerald
    bgGradient: 'from-emerald-500/20 to-teal-500/20',
    textGradient: 'from-emerald-600 to-teal-600',
    glowColor: 'shadow-emerald-500/25'
  },
  {
    title: 'DESIGNER',
    subtitle: 'Shaping visual experiences that inspire',
    primaryColor: '#F59E0B', // Amber
    bgGradient: 'from-amber-500/20 to-orange-500/20',
    textGradient: 'from-amber-600 to-orange-600',
    glowColor: 'shadow-amber-500/25'
  }
];

const Hero = () => {
  const [currentAspect, setCurrentAspect] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Update CSS custom property for current primary color
    document.documentElement.style.setProperty('--current-primary', aspects[currentAspect].primaryColor);
  }, [currentAspect]);

  const randomizeAspect = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newAspect = Math.floor(Math.random() * aspects.length);
    setCurrentAspect(newAspect);
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const selectAspect = (index: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentAspect(index);
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const aspect = aspects[currentAspect];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Simplified Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className={`absolute top-1/4 left-1/4 w-1 h-64 bg-gradient-to-b ${aspect.bgGradient} rotate-45 transition-all duration-700`}
          style={{ transform: `translateY(${scrollY * 0.5}px) rotate(45deg)` }}
        />
        <div 
          className={`absolute bottom-1/4 right-1/4 w-1 h-48 bg-gradient-to-t ${aspect.bgGradient} -rotate-45 transition-all duration-700`}
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
          {aspect.title}
        </div>
      </div>

      <div className="text-center z-10 px-6 max-w-6xl">
        {/* Main title */}
        <div className="mb-16">
          <div 
            className={`modern-text text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter relative transition-all duration-700 ${isAnimating ? 'scale-105' : 'scale-100'}`}
            style={{ 
              transform: `translateY(${scrollY * -0.1}px)`,
              background: `linear-gradient(to right, ${aspect.primaryColor}, ${aspect.primaryColor}DD)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {aspect.title}
          </div>
          
          <div 
            className="code-text text-xl md:text-2xl lg:text-3xl text-black/70 max-w-4xl mx-auto leading-relaxed transition-all duration-700"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          >
            {aspect.subtitle}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <Button 
            size="lg" 
            onClick={randomizeAspect}
            disabled={isAnimating}
            className={`p-4 hover:scale-110 transition-all duration-300 shadow-lg ${aspect.glowColor} border-2 rounded-full`}
            style={{ 
              backgroundColor: aspect.primaryColor,
              borderColor: aspect.primaryColor,
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
                  borderColor: aspect.primaryColor + '66',
                  color: aspect.primaryColor,
                  transform: `translateY(${scrollY * -0.01}px)`
                }}
              >
                Select Aspect <ChevronDown size={16} className="ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {aspects.map((aspectOption, index) => (
                <DropdownMenuItem 
                  key={index}
                  onClick={() => selectAspect(index)}
                  className="cursor-pointer"
                >
                  {aspectOption.title}
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
              borderColor: aspect.primaryColor + '66',
              color: aspect.primaryColor,
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
              style={{ borderColor: aspect.primaryColor + '66' }}
            >
              <div 
                className="w-1 h-4 rounded-full mt-2 animate-pulse"
                style={{ backgroundColor: aspect.primaryColor }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
