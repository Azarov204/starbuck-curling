import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

export function RootLayout() {
  // const { pathname, hash } = useLocation();

  // useEffect(() => {
  //   if (hash === "#contact") {
  //     window.setTimeout(
  //       () =>
  //         document
  //           .querySelector("#contact")
  //           ?.scrollIntoView({ behavior: "smooth" }),
  //       50,
  //     );
  //   } else {
  //     window.scrollTo(0, 0);
  //   }
  // }, [pathname, hash]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
