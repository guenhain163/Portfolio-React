import { Link } from "react-router-dom";
import { PortfolioData } from "./PortfolioData";

const Portfolio = () => {
  return (
    <section className="pt-wrapper" id="pt-wrapper-4">
      <div className="subpage">
        <div className="pt-page-1">
          <div className="pt-page-2">
            <div className="border-block-top" />
            <div className="section-inner">
              <div className="section-header">
                <div className="section-title-wrapper">
                  <h1 className="section-title">Portfolio</h1>
                  <h5 className="section-description">dsa</h5>
                </div>
              </div>
              <div className="section-body">
                <div
                  className="d-md-table float-md-start"
                  style={{ width: "100%" }}
                >
                  {PortfolioData.map((item, index) => {
                    return item.type === 1 ? (
                      <div key={index} className={item.cName}>
                        <div className={item.cName2}>
                          <Link to={item.path} className="group-hover">
                            <div className="overflow-hidden mb-4">
                              <img src={item.image} alt="" />
                            </div>
                            <div className="fs-2">
                              <span className="position-relative">
                                {item.title}
                                <div className="group-hover-bt" />
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div
                        key={index}
                        className="col-sm-6 col-md-6 float-md-end"
                      >
                        <div className="px-md-5 my-5 fw-light">
                          <div className="fs-4 mb-3">“{item.text}”</div>
                          <cite className="fs-6">
                            <span>{item.person}, </span>
                            <span>{item.company}</span>
                          </cite>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
