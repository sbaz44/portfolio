import { BrowserRouter, Route } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import "./master.scss";

function App() {
  return (
    <BrowserRouter>
      {/* MENU */}
      {/* <nav className="col-12">
            <Link className="btn gsap-btn mr-2" to="/">
              Home
            </Link>
            <Link className="btn gsap-btn mr-2" to="/services">
              Services
            </Link>
          </nav> */}

      {/* CONTENT */}
      <Route path="/" exact>
        <Portfolio />
        {/* {({ match }) => <Portfolio show={match !== null} />} */}
      </Route>

      <Route path="/about">
        <About />
        {/* {({ match }) => <About show={match !== null} />} */}
      </Route>
    </BrowserRouter>
  );
}

export default App;
