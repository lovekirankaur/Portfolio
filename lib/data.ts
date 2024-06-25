import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dinoImg from "@/public/dino.png";
import cheetcodeImg from "@/public/cheetcode.png";
import pizzaImg from "@/public/pizza.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

 export const experiencesData = [
  
  {
    title: "Software Developer Engineer",
    location: "Chandigarh, India",
    description:
      "Interned as a Software developer for 6 months. Upskilled to various technologies such as React.js.",
    icon: React.createElement(CgWorkAlt), //in ts files jsx elements are not directly written therefo React.createElement(CgWorkAlt) instead of <CgWorkAlt/>
    date: "Jan 2023 - June 2023",
  },
  {
    title: "Graduated",
    location: "Chandigarh, India",
    description:
      "Graduated with a Bachelor of Engineering from Panjab University, Specializing in Biotechnology.",
    icon: React.createElement(LuGraduationCap),
    date: " Aug 2019 - May 2023",
  },
] as const;

export const projectsData = [
  {
    title: "CheetCode",
    description:
      "Cheetcode is a dynamic web application built using Next.js that mimics the functionality of coding challenge platforms like LeetCode.",
    tags: ["React.js", "Next.js", "Typescript", "Tailwind", "Recoil", "FirebBase"],
    imageUrl: cheetcodeImg,
    visit: "https://cheetcode-lovekiran-kaurs-projects.vercel.app/"
  },
  {
    title: "Pizza co.",
    description:
      "Pizza Co is an advanced food delivery application developed using React.js, providing a seamless user experience for browsing, selecting, and ordering pizzas.",
    tags: ["React.js", "React-Router", "Redux", "Tailwind"],
    imageUrl: pizzaImg,
    visit: "https://pizza-co-lovekiran-kaurs-projects.vercel.app/"
  },
  {
    title: "Dino Game",
    description:
      "This project is a simple implementation of the classic Dino game using vanilla JavaScript, HTML, and CSS.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: dinoImg,
    visit: "https://dino-game-lovekiran-kaurs-projects.vercel.app/"
  },
] as const;

export const skillsData = [
  "C/C++",
  "Data Structures",
  "Algorithms",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Python",
  "Framer Motion",
  "Figma",
  "UI/UX",
  "SEO"
] as const; 