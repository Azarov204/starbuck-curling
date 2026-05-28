import {Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Leagues from "./pages/Leagues/Leagues";
import Merch from "./pages/Merch/Merch";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import Facility from "./pages/Facility/Facility.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-website-bg-1 text-dark-text overflow-hidden">
      <Header/>
      <ScrollToTop/>
      <Routes>
        <Route path="/starbuck-curling/" element={<Home/>}/>
        <Route path="/starbuck-curling/about" element={<About/>}/>
        <Route path="/starbuck-curling/facility" element={<Facility/>}/>
        <Route path="/starbuck-curling/leagues" element={<Leagues/>}/>
        <Route path="/starbuck-curling/*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
