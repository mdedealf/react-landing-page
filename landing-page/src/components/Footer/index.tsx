import { FC } from "react";
import Contact from "./components/Contact";
import FooterLink from "./components/FooterLink";

const Index: FC = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col items-center h-[440px] bg-dark-black text-off-white pt-80px px-80px"
    >
      <Contact />
      <FooterLink />
    </footer>
  );
};

export default Index;
