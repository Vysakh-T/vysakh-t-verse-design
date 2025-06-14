
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Vysakh T. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
