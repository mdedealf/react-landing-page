import { FC } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";

const RootPage: FC = () => {
  return (
    <>
      <ScrollToTop />

      {/* Render the route components */}
      <Outlet />
    </>
  );
};

export default RootPage;
