import { FC } from "react";

interface Link {
  link: string;
}

const LinkButton: FC<Link> = ({ link }) => {
  return (
    <a className="no-underline p-0px m-0px " href={link} target="_blank">
      <svg
        className="w-32px h-32px"
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.8301 15.4575L15.8301 18.1162L26.3612 18.1257L14.8873 29.5997L16.7729 31.4853L28.2469 20.0113L28.2563 30.5425L30.915 30.5425V15.4575H15.8301Z"
          fill="#3C3D3E"
        />
      </svg>
    </a>
  );
};

export default LinkButton;
