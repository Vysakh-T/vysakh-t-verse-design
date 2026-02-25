import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const pillars = [
    { id: 'engineer', title: 'ENGINEER', color: 'bg-[#2E5BFF]', link: '#engineer' },
    { id: 'artist', title: 'ARTIST', color: 'bg-[#39FF14]', link: '#artist' },
    { id: 'designer', title: 'DESIGNER', color: 'bg-[#FFF000]', link: '#designer' },
];

const HeroMonolith = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 20; // -10 to 10 deg
        const y = (clientY / innerHeight - 0.5) * -20;
        setMousePosition({ x, y });
    };

    return (
        <div
            ref={containerRef}
            className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-between"
            onMouseMove={handleMouseMove}
            style={{ perspective: 1000 }}
        >
            {/* Background String Graphic (Subtle) */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-20">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" strokeWidth="1" />
                    <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="1" />
                </svg>
            </div>

            {/* Massive 3D Perspective Title */}
            <motion.div
                className="flex-1 flex flex-col items-center justify-center z-10 w-full"
                style={{
                    y,
                    opacity,
                    transformStyle: "preserve-3d",
                    rotateX: mousePosition.y,
                    rotateY: mousePosition.x
                }}
                transition={{ type: "spring", stiffness: 75, damping: 15 }}
            >
                <h1
                    className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase mb-4"
                    style={{ textShadow: '10px 10px 0px rgba(255, 255, 255, 0.1)' }}
                >
                    Vysakh T
                </h1>
                <p className="text-xl md:text-2xl font-mono text-white/70 tracking-widest uppercase">
                    Builder. Bard. Beholder.
                </p>
            </motion.div>

            {/* Three Pillar Navigation */}
            <div className="w-full h-1/3 md:h-2/5 flex z-20">
                {pillars.map((pillar, i) => (
                    <motion.a
                        key={pillar.id}
                        href={pillar.link}
                        data-magnetic
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                        className="flex-1 group relative flex justify-center items-center border-t-2 border-r-2 last:border-r-0 border-white/20 bg-black overflow-hidden cursor-none"
                    >
                        {/* Outline Pillar Graphic */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-white transition-colors duration-300 m-4 md:m-8 pointers-events-none" />

                        {/* Color Bleed Background */}
                        <div className={`absolute inset-0 ${pillar.color} translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out`} />

                        <h2 className="relative z-10 font-mono text-2xl md:text-4xl font-bold text-white group-hover:text-black transition-colors duration-300 mix-blend-difference">
                            [ {pillar.title} ]
                        </h2>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default HeroMonolith;
