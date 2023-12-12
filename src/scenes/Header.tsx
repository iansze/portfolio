import Nav from "../components/Nav";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import HoverButton from "../components/HoverButton";
import "./Header.css";

const Header = () => {
  const { scrollY } = useScroll();
  const fadeOutStart = 300;
  const fadeOutEnd = 1200;
  const shrinkStart = 300;
  const shrinkEnd = 1200;

  const scale = useSpring(
    useTransform(scrollY, [shrinkStart, shrinkEnd], [1, 0]),
    {
      stiffness: 500,
      damping: 100,
    },
  );

  const opacity = useSpring(
    useTransform(scrollY, [fadeOutStart, fadeOutEnd], [1, 0]),
  );

  return (
    <header
      id="header"
      className="relative flex items-center justify-center px-8"
    >
      <Nav />
      <motion.div
        className="text-text z-10 flex h-screen flex-col items-center justify-center gap-2 p-4 text-center backdrop:flex lg:w-4/6 lg:px-8 lg:text-left xl:w-1/2 "
        style={{ opacity, scale }}
      >
        <motion.p
          className="font-robotoSlab text-secondary text-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I am
        </motion.p>
        <motion.h1
          className="font-robotoSlab text-highlight  text-3xl font-semibold"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          Wing Hon Winco Sze
        </motion.h1>
        <motion.div
          className="font-openSans text-secondary leading-7"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="">
            A passionate software engineer with a strong foundation in computer
            science and a keen interest in web development.
          </p>
          <p className="mt-3">
            My expertise lies in building efficient, user-friendly solutions,
            and I'm continually exploring new technologies to enhance my skill
            set and contribute to innovative projects.
          </p>
        </motion.div>

        <HoverButton text="Contact Me" />
      </motion.div>
    </header>
  );
};

export default Header;
