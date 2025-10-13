import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Taerk from "./pages/TarekTantawi.jsx";
import TrainingProgram from "./pages/TrainingProgram.jsx";
import  Qaadat from './component/Qa3det/Qa3detBusiness.jsx';
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
        <div id="popup-root"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dr-tarek-tantawi" element={<Taerk />} />
          <Route path="/traning-program" element={<TrainingProgram />} />
          <Route path="/traning-program" element={<TrainingProgram />} />
          <Route path="/qaadet-bussiness" element={<Qaadat />} />
        </Routes>
      </ResetScroll>
    </div>
  );
};

export default App;
