import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {  useInView, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

import { ArrowRight } from "lucide-react"; 

const arrproject = [{
    projectname: "MultiPlayer ChessApp",
    image: "./projects/chess.png",
    discription:"CNote is a collaborative note-taking app with tags, search, and sharing features, helping students organize, store, and access notes seamlessly across devices",
    link:"https://connectchess.vercel.app"
},
{
projectname: "CNote",
image: "./projects/cnote.png",
discription:"ChessConnect is an interactive chess app with live video chat, multiplayer support, and legal move validation, enabling engaging one-on-one gameplay with real-time communication.",
link:"https://cnote.vercel.app"
},
    {
        projectname: "Jokes App",
        image: "./projects/image.png",
        discription:"The Jokes App is a React-based web application that fetches data from an external API and displays a collection of jokes on the user interface. The application aims to provide a seamless and enjoyable experience for users who want to read and share jokes.",
        link:"https://github.com/ChiragKpoojary/Jokes_generator"
    },
    {
        projectname: "Music App",
        image: "./projects/img2.png",
        discription:"The Music Player App is a user-friendly web application that allows users to play, pause, and skip music tracks. Built with plain JavaScript and HTML, this app offers a straightforward and enjoyable music listening experience.",
        link:"https://chiragkpoojary.github.io/musicplayer.github.io/"
    },
];

const Project = () => {
  const controls = useAnimation();
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2
            }
        }
    };
    

  return (
    <section id="projects" className="scroll-mt-40" ref={ref}>
    <motion.div className="text-center mt-28"  >
     <div className="flex flex-col items-center justify-center " >
        <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center sm:h-24 "
            style={{
                backgroundImage: 'linear-gradient(to right, #818cf8, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}
            variants={itemVariants}
                    initial="hidden"
                    animate={controls}
            
        >
            Projects
        </motion.h1>
        <div className="container mx-auto px-4 pt-12">
      <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center"
      variants={containerVariants}
                    initial="hidden"
                    animate={controls}>
        {arrproject.map((item, index) => (
          <motion.div 
                            key={index} 
                            className="flex flex-col items-center"
                            variants={itemVariants}
                        >
          <TiltCard 
            
            img={item.image} 
            title={item.projectname} 
            dis={item.discription} 
            link={item.link}
            loading={"lazy"}
          />
          </motion.div>
        ))}
        
      </motion.div>
      <div className="flex justify-center items-center mt-24 mb-24">
 <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.open("https://github.com/chiragkpoojary?tab=repositories", "_blank")}
 className="flex items-center gap-3 px-6 py-3 border-2 border-cyan-500 bg-white rounded-full font-semibold text-lg tracking-wide shadow-md hover:shadow-lg transition-all duration-300 hover:ring-2 hover:ring-offset-2 hover:ring-cyan-400 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">
  SEE MORE
  <ArrowRight className="w-7 h-7 text-black " />
</motion.button>
</div>
    </div>
    </div>
    </motion.div>


    </section>
  );
};

const ROTATION_RANGE = 15.5;
const HALF_ROTATION_RANGE = 15.5 / 2;

const TiltCard = ({ img, title,dis,link }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-56 w-[18rem] sm:h-72 sm:w-[28rem] 2xl:h-96 2xl:w-[35rem] rounded-xl bg-slate-200 group"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 rounded-xl bg-white shadow-lg overflow-hidden"
      >
        <img 
          src={img} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-30"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a href={link}>
          <h3
            style={{
              transform: "translateZ(50px)",
            }}
            className="text-center text-3xl font-bold text-slate-950 mb-4"
          >
            {title}
          </h3>
          <p
            style={{
              transform: "translateZ(50px)",
            }}
            className="text-center text-xl text-slate-900 px-6 hidden sm:block"
          >
            {dis}
          </p>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;