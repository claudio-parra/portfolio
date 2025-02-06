import plums from "../assets/projects/plums.png";
import carShop from "../assets/projects/carShop.png";
import toDoList from "../assets/projects/toDoList.png";
import pirateStyleStage from "../assets/projects/pirateStyleStage.png";

export const HERO_CONTENT = `I am a passionate full-stack developer with extensive experience in crafting robust, scalable web applications. Specializing in front-end technologies like React and Next.js, and back-end technologies such as Node.js, MySQL, PostgreSQL, and MongoDB. My mission is to deliver innovative, high-performance web solutions that provide exceptional user experiences and drive business growth.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Web Developer",
    company: "Family Search",
    description: `Developed a custom React-based state management system to track and update task lock statuses, improving performance by optimizing API calls. Enhanced user experience with React and Node.js, implementing UI features for task management and data organization using TanStack Query, Emotion, and the Church’s UI library. Integrated APIs to improve data sorting and accessibility, reducing load times and improving application performance.`,
    technologies: ["React", "Node.js", "TanStack Query", "Emotion", "API Integration", "Jest"],
  },
  {
    year: "2023 - 2024",
    role: "Teaching Assistant - Frontend and Backend Web Development",
    company: "Brigham Young University - Idaho",
    description: `Led 50+ students per semester through web development coursework, achieving strong learning outcomes. Designed and managed databases (SQL & MongoDB) for CRUD operations, and developed JavaScript code for browser interactions and API integrations.`,
    technologies: ["JavaScript", "SQL", "MongoDB", "API Integration"],
  }
];


export const PROJECTS = [
  {
    title: "Plums Notes",
    image: plums,
    description:
      "A full-stack web application for secure note-taking and file management. Features OAuth authentication (Google login), user account management, and the ability to store and organize notes and files in a user-friendly interface.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "OAuth", "Tailwind CSS"],
    url: "https://plums-olive.vercel.app/",
  },
  {
    title: "E-Commerce Website",
    image: carShop,
    description:
      "A scalable e-commerce platform focused on backend architecture. Implements secure JWT-based authentication, product catalog management, user account creation, and error handling. Supports CRUD operations for product listings and user accounts.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "JWT", "REST API"],
    url: "https://cardeal.onrender.com/",
  },
  {
    title: "To-Do List API",
    image: toDoList,
    description:
      "A RESTful API built with Express.js and MongoDB for managing to-do lists. Features OAuth authentication (Google login), account creation, and CRUD operations for tasks. Includes Swagger documentation for easy API exploration and testing.",
    technologies: ["Express.js", "MongoDB", "OAuth", "Swagger", "Mongoose"],
    url: "https://todolist-237p.onrender.com/",
  },
  {
    title: "Pirate Style Stage",
    image: pirateStyleStage,
    description:
      "Showcasing a pirate-themed style with a parallax effect, this CSS design follows Style Stage guidelines, including the restriction that base HTML cannot be modified, to create an immersive experience, giving the illusion of flying over islands.",
    technologies: ["CSS", "Parallax Scrolling", "Creativity", "Responsive Design"],
    url: "https://pirate-style-stage.vercel.app/",
  },
];


export const CONTACT = {
  address: "166 North 5th West, Rexburg, ID 83440",
  phoneNo: "+1 208-757-7143",
  email: "claudio.parrra@gmail.com",
};
