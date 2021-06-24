import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, useLocation } from "react-router-dom";
import Loading from "./Component/Loading";
import Header from "./Component/Header";
import Menu from "./Component/Menu";
import Main from "./Component/Main";

import "./App.scss";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

function App() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { width } = windowDimensions;

  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 2000);
  }, []);

  const [showSidebar, setShowSidebar] = useState(false);

  const setSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  let header;
  if (width < 992) {
    header = <Header status={showSidebar} onClick={setSidebar} />;
  } else if (showSidebar) {
    setSidebar();
  }

  const location = useLocation();
  if (location.pathname === "/") location.pathname = "/Home";

  return (
    <>
      {spinner && <Loading />}
      {!spinner && (
        <div id="page" className="page">
          {header}
          <Menu itemClick={setSidebar} showSidebar={showSidebar} />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Main />
            </Switch>
          </AnimatePresence>
        </div>
      )}
    </>
  );
}

export default App;
