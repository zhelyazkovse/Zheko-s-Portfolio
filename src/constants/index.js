import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  telerik,
  athletepullup,
  iphone,
  giphyproject,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },


];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Nodejs",
    icon: nodejs,
  },


];

const experiences = [
  {
    title: "Full-Stack .NET Developer",
    company_name: "Telerik Academy",
    icon: telerik,
    iconBg: "#383E56",
    date: "December 2023 - June 2024",
    points: [
      "Developing and maintaining web applications using JavaScript, React.js and other related technologies.",
      "Contributed to and was responsible for multiple projects, collaborating with mentors and fellow students to build scalable, real-world applications.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },


];

const testimonials = [
  {
    testimonial:
      "Soon...(tm)",

  },
  {
    testimonial:
      "Soon...(tm)",
  },

];

const projects = [
  {
    name: "Apple iPhone Website",
    description:
      "Inspired by Apple's website, this app will help you choose the device that fits you.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Three JS",
      
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },

    ],
    image: iphone,
    source_code_link: "https://apple-i-phone-website-clone.vercel.app/",
  },
  {
    name: "Giphy",
    description:
      "A giphy-like application for searching and sharing funny gifs with your friends.",
    tags: [
      {
        name: "JS",
        color: "yellow-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: giphyproject,
    source_code_link: "https://github.com/A58-Team-03/Web-Project-Giphy.git",
  },
  {
    name: "Fitness app",
    description:
      "Web-based platform that allows users to plan, set goals and fitness challenges in a modern way.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },

    ],
    image: athletepullup,
    source_code_link: "https://github.com/Team-React-Newbies/fitness-app-final.git",
  },

];

export { services, technologies, experiences, testimonials, projects };
