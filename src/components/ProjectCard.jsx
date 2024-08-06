// src/components/ProjectCard.js
import React from 'react';
import { FaGithub, FaRocket } from 'react-icons/fa';

const ProjectCard = ({ title, img, description, techs, github, website }) => (
  <div className="flex flex-col h-full p-6">
    <img src={img} alt={title} className="w-full h-48  object-cover rounded-md mb-4" />
    <h3 className="text-xl xl:text-2xl font-semibold text-primary dark:text-secondary mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-2 ">{description}</p>
    <p className="text-gray-600 dark:text-gray-400 mb-4">
      <strong>Skills: </strong>{techs.join(', ')}
    </p>
    <div className="flex space-x-4">
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="p-1 bg-primary dark:bg-secondary text-white rounded-md hover:underline">
          <FaGithub className='inline-block ' /> GitHub
        </a>
      )}
      {website && (
        <a href={website} target="_blank" rel="noopener noreferrer" className="p-1 bg-primary dark:bg-secondary text-white rounded-md hover:underline">
          <FaRocket className='inline-block ' /> Live Demo
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
