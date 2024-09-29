import { FC, useEffect, useState } from "react";
import "./styles.css";
import RouteLink from "./components/RouteLink";
import HamburgerIcon from "../../assets/icons/hamburger-menu.svg";
import CloseIcon from "../../assets/icons/close-icon.svg";
import OverlayLink from "./components/OverlayLink";

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
              <button
                onClick={toggleMenu}
                className={`fixed flex items-center justify-center right-[40px] top-[40px] w-[80px] h-[80px] ${
                  isOpen ? "bg-off-white" : "bg-dark-black"
                } text-off-white focus:outline-none rounded-full z-10 transition-all`}
              >
                {isOpen ? (
                  <img
                    className="transition-all"
                    src={CloseIcon}
                    alt="Hamburger icon"
                  />
                ) : (
                  <img
                    className="transition-all"
                    src={HamburgerIcon}
                    alt="Hamburger icon"
                  />
                )}
              </button>
              {isOpen && <OverlayLink onClick={handleLinkClick} />}
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Index;
