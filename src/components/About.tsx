
const About = () => {
  return (
    <section id="about" className="py-16 px-6 relative bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="modern-text text-5xl md:text-6xl lg:text-7xl font-black mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-32 h-2 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <p className="text-xl md:text-2xl text-black/80 leading-relaxed">
              I'm a multi-faceted creative professional who believes in the power of 
              <span className="text-primary font-bold"> storytelling through technology</span>. 
              Whether I'm coding elegant solutions, strumming melodies, crafting verses, 
              or designing visual experiences, I approach each discipline with the same passion 
              for innovation and authenticity.
            </p>
            
            <p className="text-xl md:text-2xl text-black/80 leading-relaxed">
              My journey spans across the digital and analog worlds, where 
              <span className="text-primary font-bold"> code meets creativity</span>. 
              I find that each of my pursuits informs and enriches the others, creating 
              a unique perspective that I bring to every project.
            </p>

            <blockquote className="border-l-4 border-primary pl-8 italic text-black/70 font-serif text-2xl md:text-3xl leading-relaxed">
              "In the intersection of technology and art, 
              we find the most profound expressions of human creativity."
            </blockquote>
          </div>

          <div className="relative">
            <div className="glass-effect rounded-3xl p-10 space-y-8 border border-primary/20 shadow-2xl">
              <div className="text-center">
                <div className="w-40 h-40 bg-gradient-to-br from-primary to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
                  <span className="text-5xl font-black text-white modern-text">VT</span>
                </div>
                <h3 className="text-3xl font-bold mb-3 modern-text">Creative Professional</h3>
                <p className="text-black/60 text-lg">Based in India</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Development</span>
                  <div className="w-40 bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-primary to-purple-500 h-3 rounded-full w-[95%] animate-pulse"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Music</span>
                  <div className="w-40 bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-primary to-purple-500 h-3 rounded-full w-[90%] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Poetry</span>
                  <div className="w-40 bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-primary to-purple-500 h-3 rounded-full w-[85%] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Design</span>
                  <div className="w-40 bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-primary to-purple-500 h-3 rounded-full w-[88%] animate-pulse" style={{ animationDelay: '0.6s' }}></div>
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
