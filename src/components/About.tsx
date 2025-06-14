
const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a multi-faceted creative professional who believes in the power of 
              <span className="text-primary font-medium"> storytelling through technology</span>. 
              Whether I'm coding elegant solutions, strumming melodies, crafting verses, 
              or designing visual experiences, I approach each discipline with the same passion 
              for innovation and authenticity.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey spans across the digital and analog worlds, where 
              <span className="text-primary font-medium"> code meets creativity</span>. 
              I find that each of my pursuits informs and enriches the others, creating 
              a unique perspective that I bring to every project.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground font-serif text-xl">
              "In the intersection of technology and art, 
              we find the most profound expressions of human creativity."
            </blockquote>
          </div>

          <div className="relative">
            <div className="glass-effect rounded-2xl p-8 space-y-6">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">VT</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Creative Professional</h3>
                <p className="text-muted-foreground">Based in India</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Development</span>
                  <div className="w-32 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[95%] animate-pulse"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Music</span>
                  <div className="w-32 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[90%] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Poetry</span>
                  <div className="w-32 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[85%] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Design</span>
                  <div className="w-32 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[88%] animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
