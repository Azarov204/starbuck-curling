import { createBrowserRouter } from "react-router";
import { RootLayout } from "./site";
import { HomePage } from "./pages/HomePage.jsx";
import { LeaguePage } from "./pages/LeaguePage.jsx";
import { FacilityPage } from "./pages/FacilityPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "leagues", Component: LeaguePage },
      { path: "facility-rentals", Component: FacilityPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
