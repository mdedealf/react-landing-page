import { FC } from "react";
import "./styles.css";
import NavLink from "./components/NavLink";

interface BackgroundStyle {
  bg: string;
}

const Index: FC<BackgroundStyle> = ({ bg }) => {
  return (
    <>
      <header className={`${bg} py-26px px-80px`}>
        <nav className="flex justify-between items-center">
          <span className="text-18px font-400px leading-28px">
            <NavLink href={"/"} title={"@Ayush Barnwal"} />
          </span>
          <div className="flex gap-40px">
            <NavLink href={"/#about"} title={"About"} />
            <NavLink href={"/#portofolio"} title={"Work"} />
            <NavLink href={"/#footer"} title={"Contact"} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Index;
