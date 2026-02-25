import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const TransitionQuote = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
    const x3 = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

    return (
        <div ref={ref} className="h-screen bg-black flex flex-col items-center justify-center overflow-hidden gap-12 md:gap-16 border-y-2 border-white/20 select-none">

            <motion.div style={{ x: x1 }} className="w-[200%] text-center">
                <span className="font-mono text-5xl md:text-7xl lg:text-8xl text-[#2E5BFF] flex gap-4 md:gap-8 justify-center opacity-90 whitespace-nowrap tracking-tight">
                    <span>In</span> <span>code,</span> <span>we</span> <span>find</span> <span>the</span>
                </span>
            </motion.div>

            <motion.div style={{ x: x2 }} className="w-[200%] text-center">
                <span className="font-serif italic text-6xl md:text-8xl lg:text-9xl text-[#39FF14] flex gap-4 justify-center whitespace-nowrap">
                    poetry of logic...
                </span>
            </motion.div>

            <motion.div style={{ x: x3 }} className="w-[200%] text-center">
                <span className="font-sans font-black text-5xl md:text-7xl lg:text-8xl text-[#FFF000] flex gap-4 justify-center opacity-90 whitespace-nowrap uppercase tracking-tighter">
                    and the art of problem solving.
                </span>
            </motion.div>

        </div>
    );
};

export default TransitionQuote;
