import "./button.css";
import Anchor from "./Anchor";
import { motion } from "framer-motion";

type HoverButtonProps = {
  text: string;
};

const HoverButton = ({ text }: HoverButtonProps) => {
  return (
    <motion.div
      className="svg-wrapper cursor-pointer"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
    >
      <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
        <rect id="shape" height="40" width="150" />
        <Anchor page={"Contact"}>
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="svg-text"
          >
            {text}
          </text>
        </Anchor>
      </svg>
    </motion.div>
  );
};

export default HoverButton;
