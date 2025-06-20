
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillsData = {
  0: { // Developer
    title: "Developer",
    description: "Full-stack development with modern technologies",
    icon: "💻",
    details: [
      { name: "Frontend", skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
      { name: "Backend", skills: ["Node.js", "Python", "PostgreSQL", "Redis"] },
      { name: "Cloud", skills: ["AWS", "Docker", "Kubernetes", "CI/CD"] },
      { name: "Mobile", skills: ["React Native", "Flutter", "iOS", "Android"] }
    ]
  },
  1: { // Singer-Guitarist
    title: "Singer-Guitarist",
    description: "Musical storytelling through voice and strings",
    icon: "🎸",
    details: [
      { name: "Performance", skills: ["Live Shows", "Studio Recording", "Acoustic Sets", "Open Mics"] },
      { name: "Composition", skills: ["Songwriting", "Melody Creation", "Lyric Writing", "Arrangement"] },
      { name: "Instruments", skills: ["Acoustic Guitar", "Electric Guitar", "Vocals", "Harmonica"] },
      { name: "Genres", skills: ["Folk", "Indie", "Alternative", "Contemporary"] }
    ]
  },
  2: { // Poet
    title: "Poet",
    description: "Weaving emotions into words and verses",
    icon: "✍️",
    details: [
      { name: "Writing", skills: ["Contemporary Poetry", "Free Verse", "Narrative Poetry", "Micro Poetry"] },
      { name: "Performance", skills: ["Spoken Word", "Poetry Slams", "Literary Events", "Open Readings"] },
      { name: "Themes", skills: ["Modern Life", "Human Connection", "Nature", "Technology"] },
      { name: "Publication", skills: ["Literary Magazines", "Anthologies", "Online Platforms", "Self-Publishing"] }
    ]
  },
  3: { // Designer
    title: "Designer",
    description: "Creating visual experiences that inspire",
    icon: "🎨",
    details: [
      { name: "Digital Design", skills: ["UI/UX Design", "Web Design", "App Design", "Prototyping"] },
      { name: "Brand Identity", skills: ["Logo Design", "Brand Guidelines", "Visual Identity", "Typography"] },
      { name: "Creative", skills: ["Digital Art", "Illustration", "Motion Graphics", "Photography"] },
      { name: "Tools", skills: ["Figma", "Adobe Suite", "Sketch", "Principle"] }
    ]
  }
};

const Skills = () => {
  const [currentAspect, setCurrentAspect] = useState(0);

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

  const skill = skillsData[currentAspect];
  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--current-primary') || '#8B5CF6';

  return (
    <section id="skills" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="modern-text text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span 
              style={{
                background: `linear-gradient(to right, ${primaryColor}, ${primaryColor}DD)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {skill.title} Skills
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-black/60 max-w-3xl mx-auto">
            {skill.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skill.details.map((category, index) => (
            <Card 
              key={category.name} 
              className="group hover:scale-105 transition-all duration-500 bg-white/80 backdrop-blur border-2 border-gray-200 hover:shadow-2xl"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                borderColor: `${primaryColor}33`,
                boxShadow: `0 20px 40px ${primaryColor}10`
              }}
            >
              <CardHeader className="text-center pb-6">
                <div 
                  className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-125 transition-transform duration-500 shadow-lg"
                  style={{ 
                    background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}CC)`
                  }}
                >
                  {skill.icon}
                </div>
                <CardTitle className="modern-text text-2xl font-black">{category.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3">
                  {category.skills.map((item, i) => (
                    <div 
                      key={i} 
                      className="text-sm text-black/70 bg-gray-100 rounded-full px-4 py-2 inline-block mr-2 mb-2 transition-all duration-300 border border-gray-200 hover:shadow-md"
                      style={{
                        borderColor: `${primaryColor}20`,
                        backgroundColor: `${primaryColor}08`
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = `${primaryColor}15`;
                        e.target.style.borderColor = `${primaryColor}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = `${primaryColor}08`;
                        e.target.style.borderColor = `${primaryColor}20`;
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
