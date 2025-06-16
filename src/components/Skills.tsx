
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  {
    title: "Developer",
    description: "Full-stack development with modern technologies",
    icon: "💻",
    gradient: "from-primary to-purple-600",
    details: ["React & TypeScript", "Node.js & Python", "Cloud Architecture", "Mobile Development"]
  },
  {
    title: "Singer-Guitarist",
    description: "Musical storytelling through voice and strings",
    icon: "🎸",
    gradient: "from-purple-500 to-primary",
    details: ["Acoustic Performance", "Original Compositions", "Live Shows", "Studio Recording"]
  },
  {
    title: "Poet",
    description: "Weaving emotions into words and verses",
    icon: "✍️",
    gradient: "from-primary to-pink-600",
    details: ["Contemporary Poetry", "Spoken Word", "Literary Events", "Published Works"]
  },
  {
    title: "Designer",
    description: "Creating visual experiences that inspire",
    icon: "🎨",
    gradient: "from-pink-500 to-primary",
    details: ["UI/UX Design", "Brand Identity", "Digital Art", "Creative Direction"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="modern-text text-5xl md:text-6xl lg:text-7xl font-black mb-6 gradient-text">
            My Craft
          </h2>
          <p className="text-xl md:text-2xl text-black/60 max-w-3xl mx-auto">
            Each facet of my creativity brings unique perspectives to the table
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title} 
              className="group hover:scale-110 transition-all duration-500 bg-white/80 backdrop-blur border-2 border-gray-200 hover:border-primary/50 shadow-lg hover:shadow-2xl hover:shadow-primary/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-6">
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center text-3xl mb-6 group-hover:scale-125 transition-transform duration-500 shadow-lg`}>
                  {skill.icon}
                </div>
                <CardTitle className="modern-text text-2xl font-black">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-black/60 mb-6 text-lg">{skill.description}</p>
                <div className="space-y-3">
                  {skill.details.map((detail, i) => (
                    <div 
                      key={i} 
                      className="text-sm text-black/70 bg-gray-100 hover:bg-primary/10 rounded-full px-4 py-2 inline-block mr-2 mb-2 transition-colors duration-300 border border-gray-200 hover:border-primary/30"
                    >
                      {detail}
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
