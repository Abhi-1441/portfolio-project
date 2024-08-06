import React from 'react'

const Introduction = () => {
    return (
        <div className='items-center p-8 lg:p-16 xl:px-48 flex flex-col '>
            <h1 className="text-2xl sm:text-3xl text-gray-800 dark:text-gray-200 mb-8 sm:mb-12">
                Let Me <span className='text-primary dark:text-secondary'>Introduce</span> Myself
            </h1>
            <ul className=" list-disc font-semibold sm:text-justify sm:text-lg text-gray-600 dark:text-gray-400">
                <li className=" mb-4">
                    I've always had a deep passion for programming, constantly exploring new languages and frameworks to expand my knowledge and skills.
                </li>
                <li className=" mb-4">
                    Skilled in <span className='text-primary dark:text-secondary'>C++, Javascript, and Python </span> , I enjoy crafting efficient and impactful applications.
                </li>
                <li className=" mb-4">
                    My field of interest is building new <span className='text-primary dark:text-secondary'>Web Technologies </span>and Products and also in areas related to <span className='text-primary dark:text-secondary'>Robotics</span>.
                </li>
                <li className=" mb-4">
                    I love bringing ideas to life using <span className='text-primary dark:text-secondary'>Node.js and React.js</span>, always focusing on delivering user-friendly products.
                </li>
            </ul>
        </div>
    )
}

export default Introduction