import { Figma, LayoutTemplate, Palette, Type } from 'lucide-react';

const blueprints = [
    { name: 'Monolith Design System', desc: 'The core tokens and brutalist rules for this portfolio.', date: '2026.1' },
    { name: 'Terminal UI Component Lib', desc: 'Accessible, unstyled React components for hackers.', date: '2025.4' },
    { name: 'Audio Verse Interface', desc: 'Canvas-based audio player interface exploration.', date: '2025.2' },
];

// Masonry poster placeholders
const posters = [
    { id: 1, aspect: 'aspect-[3/4]', color: 'bg-[#FFF000]/10' },
    { id: 2, aspect: 'aspect-square', color: 'bg-[#FFF000]/20' },
    { id: 3, aspect: 'aspect-[4/3]', color: 'bg-white/10' },
    { id: 4, aspect: 'aspect-[3/4]', color: 'bg-[#FFF000]/5' },
];

const DesignerSection = ({ id }: { id: string }) => {
    return (
        <section id={id} className="min-h-screen bg-black text-[#F5F5F5] py-24 px-4 sm:px-6 lg:px-8 border-t-2 border-[#FFF000]">
            <div className="max-w-7xl mx-auto">
                <header className="mb-24 flex items-center gap-4">
                    <Palette className="w-12 h-12 text-[#FFF000]" />
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#FFF000]">
                        Entity 03: Designer
                    </h2>
                </header>

                {/* Strict 12-Column Grid System */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 gap-x-8">

                    {/* THE BLUEPRINT (Specs) */}
                    <div className="col-span-1 md:col-span-5 flex flex-col gap-12">
                        <h3 className="text-2xl font-bold flex items-center gap-3 border-b-2 border-white/20 pb-4">
                            <Figma className="w-6 h-6" />
                            [ THE BLUEPRINT ]
                        </h3>

                        <div className="flex flex-col gap-8">
                            {blueprints.map((spec, idx) => (
                                <div key={idx} className="group relative" data-magnetic>
                                    <div className="absolute -left-4 top-0 h-full w-1 bg-[#FFF000] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h4 className="font-sans font-bold text-xl group-hover:text-[#FFF000] transition-colors">{spec.name}</h4>
                                        <span className="font-mono text-xs opacity-50">{spec.date}</span>
                                    </div>
                                    <p className="font-serif text-sm opacity-80">{spec.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Typography Rig Sample */}
                        <div className="mt-8 p-6 border-2 border-dashed border-[#FFF000]/30 select-none">
                            <div className="flex items-center gap-2 mb-4 text-[#FFF000] pb-2 border-b border-[#FFF000]/20">
                                <Type className="w-4 h-4" />
                                <span className="font-mono text-xs uppercase">Typography System</span>
                            </div>
                            <p className="font-mono text-sm opacity-50 mb-2">Logic / Mono</p>
                            <h1 className="font-mono text-2xl mb-6">JetBrains Mono</h1>

                            <p className="font-serif italic text-sm opacity-50 mb-2">Soul / Serif</p>
                            <h2 className="font-serif italic text-2xl mb-6">EB Garamond</h2>

                            <p className="font-sans font-bold text-sm opacity-50 mb-2">Vision / Sans</p>
                            <h3 className="font-sans font-black text-2xl uppercase tracking-tighter">Inter Tight</h3>
                        </div>
                    </div>

                    {/* Spacer column */}
                    <div className="hidden md:block col-span-1 border-l-2 border-dashed border-white/10" />

                    {/* THE CANVAS (Posters) */}
                    <div className="col-span-1 md:col-span-6">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 border-b-2 border-white/20 pb-4 justify-end">
                            [ THE CANVAS ]
                            <LayoutTemplate className="w-6 h-6" />
                        </h3>

                        <div className="columns-1 sm:columns-2 gap-4 space-y-4">
                            {posters.map((poster) => (
                                <div
                                    key={poster.id}
                                    data-magnetic
                                    className={`w-full ${poster.aspect} ${poster.color} relative overflow-hidden group cursor-none hover:rotate-1 transition-transform duration-500`}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-[#FFF000]/90 transition-opacity duration-300">
                                        <span className="font-mono font-bold text-black text-sm">VIEW PROJECT_0{poster.id}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DesignerSection;
