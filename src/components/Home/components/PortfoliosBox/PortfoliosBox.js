import React from "react";

const PortfoliosBox = ({ PortfoliosObj }) => {
  return (
    <div id="portfolios" className="container-fluid text-center">
      <div id="portfolios-content">
        <h2 className="title is-size-2">Portfolios</h2>
        <span className="subtitle">Some of my projects</span>
      </div>
      <div id="portfolios-box" className="row mt-3">
        {PortfoliosObj.map((portfolio) => {
          return (
            <div className="col-lg-4 p-3">
              <div className="card">
                <div className="card-header">
                  <div className="portfolio-langs text-start">
                    {portfolio.langs.map((lang, key) => {
                      if (portfolio.langs.length - 1 !== key) {
                        return <span className="h6">{lang + " - "}</span>;
                      } else {
                        return <span className="h6">{lang}</span>;
                      }
                    })}
                  </div>
                </div>
                <h3 className="card-title portfiolio-title pt-4">
                  {portfolio.title}
                </h3>
                <div className="card-body">
                  <div className="portfolio-description card-text">
                    {portfolio.description}
                  </div>
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col-6">
                      <a
                        href={portfolio.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-decoration-none link-dark"
                      >
                        <span className="fab fa-github"></span>
                      </a>
                    </div>
                    <div className="col-6">
                      <a
                        href={portfolio.websiteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-decoration-none link-warning"
                      >
                        <span className="fab fa-chrome"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfoliosBox;
