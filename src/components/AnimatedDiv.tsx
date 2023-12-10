import { useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedDivProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
};

const AnimatedDiv = ({
  id,
  className,
  children,
  variants,
  delay,
}: AnimatedDivProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      id={id}
      variants={variants || defaultVariants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: delay || 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
