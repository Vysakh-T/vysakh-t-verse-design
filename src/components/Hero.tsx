
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";

const aspects = [
  {
    title: 'DEVELOPER',
    subtitle: 'Crafting digital experiences through modern code',
    description: 'Building scalable applications with cutting-edge technologies',
    primaryColor: '#8B5CF6', // Purple
    bgGradient: 'from-purple-500/20 to-blue-500/20',
    textGradient: 'from-purple-600 to-blue-600',
    glowColor: 'shadow-purple-500/25'
  },
  {
    title: 'SINGER-GUITARIST',
    subtitle: 'Creating melodies that touch the soul',
    description: 'Expressing emotions through acoustic storytelling',
    primaryColor: '#EC4899', // Pink
    bgGradient: 'from-pink-500/20 to-rose-500/20',
    textGradient: 'from-pink-600 to-rose-600',
    glowColor: 'shadow-pink-500/25'
  },
  {
    title: 'POET',
    subtitle: 'Weaving words into profound narratives',
    description: 'Capturing life\'s essence through contemporary verse',
    primaryColor: '#10B981', // Emerald
    bgGradient: 'from-emerald-500/20 to-teal-500/20',
    textGradient: 'from-emerald-600 to-teal-600',
    glowColor: 'shadow-emerald-500/25'
  },
  {
    title: 'DESIGNER',
    subtitle: 'Shaping visual experiences that inspire',
    description: 'Creating compelling designs that tell stories',
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const aspect = aspects[currentAspect];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Dynamic Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className={`absolute top-1/4 left-1/4 w-2 h-96 bg-gradient-to-b ${aspect.bgGradient} rotate-45 transition-all duration-700`}
          style={{ transform: `translateY(${scrollY * 0.8}px) rotate(45deg)` }}
        />
        <div 
          className={`absolute bottom-1/4 right-1/4 w-2 h-64 bg-gradient-to-t ${aspect.bgGradient} -rotate-45 transition-all duration-700`}
          style={{ transform: `translateY(${scrollY * -0.6}px) rotate(-45deg)` }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-1 h-48 transition-all duration-700"
          style={{ 
            transform: `translate(-50%, -50%) translateY(${scrollY * 0.4}px)`,
            backgroundColor: aspect.primaryColor + '66'
          }}
        />
        <div 
          className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full transition-all duration-700"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`,
            border: `1px solid ${aspect.primaryColor}33`
          }}
        />
        <div 
          className="absolute bottom-1/3 left-1/3 w-16 h-16 rounded-full transition-all duration-700"
          style={{ 
            transform: `translateY(${scrollY * -0.4}px)`,
            backgroundColor: aspect.primaryColor + '1A'
          }}
        />
      </div>

      {/* Large background name with parallax */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div 
          className="modern-text text-[20vw] md:text-[15vw] lg:text-[12vw] font-black text-black/8 select-none transition-all duration-700"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px) scale(${1 + scrollY * 0.0002})`,
            letterSpacing: '-0.05em'
          }}
        >
          {aspect.title}
        </div>
      </div>

      <div className="text-center z-10 px-6 max-w-6xl">
        {/* Main title with color transition */}
        <div className="mb-12">
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
            <div 
              className="absolute -top-4 -right-4 w-4 h-4 rounded-full animate-pulse transition-all duration-700"
              style={{ backgroundColor: aspect.primaryColor }}
            ></div>
          </div>
          
          {/* Dynamic Subtitle */}
          <div 
            className="code-text text-xl md:text-2xl lg:text-3xl text-black/70 max-w-4xl mx-auto leading-relaxed transition-all duration-700"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          >
            {aspect.subtitle}
          </div>
          
          <div 
            className="code-text text-lg md:text-xl text-black/60 max-w-3xl mx-auto leading-relaxed mt-4 transition-all duration-700"
            style={{ transform: `translateY(${scrollY * -0.03}px)` }}
          >
            {aspect.description}
          </div>
        </div>

        {/* Randomizer Button */}
        <div className="flex justify-center items-center mb-12">
          <Button 
            size="lg" 
            onClick={randomizeAspect}
            disabled={isAnimating}
            className={`font-mono font-bold px-12 py-6 text-xl tracking-wider hover:scale-110 transition-all duration-300 shadow-lg ${aspect.glowColor} border-2`}
            style={{ 
              backgroundColor: aspect.primaryColor,
              borderColor: aspect.primaryColor,
              color: 'white',
              transform: `translateY(${scrollY * -0.02}px)`,
            }}
          >
            <Shuffle className="mr-3" size={24} />
            {isAnimating ? 'SWITCHING...' : 'RANDOMIZE'}
          </Button>
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

        {/* Enhanced scroll indicator */}
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

      {/* Floating code elements with dynamic colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          `<span style="color: ${aspect.primaryColor}">function</span> create() { return <span style="color: ${aspect.primaryColor}">magic</span>; }`,
          `<span style="color: ${aspect.primaryColor}">//</span> Building dreams with passion`,
          `<span style="color: ${aspect.primaryColor}">const</span> inspiration = <span style="color: ${aspect.primaryColor}">true</span>;`,
          `<span style="color: ${aspect.primaryColor}">while</span>(creating) { inspire(); }`
        ].map((code, i) => (
          <div
            key={i}
            className="absolute code-text text-sm text-black/15 whitespace-nowrap floating-elements transition-all duration-700"
            style={{
              left: `${(i * 25) + 5}%`,
              top: `${(i * 15) + 15}%`,
              animationDuration: `${8 + i * 2}s`,
              animationDelay: `${i * 1.5}s`,
              transform: `translateY(${scrollY * (0.1 + i * 0.05)}px)`,
            }}
            dangerouslySetInnerHTML={{ __html: code }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
