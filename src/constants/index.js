import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a dedicated full-stack developer with a strong focus on building robust and scalable web applications. With over four years of hands-on experience, I have refined my expertise in front-end frameworks such as React and Next.js, alongside back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My mission is to leverage these skills to create innovative solutions that propel business growth while delivering seamless and impactful user experiences`;

export const ABOUT_TEXT = `I am a versatile and driven full-stack developer with a passion for crafting efficient, user-focused web applications. Over the past five years, I’ve gained extensive experience with technologies like React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey into web development stemmed from a deep curiosity about how things work, evolving into a career fueled by constant learning and a desire to tackle new challenges. I thrive in collaborative settings, where solving complex problems and delivering high-quality solutions is key. Beyond coding, I enjoy staying active, exploring emerging technologies, and contributing to open-source projects`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Associate Consultant",
    company: "Infosys Ltd.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2020 - 2022",
    role: "Software Developer",
    company: "Thinkzy Tech",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["HTML", "CSS", "Javascript", "React.js", "Node"],
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Spice Garden, Bangalore ",
  phoneNo: "+91 8107388307",
  email: "cjain9612@gmail.com",
};
