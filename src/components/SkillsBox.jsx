import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    SiC, SiCplusplus, SiMui, SiTailwindcss, SiRedux, SiMongodb, SiFirebase,
    SiExpress, SiArduino, SiRaspberrypi
} from 'react-icons/si';
import { FaJava, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaBootstrap, FaRocket, FaStar } from 'react-icons/fa';

const SkillsBox = () => {
    const filters = ["All", "Web Development", "Machine Development"];
    const [filter, setFilter] = useState("All");

    const HandleClick = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    const skills = {
        "All": [
            { name: "C", icon: <SiC /> },
            { name: "C++", icon: <SiCplusplus /> },
            { name: "Java", icon: <FaJava /> },
            { name: "DSA", icon: null },
            { name: "OOP", icon: null },
            { name: "Git", icon: <FaGitAlt /> },
            { name: "GitHub", icon: <FaGithub /> },
            { name: "HTML", icon: <FaHtml5 /> },
            { name: "CSS", icon: <FaCss3Alt /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "React", icon: <FaReact /> },
            { name: "MUI", icon: <SiMui /> },
            { name: "Bootstrap", icon: <FaBootstrap /> },
            { name: "Tailwind", icon: <SiTailwindcss /> },
            { name: "Redux", icon: <SiRedux /> },
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "Firebase", icon: <SiFirebase /> },
            { name: "Express", icon: <SiExpress /> },
            { name: "Arduino", icon: <SiArduino /> },
            { name: "Python", icon: <FaPython /> },
            { name: "Raspberry Pi", icon: <SiRaspberrypi /> },
            { name: "Sensors", icon: null }
        ],
        "Web Development": [
            { name: "HTML", icon: <FaHtml5 /> },
            { name: "CSS", icon: <FaCss3Alt /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "React", icon: <FaReact /> },
            { name: "MUI", icon: <SiMui /> },
            { name: "Bootstrap", icon: <FaBootstrap /> },
            { name: "Tailwind", icon: <SiTailwindcss /> },
            { name: "Redux", icon: <SiRedux /> },
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "Firebase", icon: <SiFirebase /> },
            { name: "Express", icon: <SiExpress /> }
        ],
        "Machine Development": [
            { name: "C", icon: <SiC /> },
            { name: "C++", icon: <SiCplusplus /> },
            { name: "Arduino", icon: <SiArduino /> },
            { name: "Python", icon: <FaPython /> },
            { name: "Raspberry Pi", icon: <SiRaspberrypi /> },
            { name: "Sensors", icon: null }
        ]
    };

    return (
        <div className='skillsBox mt-32'>
            <h3 className="text-2xl md:text-3xl flex justify-center text-gray-800 dark:text-gray-100 mb-4">
                My SkillSet <FaStar className='inline ml-2 text-yellow-400' />
            </h3>
            <div className="flex max-sm:flex-col w-full items-center justify-center mt-6">
                {filters.map((filterName, index) => (
                    <button
                        key={index}
                        className={`filter_btn ${filter === filterName ? 'active-filter bg-indigo-500 text-white' : ''} mx-2 py-2 px-4 rounded-lg transition-colors`}
                        onClick={() => HandleClick(filterName)}
                    >
                        {filterName}
                    </button>
                ))}
            </div>
            <ul className="mt-6 flex flex-wrap justify-center space-x-4 max-sm:space-x-2">
                <AnimatePresence>
                    {skills[filter].map((skill, index) => (
                        <motion.li
                            key={index}
                            className="flex items-center max-sm:items-start bg-primary text-white dark:bg-secondary p-3 max-sm:p-2 rounded-lg shadow-md text-xl max-sm:text-base mb-4"
                            initial={{ scale: 0.3 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {skill.icon && <span className="mr-2">{skill.icon}</span>}
                            {skill.name}
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>

        </div>
    );
};

export default SkillsBox;
