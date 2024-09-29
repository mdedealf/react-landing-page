import { FC } from "react";
import { NavLink } from "react-router-dom";

interface Nav {
  href: string;
  title: string;
  styles: string;
  onClick?: () => void;
}

const RouteLink: FC<Nav> = ({ href, title, styles, onClick }) => {
  return (
    <NavLink className={`${styles} no-underline`} to={href} onClick={onClick}>
      {title}
    </NavLink>
  );
};

export default RouteLink;
