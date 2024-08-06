// src/pages/Projects/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import keepnotesImage from '../assets/images/projects/note-keep_Image.png';
import secretsImage from '../assets/images/projects/SecretsImage.png';
import teamAutomatonsWebsiteImage from '../assets/images/projects/teamAutomatonsWebsiteImage.png';
import todoImage from '../assets/images/projects/todoList.png';
import tictactoeImage from '../assets/images/projects/tictactoe_Image.png';
import robots from '../assets/images/projects/TeamAutomatonsRobots2023.png';
import healthPredictAIImage from '../assets/images/projects/HealthPredictAI.png'; // Corrected image path

const ProjectsArray = [
  {
    title: "HealthPredict AI",
    img: healthPredictAIImage,
    description: "A web application that allows users to upload medical images and receive predictions for Diabetic Retinopathy (DR) stages and brain tumors using machine learning models.",
    techs: ["MERN stack", "Python (Flask)", "Machine Learning"],
    github: "https://github.com/Abhi-1441/HealthPredict_AI",
    website: "https://health-predict-ai.vercel.app/"
  },
  {
    title: "Keep-notes",
    img: keepnotesImage,
    description: "The project helps the user to keep track of the notes.",
    techs: ["nodejs", "ejs", "express"],
    github: "https://github.com/Abhi-1441/keep-notes",
    website: "https://abhi-1441.github.io/keep-notes/"
  },
  {
    title: "To-do List",
    img: todoImage,
    description: "The project comprises of dynamic to-do list, where the user can make their personalized list.",
    techs: ["nodejs", "mongoose", "mongoDB", "express"],
    github: "https://github.com/Abhi-1441/To-do-List",
    website: "https://to-do-list-abhi.vercel.app/"
  },
  {
    title: "Tic-tac-toe",
    img: tictactoeImage,
    description: "The game tic-tac-toe created by using React with basic UI/UX.",
    techs: ["React", "html", "css", "js"],
    github: "https://github.com/Abhi-1441/Tic-tac-toe",
    website: "https://abhi-1441.github.io/Tic-tac-toe/"
  },
  {
    title: "Secrets",
    img: secretsImage,
    description: "The project uses the sign-in with Google facility for user account registration and login. Users can share and read secrets anonymously.",
    techs: ["nodejs", "mongoose", "mongoDB", "passport", "OAuth 2.0", "express"],
    github: "https://github.com/Abhi-1441/Anonymously-Secrets-",
    website: "https://anonymous-secrets-3dcx.onrender.com/"
  },
  {
    title: "Team Automatons",
    img: teamAutomatonsWebsiteImage,
    description: "Contribution in developing the Team Automatons's Website.",
    techs: ["html/css", "bootstrap", "firebase"],
    website: "https://teamautomatons.in/"
  },
  {
    title: "Elephant & Rabbit Robot",
    img: robots,
    description: "The two robots are manufactured for competition \"ABU Robocon\". The task is to pick the rings, navigate, and throw the rings into the poles.",
    techs: ["python", "arduino", "sensors", "Raspberry Pi", "Nvidia Jetson"]
  }
];

const Projects = () => (
  <motion.div
    className='w-full py-3 sm:py-6 px-4 min-[500px]:px-24 sm:px-28  md:px-8 xl:px-32' // Add pt-24 or appropriate padding-top
    key="projects"
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    exit={{ scaleX: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="max-sm:text-3xl text-4xl  text-indigo-500 mb-8">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
      {ProjectsArray.map((project) => (
        <div key={project.title} className="flex flex-col">
          <div className="relative flex-grow flex flex-col bg-white/20 dark:bg-gray-800/20 rounded-lg shadow-lg overflow-hidden group transition-transform transform hover:scale-105">
            <ProjectCard
              title={project.title}
              img={project.img}
              description={project.description}
              techs={project.techs}
              github={project.github}
              website={project.website}
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default Projects;