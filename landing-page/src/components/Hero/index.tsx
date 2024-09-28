import { FC } from "react";
import HeroImage from "../../assets/images/hero-img.png";
import "./styles.css";
import OverlayMenu from "./components/OverlayMenu";

const Index: FC = () => {
  return (
    <>
      <section className="hero-section flex relative w-full justify-center items-end bg-light-gray overflow-hidden h-[calc(100vh)]">
        <div className="flex items-center justify-center">
          <img className="min-w-75%" src={HeroImage} alt="Hero image" />
          <OverlayMenu />
          <div className="hero-infinite-text">
            <h1>flow Developer - UI/UX Designer - Web Designer</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
