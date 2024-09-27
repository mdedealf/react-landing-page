import { FC } from "react";
import "./styles.css";
import { DUMMY_PROJECTS } from "../../constants/projectList";
import Project from "./components/Project";

const Index: FC = () => {
  return (
    <section id="portofolio" className="flex my-160px mx-80px">
      <div className="font-500px leading-48px basis-30% text-40px">
        Recent Work
      </div>
      <div className="flex flex-col text-27px leading-37px font-400px basis-70% gap-y-32px">
        {DUMMY_PROJECTS.map((project, index) => (
          <>
            <Project key={index} {...project} />
            {index < DUMMY_PROJECTS.length - 1 && (
              <div className="border-t border-light-gray"></div>
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default Index;
