import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import MyPhoto from '../assets/images/general/MyCartoon.png'
import WavingHand from '../assets/images/general/wave-hello.gif'

const HeroBanner = () => {
  return (
    <div className="min-h-max mb-10 sm:mb-40 flex justify-center bg-gradient-to-b sm:flex-col md:px-8 xl:px-40">
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <div className="text-lg md:text-xl lg:text-2xl  text-gray-800 dark:text-gray-200">
            Hello there
            <img src={WavingHand} alt=" " className="inline-block h-8 w-8 ml-2" />, &nbsp;My name is
          </div>
          <div className="name text-4xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-4">
            Abhishek<br />
            &nbsp;&nbsp;&nbsp;Pakhmode
          </div>

          <div className="profession text-2xl md:text-3xl lg:text-4xl  text-gray-700 dark:text-gray-300 mt-6">
            I'm a{' '}
            <div className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 bg-clip-text text-transparent ">
              <Typewriter
                options={{
                  strings: [
                    'MERN Stack Developer',
                    'Robotics Enthusiast',
                    'Coder',
                    'Problem Solver',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className="text-base hidden lg:block text-gray-600 dark:text-gray-400 mt-4 max-w-lg">
            Dedicated to crafting seamless digital experiences through code and innovation. Experienced in the MERN stack, I strive to create efficient and elegant solutions for complex challenges in the web development world 😊.
          </div>

        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-full sm:w-1/2 flex justify-center"
        >
          <img src={MyPhoto} alt="_" className="w-1/2 sm:w-2/3 z-10" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner