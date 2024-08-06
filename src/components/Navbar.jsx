import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/general/Portfolio Logo.png';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { useTheme } from './ThemeContext';


const Navbar = () => {

    const navigate = useNavigate();
    const { darkMode, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navigateTo = (path) => () => {
        setMenuOpen(false);
        navigate(path);
    };

    return (
        <header className="fixed top-0 w-full  glass-effect bg-gray-100/20 dark:bg-gray-800/20 shadow max-sm:p-2 p-4 z-50 ">
            <div className="flex max-lg:p-4 pl-32 pr-24  justify-between items-center">
                <img src={Logo} alt="A" className="w-12 max-sm:w-10 rounded-full cursor-pointer" onClick={navigateTo('/')} />
                <div className="sm:hidden block ">
                    <button className='text-xl text-gray-700 dark:text-gray-300' onClick={toggleMenu}>
                        {menuOpen ?
                            <FaTimes /> : <FaBars />
                        }
                    </button>
                    <div className={`absolute w-max top-16 right-8 z-10 bg-gray-200 dark:bg-gray-800 shadow-lg rounded-lg p-4 flex space-x-8 items-center ml-auto ${menuOpen ? 'block' : 'hidden'} `}>
                        <nav className="flex flex-col lg:flex-row">
                            <span onClick={navigateTo('/')} className="pb-1 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors underline-transition cursor-pointer">
                                <AiOutlineHome className='inline mr-1' />
                                Home
                            </span>
                            <span onClick={navigateTo('/about')} className="py-1 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors underline-transition cursor-pointer">
                                <AiOutlineUser className='inline mr-1' />
                                About
                            </span>
                            <span onClick={navigateTo('/projects')} className="py-1 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors underline-transition cursor-pointer">
                                <AiOutlineFundProjectionScreen className='inline mr-1' />
                                Projects
                            </span>
                            <span onClick={navigateTo('/resume')} className="py-1 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors underline-transition cursor-pointer">
                                <CgFileDocument className='inline mr-1' />
                                Resume
                            </span>
                            <button
                                onClick={toggleTheme}
                                className="py-1 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors cursor-pointer"
                            >
                                {darkMode ? <FaSun /> : <FaMoon />}
                            </button>
                        </nav>
                    </div>

                </div>
                <nav className='hidden sm:flex space-x-8'>
                    <span onClick={navigateTo('/')} className="flex items-center text-xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors underline-transition cursor-pointer">
                        <AiOutlineHome className='m-1' />
                        Home
                    </span>
                    <span onClick={navigateTo('/about')} className="flex items-center text-xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors underline-transition cursor-pointer">
                        <AiOutlineUser className='m-1' />
                        About
                    </span>
                    <span onClick={navigateTo('/projects')} className="flex items-center text-xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors underline-transition cursor-pointer">
                        <AiOutlineFundProjectionScreen className='m-1' />
                        Projects
                    </span>
                    <span onClick={navigateTo('/resume')} className="flex items-center text-xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors underline-transition cursor-pointer">
                        <CgFileDocument className='m-1' />
                        Resume
                    </span>
                    <button
                        onClick={toggleTheme}
                        className="relative text-xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors"
                    >
                        <span className="circle-transition" />
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </nav>


            </div>
        </header>

    );
};

export default Navbar;
