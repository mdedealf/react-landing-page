import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portofolio from "./components/Portofolio";
import { FC } from "react";

const App: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portofolio />
    </>
  );
};

export default App;
