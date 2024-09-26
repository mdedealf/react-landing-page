import { FC } from "react";
import HeroImage from "../../assets/images/hero-img.png";
import "./styles.css";

const Index: FC = () => {
  return (
    <>
      <section>
        <div className="hero-wrapper">
          <img src={HeroImage} alt="Hero image" />
          <div className="hero-infinite-text">
            <h1>flow Developer - UI/UX Designer - Web Designer</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
