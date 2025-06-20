
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  const [primaryColor, setPrimaryColor] = useState('#8B5CF6');

  useEffect(() => {
    // Listen for aspect changes
    const updateColor = () => {
      const color = getComputedStyle(document.documentElement).getPropertyValue('--current-primary');
      setPrimaryColor(color.trim() || '#8B5CF6');
    };

    // Check for changes periodically
    const interval = setInterval(updateColor, 100);
    return () => clearInterval(interval);
  }, []);

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
        <div 
          className="absolute top-0 left-0 w-full h-full transition-all duration-700"
          style={{ 
            background: `linear-gradient(135deg, ${primaryColor}20, transparent)`
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-700"
            style={{
              background: `linear-gradient(to right, ${primaryColor}, ${primaryColor}DD)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on something amazing? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card 
              className="glass-effect transition-all duration-300 hover:shadow-2xl"
              style={{
                borderColor: `${primaryColor}20`,
                boxShadow: `0 20px 40px ${primaryColor}10`
              }}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just 
                  want to say hello, I'm always excited to connect with fellow creatives.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    onClick={handleEmail}
                    className="w-full text-white transition-all duration-300"
                    style={{ backgroundColor: primaryColor }}
                    size="lg"
                  >
                    Send Email
                  </Button>
                  
                  <Button 
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="w-full transition-all duration-300"
                    style={{ 
                      borderColor: `${primaryColor}50`,
                      color: primaryColor
                    }}
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
                      style={{
                        borderColor: `${primaryColor}30`,
                        border: `1px solid ${primaryColor}30`
                      }}
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
                  <span 
                    className="w-2 h-2 rounded-full mr-3 animate-pulse"
                    style={{ backgroundColor: primaryColor }}
                  ></span>
                  Building innovative web applications
                </p>
                <p className="flex items-center">
                  <span 
                    className="w-2 h-2 rounded-full mr-3 animate-pulse"
                    style={{ 
                      backgroundColor: primaryColor,
                      animationDelay: '0.2s' 
                    }}
                  ></span>
                  Recording new acoustic pieces
                </p>
                <p className="flex items-center">
                  <span 
                    className="w-2 h-2 rounded-full mr-3 animate-pulse"
                    style={{ 
                      backgroundColor: primaryColor,
                      animationDelay: '0.4s' 
                    }}
                  ></span>
                  Writing poetry about modern life
                </p>
                <p className="flex items-center">
                  <span 
                    className="w-2 h-2 rounded-full mr-3 animate-pulse"
                    style={{ 
                      backgroundColor: primaryColor,
                      animationDelay: '0.6s' 
                    }}
                  ></span>
                  Exploring new design trends
                </p>
              </div>
            </div>

            <div 
              className="rounded-lg p-6 border transition-all duration-700"
              style={{
                background: `linear-gradient(to right, ${primaryColor}10, ${primaryColor}05)`,
                borderColor: `${primaryColor}20`
              }}
            >
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
