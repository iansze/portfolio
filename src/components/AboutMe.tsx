import { motion } from "framer-motion";

import AnimatedDiv from "../components/AnimatedDiv";

const AboutMe = () => {
  return (
    <div className=" my-4  flex w-full flex-col gap-2  py-4 ">
      <AnimatedDiv id="about" className=" my-4  flex flex-col  gap-2 p-4">
        <motion.div className="flex  flex-col gap-2 ">
          <h1 className="text-center text-3xl font-bold">ABOUT ME</h1>
          <p className="">
            I'm Wing Hon Winco Sze, a Front-End Developer with aspirations to
            become a Full-Stack Developer.
          </p>
          <p className="">
            My expertise lies in React, Angular, HTML, CSS, and Tailwind,
            complemented by a growing proficiency in back-end development.
            Currently focusing on improving my Java skills.
          </p>
          <p className="">
            Passionate about crafting comprehensive web solutions, I am
            dedicated to provide seamless and efficient full-stack capabilities,
            aiming to create user-centered applications.
          </p>
        </motion.div>
      </AnimatedDiv>
    </div>
  );
};

export default AboutMe;
