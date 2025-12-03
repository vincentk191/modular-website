/**
 * Portfolio Data Configuration
 * 
 * This file contains all the content for your portfolio website.
 * Simply update the values here to customize your personal website.
 * No need to touch the component files!
 */

export const portfolioData = {
  // Personal Information
  personal: {
    name: "Vincent Kesumo",
    title: "Full Stack Developer",
    tagline: "Building scalable and modular web applications",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, Country",
    avatar: "https://via.placeholder.com/200", // Replace with your image URL
  },

  // Social Links
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    portfolio: "https://yourwebsite.com",
  },

  // About Section
  about: {
    title: "About Me",
    description: [
      "I'm a passionate full stack developer with experience in building modular and scalable web applications. I specialize in creating clean, maintainable code and elegant user interfaces.",
      "With a strong foundation in both frontend and backend technologies, I enjoy solving complex problems and learning new technologies. I believe in writing code that is not only functional but also easy to understand and maintain.",
      "When I'm not coding, I enjoy contributing to open source projects and sharing knowledge with the developer community."
    ],
    image: "https://via.placeholder.com/400x300", // Replace with your image URL
  },

  // Skills Section
  skills: {
    title: "Skills & Technologies",
    categories: [
      {
        name: "Frontend",
        items: [
          { name: "React", level: 90 },
          { name: "JavaScript/ES6+", level: 95 },
          { name: "HTML5 & CSS3", level: 90 },
          { name: "TypeScript", level: 80 },
          { name: "Vue.js", level: 75 },
        ]
      },
      {
        name: "Backend",
        items: [
          { name: "Node.js", level: 85 },
          { name: "Express.js", level: 85 },
          { name: "PostgreSQL", level: 80 },
          { name: "MongoDB", level: 75 },
          { name: "RESTful APIs", level: 90 },
        ]
      },
      {
        name: "Tools & Others",
        items: [
          { name: "Git & GitHub", level: 90 },
          { name: "Docker", level: 70 },
          { name: "AWS", level: 65 },
          { name: "CI/CD", level: 75 },
          { name: "Agile/Scrum", level: 80 },
        ]
      }
    ]
  },

  // Experience Section
  experience: {
    title: "Experience",
    items: [
      {
        company: "Tech Company Inc.",
        position: "Senior Full Stack Developer",
        duration: "2022 - Present",
        location: "Remote",
        description: [
          "Led development of modular web applications using React and Node.js",
          "Implemented scalable backend services with PostgreSQL and Express",
          "Mentored junior developers and conducted code reviews",
          "Improved application performance by 40% through optimization"
        ]
      },
      {
        company: "Startup Solutions",
        position: "Full Stack Developer",
        duration: "2020 - 2022",
        location: "City, Country",
        description: [
          "Built responsive web applications from scratch",
          "Developed RESTful APIs and integrated third-party services",
          "Collaborated with design team to implement pixel-perfect UIs",
          "Maintained and improved existing codebase"
        ]
      },
      {
        company: "Digital Agency",
        position: "Junior Developer",
        duration: "2018 - 2020",
        location: "City, Country",
        description: [
          "Assisted in development of client websites",
          "Learned best practices for code quality and version control",
          "Participated in agile development processes",
          "Contributed to open source projects"
        ]
      }
    ]
  },

  // Education Section
  education: {
    title: "Education",
    items: [
      {
        institution: "University Name",
        degree: "Bachelor of Science in Computer Science",
        duration: "2014 - 2018",
        location: "City, Country",
        description: "Focus on software engineering and web development"
      }
    ]
  },

  // Projects Section
  projects: {
    title: "Featured Projects",
    items: [
      {
        name: "Modular Website Framework",
        description: "A scalable framework for building modular websites with reusable components",
        technologies: ["React", "Node.js", "PostgreSQL", "Express"],
        github: "https://github.com/yourusername/project1",
        demo: "https://project1-demo.com",
        image: "https://via.placeholder.com/400x250"
      },
      {
        name: "E-Commerce Platform",
        description: "Full-featured e-commerce solution with payment integration and admin panel",
        technologies: ["React", "Redux", "Node.js", "MongoDB"],
        github: "https://github.com/yourusername/project2",
        demo: "https://project2-demo.com",
        image: "https://via.placeholder.com/400x250"
      },
      {
        name: "Task Management App",
        description: "Collaborative task management application with real-time updates",
        technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
        github: "https://github.com/yourusername/project3",
        demo: "https://project3-demo.com",
        image: "https://via.placeholder.com/400x250"
      }
    ]
  },

  // Contact Section
  contact: {
    title: "Get In Touch",
    description: "I'm always interested in hearing about new opportunities and projects. Feel free to reach out!",
    buttonText: "Send Message"
  }
};

export default portfolioData;

