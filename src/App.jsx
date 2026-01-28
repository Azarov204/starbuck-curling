import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Leagues from "./pages/Leagues/Leagues";
import Merch from "./pages/Merch/Merch";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/starbuck-curling/" element={<Home />} />
        <Route path="/starbuck-curling/about" element={<About />} />
        <Route path="/starbuck-curling/leagues" element={<Leagues />} />
        <Route path="/starbuck-curling/merch" element={<Merch />} />
        <Route path="/starbuck-curling/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
