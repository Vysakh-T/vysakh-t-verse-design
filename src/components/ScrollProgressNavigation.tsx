import { useEffect, useState } from 'react';

const ScrollProgressNavigation = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState('ENG');

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll));

            // Simple section detection based on scroll depth
            if (scrollProgress < 0.33) setActiveSection('ENG');
            else if (scrollProgress < 0.66) setActiveSection('ART');
            else setActiveSection('DES');

            // Update global CSS variable for active color bleed tracking
            const root = document.documentElement;
            if (activeSection === 'ENG') root.style.setProperty('--current-primary', '#2E5BFF');
            else if (activeSection === 'ART') root.style.setProperty('--current-primary', '#39FF14');
            else if (activeSection === 'DES') root.style.setProperty('--current-primary', '#FFF000');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollProgress, activeSection]);

    return (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-8 mix-blend-difference h-2/3">
            <span className="font-mono text-xs text-white opacity-50">01</span>

            <div className="relative flex-1 w-[2px] bg-white/20">
                <div
                    className="absolute top-0 left-0 w-full bg-white transition-all duration-100"
                    style={{ height: `${scrollProgress * 100}%` }}
                />
            </div>

            <div className="flex flex-col gap-4 font-mono text-[10px] text-white/50 [writing-mode:vertical-lr] rotate-180">
                <a href="#designer" className={`hover:text-white transition-colors py-2 ${activeSection === 'DES' ? 'text-white' : ''}`} data-magnetic>DES</a>
                <a href="#artist" className={`hover:text-white transition-colors py-2 ${activeSection === 'ART' ? 'text-white' : ''}`} data-magnetic>ART</a>
                <a href="#engineer" className={`hover:text-white transition-colors py-2 ${activeSection === 'ENG' ? 'text-white' : ''}`} data-magnetic>ENG</a>
            </div>
        </div>
    );
};

export default ScrollProgressNavigation;
