import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToggleProvider } from "../../contexts/ToggleContext";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Portofolio from "../../components/Portofolio";
import Gallery from "../../components/Gallery";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";

const LandingPage: FC = () => {
  const { hash, pathname } = useLocation();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        }, 0); // Add slight delay for the scroll to complete before URL is updated
      }
    }
  }, [hash, pathname, navigate]);

  return (
    <ToggleProvider>
      <Header bg={"bg-light-gray"} />
      <main>
        <Hero />
        <About />
        <Portofolio />
        <Gallery />
        <Testimonials />
        <Footer />
      </main>
    </ToggleProvider>
  );
};

export default LandingPage;
