import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";

const pageVatiants = {
  initial: {
    scale: 1,
    x: "100vw",
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

const Resume = () => {
  return (
    <motion.section
      initial="initial"
      animate="in"
      variants={pageVatiants}
      transition={pageTransition}
      className="pt-wrapper"
      id="pt-wrapper-3"
    >
      <div className="subpage">
        <div className="pt-page-1">
          <div className="pt-page-2">
            <div className="border-block-top"></div>
            <div className="section-inner">
              <div className="section-header">
                <div className="section-title-wrapper">
                  <h1 className="section-title">Resume</h1>
                  <h5 className="section-description">0 Years of Experience</h5>
                </div>
              </div>
              <div className="section-body">
                <Row>
                  <Col xs="12" sm="6" lg="4">
                    <div className="block-title">
                      <h3>Education</h3>
                    </div>
                    <div className="timeline">
                      <div className="timeline-event">
                        <h5 className="event-date">Sep 2019 - Now</h5>
                        <h4 className="event-name">
                          Major: Information Technology
                        </h4>
                        <span className="event-description">
                          Hanoi University of Science and Technology
                        </span>
                        <p></p>
                      </div>
                    </div>
                  </Col>
                  <Col xs="12" sm="6" lg="4">
                    <div className="block-title">
                      <h3>Experience</h3>
                    </div>
                    <div className="timeline">
                      <div className="timeline-event">
                        <h5 className="event-date">Apr 2021 - Jun 2021</h5>
                        <h4 className="event-name">Project: BusMap</h4>
                        <span className="event-description">
                          Subject: C Advance
                        </span>
                        <p>
                          The application allows users to view bus information
                          and find directions in Hanoi; Allows the administrator
                          to add, edit or delete bus routes.
                        </p>
                      </div>
                      <div className="timeline-event">
                        <h5 className="event-date">Apr 2021 - Jun 2021</h5>
                        <h4 className="event-name">
                          Project: Population management and covid-19
                        </h4>
                        <span className="event-description">
                          Subject: Software Engineering
                        </span>
                        <p></p>
                      </div>
                    </div>
                  </Col>
                  <Col xs="12" sm="12" lg="4">
                    <Row>
                      <Col sm="6" lg="12">
                        <div className="block-title">
                          <h3>Coding Skills</h3>
                        </div>
                        <div className="skills-info">
                          <h4>HTML5</h4>
                          <div className="skill-container">
                            <div className="skill-percentage skill-1"></div>
                          </div>
                          <h4>CSS3</h4>
                          <div className="skill-container">
                            <div className="skill-percentage skill-2"></div>
                          </div>
                          <h4>Jquery</h4>
                          <div className="skill-container">
                            <div className="skill-percentage skill-3"></div>
                          </div>
                          <h4>PHP</h4>
                          <div className="skill-container">
                            <div className="skill-percentage skill-4"></div>
                          </div>
                          <h4>C</h4>
                          <div className="skill-container">
                            <div className="skill-percentage skill-5"></div>
                          </div>
                        </div>
                      </Col>
                      <Col sm="6" lg="12">
                        <div className="block-title">
                          <h3>Design Skills</h3>
                        </div>
                        <div className="skills-info">
                          <h4>Web Design</h4>
                          <div className="skill-container">
                            <div className="skill-percentage skill-6"></div>
                          </div>
                          <h4>Illustrator</h4>
                          <div className="skill-container">
                            <div className="skill-percentage skill-7"></div>
                          </div>
                          <h4>Photoshop</h4>
                          <div className="skill-container">
                            <div className="skill-percentage skill-8"></div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12">
                    <div className="block-download-cv">
                      <a
                        className="btn-download btn"
                        href="CV_Nguyễn_Thị_Hạnh.pdf"
                      >
                        Download CV
                      </a>
                    </div>
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

export default Resume;
