import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPages";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default App;
