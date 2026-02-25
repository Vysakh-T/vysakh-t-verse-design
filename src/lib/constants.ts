
export const ASPECTS = [
  {
    id: 'developer',
    theme: {
      primaryColor: 'hsl(271, 91%, 65%)', // Purple
      bgGradient: 'from-purple-500/20 to-blue-500/20',
      textGradient: 'from-purple-600 to-blue-600',
      glowColor: 'shadow-purple-500/25'
    },
    hero: {
      title: 'DEVELOPER',
      subtitle: 'Crafting digital experiences through modern code',
    },
    about: {
      title: "Code Architect",
      description: "Passionate about creating scalable solutions and elegant user experiences.",
      quote: "In code, we find the poetry of logic and the art of problem-solving.",
      skills: ["React & TypeScript", "Node.js & Python", "Cloud Architecture", "System Design"]
    },
    skills: {
      title: "Developer",
      description: "Full-stack development with modern technologies",
      icon: "💻",
      details: [
        { name: "Frontend", skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
        { name: "Backend", skills: ["Node.js", "Python", "PostgreSQL", "Redis"] },
        { name: "Cloud", skills: ["AWS", "Docker", "Kubernetes", "CI/CD"] },
        { name: "Mobile", skills: ["React Native", "Flutter", "iOS", "Android"] }
      ]
    }
  },
  {
    id: 'designer',
    theme: {
      primaryColor: 'hsl(43, 96%, 56%)', // Amber
      bgGradient: 'from-amber-500/20 to-orange-500/20',
      textGradient: 'from-amber-600 to-orange-600',
      glowColor: 'shadow-amber-500/25'
    },
    hero: {
      title: 'DESIGNER',
      subtitle: 'Shaping visual experiences that inspire',
    },
    about: {
      title: "Visual Innovator",
      description: "Creating compelling visual narratives that inspire and engage.",
      quote: "Design is not just how it looks, but how it makes you feel.",
      skills: ["UI/UX Design", "Brand Identity", "Visual Storytelling", "Creative Direction"]
    },
    skills: {
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
  },
  {
    id: 'artist',
    theme: {
      primaryColor: 'hsl(332, 84%, 57%)', // Pink
      bgGradient: 'from-pink-500/20 to-rose-500/20',
      textGradient: 'from-pink-600 to-rose-600',
      glowColor: 'shadow-pink-500/25'
    },
    hero: {
      title: 'ARTIST',
      subtitle: 'Creating beauty that touches the soul',
    },
    about: {
      title: "Creative Storyteller",
      description: "Expressing life through multiple art forms and creative mediums.",
      quote: "Art is the bridge between what is and what could be.",
      skills: ["Digital Art", "Music & Performance", "Creative Writing", "Multimedia Design"]
    },
    skills: {
      title: "Artist",
      description: "Creative expression through multiple mediums",
      icon: "🎭",
      details: [
        { name: "Digital Art", skills: ["Digital Painting", "3D Modeling", "Character Design", "Concept Art"] },
        { name: "Music", skills: ["Guitar", "Vocals", "Songwriting", "Music Production"] },
        { name: "Writing", skills: ["Poetry", "Creative Writing", "Storytelling", "Lyrics"] },
        { name: "Performance", skills: ["Live Shows", "Spoken Word", "Art Exhibitions", "Creative Direction"] }
      ]
    }
  }
];
