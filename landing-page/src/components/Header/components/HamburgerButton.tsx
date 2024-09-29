import { FC } from "react";
import HamburgerIcon from "../../../assets/icons/hamburger-menu.svg";
import CloseIcon from "../../../assets/icons/close-icon.svg";

interface OnClickToggle {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton: FC<OnClickToggle> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`fixed flex items-center justify-center right-[40px] top-[40px] w-[80px] h-[80px] ${
        isOpen ? "bg-off-white" : "bg-dark-black"
      } text-off-white focus:outline-none rounded-full z-10 transition-all`}
    >
      {isOpen ? (
        <img className="transition-all" src={CloseIcon} alt="Hamburger icon" />
      ) : (
        <img
          className="transition-all"
          src={HamburgerIcon}
          alt="Hamburger icon"
        />
      )}
    </button>
  );
};

export default HamburgerButton;
