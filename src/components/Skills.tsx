import AnimatedDiv from "../components/AnimatedDiv";

const Skills = () => {
  return (
    <div className=" my-4  flex w-full  flex-col gap-2 py-4">
      <AnimatedDiv
        id="skills"
        delay={0.2}
        className="relative my-4 flex  flex-col gap-2 p-4 md:mx-auto md:w-10/12"
      >
        <div className="flex items-center">
          <div className="border-border mr-4 grow border-b border-solid"></div>
          <h1 className="font-robotoSlab text-primary text-center text-3xl font-bold">
            SKILLS SET
          </h1>
          <div className=" border-border ml-4 grow border-b border-solid"></div>
        </div>

        <div className="font-openSans">
          <div className="container mx-auto p-4">
            <div className="grid gap-8 pt-4 text-center md:grid-cols-2 md:text-left">
              <div className="space-y-2 ">
                <h3 className="text-secondary text-xl font-semibold">
                  Programming Languages
                </h3>
                <p className="text-secondary">Java, C#, JavaScript</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-secondary text-xl font-semibold">
                  Database Management
                </h3>
                <p className="text-secondary">Oracle SQL, MongoDB</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-secondary text-xl font-semibold">
                  Frameworks
                </h3>
                <p className="text-secondary">Angular, React</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-secondary text-xl font-semibold">
                  Technologies
                </h3>
                <p className="text-secondary">
                  Redux, HTML, CSS, Bootstrap, Tailwind, SASS, Typescript
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
};

export default Skills;
