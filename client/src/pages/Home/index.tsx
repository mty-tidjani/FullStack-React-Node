import React from 'react';
import NoteBookItem from '../../components/items/NoteBookItem';
import withSession, { WithSessionProps } from '../../Hocs/with.session';

const Home: React.FC<WithSessionProps> = ({ notebooks }) => {
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
                {notebooks.length === 0 && (
                  <h2 className="text-center"> No notebooks yet!</h2>
                )}
                {notebooks.map((note) => (
                  <NoteBookItem key={note._id} note={note} />
                ))}
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
                <h3>No recent todo here!</h3>
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

export default withSession(Home);
