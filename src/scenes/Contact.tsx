import { faEnvelopeOpen, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const [icon, setIcon] = useState(faEnvelope);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIcon(faEnvelopeOpen);
        setShowForm(true);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  useEffect(() => {
    if (showForm) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [showForm, controls]);

  return (
    <section id="contact" className=" p-4" ref={ref}>
      <motion.h1 className="text-center text-3xl font-bold">
        Contact Me
      </motion.h1>

      <motion.div className="mt-4 text-center">
        <FontAwesomeIcon icon={icon} size="2x" />
      </motion.div>

      {icon === faEnvelopeOpen && showForm && (
        <motion.form
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { scale: 0.05, y: -180 },
            visible: { scale: 1, y: 0 },
          }}
          transition={{
            type: "spring",
            stiffness: 100,
          }}
          className="mx-auto flex w-9/12 flex-col gap-1"
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="rounded-sm border p-1"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="rounded-sm border p-1"
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols={20}
            rows={5}
            className="rounded-sm border p-1"
          ></textarea>
          <button type="submit" className="mt-2 rounded-sm border p-1">
            Send
          </button>
        </motion.form>
      )}
    </section>
  );
};

export default Contact;
