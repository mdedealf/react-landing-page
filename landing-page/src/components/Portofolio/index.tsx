import { FC } from "react";
import "./styles.css";
import { DUMMY_PROJECTS } from "../../constants/projectList";
import Project from "./components/Project";

const Index: FC = () => {
  return (
    <section id="portofolio" className="portofolios-section">
      <div className="portofolio-left">Recent Work</div>
      <div className="portofolio-right">
        {DUMMY_PROJECTS.map((project, index) => (
          <>
            <Project key={index} {...project} />
            {index < DUMMY_PROJECTS.length - 1 && (
              <div className="project-divider"></div>
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default Index;
