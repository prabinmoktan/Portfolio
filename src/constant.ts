import react from "./assets/react.png";
import node from "./assets/node.png";
import mongo from "./assets/mongo.png";
import ex from "./assets/ex.png";

export const navItem = [
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

export const projects = [
  {
    title: "Gold Jewellery Management System",
    description:
      "Full-stack system to manage jewellery stock, sales, pricing, and categorization. Implemented secure JWT authentication, Add/Edit/Delete product forms with image handling, and category filters for Gold, Silver, and Diamond product types. Created dashboard for real-time stock updates and role monitoring.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    // links: { demo: "Live Demo", code: "View Code" },
  },
  {
    title: "E-Commerce Platform",
    description:
      "Built dynamic product display, shopping cart, and authentication system. Achieved improved user engagement through mobile-first UI.",
    technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB", "JWT"],
    // links: { demo: "Live Demo" },
  },
  {
    title: "Health Care Management System",
    description:
      "Implemented PDF generation for patient reports and advanced record filtering for efficient healthcare data management.",
    technologies: ["React", "PDF Generation", "TypeScript"],
    // links: { demo: ""},
  },
  {
    title: "Online Movie Platform",
    description:
      "Integrated external APIs for movie listings and optimized content loading for seamless user experience.",
    technologies: ["React", "REST APIs", "Tailwind CSS"],
    links: { demo: "https://movie-one-ashy.vercel.app" },
  },
];

export const technologies = [
  { id: 1, name: "Next.js" },
  { id: 11, name: "MongoDB" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "TypeScript" },
  { id: 4, name: "JWT Authentication" },
  { id: 5, name: "REST APIs" },
  { id: 6, name: "State Management" },
  { id: 7, name: "Responsive Design" },
  { id: 8, name: "Performance Optimization" },
  { id: 9, name: "Git/GitHub" },
  { id: 10, name: "Tailwind CSS" },
];

export const skills = [
  { id: 1, name: "React.js", description: "3+ years", icon: react },
  { id: 2, name: "Node.js", description: "MERN Stack", icon: node },
  { id: 3, name: "MongoDB", description: "Database", icon: mongo },
  { id: 4, name: "Express.js", description: "Backend", icon: ex },
];

export const experiences = [
  {
    company: "Freelance",
    role: "MERN Stack Developer",
    duration: "2025 - Present",
    responsibilities: [
      "Developed web applications for small businesses and clients using MERN stack",
      "Built scalable backend APIs and configured MongoDB data models",
      "Implemented JWT authentication and protected route flows",
      "Managed full project lifecycle from planning to deployment (Vercel / Render)",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
  },
  {
    company: "Meraki Techs Pvt. Ltd.",
    role: "React Developer",
    duration: "2022 - 2025",
    responsibilities: [
      "Built responsive and reusable UI components using React.js and Next.js",
      "Integrated REST APIs and implemented efficient UI state management",
      "Worked on performance optimization and code structure improvements",
      "Collaborated with team to deliver high-quality web applications",
    ],
    tech: [
      "React",
      "Next.js",
      "REST APIs",
      "State Management",
      "Performance Optimization",
    ],
  },
];

export const email = "prabinmoktan07@gmail.com";
export const githubLink = "https://github.com/prabinmoktan";
