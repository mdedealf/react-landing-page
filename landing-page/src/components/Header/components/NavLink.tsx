import { FC } from "react";
import { Link } from "react-router-dom";

interface Nav {
  href: string;
  title: string;
}

const NavLink: FC<Nav> = ({ href, title }) => {
  return (
    <Link className="text-18px text-dark-black no-underline" to={href}>
      {title}
    </Link>
  );
};

export default NavLink;
