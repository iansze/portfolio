import { motion } from "framer-motion";
import Anchor from "./Anchor";

const Nav = () => {
  return (
    <div className="absolute inset-0 top-0 mx-auto flex h-screen w-11/12  justify-between font-openSans font-semibold">
      <motion.div
        className="absolute right-0 z-20 flex h-min gap-4 p-2 text-primary"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Anchor page="About">About</Anchor>
        <Anchor page="Projects">Projects</Anchor>
        <Anchor page="Contact">Contact</Anchor>
      </motion.div>
    </div>
  );
};

export default Nav;
