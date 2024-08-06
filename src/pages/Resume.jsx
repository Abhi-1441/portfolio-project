import React, { useState, useEffect } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import pdf from '../assets/images/resume/Abhishek_resume.pdf';
import { motion } from 'framer-motion';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <motion.div className="resume flex flex-col items-center" key="resume"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="my-4">
                <a
                    href={pdf}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md flex items-center max-w-xs mx-auto justify-center max-sm:text-sm"
                >
                    <AiOutlineDownload className="mr-2" />
                    Download Resume
                </a>
            </div>

            <div className="resume my-4">
                <Document
                    file={pdf}
                    className="flex justify-center"
                >
                    <Page pageNumber={1} scale={width > 1024 ? 1.7 : width > 786 ? 0.8 : width > 524 ? 0.6 : width > 320 ? 0.5 : 0.4} />
                </Document>
            </div>

            <div className="my-4">
                <a
                    href={pdf}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md flex items-center max-w-xs mx-auto justify-center max-sm:text-sm"
                >
                    <AiOutlineDownload className="mr-2" />
                    Download Resume
                </a>
            </div>
        </motion.div>
    );
}

export default Resume;