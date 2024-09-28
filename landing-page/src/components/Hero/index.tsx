import { FC } from "react";
import HeroImage from "../../assets/images/hero-img.png";
import "./styles.css";

const Index: FC = () => {
  return (
    <>
      <section className="hero-section flex relative w-full justify-center items-end bg-light-gray overflow-hidden h-hero-h">
        <div className="flex items-center justify-center">
          <img
            className="min-w-70% max-w-85%"
            src={HeroImage}
            alt="Hero image"
          />
          <div className="hero-infinite-text">
            <h1>flow Developer - UI/UX Designer - Web Designer</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
