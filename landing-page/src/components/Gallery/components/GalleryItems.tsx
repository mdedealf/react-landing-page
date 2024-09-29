import { FC } from "react";

const GalleryItems: FC<Gallery> = ({ image, alt, link }) => {
  return (
    <>
      <div className="relative group hover:shadow-2xl flex items-center justify-center bg-light-gray h-[306px] w-[444px] rounded-[4px] transition-all">
        <img
          className="w-[348px] h-[194px] object-cover blur-none group-hover:blur-sm"
          src={image}
          alt={alt}
        />
        <div className="absolute flex justify-center items-center bg-white rounded-[4px] gap-[8px] cursor-pointer">
          <a
            className="hidden py-[12px] px-[16px] group-hover:block text-[16px] font-500px"
            href={link}
            target="_blank"
          >
            Visit the website ↗
          </a>
        </div>
      </div>
    </>
  );
};

export default GalleryItems;
