import React from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect } from 'react'


const technologyStack = [
    {
        name: 'HTML',
        image: "/tech-icons/html.png",
      
    },
    {
        name: 'CSS',
        image: "/tech-icons/css.png",
      
    },
    {
        name: 'SQL',
        image: "/tech-icons/sql.png",

    },
    {
        name: "React js",
        image: "/tech-icons/react.png",

    },
    {
        name: "Javascript",
        image: "/tech-icons/javascript.png",
       
    },
    {
        name: "Typescript",
        image: "/tech-icons/typescript (1).png",
      
    },
    {
        name: "Node js",
        image: "/tech-icons/nodejs.png"
    },
    {
        name: "Tailwind CSS",
        image: "/tech-icons/tailwind.png",
       
    },
    {
        name: "Mongo",
        image: "/tech-icons/mongo-db.png",
       
    },
    {
        name: "Git",
        image: "/tech-icons/git.png",
       
    }
]

function TechStack() {
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
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.9
            }
        }
    };

    return (
        <motion.div className="  text-center "  >
            <div className="flex flex-col items-center justify-center">
                <motion.h1 
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mt-24"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #818cf8, #06b6d4)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                    variants={itemVariants}
                    initial="hidden"
                    animate={controls} ref={ref}
                >
                    Technology Stack
                </motion.h1>
   
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl font-medium text-accent text-center max-w-3xl mt-10"
                    variants={itemVariants}
                    initial="hidden"
                    animate={controls}
                >
                   I am passionate about refining my skills through continuous updates to my personal technology stack.
                </motion.p>
                
                <motion.div 
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 md:gap-10 gap-4 pt-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    {technologyStack.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className="flex flex-col items-center"
                            variants={itemVariants}
                        >
                            <motion.img
                                src={item.image}
                                alt={item.name}
                                className="w-28 h-28 object-contain"
                                whileHover={{ scale: 0.85 }}
                            />
                            <p className="mt-2 text-sm text-center">{item.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default TechStack;