import { FC } from "react";
import "./styles.css";
import NavLink from "./components/NavLink";

const Index: FC = () => {
  return (
    <>
      <header className="bg-light-gray py-26px px-80px">
        <nav className="flex justify-between align-middle">
          <span className="text-18px font-400px leading-28px">
            @Ayush Barnwal
          </span>
          <div className="flex gap-40px">
            <NavLink href={"#"} title={"About"} />
            <NavLink href={"#"} title={"Work"} />
            <NavLink href={"#"} title={"Contact"} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Index;
