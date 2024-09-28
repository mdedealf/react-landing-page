import { FC } from "react";
import ArrowIcon from "../../../assets/icons/arrow-forward.svg";

const GalleryItems: FC<Gallery> = ({ image, alt, link }) => {
  return (
    <>
      <div className="relative flex items-center justify-center bg-light-gray h-[306px] w-[444px] rounded-[4px]">
        <img className="w-[348px] h-[194px]" src={image} alt={alt} />
        <div className="absolute flex justify-center items-center bg-white py-[12px] px-[16px] rounded-[4px] gap-[8px]">
          <a className="text-[16px] font-500px" href={link} target="_blank">
            Visit the website
          </a>
          <img
            className="w-[20px] h-[20px]"
            src={ArrowIcon}
            alt="arrow forward icon"
          />
        </div>
      </div>
    </>
  );
};

export default GalleryItems;
