import { motion } from "framer-motion";

import AnimatedDiv from "../components/AnimatedDiv";

const AboutMe = () => {
  return (
    <div className=" my-4  flex w-full flex-col gap-2  py-4  ">
      <AnimatedDiv
        id="about"
        className=" mx-auto  my-4 flex  flex-col gap-2 p-4 md:w-10/12  "
      >
        <motion.div className="flex  flex-col gap-3 ">
          <div className="mb-2 flex items-center">
            <div className="border-border mr-4 grow border-b border-solid"></div>
            <h1 className="font-robotoSlab text-primary text-center text-3xl font-bold ">
              ABOUT ME
            </h1>
            <div className=" border-border ml-4 grow border-b border-solid"></div>
          </div>
          <p className="font-openSans text-secondary">
            I'm Wing Hon Winco Sze, a Front-End Developer with aspirations to
            become a Full-Stack Developer.
          </p>
          <p className="font-openSans text-secondary">
            My expertise lies in React, Angular, HTML, CSS, and Tailwind,
            complemented by a growing proficiency in back-end development.
            Currently focusing on improving my Java skills.
          </p>
          <p className="font-openSans text-secondary">
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
