import { FC } from "react";
import RouteLink from "./RouteLink";
import { SOCIAL_LINKS } from "../../../constants/socialLists";

interface OverlayLinkProps {
  onClick: () => void;
}

const OverlayLink: FC<OverlayLinkProps> = ({ onClick }) => {
  return (
    <div className="fixed justify-between top-0 left-0 right-0 bottom-0 flex bg-[rgba(0,0,0,0.5)] h-screen w-screen z-[9]">
      <div className="bg-transparent basis-[50%]"></div>
      <div className="flex flex-col justify-between pl-[67px] pt-[120px] pb-[57px] bg-dark-black basis-[50%] text-60px font-500px leading-72px text-off-white gap-28px">
        <div className="flex flex-col gap-28px">
          <RouteLink
            styles={"text-off-white"}
            href={"/"}
            title={"Home"}
            onClick={onClick}
          />
          <RouteLink
            styles={"text-off-white"}
            href={"/#about"}
            title={"About"}
            onClick={onClick}
          />
          <RouteLink
            styles={"text-off-white"}
            href={"/#portofolio"}
            title={"Work"}
            onClick={onClick}
          />
          <RouteLink
            styles={"text-off-white"}
            href={"/#footer"}
            title={"Contact"}
            onClick={onClick}
          />
        </div>
        <div className="flex text-18px font-400px leading-28px text-off-white gap-32px">
          {SOCIAL_LINKS.map((link, index) => (
            <>
              <RouteLink
                key={index}
                styles={"text-light-gray hover:text-off-white"}
                href={link.link}
                title={link.label}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverlayLink;
