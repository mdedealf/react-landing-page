import { FC } from "react";
import "./styles.css";
import Project from "./components/Project";

const GalleryWorks: FC = () => {
  return (
    <section className="flex flex-col w-full gap-40px mb-160px">
      <div className="flex flex-col items-start justify-center h-full gap-40px w-full overflow-hidden flex-nowrap overflow-x-scroll">
        <div className="flex items-center justify-center gap-40px h-[306px] ">
          <Project />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center h-full gap-40px w-full overflow-hidden flex-nowrap overflow-x-scroll">
        <div className="flex items-center justify-center gap-40px h-[306px] ">
          <Project />
        </div>
      </div>
    </section>
  );
};

export default GalleryWorks;
