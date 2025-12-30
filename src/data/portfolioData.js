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
    title: "Computer Science Engineer",
    tagline: "Building sustainable solutions for your business",
    email: "vincent.",
    phone: "+62 812-3456-7890",
    location: "Jakarta, Indonesia",
    avatar: "https://via.placeholder.com/200", // Replace with your image URL
  },

  // Social Links
  social: {
    github: "https://github.com/vincentk191",
    linkedin: "https://linkedin.com/in/vincent-kesumo-60155a148",
    portfolio: "https://vincentk191.github.io/modular-website/",
  },

  // About Section
  about: {
    title: "About Me",
    description: [
      "I am a Computer Science Engineer with a passion for optimizing business processes and discovering new technologies.",
      "I have experience in building software solutions that aimed at connecting and scaling with other systems as well as maintaining and improving existing projects",
      "When I'm not coding, I enjoy learning new technologies and playing video games with my friends"
    ],
    image: "https://avatars.githubusercontent.com/u/32392302?v=4", // Replace with your image URL
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
          { name: "HTML5 & CSS3", level: 90 }
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
          { name: "Java", level: 80 },
          { name: "Spring Boot Framework", level: 70 },
          { name: "Maven", level: 60 },
          { name: "Python", level: 60 },
          { name: "C++", level: 50 },
          { name: "SQL", level: 90 },
        ]
      },
      {
        name: "Tools & Others",
        items: [
          { name: "Git & GitHub", level: 90 },
          { name: "Docker", level: 70 },
          { name: "Azure DevOps", level: 70 },
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
        company: "Brunel",
        position: "Junior Software Engineer",
        duration: "2022 - 2023",
        location: "On-Site / Remote",
        description: [
          "Worked on ABN AMRO project in migrating from their legacy system to the on-cloud system",
          "Initializing and maintaining the cloud-based application for UI/UX and backend API",
          "Proficient in using Java, Spring Boot Framework, Maven, SQL, and Azure DevOps",
          "Worked in cross functional teams to adapt the legacy functionality to Java and Spring Boot"
        ]
      },
      {
        company: "ABN AMRO",
        position: "IT Engineer",
        duration: "2023 - Current",
        location: "On-Site / Remote",
        description: [
          "Continued previous work on the ABN AMRO project as an internal employee",
          "Developed microservices and helped as an expert in adapting the cloud based applications to other systems",
          "Worked extensively in SQL to extrapolate and transform data for analysis and reporting",
          "Maintained and improved existing codebase in containerizing the applications for deployment"
        ]
      },
    ]
  },

  // Education Section
  education: {
    title: "Education",
    items: [
      {
        institution: "Vrije Universiteit Amsterdam (VU Amsterdam)",
        degree: "Bachelor of Technology in Computer Science",
        duration: "2019 - 2022",
        location: "Amsterdam, Netherlands",
        description: "Focus on software engineering and web development"
      },
      {
        institution: "Delft University of Technology (TU Delft)",
        degree: "Bachelor of Engineering in Computer Science",
        duration: "2018 - 2019",
        location: "Delft, Netherlands",
        description: "Focus on software engineering and web development but was not able to complete the degree due to personal reasons"
      },
      {
        institution: "New York Code + Design Academy",
        degree: "Certificate in Full Stack Development",
        duration: "2014 - 2018",
        location: "Amsterdam, Netherlands",
        description: "Focus on full stack web development using React, Node.js, PostgreSQL, Express, and MongoDB"
      },
      {
        institution: "UNSW",
        degree: "Bachelor of Engineering in Electrical and Electronics Engineering",
        duration: "2017 - 2017",
        location: "City, Country",
        description: "Focus on software engineering and web development"
      },
      {
        institution: "Gandhi Memorial International School",
        degree: "High School Diploma with IGCSE",
        duration: "2004 - 2015",
        location: "Jakarta, Indonesia",
        description: "Focus on High School Education with IGCSE"
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

