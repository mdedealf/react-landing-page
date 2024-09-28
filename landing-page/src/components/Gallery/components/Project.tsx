import { FC } from "react";
import { DUMMY_GALLERY } from "../../../constants/galleryLists";
import GalleryItems from "./GalleryItems";

const Project: FC = () => {
  return (
    <>
      {DUMMY_GALLERY.map((project, index) => (
        <GalleryItems key={index} {...project} />
      ))}
    </>
  );
};

export default Project;
