import { useAnimation, useInView } from "framer-motion";

import { useEffect, useRef } from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section className=" my-4  flex flex-col  gap-2 p-4">
      <AnimatedDiv id="skills" className="relative my-4  flex flex-col gap-2">
        <h1 className="text-center text-3xl font-bold">SKILLS SET</h1>
        <div className="vertical-line relative grid grid-cols-2 gap-4 border-t text-center leading-loose">
          <div>
            <h3 className="text-lg">
              Programming Languages<span>&#8595;</span>
            </h3>
            <p className="">Java, C#, JavaScript</p>
          </div>

          <div>
            <h3 className="text-lg">
              A Database Management<span>&#8595;</span>
            </h3>
            <p> Oracle SQL, MongoDB</p>
          </div>
          <div className=" ">
            <h3 className="text-lg">
              Frameworks<span>&#8595;</span>
            </h3>
            <p>Angular, React</p>
          </div>
          <div className="">
            <h3 className="text-lg">
              Technologies<span>&#8595;</span>
            </h3>
            <p className="">
              Redux, HTML, CSS, Bootstrap, Tailwind, SASS, Typescript
            </p>
          </div>
        </div>
      </AnimatedDiv>
    </section>
  );
};

export default Skills;
