
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/vysakh",
      color: "hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/vysakh",
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/vysakh",
      color: "hover:text-pink-400"
    }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/your-number", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:hello@vysakh.com";
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on something amazing? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just 
                  want to say hello, I'm always excited to connect with fellow creatives 
                  and innovators.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    onClick={handleEmail}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    Send Email
                  </Button>
                  
                  <Button 
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="w-full border-primary/50 hover:bg-primary/10"
                    size="lg"
                  >
                    WhatsApp Chat
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">Follow my journey</p>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-muted/20 hover:bg-muted/40 transition-all duration-300 ${social.color} hover:scale-110`}
                      aria-label={social.name}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="text-center md:text-left space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">What I'm Up To</h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
                  Building innovative web applications
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                  Recording new acoustic pieces
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                  Writing poetry about modern life
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse" style={{ animationDelay: '0.6s' }}></span>
                  Exploring new design trends
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-lg p-6 border border-primary/20">
              <h4 className="font-semibold mb-2">Currently Available</h4>
              <p className="text-sm text-muted-foreground">
                Open to new projects and collaborations. 
                Let's create something extraordinary together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
