import React from "react";
import { motion, useInView } from "framer-motion";
const Home = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  const animatedImages = [
    {
      className:
        "w-[110px] h-auto md:w-[150px] xl:w-[170px] absolute top-1/4 left-1  md:-left-3.5 lg:top-24 lg:-left-14 z-[1]",
      src: "/quadrilateral.webp",
      alt: "",
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: 0.4, duration: 0.8 },
    },
    {
      className:
        "w-[135px] h-auto md:w-[150px] xl:w-[190px] lg:w-[170px] absolute top-1 right-1  lg:top-[1rem] lg:-right-3 z-[1]",
      src: "/triangle.webp",
      alt: "",
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: 0.6, duration: 0.8 },
    },
    {
      className:
        "w-[120px] h-auto md:w-[150px] lg:w-[150px] xl:w-[170px] absolute bottom-1 -left-8 md:-left-12 lg:bottom-[2rem] lg:-left-[3rem] z-[1]",
      src: "/twisted-torus.webp",
      alt: "",
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: 0.8, duration: 0.8 },
    },
    {
      className:
        "w-[126px] h-auto md:w-[150px] lg:w-[192px] absolute bottom-1/4 right-1 lg:bottom-[1rem] lg:-right-4 z-[1] xl:-right-12 xl:bottom-[4rem]",
      src: "/zig-zag.webp",
      alt: "",
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: 1, duration: 0.8 },
    },
  ];
  return (
    <>
      <motion.div
        className="container mx-auto my-auto"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div
          ref={ref}
          className="w-full h-screen flex  justify-center  overflow-hidden  xl:justify-end mt-16 sm:mt-20"
        >
          <motion.div className="relative w-[350px] h-[330px] sm:w-[380px] sm:h-[360px] md:w-[400px] md:h-[380px] lg:w-[450px] lg:h-[430px]  xl:h-[440px] xl:w-[500px] overflow-visible bg-gray-200 rounded-3xl  ">
            <motion.img
              className="w-full h-full "
              src="/vecteezy_happy-3d-student-boy-with-books-on-white-background-png_22484651.png"
              alt="Chirag's Avatar"
              initial={{ opacity: 0.5, y: 500 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 1 }}
              viewport={{ once: true }}
            />

            {animatedImages.map(
              (
                { className, src, alt, initial, animate, transition },
                index,
              ) => (
                <motion.img
                  key={index}
                  className={className}
                  src={src}
                  alt={alt}
                  initial={initial}
                  animate={inView ? animate : {}}
                  transition={transition}
                  aria-hidden={!inView}
                />
              ),
            )}
          </motion.div>
        </div>
        <div className="flex flex-col-reverse xl:flex-row xl:items-center xl:justify-between     xl:ml-9  -mt-[24rem]   sm:-mt-[40rem]">
          <div className="flex flex-col items-center text-center justify-center   xl:absolute  ">
            <motion.p className="font-montserrat font-bold text-2xl md:text-[34px] md:leading-[56px] lg:text-[36px] lg:leading-[88px]  text-center  xl:mt-8">
              Welcome to Chirag's Portfolio
            </motion.p>

            <motion.h2
              className="font-montserrat font-extrabold text-5xl md:text-[54px] md:leading-[56px] lg:text-[56px] lg:leading-[88px] xl:text-7xl bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text text-center lg:-mt-8 xl:mt-0 xl:-ml-40 "
              aria-label="Full Stack Web Developer"
            >
              <div className="flex flex-col sm:flex-row xl:flex-col justify-center items-center xl:items-start z-[10]">
                <span className="">Full Stack</span>
                <span className=" ">Web</span>
                <span className="">Developer</span>
              </div>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl
             font-medium text-accent
             text-center sm:text-left
             max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl
             mx-auto sm:mx-0 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-16
             mt-4 lg:mb-5"
            >
              I'm Chirag Poojary, an aspiring MERN developer with a passion for
              creating dynamic and responsive web applications.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Home;
