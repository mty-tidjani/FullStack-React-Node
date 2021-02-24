import React, { useState } from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import Lnk from '../../components/common/Lnk';
import AddTodoModal from '../../components/modals/AddTodoModal';
import SideBar, { linksNB } from './components/SideBar';
import About from './containers/About';
import AddTodo from './containers/AddTodo';
import Members from './containers/Members';
import Settings from './containers/Settings';
import Todos from './containers/Todos';
import './index.scss';

const ProjectPage: React.FC = () => {
  const { bookId }: any = useParams();
  const [fullScreen, setFullScreen] = useState(false);

  const links = linksNB(bookId);

  return (
    <div
      className={`main-content-inner p-0${fullScreen ? ' fullScreen' : ''}`}
      id="project_main"
    >
      <div>
        <SideBar bookId={bookId} />
      </div>
      <div className="main">
        <div className="manu-area clearfix d-flex">
          <h4 className="m-0" style={{ flex: 1 }}>
            Project title
          </h4>
          <div className="d-flex">
            <AddTodoModal />

            <Lnk
              className="btn-screen"
              onClick={() => setFullScreen(!fullScreen)}
            >
              <i className="fa fa-arrows-alt" />
            </Lnk>
          </div>
        </div>
        <div
          className="bg-white"
          style={{
            maxHeight: `100vh`,
            paddingTop: fullScreen ? '55px' : '0',
          }}
        >
          <Switch>
            <Route component={() => <Todos />} path={links.base} exact />
            <Route component={() => <AddTodo />} path={links.add} exact />
            <Route component={() => <About />} path={links.about} exact />
            <Route component={() => <Settings />} path={links.settings} exact />
            <Route component={() => <Members />} path={links.members} exact />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
