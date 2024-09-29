import { FC } from "react";

const OverlayMenu: FC = () => {
  return (
    <div className="flex absolute gap-28px right-0 bg-dark-black pl-[32px] py-[28px] pr-[28px] text-off-white text-40px leading-48px font-500px rounded-s-[65px] top-[40%] translate-x-[70%] hover:translate-x-0 transition-all cursor-pointer">
      <span className="w-[56px] h-[56px] ">👋</span>
      <span>Hi i'm Ayush</span>
    </div>
  );
};

export default OverlayMenu;
