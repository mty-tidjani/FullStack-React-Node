import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="main-content-inner" id="home_main">
      {/* <!-- accroding start --> */}
      <div className="row">
        {/* <!-- accordion style 2 start --> */}
        <div className="col-lg-6 mt-5">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title">NoteBooks</h4>
              <div
                className="according accordion-s2 gradiant-bg"
                id="accordion2"
              >
                <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link"
                      data-toggle="collapse"
                      href="#accordion21"
                    >
                      Collapsible Group Item #1
                    </a>
                  </div>
                  <div
                    className="collapse show"
                    data-parent="#accordion2"
                    id="accordion21"
                  >
                    <div className="card-body">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo eaque porro alias assumenda accusamus incidunt odio
                      molestiae maxime quo atque in et quaerat, vel unde aliquam
                      aperiam quidem consectetur omnis dicta officiis? Dolorum,
                      error dolorem!
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a
                      className="collapsed card-link"
                      data-toggle="collapse"
                      href="#accordion22"
                    >
                      Collapsible Group Item #2
                    </a>
                  </div>
                  <div
                    className="collapse"
                    data-parent="#accordion2"
                    id="accordion22"
                  >
                    <div className="card-body">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo eaque porro alias assumenda accusamus incidunt odio
                      molestiae maxime quo atque in et quaerat, vel unde aliquam
                      aperiam quidem consectetur omnis dicta officiis? Dolorum,
                      error dolorem!
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a
                      className="collapsed card-link"
                      data-toggle="collapse"
                      href="#accordion23"
                    >
                      Collapsible Group Item #3
                    </a>
                  </div>
                  <div
                    className="collapse"
                    data-parent="#accordion2"
                    id="accordion23"
                  >
                    <div className="card-body">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo eaque porro alias assumenda accusamus incidunt odio
                      molestiae maxime quo atque in et quaerat, vel unde aliquam
                      aperiam quidem consectetur omnis dicta officiis? Dolorum,
                      error dolorem!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- accordion style 2 end --> */}
        {/* <!-- accordion style 3 start --> */}
        <div className="col-lg-6 mt-5">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title">Recent Todos</h4>
              <div className="according accordion-s2" id="accordion5">
                <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link"
                      data-toggle="collapse"
                      href="#accordion51"
                    >
                      Collapsible Group Item #1
                    </a>
                  </div>
                  <div
                    className="collapse show"
                    data-parent="#accordion5"
                    id="accordion51"
                  >
                    <div className="card-body">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo eaque porro alias assumenda accusamus incidunt odio
                      molestiae maxime quo atque in et quaerat, vel unde aliquam
                      aperiam quidem consectetur omnis dicta officiis? Dolorum,
                      error dolorem!
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a
                      className="collapsed card-link"
                      data-toggle="collapse"
                      href="#accordion52"
                    >
                      Collapsible Group Item #2
                    </a>
                  </div>
                  <div
                    className="collapse"
                    data-parent="#accordion5"
                    id="accordion52"
                  >
                    <div className="card-body">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo eaque porro alias assumenda accusamus incidunt odio
                      molestiae maxime quo atque in et quaerat, vel unde aliquam
                      aperiam quidem consectetur omnis dicta officiis? Dolorum,
                      error dolorem!
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a
                      className="collapsed card-link"
                      data-toggle="collapse"
                      href="#accordion53"
                    >
                      Collapsible Group Item #3
                    </a>
                  </div>
                  <div
                    className="collapse"
                    data-parent="#accordion5"
                    id="accordion53"
                  >
                    <div className="card-body">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo eaque porro alias assumenda accusamus incidunt odio
                      molestiae maxime quo atque in et quaerat, vel unde aliquam
                      aperiam quidem consectetur omnis dicta officiis? Dolorum,
                      error dolorem!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- accordion style 5 end --> */}
      </div>
      {/* <!-- accroding end --> */}
    </div>
  );
};

export default Home;
