import { FC } from "react";

interface Nav {
  href: string;
  title: string;
}

const NavLink: FC<Nav> = ({ href, title }) => {
  return (
    <a className="text-18px text-dark-black no-underline" href={href}>
      {title}
    </a>
  );
};

export default NavLink;
