import { motion } from "framer-motion";
import Anchor from "./Anchor";

const Nav = () => {
  return (
    <motion.div
      className="absolute inset-0 top-0 mx-auto flex min-h-min w-11/12 justify-between"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <img src="" alt="" className="" />
      <div className="flex gap-4 p-2">
        <Anchor page="About">About</Anchor>
        <Anchor page="Projects">Projects</Anchor>
        <Anchor page="Contact">Contact</Anchor>
      </div>
    </motion.div>
  );
};

export default Nav;
