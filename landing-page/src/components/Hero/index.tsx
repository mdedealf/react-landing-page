import HeroImage from "../../assets/images/hero-img.png";
import "./styles.css";

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-wrapper">
          <img src={HeroImage} alt="Hero image" />
          <div className="hero-infinite-text">
            <h1>Fullstack Developer - UI/UX Designer</h1>
          </div>
          <div className="hero-overlay">
            <span>👋</span>
            <span>Hi I’m Ayush</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
