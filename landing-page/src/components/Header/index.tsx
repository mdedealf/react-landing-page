import { FC, useEffect, useState } from "react";
import "./styles.css";
import RouteLink from "./components/RouteLink";
import OverlayLink from "./components/OverlayLink";
import HamburgerButton from "./components/HamburgerButton";

interface BackgroundStyle {
  bg: string;
}

const Index: FC<BackgroundStyle> = ({ bg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  // Set opposite value when toggle button clicked
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Handling scrolling when > screen height view setShowHamburget is true
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) setShowHamburger(true);
      else {
        setShowHamburger(false);
        setIsOpen(false);
      }
    };

    // Adding event listener
    window.addEventListener("scroll", handleScroll);

    // clean up event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`${bg} py-26px px-80px relative`}>
        <nav className="flex justify-between items-center">
          <span className="text-18px font-400px leading-28px">
            <RouteLink
              styles={"text-dark-black"}
              href={"/"}
              title={"@Ayush Barnwal"}
            />
          </span>
          <div className="hidden gap-40px text-18px md:flex">
            {!isOpen && (
              <>
                <RouteLink
                  styles={"text-dark-black"}
                  href={"/#about"}
                  title={"About"}
                />
                <RouteLink
                  styles={"text-dark-black"}
                  href={"/#portofolio"}
                  title={"Work"}
                />
                <RouteLink
                  styles={"text-dark-black"}
                  href={"/#footer"}
                  title={"Contact"}
                />
              </>
            )}
          </div>
          {showHamburger && (
            <>
              <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
              {isOpen && <OverlayLink onClick={handleLinkClick} />}
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Index;
