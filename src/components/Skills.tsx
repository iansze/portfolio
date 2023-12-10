import AnimatedDiv from "../components/AnimatedDiv";

const Skills = () => {
  return (
    <div className=" my-4  flex w-full  flex-col gap-2 py-4">
      <AnimatedDiv
        id="skills"
        delay={0.2}
        className="relative my-4 flex  flex-col gap-2 p-4"
      >
        <h1 className="text-center text-3xl font-bold">SKILLS SET</h1>
        <div className="vertical-line relative grid grid-cols-2 gap-4 border-t text-center leading-loose">
          <div className="mt-2 px-4">
            <h3 className="text-lg">Programming Languages</h3>
            <p className="">Java, C#, JavaScript</p>
          </div>

          <div className="mt-2 px-4">
            <h3 className="text-lg">A Database Management</h3>
            <p> Oracle SQL, MongoDB</p>
          </div>
          <div className="mt-2 px-4">
            <h3 className="text-lg">Frameworks</h3>
            <p>Angular, React</p>
          </div>
          <div className="mt-2 px-4">
            <h3 className="text-lg">Technologies</h3>
            <p className="">
              Redux, HTML, CSS, Bootstrap, Tailwind, SASS, Typescript
            </p>
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
};

export default Skills;
