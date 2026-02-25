import React, { Suspense } from 'react';
import HeroMonolith from '@/components/HeroMonolith';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgressNavigation from '@/components/ScrollProgressNavigation';

// Lazy load below-the-fold sections
const EngineerSection = React.lazy(() => import('@/components/EngineerSection'));
const TransitionQuote = React.lazy(() => import('@/components/TransitionQuote'));
const ArtistSection = React.lazy(() => import('@/components/ArtistSection'));
const DesignerSection = React.lazy(() => import('@/components/DesignerSection'));

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative font-mono selection:bg-white selection:text-black">
      <CustomCursor />
      <ScrollProgressNavigation />

      <main>
        <HeroMonolith />
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center bg-black text-[#2E5BFF] font-mono animate-pulse">[ LOADING SYSTEM... ]</div>}>
          <EngineerSection id="engineer" />
          <TransitionQuote />
          <ArtistSection id="artist" />
          <DesignerSection id="designer" />
        </Suspense>
      </main>

      {/* Footer */}
      {/* Footer / WhoAmI */}
      <footer className="py-24 px-4 sm:px-8 border-t-2 border-[#2E5BFF]/30 bg-black overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 relative z-10">

          {/* WHOAMI Terminal */}
          <div className="col-span-1 md:col-span-7 border-2 border-white/20 p-6 sm:p-8 bg-[#0a0a0a] font-mono brutalist-block-shadow">
            <div className="flex gap-2 mb-8 border-b-2 border-white/10 pb-4">
              <div className="w-3 h-3 bg-red-500" />
              <div className="w-3 h-3 bg-yellow-500" />
              <div className="w-3 h-3 bg-green-500" />
            </div>
            <div className="space-y-4 text-sm sm:text-base">
              <p className="text-[#39FF14]">$ whoami</p>
              <p className="text-white opacity-90 indent-4">vysakh-t</p>

              <p className="text-[#39FF14] pt-4">$ vysakh --version</p>
              <p className="text-white opacity-90 indent-4">v2026.1.0-engineer-artist-designer</p>

              <p className="text-[#39FF14] pt-4">$ ./execute_handshake.sh</p>
              <p className="text-white opacity-90 indent-4">Opening communication channels...</p>

              <p className="text-[#39FF14] pt-4 flex items-center gap-2">
                $ <span className="animate-pulse bg-[#39FF14] w-2 h-5 inline-block" />
              </p>
            </div>
          </div>

          {/* The Handshake */}
          <div className="col-span-1 md:col-span-5 flex flex-col justify-center gap-8 md:pl-8 border-l-2 border-dashed border-white/10">
            {[
              { label: 'EMAIL', color: 'hover:text-[#2E5BFF]' },
              { label: 'WHATSAPP', color: 'hover:text-[#39FF14]' },
              { label: 'LINKEDIN', color: 'hover:text-[#FFF000]' }
            ].map((link, idx) => (
              <a
                key={idx}
                href="#"
                data-magnetic
                className={`text-4xl md:text-5xl font-black uppercase tracking-tighter text-white/50 ${link.color} transition-colors duration-300 flex items-center justify-between group`}
              >
                <span>{link.label}</span>
                <span className="font-mono text-lg opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </a>
            ))}
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-24 text-center border-t-2 border-dashed border-white/20 pt-8">
          <div className="font-mono text-white/30 text-sm flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="uppercase tracking-widest text-[#2E5BFF]">© {new Date().getFullYear()} VYSAKH T</div>
            <div className="text-xs tracking-tight">END OF LINE.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
