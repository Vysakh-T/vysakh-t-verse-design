
import { useState, useEffect } from 'react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="py-16 px-6 relative bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 right-1/4 w-1 h-32 bg-primary/20"
          style={{ transform: `translateY(${(scrollY - 800) * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-20 left-1/3 w-24 h-24 border border-primary/10 rounded-full"
          style={{ transform: `translateY(${(scrollY - 800) * -0.2}px) rotate(${(scrollY - 800) * 0.1}deg)` }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div 
          className="text-center mb-12"
          style={{ transform: `translateY(${(scrollY - 600) * -0.1}px)` }}
        >
          <h2 className="modern-text text-5xl md:text-6xl lg:text-7xl font-black mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-32 h-2 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div 
            className="space-y-8"
            style={{ transform: `translateY(${(scrollY - 700) * -0.05}px)` }}
          >
            <p className="text-xl md:text-2xl text-black/80 leading-relaxed">
              Multi-faceted creative who believes in 
              <span className="text-primary font-bold"> storytelling through technology</span>. 
              Whether coding, creating music, writing, or designing, I approach each with 
              passion for innovation.
            </p>
            
            <p className="text-xl md:text-2xl text-black/80 leading-relaxed">
              My journey spans digital and analog worlds, where 
              <span className="text-primary font-bold"> code meets creativity</span>. 
              Each pursuit informs the others, creating unique perspectives.
            </p>

            <blockquote 
              className="border-l-4 border-primary pl-8 italic text-black/70 font-serif text-2xl md:text-3xl leading-relaxed"
              style={{ transform: `translateY(${(scrollY - 800) * -0.03}px)` }}
            >
              "In the intersection of technology and art, 
              we find profound expressions of creativity."
            </blockquote>
          </div>

          <div 
            className="relative"
            style={{ transform: `translateY(${(scrollY - 750) * -0.08}px)` }}
          >
            <div className="glass-effect rounded-3xl p-10 space-y-8 border border-primary/20 shadow-2xl">
              <div className="text-center">
                <div 
                  className="w-40 h-40 bg-gradient-to-br from-primary to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl"
                  style={{ transform: `rotate(${(scrollY - 700) * 0.05}deg)` }}
                >
                  <span className="text-5xl font-black text-white modern-text">VT</span>
                </div>
                <h3 className="text-3xl font-bold mb-3 modern-text">Creative Professional</h3>
                <p className="text-black/60 text-lg">Based in India</p>
              </div>
              
              <div className="space-y-6">
                {[
                  { label: 'Development', width: '95%', delay: '0s' },
                  { label: 'Music', width: '90%', delay: '0.2s' },
                  { label: 'Poetry', width: '85%', delay: '0.4s' },
                  { label: 'Design', width: '88%', delay: '0.6s' }
                ].map((skill, index) => (
                  <div 
                    key={skill.label}
                    className="flex justify-between items-center"
                    style={{ 
                      transform: `translateX(${Math.sin((scrollY - 800 + index * 100) * 0.01) * 5}px)`,
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <span className="text-lg font-semibold">{skill.label}</span>
                    <div className="w-40 bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-primary to-purple-500 h-3 rounded-full animate-pulse" 
                        style={{ 
                          width: skill.width,
                          animationDelay: skill.delay
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

