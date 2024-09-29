import { FC, useEffect } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Portofolio from "../../components/Portofolio";
import Gallery from "../../components/Gallery";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";

const LandingPage: FC = () => {
  const { hash, pathname } = useLocation();
  const navigate = useNavigate();

  // effect to move the view based on selected id
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });

        // After scrolling, remove the hash from the URL link
        setTimeout(() => {
          // Replace URL to remove hash without adding a new entry to history
          navigate(pathname, { replace: true });
        }, 500); // Add slight delay for the scroll to complete before URL is updated
      }
    }
  }, [hash, pathname, navigate]);

  return (
    <>
      <Header bg={"bg-light-gray"} />
      <main>
        <Hero />
        <About />
        <Portofolio />
        <Gallery />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
};

export default LandingPage;
