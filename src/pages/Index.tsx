
import React, { Suspense } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CustomCursor from '@/components/CustomCursor';

// Lazy load below-the-fold sections
const About = React.lazy(() => import('@/components/About'));
const Skills = React.lazy(() => import('@/components/Skills'));
const Contact = React.lazy(() => import('@/components/Contact'));

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black relative">
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center">Loading...</div>}>
          <About />
          <Skills />
          <Contact />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-black/10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-mono text-black/40 text-sm">
            <div className="mb-2">© {new Date().getFullYear()} VYSAKH T</div>
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
