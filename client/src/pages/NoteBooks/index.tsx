import React from 'react';
import Lnk from '../../components/common/Lnk';
import { MLink } from '../../components/common/ModalLink';

const NoteBooks: React.FC = () => {
  const noteId = 'noteBookId';
  return (
    <div className="main-content-inner" id="notebook_main">
      {/* <!-- accroding start --> */}
      <div className="row">
        {/* <!-- accordion style 2 start --> */}
        <div className="col-lg-8 mt-5 ml-auto mr-auto">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title">NoteBooks</h4>
              <div className="according gradiant-bg" id="accordion2">
                <div className="card">
                  <div className="card-header">
                    <MLink className="card-link" to={`/notebook/${noteId}`}>
                      Collapsible Group Item #1
                    </MLink>
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
                      <div className="text-right">
                        <MLink className="card_link" to={`/notebook/${noteId}`}>
                          View Note
                        </MLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <Lnk className="collapsed card-link" href="#accordion22">
                      Collapsible Group Item #2
                    </Lnk>
                  </div>
                  <div
                    className="collapse show"
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
                    <Lnk className="collapsed card-link">
                      Collapsible Group Item #3
                    </Lnk>
                  </div>
                  <div
                    className="collapse show"
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
      </div>
      {/* <!-- accroding end --> */}
    </div>
  );
};

export default NoteBooks;
