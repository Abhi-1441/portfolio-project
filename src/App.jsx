import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";


function App() {
  return (
    <Router>
      <div className="min-h-screen pt-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 font-poppins">
        <Navbar />
        <ParticleBackground />
        <main className="container mx-auto py-12 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
