import { createBrowserRouter } from "react-router";
import { RootLayout } from "./site";
import { FacilityPage, LeaguesPage, NotFoundPage } from "./pages";
import { HomePage } from "./pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "leagues", Component: LeaguesPage },
      { path: "facility-rentals", Component: FacilityPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
