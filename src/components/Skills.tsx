
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  {
    title: "Developer",
    description: "Full-stack development with modern technologies",
    icon: "💻",
    gradient: "from-blue-500 to-purple-600",
    details: ["React & TypeScript", "Node.js & Python", "Cloud Architecture", "Mobile Development"]
  },
  {
    title: "Singer-Guitarist",
    description: "Musical storytelling through voice and strings",
    icon: "🎸",
    gradient: "from-purple-500 to-pink-600",
    details: ["Acoustic Performance", "Original Compositions", "Live Shows", "Studio Recording"]
  },
  {
    title: "Poet",
    description: "Weaving emotions into words and verses",
    icon: "✍️",
    gradient: "from-green-500 to-teal-600",
    details: ["Contemporary Poetry", "Spoken Word", "Literary Events", "Published Works"]
  },
  {
    title: "Designer",
    description: "Creating visual experiences that inspire",
    icon: "🎨",
    gradient: "from-orange-500 to-red-600",
    details: ["UI/UX Design", "Brand Identity", "Digital Art", "Creative Direction"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            My Craft
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each facet of my creativity brings unique perspectives to the table
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title} 
              className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${skill.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">{skill.description}</p>
                <div className="space-y-2">
                  {skill.details.map((detail, i) => (
                    <div 
                      key={i} 
                      className="text-sm text-muted-foreground bg-muted/30 rounded-full px-3 py-1 inline-block mr-2 mb-2"
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
