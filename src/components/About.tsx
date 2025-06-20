
import { useState, useEffect } from 'react';

const aspectContent = {
  0: { // Developer
    title: "Code Architect",
    description: "Passionate about creating scalable solutions and elegant user experiences.",
    quote: "In code, we find the poetry of logic and the art of problem-solving.",
    skills: ["React & TypeScript", "Node.js & Python", "Cloud Architecture", "System Design"]
  },
  1: { // Singer-Guitarist
    title: "Musical Storyteller", 
    description: "Crafting melodies that resonate with the human experience.",
    quote: "Music is the universal language that speaks directly to the soul.",
    skills: ["Acoustic Guitar", "Vocal Performance", "Songwriting", "Live Performance"]
  },
  2: { // Poet
    title: "Word Weaver",
    description: "Capturing life's essence through contemporary verse and spoken word.",
    quote: "Poetry transforms ordinary moments into extraordinary revelations.",
    skills: ["Contemporary Poetry", "Spoken Word", "Literary Analysis", "Creative Writing"]
  },
  3: { // Designer
    title: "Visual Innovator",
    description: "Creating compelling visual narratives that inspire and engage.",
    quote: "Design is not just how it looks, but how it makes you feel.",
    skills: ["UI/UX Design", "Brand Identity", "Visual Storytelling", "Creative Direction"]
  }
};

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentAspect, setCurrentAspect] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Listen for aspect changes from Hero component
    const handleAspectChange = () => {
      const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--current-primary');
      // Map colors back to aspects
      const colorMap = {
        '#8B5CF6': 0, // Purple - Developer
        '#EC4899': 1, // Pink - Singer
        '#10B981': 2, // Emerald - Poet
        '#F59E0B': 3  // Amber - Designer
      };
      const aspectIndex = colorMap[primaryColor.trim()] || 0;
      setCurrentAspect(aspectIndex);
    };

    // Check for changes periodically
    const interval = setInterval(handleAspectChange, 100);
    return () => clearInterval(interval);
  }, []);

  const content = aspectContent[currentAspect];
  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--current-primary') || '#8B5CF6';

  return (
    <section id="about" className="py-16 px-6 relative bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 right-1/4 w-1 h-32 transition-all duration-700"
          style={{ 
            transform: `translateY(${(scrollY - 800) * 0.3}px)`,
            backgroundColor: primaryColor + '33'
          }}
        />
        <div 
          className="absolute bottom-20 left-1/3 w-24 h-24 rounded-full transition-all duration-700"
          style={{ 
            transform: `translateY(${(scrollY - 800) * -0.2}px) rotate(${(scrollY - 800) * 0.1}deg)`,
            border: `1px solid ${primaryColor}1A`
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div 
          className="text-center mb-12 transition-all duration-700"
          style={{ transform: `translateY(${(scrollY - 600) * -0.1}px)` }}
        >
          <h2 className="modern-text text-5xl md:text-6xl lg:text-7xl font-black mb-4">
            <span 
              style={{
                background: `linear-gradient(to right, ${primaryColor}, ${primaryColor}DD)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {content.title}
            </span>
          </h2>
          <div 
            className="w-32 h-2 mx-auto rounded-full transition-all duration-700"
            style={{ backgroundColor: primaryColor }}
          ></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div 
            className="space-y-8 transition-all duration-700"
            style={{ transform: `translateY(${(scrollY - 700) * -0.05}px)` }}
          >
            <p className="text-xl md:text-2xl text-black/80 leading-relaxed">
              {content.description}
            </p>

            <blockquote 
              className="border-l-4 pl-8 italic text-black/70 font-serif text-2xl md:text-3xl leading-relaxed transition-all duration-700"
              style={{ 
                transform: `translateY(${(scrollY - 800) * -0.03}px)`,
                borderColor: primaryColor
              }}
            >
              "{content.quote}"
            </blockquote>
          </div>

          <div 
            className="relative transition-all duration-700"
            style={{ transform: `translateY(${(scrollY - 750) * -0.08}px)` }}
          >
            <div 
              className="glass-effect rounded-3xl p-10 space-y-8 border-2 shadow-2xl transition-all duration-700"
              style={{ borderColor: primaryColor + '33' }}
            >
              <div className="text-center">
                <div 
                  className="w-40 h-40 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl transition-all duration-700"
                  style={{ 
                    transform: `rotate(${(scrollY - 700) * 0.05}deg)`,
                    background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}CC)`
                  }}
                >
                  <span className="text-5xl font-black text-white modern-text">VT</span>
                </div>
                <h3 className="text-3xl font-bold mb-3 modern-text">{content.title}</h3>
                <p className="text-black/60 text-lg">Based in India</p>
              </div>
              
              <div className="space-y-6">
                {content.skills.map((skill, index) => (
                  <div 
                    key={skill}
                    className="flex justify-between items-center transition-all duration-700"
                    style={{ 
                      transform: `translateX(${Math.sin((scrollY - 800 + index * 100) * 0.01) * 5}px)`,
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <span className="text-lg font-semibold">{skill}</span>
                    <div className="w-40 bg-gray-200 rounded-full h-3">
                      <div 
                        className="h-3 rounded-full animate-pulse transition-all duration-700" 
                        style={{ 
                          width: `${85 + Math.random() * 10}%`,
                          background: `linear-gradient(to right, ${primaryColor}, ${primaryColor}CC)`,
                          animationDelay: `${index * 0.2}s`
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
