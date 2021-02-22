import React from 'react';
import ProjectItem from '../../components/items/ProjectItem';
import withSession, { WithSessionProps } from '../../Hocs/with.session';

const Home: React.FC<WithSessionProps> = ({ projects }) => {
  return (
    <div className="main-content-inner" id="home_main">
      {/* <!-- accroding start --> */}
      <div className="row">
        {/* <!-- accordion style 2 start --> */}
        <div className="col-lg-6 mt-5">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title">Projects</h4>
              <div
                className="according accordion-s2 gradiant-bg"
                id="accordion2"
              >
                {projects.length === 0 && (
                  <h2 className="text-center"> No projects yet!</h2>
                )}
                {projects.map((note) => (
                  <ProjectItem key={note._id} note={note} />
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
