import { FC } from "react";

interface ToggleOverlay {
  isOpen: boolean;
  toggleMenu: () => void;
}

const OverlayMenu: FC<ToggleOverlay> = ({ isOpen, toggleMenu }) => {
  return (
    <>
      {!isOpen && (
        <div
          onClick={toggleMenu}
          className="flex absolute gap-28px right-0 bg-dark-black pl-[28px] py-[28px] pr-[28px] text-off-white text-40px leading-48px font-500px rounded-s-[65px] top-[40%] translate-x-[65%] hover:translate-x-0 transition-all cursor-pointer"
        >
          <span className="text-60px p-0 m-0">👋</span>
          <span>Hi i'm Ayush</span>
        </div>
      )}
    </>
  );
};

export default OverlayMenu;
