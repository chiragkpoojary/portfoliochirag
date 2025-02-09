import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Example } from "./Animated-menu";

const Nav = () => {
  const [navclick, setnavclick] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    console.log("navclick state:", navclick);
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navclick]);

  const clicked = (event) => {
    console.log("navclick state:", navclick);
    console.log("Clicked function called");
    event.preventDefault();
    setnavclick(prevState => !prevState);
  }

  return (
    <>
      <nav className={`shadow-xl h-auto w-full ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
        <div className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center">
          <div className="sm:ml-10">
            <img src="output-onlinepngtools (1).png" alt="logo" className="max-h-24"/>
          </div>
          <div className="md:hidden block" onClick={clicked}>
            <Example />
          </div>
          <div className="hidden md:flex md:items-center md:space-x-14 xl:mr-40">
            {['Home', 'Projects', 'Blogs'].map((item) => (
              <span key={item} className="font-semibold text-xl text-gray-500 cursor-pointer">
                {item}
              </span>
            ))}
            <a href="Chirag_resume.pdf">
              <motion.button 
                whileTap={{ scale: 0.85 }} 
                className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-white font-bold px-6 py-2 rounded-md"
              >
                Resume
              </motion.button>
            </a>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {navclick && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-indigo-700  z-50 flex flex-col justify-center items-start p-8"
          >
            <button onClick={clicked} className="absolute top-1 right-1 text-white">
              <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 32 20" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {['Home', 'Projects', 'Blogs'].map((item, index) => (
              <motion.span 
                key={item} 
                className="font-semibold text-4xl text-white mb-6 cursor-pointer"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.span>
            ))}
            <motion.a 
              href="Chirag_resume.pdf"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button 
                whileTap={{ scale: 0.85 }} 
                className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-white font-bold px-6 py-4 rounded-md mt-6"
              >
                Resume
              </motion.button>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;