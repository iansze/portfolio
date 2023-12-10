import { faEnvelopeOpen, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const id = import.meta.env.VITE_FORM_ID;
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const [icon, setIcon] = useState(faEnvelope);
  const [showForm, setShowForm] = useState(false);
  const [state, handleSubmit] = useForm(id);

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
    <section id="contact" className="p-4" ref={ref}>
      <motion.h1 className="text-center text-3xl font-bold">
        Contact Me
      </motion.h1>

      <motion.div className="mt-4 text-center">
        <FontAwesomeIcon icon={icon} size="2x" />
      </motion.div>

      {icon === faEnvelopeOpen && showForm && (
        <motion.form
          onSubmit={handleSubmit}
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
          className="mx-auto flex w-9/12 flex-col gap-1 text-black lg:w-1/2"
        >
          <label htmlFor="name" className="text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="rounded-sm border p-1"
            required
          />
          {state.errors && (
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          )}

          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="rounded-sm border p-1"
            required
          />
          {state.errors && (
            <ValidationError
              prefix="Email"
              field="email"
              className="text-red-500"
              errors={state.errors}
            />
          )}

          <label htmlFor="message" className="text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            cols={20}
            rows={5}
            className="rounded-sm border p-1"
            required
          />
          {state.errors && (
            <ValidationError
              prefix="Message"
              field="message"
              className="text-red-500"
              errors={state.errors}
            />
          )}

          <button
            disabled={state.submitting}
            type="submit"
            className="mt-2 rounded-sm border bg-blue-500 p-2 font-semibold text-white hover:bg-blue-700"
          >
            Send
          </button>
        </motion.form>
      )}
    </section>
  );
};

export default Contact;
