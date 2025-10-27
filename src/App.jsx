import { HashRouter, Route, Routes } from "react-router-dom";
import "./master.scss";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<About />} />
        <Route path="/projects" element={<Portfolio />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
