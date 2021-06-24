import { motion } from "framer-motion";
import { useLocation, useHistory } from "react-router-dom";

const pageTransition = {
  in: {
    y: [192, 0],
    transition: {
      duration: 1.2,
      times: [0.2, 1],
      easing: "ease-out",
    },
  },
  out: {
    y: 192,
    transition: {
      duration: 1,
      times: 0.8,
      easing: "ease-in",
    },
  },
};
const Home = () => {
  const pathNext = useLocation();
  const path = useHistory();
  return (
    <section className="pt-wrapper" id="pt-wrapper-1">
      <div className="subpage">
        <div className="table">
          <div className="section-inner">
            <div className="section-header">
              <div className="slide-block">
                <motion.div
                  animate="in"
                  exit={
                    path.pathname === "/" && path.pathname !== pathNext.pathname
                      ? "out"
                      : null
                  }
                  variants={pageTransition}
                  className="text-block"
                >
                  <span>HE</span>
                </motion.div>
              </div>
              <div className="slide-block">
                <motion.div
                  animate="in"
                  exit={
                    path.pathname === "/" && path.pathname !== pathNext.pathname
                      ? "out"
                      : null
                  }
                  variants={pageTransition}
                  className="text-block"
                >
                  <span>LLO</span>
                  <div className="circle"></div>
                </motion.div>
              </div>
            </div>
            <div className="section-body">
              <p>I'm Web Developer</p>
            </div>
          </div>
        </div>
        <div className="pageColor"></div>
      </div>
    </section>
  );
};

export default Home;
