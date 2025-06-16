
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 bg-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-mono text-white/40 text-sm">
            <div className="mb-2">© 2024 VYSAKH_T.EXE</div>
            <div className="text-xs">
              // Compiled with passion, debugged with coffee ☕
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
