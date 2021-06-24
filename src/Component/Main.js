import { Route } from "react-router-dom";
import Home from "../Pages/Home";
import AboutMe from "../Pages/AboutMe";
import Resume from "../Pages/Resume";
import Portfolio from "../Pages/Portfolio";
import Contact from "../Pages/Contact";

const Main = () => {
  return (
    <div id="pg-main" className="pg-perspective">
      <Route path="/Home" component={Home} />
      <Route path="/AboutMe" component={AboutMe} />
      <Route path="/Resume" component={Resume} />
      <Route path="/Portfolio" component={Portfolio} />
      <Route path="/Contact" component={Contact} />
    </div>
  );
};

export default Main;
