import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import Avatar from "../images/photo.jpg";

const pageVatiants = {
  initial: {
    scale: 1,
    x: "-100vw",
    opacity: 1,
  },
  in: {
    scale: 1,
    x: 0,
    opacity: 1,
  },
};

const pageTransition = {
  type: "tween",
  ease: "circInOut",
  duration: 0.7,
};

const AboutMe = () => {
  return (
    <motion.section
      initial="initial"
      animate="in"
      variants={pageVatiants}
      transition={pageTransition}
      className="pt-wrapper"
      id="pt-wrapper-2"
    >
      <div className="subpage">
        <div className="pt-page-1">
          <div className="pt-page-2">
            <div className="border-block-top" />
            <div className="section-inner">
              <div className="section-header">
                <div className="section-title-wrapper">
                  <h1 className="section-title">About Me</h1>
                  <h5 className="section-description">Web Developer</h5>
                </div>
              </div>
              <div className="section-body">
                <Row>
                  <Col xs="12" sm="12" md="6" lg="4">
                    <div className="my-photo mb-sm-5">
                      <img src={Avatar} alt="avatar" />
                    </div>
                  </Col>
                  <Col xs="12" sm="6" md="6" lg="4">
                    <h3>I' a'm Web Developer.</h3>
                    <p>
                      My name is Nguyễn Hạnh and I am currently pursuing my
                      degree in Information Technology from Hanoi University of
                      Science and Technology.
                    </p>
                    <p>
                      I want to be a developer as I am interested in developing
                      new things which excite me a lot.
                    </p>
                    <p>
                      I love exploring new technologies and being a
                      practitioner, I like to stay on top of latest trends.
                    </p>
                  </Col>
                  <Col xs="12" sm="6" md="6" lg="4">
                    <ul className="list-inf">
                      <li>
                        <span className="inf-title">Age</span>
                        <span className="inf-value">20</span>
                      </li>
                      <li>
                        <span className="inf-title">Residence</span>
                        <span className="inf-value">Vietnam</span>
                      </li>
                      <li>
                        <span className="inf-title">Address</span>
                        <span className="inf-value">
                          Hoang Long Hamlet, Dang Xa Commune, Gia Lam District,
                          Hanoi City
                        </span>
                      </li>
                      <li>
                        <span className="inf-title">E-mai</span>
                        <span className="inf-value">
                          <a href="mailto:guenhain.163@gmail.com">
                            guenhain.163@gmail.com
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="inf-title">Phone</span>
                        <span className="inf-value">+84 338 248 401</span>
                      </li>
                      <li>
                        <span className="inf-title">Github</span>
                        <span className="inf-value">
                          <a href="https://github.com/guenhain163">
                            github.com/guenhain163
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="inf-title">Freelance</span>
                        <span className="inf-value">Available</span>
                      </li>
                    </ul>
                    <ul className="social-links">
                      <li>
                        <a
                          className="btn-social"
                          href="https://www.facebook.com/guenhain.163/"
                          title="Facebook"
                        >
                          <FaIcons.FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn-social"
                          href="https://www.instagram.com/guenhain.163/"
                          title="Instagram"
                        >
                          <FaIcons.FaInstagram />
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
