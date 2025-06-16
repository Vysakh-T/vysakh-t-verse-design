
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black relative">
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-black/10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-mono text-black/40 text-sm">
            <div className="mb-2">© 2024 VYSAKH T</div>
            <div className="text-xs">
              Compiled with passion, debugged with coffee ☕
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
