import React from "react";
import movieImg from "../assets/movie.jpg";
import smallContactImg from "../assets/words-with-contact-us-business-concept-idea_352439-357.avif";
import useMediaQuery from "../hooks/useMediaQuery";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const mediaQuery = useMediaQuery();
  return (
    <section id="contact" className="p-4">
      <h2 className="text-center text-2xl">Contact Me</h2>
      <div className="my-4 text-center">
        {mediaQuery < 768 ? (
          <FontAwesomeIcon icon={faEnvelopeOpen as IconProp} size="2xl" />
        ) : (
          <img src={smallContactImg} alt="" className="bg-transparent" />
        )}
      </div>

      <form action="" className="mx-auto flex w-9/12 flex-col gap-1">
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
      </form>
    </section>
  );
};

export default Contact;
