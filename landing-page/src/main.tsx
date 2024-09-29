import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPages/index.tsx";
import "./index.css";
import ContactUs from "./Pages/ContactUs/index.tsx";
import PageNotFound from "./Pages/PageNotFound/index.tsx";

/* 
  Routes configuration
*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
