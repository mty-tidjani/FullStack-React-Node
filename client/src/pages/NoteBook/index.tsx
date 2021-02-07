import React from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import SideBar, { linksNB } from './components/SideBar';
import About from './containers/About';
import AddTodo from './containers/AddTodo';
import Members from './containers/Members';
import Settings from './containers/Settings';
import Todos from './containers/Todos';
import './index.scss';

const NoteBookPage: React.FC = () => {
  const { bookId }: any = useParams();

  const links = linksNB(bookId);

  return (
    <div className="main-content-inner p-0" id="notebook_main">
      <div>
        <SideBar bookId={bookId} />
      </div>
      <div className="main">
        <div className="tittle">
          <h3 className="text-center">The holy note name here..</h3>
        </div>
        <div className="bg-white">
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

export default NoteBookPage;
