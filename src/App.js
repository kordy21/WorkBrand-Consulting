import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Taerk from "./pages/TarekTantawi.jsx";
import "../src/style.css";
const ResetScroll = ({ children }) => {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
};

const App = () => {
  return (
    <div className="App">
      <ResetScroll>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dr-tarek-tantawi" element={<Taerk />} />
          {/* متعملش كده تانى يا علق  */}
        </Routes>
      </ResetScroll>
    </div>
  );
};

export default App;
