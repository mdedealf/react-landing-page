import { FC } from "react";
import ArrowUpWhite from "../../../assets/icons/arrow-forward-white.svg";
import ArrowUpBlack from "../../../assets/icons/arrow-forward.svg";

interface Link {
  link: string;
}

const LinkButton: FC<Link> = ({ link }) => {
  return (
    <a className="no-underline p-0px m-0px" href={link} target="_blank">
      <img
        className="absolute inset-0 m-auto transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        src={ArrowUpWhite}
        alt="Arrow up white icon"
      />
      <img
        className="absolute inset-0 m-auto transition-opacity duration-300 opacity-100 group-hover:opacity-0"
        src={ArrowUpBlack}
        alt="Arrow up black icon"
      />
    </a>
  );
};

export default LinkButton;
