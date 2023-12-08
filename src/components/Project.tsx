import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectData } from "../types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css/bundle";

import AnimatedDiv from "./AnimatedDiv";
import { useEffect } from "react";

const Project = ({
  title,
  description,
  summary,
  technology,
  images,
  backgroundColor,
  websiteURL,
  githubURL,
}: ProjectData) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="projects"
      className={`${backgroundColor} flex flex-col px-4 py-16`}
    >
      {/* Image */}
      <div className="mx-auto w-11/12">
        <Swiper
          modules={[Navigation, Pagination, A11y, Scrollbar, EffectFade]}
          spaceBetween={50}
          navigation
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          grabCursor={true}
          effect={"fade"}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={image}
                className="w-full select-none bg-center object-cover "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <AnimatedDiv id="movie-content" className="mt-2 flex flex-col gap-4 px-4">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">{title}</h1>
          <a href={githubURL} target="_blank">
            <FontAwesomeIcon
              icon={faCode as IconProp}
              size="lg"
              className="cursor-pointer hover:animate-tada "
            />
          </a>
          <a href={websiteURL} target="_blank">
            <FontAwesomeIcon
              icon={faLink as IconProp}
              size="lg"
              className="cursor-pointer hover:animate-tada "
            />
          </a>
        </div>
        <p className="">{summary}</p>
        <p className="">{description}</p>

        <motion.ul
          ref={ref}
          className="flex flex-wrap  gap-2"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {technology.map((tech, index) => (
            <motion.li
              key={index}
              className="rounded-md border bg-zinc-900 px-2 py-0.5 text-white"
              variants={{
                hidden: { opacity: 0, scale: 0.5, y: 50 },
                visible: {
                  opacity: 1,
                  scale: [0.5, 2, 1],
                  y: 0,
                },
              }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {tech}
            </motion.li>
          ))}
        </motion.ul>
      </AnimatedDiv>
    </motion.section>
  );
};

export default Project;
