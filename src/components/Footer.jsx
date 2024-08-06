import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full flex border-t-2 border-gray-300 dark:border-gray-800 p-4  text-center">
      <p className="w-1/3 text-gray-700 dark:text-gray-300 max-xl:hidden">
        Designed and developed by Abhishek Pakhmode
      </p>
      <p className="w-1/3 text-gray-600 dark:text-gray-400 max-xl:w-full">
        Copyright © {new Date().getFullYear()} Abhi-1441
      </p>
      <div className="w-1/3 flex justify-center space-x-6 max-xl:hidden">
        <a
          href="https://github.com/Abhi-1441"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-500 transition-colors"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.instagram.com/itss_abhi_shek/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-500 transition-colors"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-pakhmode-bbb76622b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-500 transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="mailto:pakhmodeabhishek1441@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-500 transition-colors"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
