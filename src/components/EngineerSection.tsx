import { Terminal, Github, ExternalLink, Cpu, Layout, Server, Database, GitBranch, TerminalSquare, Box, Layers } from 'lucide-react';

const blogs = [
    { date: '2026-02-15', title: 'Architecting the Monolith', link: '#' },
    { date: '2025-11-20', title: 'React 19 & Compiler Deep Dive', link: '#' },
    { date: '2025-08-05', title: 'Why I switched to Bun', link: '#' },
    { date: '2025-03-12', title: 'The Brutalist Web', link: '#' },
];

const repos = [
    { name: 'vysakh-t-verse', desc: 'The source code for this very monolith.', stars: 12, lang: 'TypeScript' },
    { name: 'terminal-ui', desc: 'A brutalist component library for React.', stars: 45, lang: 'React' },
    { name: 'audio-visualizer', desc: 'Canvas based web-audio API experiments.', stars: 89, lang: 'TypeScript' },
    { name: 'rust-cli-tools', desc: 'Blazing fast utilities for my daily workflow.', stars: 23, lang: 'Rust' },
];

const tools = [
    { name: 'Frontend', icon: <Layout className="w-6 h-6" />, stack: 'React, Next.js, Tailwind' },
    { name: 'Backend', icon: <Server className="w-6 h-6" />, stack: 'Node.js, Express, Python' },
    { name: 'Database', icon: <Database className="w-6 h-6" />, stack: 'PostgreSQL, Redis, MongoDB' },
    { name: 'DevOps', icon: <Box className="w-6 h-6" />, stack: 'Docker, AWS, GitHub Actions' },
    { name: 'Systems', icon: <TerminalSquare className="w-6 h-6" />, stack: 'Linux, Bash, Rust' },
    { name: 'Architecture', icon: <Layers className="w-6 h-6" />, stack: 'Microservices, Monoliths' },
];

const EngineerSection = ({ id }: { id: string }) => {
    return (
        <section id={id} className="min-h-screen bg-black text-[#F5F5F5] py-24 px-4 sm:px-6 lg:px-8 border-t-2 border-[#2E5BFF]">
            <div className="max-w-7xl mx-auto">
                <header className="mb-24 flex items-center gap-4">
                    <Terminal className="w-12 h-12 text-[#2E5BFF]" />
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#2E5BFF]">
                        Entity 01: Engineer
                    </h2>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* THE FORGE (GitHub) */}
                    <div className="col-span-1 lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 border-b-2 border-white/20 pb-4">
                            <Github className="w-6 h-6" />
                            [ THE FORGE ]
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {repos.map((repo, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    data-magnetic
                                    className="group block border-2 border-white/20 bg-black p-6 hover:border-[#2E5BFF] hover:bg-[#2E5BFF]/5 transition-all duration-300 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 bg-[#2E5BFF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="font-bold text-lg group-hover:text-[#2E5BFF] transition-colors">{repo.name}</h4>
                                        <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#2E5BFF]" />
                                    </div>
                                    <p className="text-sm text-white/60 mb-6 h-12">{repo.desc}</p>
                                    <div className="flex justify-between items-center text-xs font-mono text-white/40">
                                        <span>{repo.lang}</span>
                                        <span>★ {repo.stars}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* THE LOG (Blogs) */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 border-b-2 border-white/20 pb-4">
                            <TerminalSquare className="w-6 h-6" />
                            [ THE LOG ]
                        </h3>
                        <div className="flex flex-col border-2 border-white/20">
                            {blogs.map((blog, idx) => (
                                <a
                                    key={idx}
                                    href={blog.link}
                                    data-magnetic
                                    className="group flex flex-col sm:flex-row justify-between sm:items-center p-4 border-b-2 border-white/20 last:border-b-0 hover:bg-white/5 transition-colors gap-2"
                                >
                                    <span className="text-sm text-[#2E5BFF] w-32 shrink-0">{blog.date}</span>
                                    <span className="font-medium group-hover:pl-2 transition-all flex-1">{blog.title}</span>
                                    <ExternalLink className="w-4 h-4 shrink-0 text-white/0 group-hover:text-white/40 transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* THE RIG (Tools) */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 border-b-2 border-white/20 pb-4">
                            <Cpu className="w-6 h-6" />
                            [ THE RIG ]
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {tools.map((tool, idx) => (
                                <div key={idx} className="border-2 border-white/20 p-4 hover:border-white transition-colors flex flex-col gap-3 group">
                                    <div className="text-[#2E5BFF] group-hover:animate-pulse">
                                        {tool.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm mb-1">{tool.name}</h4>
                                        <p className="text-xs text-white/50 leading-tight">{tool.stack}</p>
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

export default EngineerSection;
