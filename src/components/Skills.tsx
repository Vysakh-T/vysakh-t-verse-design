
import { useAspect } from "@/context/AspectContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const { aspect } = useAspect();
  const skill = aspect.skills;
  const primaryColor = aspect.theme.primaryColor;

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
                        const target = e.target as HTMLElement;
                        target.style.backgroundColor = `${primaryColor}15`;
                        target.style.borderColor = `${primaryColor}40`;
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.backgroundColor = `${primaryColor}08`;
                        target.style.borderColor = `${primaryColor}20`;
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
