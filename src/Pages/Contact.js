import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
  return (
    <section className="pt-wrapper" id="pt-wrapper-5">
      <div className="subpage">
        <div className="pt-page-1">
          <div className="pt-page-2">
            <div className="border-block-top" />
            <div className="section-inner">
              <div className="section-header">
                <div className="section-title-wrapper">
                  <h1 className="section-title">Contact</h1>
                  <h5 className="section-description">
                    Let's make something great together
                  </h5>
                </div>
              </div>
              <div className="section-body">
                <p className="fs-5 mb-5">
                  If you wanna get in touch, talk to me about a project
                  collaboration or just say hi, fill up the awesome form below
                  or send an email to <b>guenhain.163@gmail.com</b> and ~let's
                  talk.
                </p>
                <Row>
                  {/* <div className="col-sm-12 col-md-6 col-lg-4">
                    <p>Get In Touch</p>
                  </div> */}
                  <Col xs="12" sm="12" md="12" lg="8">
                    <form action className="contact-form" autoComplete="off">
                      <div className="input-block">
                        <Row>
                          <Col xs="12" sm="12" lg="6">
                            <label htmlFor="name">
                              Name <span>*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="name"
                            />
                          </Col>
                          <Col xs="12" sm="12" lg="6">
                            <label htmlFor="phone">Phone</label>
                            <input
                              className="form-control"
                              type="text"
                              name="phone"
                            />
                          </Col>
                        </Row>
                      </div>
                      <div className="input-block">
                        <label htmlFor="email">
                          Email <span>*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="email"
                        />
                      </div>
                      <div className="input-block">
                        <label htmlFor="subject">
                          Subject <span>*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="subject"
                        />
                      </div>
                      <div className="input-block notes">
                        <label htmlFor="message">Message</label>
                        <textarea
                          className="form-control"
                          rows={3}
                          name="message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="btn-contact">
                        <button type="button" className="btn">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
