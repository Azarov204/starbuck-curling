import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Leagues from "./pages/Leagues/Leagues";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import Facility from "./pages/Facility/Facility.jsx";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-website-bg-1 text-dark-text overflow-hidden">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/leagues" element={<Leagues />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
