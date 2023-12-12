import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectData } from "../types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectFade, Navigation, Pagination } from "swiper/modules";
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
    <motion.div
      id="project"
      className=""
      style={{
        background: backgroundColor,
      }}
    >
      {/* Image */}
      <div className="mx-4 flex flex-col  py-8 lg:flex-row lg:items-center lg:gap-8 2xl:mx-auto 2xl:w-11/12">
        <div className="">
          <Swiper
            modules={[Navigation, Pagination, A11y, EffectFade]}
            spaceBetween={50}
            navigation
            pagination={{ clickable: true }}
            grabCursor={true}
            effect={"fade"}
            className="shadow-3d w-full   lg:w-[700px] xl:w-[850px] 2xl:w-[1000px]"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <AnimatedDiv id="movieImg">
                  <img
                    src={image}
                    alt={image}
                    className=" h-full w-full select-none  object-cover"
                  />
                </AnimatedDiv>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Content */}
        <AnimatedDiv
          id="movie-content"
          className="text-text mt-2 flex flex-col gap-4 px-4 "
        >
          <div className="flex items-center gap-4 ">
            <h1 className="font-robotoSlab text-primary text-2xl font-bold md:text-3xl xl:text-4xl">
              {title}
            </h1>
            <a href={githubURL} target="_blank">
              <FontAwesomeIcon
                icon={faCode as IconProp}
                size="lg"
                className="text-highlight cursor-pointer hover:animate-tada"
              />
            </a>
            <a href={websiteURL} target="_blank">
              <FontAwesomeIcon
                icon={faLink as IconProp}
                size="lg"
                className="text-highlight cursor-pointer hover:animate-tada"
              />
            </a>
          </div>
          <p className="font-openSans text-text">{summary}</p>
          <p className="font-openSans text-text">{description}</p>

          {/*Technology*/}
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
                className="font-openSans bg-highlight text-text border-border rounded-md border px-2 py-0.5"
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
      </div>
    </motion.div>
  );
};

export default Project;
