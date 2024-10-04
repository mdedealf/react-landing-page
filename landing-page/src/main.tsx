import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPages/index";
import "./index.css";
import ContactUsPage from "./Pages/ContactUsPage/index";
import NotFoundPage from "./Pages/NotFoundPage/index";
import ContactUsDataPage from "./Pages/ContactUsDataPage/index";
import RootPage from "./Pages/RootPages/index";
import { Provider } from "react-redux";
import { store } from "../src/store/index";

/* 
  Routes configuration
*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "/contact-us/data",
        element: <ContactUsDataPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
