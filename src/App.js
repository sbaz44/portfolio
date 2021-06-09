import { HashRouter, Route } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import "./master.scss";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact>
        <Portfolio />
      </Route>

      <Route path="/about">
        <About />
      </Route>
    </HashRouter>
  );
}

export default App;
