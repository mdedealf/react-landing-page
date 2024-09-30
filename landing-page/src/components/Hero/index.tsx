import { FC, useState } from "react";
import "./styles.css";
import HeroImage from "../../assets/images/hero-img.png";
import OverlayMenu from "./components/OverlayMenu";
import HamburgerButton from "../Header/components/HamburgerButton";
import OverlayLink from "../Header/components/OverlayLink";

const Index: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  // Set opposite value when toggle button clicked
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowHamburger(!showHamburger);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setShowHamburger(!showHamburger);
  };

  return (
    <>
      <section className="hero-section flex relative w-full justify-center items-end bg-light-gray overflow-hidden h-[calc(100vh-80px)]">
        <div className="flex items-center justify-center">
          <img
            className="min-w-75% max-w-85%"
            src={HeroImage}
            alt="Hero image"
          />
          {/* <OverlayMenu isOpen={isOpen} toggleMenu={toggleMenu} /> */}
          <OverlayMenu isOpen={isOpen} toggleMenu={toggleMenu} />
          <div className="hero-infinite-text">
            <h1>flow Developer - UI/UX Designer - Web Designer</h1>
          </div>
        </div>
        {showHamburger && (
          <>
            <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
            {isOpen && <OverlayLink onClick={handleLinkClick} />}
          </>
        )}
      </section>
    </>
  );
};

export default Index;
