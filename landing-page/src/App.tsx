import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPages";
import ContactUs from "./Pages/ContactUsPage";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contac-us" element={<ContactUs />} />
    </Routes>
  );
};

export default App;
