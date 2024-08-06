import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div
      className=" "
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="items-center justify-center md:justify-center w-full mb-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mt-8">
            Find Me On
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 p-4">
            Feel free to <span className='text-primary dark:text-secondary'>connect</span> with me
          </p>
          <div className="flex justify-center items-center h-8 space-x-4 md:space-x-8 ">
            <a href="https://github.com/Abhi-1441" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-500 hover:text-4xl transition-colors" />
            </a>
            <a href="https://www.instagram.com/itss_abhi_shek/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-500 hover:text-4xl transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-pakhmode-bbb76622b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-500 hover:text-4xl transition-colors" />
            </a>
            <a href="mailto:pakhmodeabhishek1441@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-500 hover:text-4xl transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
