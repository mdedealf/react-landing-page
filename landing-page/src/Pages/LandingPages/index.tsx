import { FC } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Portofolio from "../../components/Portofolio";
import Gallery from "../../components/Gallery";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";

const LandingPage: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portofolio />
      <Gallery />
      <Testimonials />
      <Footer />
    </>
  );
};

export default LandingPage;
