import { BiDumbbell } from "react-icons/bi";
import WebDeveloper from "../assets/images/about/about.png";
import SkillsBox from "../components/SkillsBox";

const About = () => {
  return (
    <div className="mx-8 min-h-full lg:mx-24 ">
      <h2 className="text-2xl md:text-4xl text-gray-800 dark:text-gray-100 mb-8">
        About <span className="text-indigo-500">Me</span>
      </h2>
      <div className="flex flex-col md:flex-row w-full min-h-max justify-around items-center px-4 md:px-8 lg:px-8">
        <div className="w-full text-justify md:w-1/2 mb-8 md:mb-0">
          <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 ">
            Hi Everyone, I am <span className="text-indigo-500">Abhishek </span> from <span className="text-indigo-500"> Pune, India</span>.
          </p>
          <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 mb-4">
            I am currently working as a <span className="text-indigo-500"> MERN stack developer</span>.
          </p>
          <h4 className="text-base text-gray-800 dark:text-gray-100 mb-4">
            Beyond my tech stack, I'm eager to explore life's adventures. Some activities I love to do!
          </h4>
          <ul className="list-disc list-inside text-base text-gray-700 dark:text-gray-300">
            <li className="mb-2">Swimming</li>
            <li className="mb-2">Watch movies</li>
            <li className="mb-2">Playing badminton, chess, and much more..</li>
            <li className="mb-2">
              Fuel my adrenaline with intense gym workouts
              <BiDumbbell className="ml-1 inline text-indigo-500" size={24} />
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={WebDeveloper}
            alt="Web Developer"
            className="w-full z-10"
          />
        </div>
      </div>
      <SkillsBox />
    </div>
  );
};

export default About;
