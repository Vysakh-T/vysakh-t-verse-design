import { Music, ImageIcon, PenTool, PlayCircle } from 'lucide-react';

const tracks = [
    { name: 'Echoes of Logic', length: '04:20', genre: 'Acoustic / Indie' },
    { name: 'Syntactic Sugar', length: '03:15', genre: 'Alternative Rock' },
    { name: 'Null Pointer Exception', length: '05:42', genre: 'Post-Rock Instrumental' },
    { name: 'The Compiler Slows', length: '02:50', genre: 'Folk' },
];

const poems = [
    {
        title: 'The Silent Callback',
        text: 'In the shadow of the thread,\nA promise waits, suspended, dead.\nUntil the signal cuts the night,\nAnd returns the data to the light.'
    },
    {
        title: 'Ode to the Monolith',
        text: 'Granite walls of brutal grace,\nA structured mind in open space.\nNo rounded edges, no disguise,\nJust stark truth before our eyes.'
    }
];

const ArtistSection = ({ id }: { id: string }) => {
    return (
        <section id={id} className="min-h-screen bg-black text-[#F5F5F5] py-24 px-4 sm:px-6 lg:px-8 border-t-2 border-[#39FF14]">
            <div className="max-w-7xl mx-auto">
                <header className="mb-24 flex items-center justify-end gap-4 text-right">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#39FF14]">
                        Entity 02: Artist
                    </h2>
                    <Music className="w-12 h-12 text-[#39FF14]" />
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* THE SOUND (Music) */}
                    <div className="col-span-1 lg:col-span-7 flex flex-col gap-8">
                        <h3 className="text-3xl font-serif italic mb-4 flex items-center gap-4 text-[#39FF14]">
                            <PlayCircle className="w-8 h-8" />
                            The Sound
                        </h3>

                        <div className="flex flex-col gap-1">
                            {tracks.map((track, idx) => (
                                <div
                                    key={idx}
                                    className="group flex items-center justify-between p-4 bg-white/5 hover:bg-[#39FF14] hover:text-black transition-all duration-500 cursor-pointer"
                                    data-magnetic
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="font-mono text-xs opacity-50 group-hover:opacity-100">0{idx + 1}</span>
                                        <span className="font-sans font-bold text-lg md:text-xl tracking-tight">{track.name}</span>
                                    </div>
                                    <div className="flex items-center gap-6 text-sm">
                                        <span className="hidden md:inline font-serif italic opacity-70">{track.genre}</span>
                                        <span className="font-mono opacity-50 group-hover:opacity-100">{track.length}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Audio Visualizer Mock */}
                        <div className="h-32 w-full mt-8 border border-white/10 relative overflow-hidden flex items-end justify-between px-2 pb-2 gap-1 opacity-50">
                            {/* Generate random height bars for static visual effect */}
                            {Array.from({ length: 40 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="w-full bg-[#39FF14] animate-pulse"
                                    style={{
                                        height: `${Math.random() * 80 + 10}%`,
                                        animationDuration: `${Math.random() * 1 + 0.5}s`,
                                        animationDelay: `${Math.random() * 2}s`
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Column Layout */}
                    <div className="col-span-1 lg:col-span-5 flex flex-col gap-16">

                        {/* THE VERSE (Poetry) */}
                        <div>
                            <h3 className="text-3xl font-serif italic mb-8 flex items-center gap-4 text-[#39FF14] justify-end">
                                The Verse
                                <PenTool className="w-8 h-8" />
                            </h3>
                            <div className="flex flex-col gap-6">
                                {poems.map((poem, idx) => (
                                    <div
                                        key={idx}
                                        className="relative group border border-white/20 p-8 overflow-hidden bg-black"
                                    >
                                        {/* Hover Reveal Mask */}
                                        <div className="absolute inset-0 bg-black z-10 flex items-center justify-center transition-transform duration-700 ease-in-out group-hover:-translate-y-full">
                                            <span className="font-mono text-[#39FF14] tracking-widest">[ HOVER TO REVEAL ]</span>
                                        </div>

                                        <h4 className="font-sans font-black text-xl mb-4 text-[#39FF14]">{poem.title}</h4>
                                        <p className="font-serif text-lg leading-relaxed whitespace-pre-line text-white/80">
                                            {poem.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* THE GALLERY */}
                        <div>
                            <h3 className="text-3xl font-serif italic mb-8 flex items-center gap-4 text-[#39FF14] justify-end">
                                The Gallery
                                <ImageIcon className="w-8 h-8" />
                            </h3>
                            {/* Brutalist image placeholders */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-square bg-white/10 hover:bg-[#39FF14] transition-colors duration-500 relative group overflow-hidden flex items-center justify-center" data-magnetic>
                                    <span className="font-mono text-xs mix-blend-difference group-hover:text-black">FENDER SQUIER</span>
                                </div>
                                <div className="aspect-[3/4] bg-white/5 hover:bg-[#39FF14] transition-colors duration-500 relative group overflow-hidden flex items-center justify-center mt-8" data-magnetic>
                                    <span className="font-mono text-xs mix-blend-difference group-hover:text-black">CORT ACTION 5</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default ArtistSection;
