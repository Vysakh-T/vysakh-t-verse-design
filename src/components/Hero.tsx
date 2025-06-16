
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const titles = ['DEVELOPER', 'SINGER-GUITARIST', 'POET', 'DESIGNER'];
const glitchTexts = ['404_CREATIVE_NOT_FOUND', 'LOADING_INSPIRATION...', 'SYNTAX_ERROR: TOO_CREATIVE', 'COMPILATION_SUCCESSFUL'];

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [glitchText, setGlitchText] = useState('');
  const [showGlitch, setShowGlitch] = useState(false);
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

    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitchText(glitchTexts[Math.floor(Math.random() * glitchTexts.length)]);
        setShowGlitch(true);
        setTimeout(() => setShowGlitch(false), 500);
      }
    }, 5000);

    return () => {
      clearInterval(titleInterval);
      clearInterval(glitchInterval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden noise-bg">
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-1 h-96 bg-white/10 rotate-45"
          style={{ transform: `translateY(${scrollY * 0.5}px) rotate(45deg)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-1 h-64 bg-white/5 -rotate-45"
          style={{ transform: `translateY(${scrollY * -0.3}px) rotate(-45deg)` }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-px h-32 bg-white/20"
          style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.2}px)` }}
        />
      </div>

      {/* Terminal-like header */}
      <div className="absolute top-8 left-8 font-mono text-xs text-white/60 z-10">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="ml-4">~/vysakh-t</span>
        </div>
      </div>

      {/* Glitch overlay */}
      {showGlitch && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="font-mono text-red-500 text-2xl animate-pulse">
            {glitchText}
          </div>
        </div>
      )}

      <div className="text-center z-10 px-4 max-w-4xl">
        {/* ASCII Art Style Name */}
        <div className="font-mono text-xs md:text-sm text-white/40 mb-8 whitespace-pre hidden md:block">
{`██╗   ██╗██╗   ██╗███████╗ █████╗ ██╗  ██╗██╗  ██╗    ████████╗
██║   ██║╚██╗ ██╔╝██╔════╝██╔══██╗██║ ██╔╝██║  ██║    ╚══██╔══╝
██║   ██║ ╚████╔╝ ███████╗███████║█████╔╝ ███████║       ██║   
╚██╗ ██╔╝  ╚██╔╝  ╚════██║██╔══██║██╔═██╗ ██╔══██║       ██║   
 ╚████╔╝    ██║   ███████║██║  ██║██║  ██╗██║  ██║       ██║   
  ╚═══╝     ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝       ╚═╝`}
        </div>

        {/* Main Name */}
        <h1 className="text-6xl md:text-8xl font-mono font-bold mb-8 tracking-wider">
          <span className="gradient-text hover:animate-glitch">VYSAKH T</span>
        </h1>
        
        {/* Rotating Title */}
        <div className="h-16 flex items-center justify-center mb-12 relative">
          <div className="font-mono text-xl md:text-2xl text-white/80 tracking-widest">
            <span className="inline-block border-r-2 border-white/60 pr-2 animate-pulse">
              &gt; {titles[currentTitle]}_
            </span>
          </div>
        </div>

        {/* Tagline with typewriter effect */}
        <div className="font-mono text-lg md:text-xl text-white/60 mb-16 max-w-3xl mx-auto">
          <div className="border border-white/20 bg-black/20 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-green-400 mb-2">$ cat about.txt</div>
            <div className="text-left">
              <span className="text-white/80">
                Crafting digital experiences through code, music, words & design.
              </span>
              <br />
              <span className="text-white/60">
                // Multi-threaded creativity in progress...
              </span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 font-mono font-semibold px-8 py-4 text-lg tracking-wider border-2 border-white hover:scale-105 transition-all duration-200"
            onClick={() => scrollToSection('about')}
          >
            [ EXPLORE_WORK ]
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white/50 text-white hover:bg-white hover:text-black font-mono font-semibold px-8 py-4 text-lg tracking-wider hover:scale-105 transition-all duration-200"
            onClick={() => scrollToSection('contact')}
          >
            [ INITIALIZE_CONTACT ]
          </Button>
        </div>

        {/* Terminal prompt at bottom */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 font-mono text-white/40 text-sm">
          <div className="animate-bounce">
            <span>scroll_down() {`>`} </span>
            <span className="animate-pulse">|</span>
          </div>
        </div>
      </div>

      {/* Code rain effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute font-mono text-xs text-green-400 whitespace-nowrap"
            style={{
              left: `${(i * 10) + 5}%`,
              animationDuration: `${3 + i * 0.5}s`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            <div className="animate-slide-in-left">
              {`function create() { return magic; }`}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
