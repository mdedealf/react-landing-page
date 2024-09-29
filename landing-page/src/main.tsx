import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPages/index.tsx";
import "./index.css";
import ContactUsPage from "./Pages/ContactUsPages/index.tsx";
import NotFoundPage from "./Pages/NotFoundPages/index.tsx";

/* 
  Routes configuration
*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/contact-us",
    element: <ContactUsPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
