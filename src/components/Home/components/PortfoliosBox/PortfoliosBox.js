import React from "react";

const PortfoliosBox = ({ PortfoliosObj }) => {
  return (
    <div id="portfolios" className="container is-fullhd mt-6">
      <div id="portfolios-content" className="has-text-centered">
        <h2 className="title is-size-2">Portfolios</h2>
        <span className="subtitle">Some of my projects</span>
      </div>
      <div id="portfolios-box" className="columns is-multiline mt-3">
        {PortfoliosObj.map((portfolio) => {
          return (
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    <div className="portfolio-langs">
                      {portfolio.langs.map((lang, key) => {
                        if (portfolio.langs.length - 1 !== key) {
                          return (
                            <span className="is-size-6 is-light">
                              {lang + " - "}
                            </span>
                          );
                        } else {
                          return lang;
                        }
                      })}
                    </div>
                    <div className="media-content portfiolio-title">
                      <h3 className="title is-size-3 pt-2">
                        {portfolio.title}
                      </h3>
                    </div>
                    <div className="portfolio-description">
                      {portfolio.description}
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="card-footer-item">
                    <a
                      href={portfolio.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="has-text-link"
                    >
                      <span className="fab fa-github"></span>
                    </a>
                  </div>
                  <div className="card-footer-item">
                    <a
                      href={portfolio.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="has-text-link"
                    >
                      <span className="fab fa-chrome"></span>
                    </a>
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
