import Nav from "../components/Nav";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import engineerImg from "/engineer.png";
import useMediaQuery from "../hooks/useMediaQuery";
import HoverButton from "../components/HoverButton";

const Header = () => {
  const mediaQuery = useMediaQuery();
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
    <header id="header" className="flex items-center justify-center px-8">
      <Nav />
      <motion.div
        className="flex h-screen flex-col items-center justify-center gap-2 p-4 text-center lg:w-10/12 lg:px-8 lg:text-left"
        style={{ opacity, scale }}
      >
        <motion.p
          className="text-lg "
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I am
        </motion.p>
        <motion.h1
          className="text-3xl font-semibold text-red-400"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          Wing Hon Winco Sze
        </motion.h1>
        <motion.p
          className="leading-7"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          A passionate software engineer with a strong foundation in computer
          science and a keen interest in web development. My expertise lies in
          building efficient, user-friendly solutions, and I'm continually
          exploring new technologies to enhance my skill set and contribute to
          innovative projects.
          <br />
        </motion.p>

        <HoverButton text="Contact Me" />
      </motion.div>
      {mediaQuery > 768 ? (
        <div className="">
          <img src={engineerImg} alt="" className="bg-transparent" />
        </div>
      ) : null}
    </header>
  );
};

export default Header;
