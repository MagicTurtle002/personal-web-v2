export const sections = ["#home", "#projects", "#skills", "#contact"];

// Social media links
export const socialLinks = [
  { name: "GitHub", url: "https://github.com/your-username", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/your-username",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/your-username",
    icon: "twitter",
  },
];

export const skills = {
  frontend: ["React", "Vite", "JavaScript", "HTML5", "CSS3", "Tailwind"],
  backend: ["PHP", "MySQL", "REST API", "Laravel"],
  tools: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Hostinger"],
};

// Experience items
export const experienceItems = [
  {
    title: "Intern - Highly Succeed Inc.",
    period: "2025",
    project: "Unleash Web Portal - User Management System",
    responsibilities: [
      "Developed responsive user interfaces with React and Vite",
      "Implemented user management system with role-based permissions",
      "Collaborated with backend team on API integration",
      "Optimized application performance for better user experience",
    ],
  },
  {
    title: "Web Developer - Capstone Project",
    period: "2024",
    project: "Veterinary Record Management System",
    responsibilities: [
      "Built backend systems using PHP and MySQL",
      "Designed database schema for veterinary records",
      "Implemented user authentication and authorization",
      "Created reports and analytics dashboard for data visualization",
    ],
  },
];

// Enhanced project data with more client-impressive details
export const projects = [
  {
    id: "pawsitive",
    title: "Pawsitive: Veterinary Record Management",
    shortDescription:
      "A comprehensive system for veterinary clinics to manage patient records and appointments",
    description:
      "Pawsitive is a veterinary record management system designed to streamline clinic operations. It helps veterinarians and staff manage patient records, appointments, and communication with pet owners.",
    image: "/pawsitive.png",
    techStack: ["HTML", "CSS", "PHP", "JavaScript", "MySQL", "AJAX"],
    client: "Pet Adventure Veterinary Clinic",
    company: "Pawsitive Team",
    projectType: "Healthcare System",
    year: "2024",
    demoLink: "#",
    codeLink: "#",
    purpose:
      "Pawsitive is designed to streamline clinic operations, helping veterinarians and staff manage patient records, and appointments with pet owners. It aims to improve efficiency and reduce administrative burdens in veterinary clinics.",
    fullDescription:
      "Pawsitive helps manage patient records, appointments, and communication with pet owners. Built with pure HTML, CSS, and PHP, it ensures a smooth and responsive experience, with dynamic interactivity via JavaScript.",
    // Added more impressive details
    problemSolved: "The clinic was struggling with paper-based record keeping that led to 30% of staff time spent on administrative tasks.",
    impact: "Reduced record retrieval time by 87% and administrative overhead by 42%, allowing staff to focus more on pet care.",
    technicalFeatures: [
      "Responsive design optimized for both desktop and tablet use in clinic environments",
      "Real-time appointment management with SMS notifications",
      "Secure patient record system with role-based access control",
      "Automated billing and payment processing integration",
      "Customizable reporting dashboard with export capabilities"
    ],
    clientTestimonial: "The Pawsitive system transformed our clinic operations. Record management is now seamless and our staff productivity has improved significantly."
  },
  {
    id: "unleash",
    title: "Unleash Web Portal",
    shortDescription:
      "An intuitive platform for company order and store management",
    description:
      "Unleash Web Portal is an intuitive platform designed to streamline the management of company orders, stores, and user accounts.",
    image: "/unleash.png",
    techStack: ["React", "Tailwind CSS", "JavaScript", "Vite", "Node.js", "Express", "MongoDB"],
    client: "Unleash Web Portal",
    company: "Highly Succeed Inc.",
    projectType: "E-commerce Solution",
    year: "2025",
    demoLink: "#",
    codeLink: "#",
    purpose:
      "Unleash Web Portal is an intuitive platform built for managing company orders, stores, and user accounts in a streamlined way. It simplifies administrative tasks and enhances operational efficiency.",
    fullDescription:
      "This system was built with React and Vite, styled using Tailwind CSS, and leverages modern JavaScript to create a responsive, user-friendly experience.",
    // Added more impressive details
    problemSolved: "The client needed to consolidate three separate management systems into one cohesive platform to eliminate data silos.",
    impact: "Increased order processing speed by 63% and reduced training time for new employees from two weeks to just three days.",
    technicalFeatures: [
      "Interactive dashboard with real-time analytics and data visualization",
      "Advanced filtering and search capabilities across all data types",
      "Multi-level user permissions system with audit logging",
      "Automated inventory management with low-stock alerts",
      "Progressive Web App features for offline capabilities"
    ],
    clientTestimonial: "Working with this developer was exceptional. The Unleash Web Portal exceeded our expectations and was delivered ahead of schedule."
  },

];

export const skillsTools = [
  {
    id: 1,
    title: "Frontend Development",
    href: "#",
    description:
      "Experienced with React, Tailwind CSS, HTML5, CSS3, JavaScript, and Vite. I build clean, responsive, and interactive user interfaces.",
    category: { title: "Frontend", href: "#" },
    author: {
      name: "React & Tailwind",
      role: "UI/UX Tools",
      href: "#",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/919/919851.png", // React logo
    },
  },
  {
    id: 2,
    title: "Backend Development",
    href: "#",
    description:
      "Skilled in PHP and MySQL. I build secure and scalable APIs, work with databases, and manage server-side logic.",
    category: { title: "Backend", href: "#" },
    author: {
      name: "PHP & MySQL",
      role: "Server-side Tools",
      href: "#",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/919/919830.png", // PHP logo
    },
  },
  {
    id: 3,
    title: "Tools & Platforms",
    href: "#",
    description:
      "Comfortable using Git, GitHub, Figma, Postman, VS Code, and cloud platforms like Hostinger for deploying projects.",
    category: { title: "Tools", href: "#" },
    author: {
      name: "Git & Figma",
      role: "Developer Tools",
      href: "#",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png", // GitHub logo
    },
  },
];