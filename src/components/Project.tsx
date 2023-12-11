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
      style={{
        background: backgroundColor,
      }}
    >
      {/* Image */}
      <div className="mx-4 flex flex-col  py-8 lg:flex-row lg:items-center lg:gap-8 lg:px-12 2xl:mx-auto 2xl:w-9/12">
        <div className="">
          <Swiper
            modules={[Navigation, Pagination, A11y, EffectFade]}
            spaceBetween={50}
            navigation
            pagination={{ clickable: true }}
            grabCursor={true}
            effect={"fade"}
            className="h-full sm:w-[600px] md:w-4/5 md:px-4 lg:w-[650px] xl:w-[700px] 2xl:max-w-[800px] "
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <AnimatedDiv id="movieImg">
                  <img
                    src={image}
                    alt={image}
                    className="h-full w-full select-none  object-center "
                  />
                </AnimatedDiv>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Content */}
        <AnimatedDiv
          id="movie-content"
          className="mt-2 flex flex-col gap-4 px-4  "
        >
          <div className="flex items-center gap-4 ">
            <h1 className="font-robotoSlab text-3xl font-bold lg:text-4xl ">
              {title}
            </h1>
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
          <p className="font-openSans">{summary}</p>
          <p className="font-openSans">{description}</p>

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
                className="font-openSans rounded-md border bg-zinc-900 px-2 py-0.5 text-white"
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
