// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

/* Experience Section Logo's*/
import svcodetechsolutions_logo from "./assets/company_logo/svcodetechsolutions_logo.png";
import infosys_logo from "./assets/company_logo/infosys_logo.png";
import cisco_logo from "./assets/company_logo/cisco_logo.png";

// Education Section Logo's
import lnctLogo from "./assets/education_logo/lnct_logo.png";
import dduLOgo from "./assets/education_logo/ddu_logo.png";
import xavierLogo from "./assets/education_logo/xavier_logo.png";
import purLogo from "./assets/education_logo/pur_logo.png";
// Project Section Logo's
import blogLogo from "./assets/work_logo/blog_logo.png";
import taskLogo from "./assets/work_logo/task_logo.png";
import WeatherLogo from "./assets/work_logo/weather_logo.png";
import portLogo from "./assets/work_logo/port_logo.png";
import csbasicLogo from "./assets/work_logo/cs_logo.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: svcodetechsolutions_logo,
    role: "Web Developer",
    company: "Sv Codetech Solutions",
    date: "January 2025 - March 2025",
    desc: "Completed a Web Development Internship at SVCODE Tech Solutions, building projects using HTML, CSS, JavaScript, API integration, and GitHub.Developed web applications (To-Do List, Weather App, Blogging Platform) during a Web Development Internship at SVCODE Tech Solutions.Gained hands-on experience in front-end development, API integration, and GitHub version control through an internship at SVCODE Tech Solutions.",
    skills: ["HTML", "CSS", "JavaScript", "React JS", "API", "GitHub"],
  },
  {
    id: 1,
    img: infosys_logo,
    role: "Programming Fundamentals using Python - Part 1",
    company: "Infosys Springboard",
    date: "December 2024 - January 2025",
    desc: "Successfully completed the Programming Fundamentals using Python Part 1 certification (Jan 2024), gaining knowledge in Python programming basics including variables, data types, control structures, and foundational coding practices.",
    skills: [
      "Python",
      "Variables",
      "Data Types",
      "Control Structures",
      "Foundational Coding Practices",
    ],
  },
  {
    id: 2,
    img: cisco_logo,
    role: "Cybersecurity Intern",
    company: "Cisco Networking Academy",
    date: "May 2024 - July 2024",
    desc: "Enthusiastic Computer Science student with a strong interest in Cybersecurity and Web Development. Skilled in building secure, efficient, and user-friendly web applications while focusing on identifying vulnerabilities, implementing best security practices, and ensuring data protection. Eager to apply technical knowledge in a practical environment, contribute to secure web solutions, and gain hands-on experience in cybersecurity for web technologies.",
    skills: [
      "OWASP Top 10, Web Application Security, Penetration Testing basics",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: lnctLogo,
    school: "LNCT University, Bhopal",
    date: "Sept 2023 - June 2025",
    grade: "8.03 CGPA",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from LNCT University, Bhopal. During my time at LNCT, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at LNCT University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: dduLOgo,
    school: "Deen Dayal Upadhyaya University, Gorakhpur",
    date: "Sept 2020 - Aug 2023",
    desc: "I completed my Bachelor's degree in Computer Science (BCA) from  Deen Dayal Upadhyaya University, Gorakhpur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Deen Dayal Upadhyaya University, Gorakhpur allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Computer Application - BCA (Computer Science)",
  },
  {
    id: 2,
    img: xavierLogo,
    school: "St. Xavier's Public School, Gorakhpur",
    date: "Apr 2019 - March 2020",
    desc: "I completed my class 12 education from St. Xavier's Public School, Gorakhpur, under the CBSE board, where I studied Accountancy, Business Studies , and Economics with Computer Science.",
    degree: "CBSE(XII) - Commerce with Computer Science",
  },
  {
    id: 3,
    img: purLogo,
    school: "Purvanchal Public School, Gorakhpur",
    date: "Apr 2017 - March 2018",
    desc: "I completed my class 10 education from Purvanchal Public School, Gorakhpur, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Portfolio website",
    description:
      "This portfolio website is a digital version of my resume, designed to showcase my skills, education, work experience, and projects. It highlights my professional journey and achievements while providing easy access to my work samples and contact details. The website serves as an online platform where recruiters, employers, and collaborators can explore my qualifications and connect with me instantly. Built with React JS, HTML, CSS, and JavaScript, tailWind CSS the website features a clean and modern design, ensuring a user-friendly experience across all devices. It includes sections for my bio, skills, experience, education, and projects, along with links to my social media profiles and GitHub repository.",
    image: portLogo,
    tags: [
      "React JS",
      "API",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "tailWind CSS",
      "GitHub",
      "tilt.js",
    ],
    github:
      "https://github.com/Deepak979455/SVCODETECHSOLUTION_PROJECTS/tree/main/WEATHER%20FORECAST%20APP",
  },
  {
    id: 1,
    title: "CsBasic Educational website",
    description:
      "Designed and developed a basic educational website for Computer Science that provides interactive learning resources, simplified tutorials, and beginner-friendly explanations of core concepts including programming, algorithms, databases, web technologies, and problem-solving, while ensuring a clean responsive interface, smooth navigation, and structured content flow to support students in understanding fundamentals effectively, with integrated practice sections, quizzes, and reference material, demonstrating skills in front-end development, user-centric design, content organization, and educational technology, highlighting ability to translate theoretical knowledge into practical learning tools through coding, creativity, and web development best practices for academic and self-learning purposes.",
    image: csbasicLogo,
    tags: [
      "Php",
      "API",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "GitHub",
      "MongoDB",
    ],
    github: "https://github.com/Deepak979455/Cs_Basics",
  },
  {
    id: 2,
    title: "Blogging Platform",
    description:
      "A full-stack web application designed to allow users to create, manage, and share blogs. The platform provides a user-friendly interface for writers to publish content, readers to engage through comments, and administrators to moderate activity.",
    image: blogLogo,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github:
      "https://github.com/Deepak979455/SVCODETECHSOLUTION_PROJECTS/tree/main/BLOGGING%20PLATFORM",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A productivity-focused web application designed to help users create, organize, and track tasks efficiently. The app allows users to add, edit, and delete tasks, set priorities and deadlines, categorize tasks into projects, and mark them as complete. Implemented features like reminders, progress tracking, and responsive UI for seamless usage across devices. Built with [mention your tech stack, e.g., HTML, CSS, JavaScript, MongoDB], ensuring smooth performance and scalability.",
    image: taskLogo,
    tags: ["MongoDB", "HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/Deepak979455/SVCODETECHSOLUTION_PROJECTS/tree/main/todoapp",
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "Developed a responsive Weather App using [tech stack, e.g., HTML, CSS, JavaScript/API] that fetches real-time weather data from OpenWeather API and displays location-based forecasts with a clean UI. Features include current weather conditions, 5-day forecast, temperature, humidity, wind speed, and weather icons. Implemented error handling for invalid locations and optimized for performance and accessibility.",
    image: WeatherLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/Deepak979455/SVCODETECHSOLUTION_PROJECTS/tree/main/WEATHER%20FORECAST%20APP",
  },
];
