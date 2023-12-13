import { faEnvelopeOpen, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { useForm, ValidationError } from "@formspree/react";
import AlertDialog from "../components/AlertDialog";

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
      <motion.h1 className="text-center font-robotoSlab text-3xl font-bold text-primary ">
        Contact Me
      </motion.h1>
      {/* Icon */}
      <motion.div className="mt-4 text-center text-white">
        <FontAwesomeIcon icon={icon} size="2x" />
      </motion.div>
      {/* Form */}
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
          className=" mx-auto flex w-9/12 flex-col gap-1  lg:w-1/2 2xl:w-2/5"
        >
          <label htmlFor="name" className="font-openSans text-secondary">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="broder rounded-sm border p-2 font-openSans"
            required
          />
          {state.errors && (
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="font-openSans font-semibold text-red-500"
            />
          )}

          <label htmlFor="email" className="font-openSans text-secondary">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="rounded-sm border p-2 font-openSans font-semibold"
            required
          />
          {state.errors && (
            <ValidationError
              prefix="Email"
              field="email"
              className="font-openSans font-semibold text-red-500"
              errors={state.errors}
            />
          )}
          <label htmlFor="message" className="font-openSans text-secondary">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            cols={20}
            rows={5}
            className="rounded-sm border p-2 font-openSans"
            required
          />
          {state.errors && (
            <ValidationError
              prefix="Message"
              field="message"
              className="font-openSans font-semibold text-red-500"
              errors={state.errors}
            />
          )}

          <button
            disabled={state.submitting}
            type="submit"
            data-ripple-light="true"
            className="mt-2 select-none rounded-lg bg-highlight px-6 py-3 text-center align-middle font-sans font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Send
          </button>
        </motion.form>
      )}
      {state.succeeded && <AlertDialog isSend={true} />}
    </section>
  );
};

export default Contact;
