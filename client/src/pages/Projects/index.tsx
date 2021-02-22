import React from 'react';
import ProjectItem from '../../components/items/ProjectItem';
import withSession, { WithSessionProps } from '../../Hocs/with.session';

const Projects: React.FC<WithSessionProps> = ({ projects }) => {
  return (
    <div className="main-content-inner" id="project_main">
      {/* <!-- accroding start --> */}
      <div className="mt-5 w-100">
        {/* <!-- accordion style 2 start --> */}
        <div className="col-lg-8 mt-5 ml-auto mr-auto">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title">Projects</h4>
              <div className="according gradiant-bg" id="accordion2">
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
      </div>
      {/* <!-- accroding end --> */}
    </div>
  );
};

export default withSession(Projects);
