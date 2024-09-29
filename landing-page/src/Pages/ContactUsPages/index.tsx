import { FC } from "react";
import Header from "../../components/Header";
// import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import FooterLink from "../../components/Footer/components/FooterLink";

const ContactUs: FC = () => {
  return (
    <>
      <Header />
      <Contact />
      <footer className="bg-dark-black flex items-center justify-center px-80px pb-[120px]">
        <FooterLink />
      </footer>
    </>
  );
};

export default ContactUs;
