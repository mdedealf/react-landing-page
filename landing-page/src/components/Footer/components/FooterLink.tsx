import { FC } from "react";
import { FOOTER_LINKS } from "../../../constants/footerLinks";

const FooterLink: FC = () => {
  return (
    <nav className="flex w-full pt-[138px] justify-between">
      <span className="text-18px font-500px leading-28px text-light-gray">
        Build with 💖 by Brightscout & Ayush
      </span>
      <div className="flex gap-32px text-light-gray  font-400px text-18px leading-28px">
        <>
          {FOOTER_LINKS.map((link, index) => (
            <a
              className="hover:text-off-white transition-all"
              href={link.link}
              key={index}
            >
              {link.label}
            </a>
          ))}
        </>
      </div>
    </nav>
  );
};

export default FooterLink;
