import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NBLayout, { linksNB } from './components/NBLayout';
import About from './containers/About';
import AddTodo from './containers/AddTodo';
import Members from './containers/Members';
import Settings from './containers/Settings';
import Todos from './containers/Todos';

const NoteBookBody: React.FC = () => {
  const [book] = useState({ _id: 'xxxx' });

  const links = linksNB(book._id);

  return (
    <div className="main-content-inner p-0" id="notebook_main">
      <div>
        <NBLayout bookId={book._id} />
      </div>
      <div className="main">
        <div className="tittle">
          <h3 className="text-center">The holy note name here..</h3>
        </div>

        <Switch>
          <Route component={() => <Todos />} path={links.base} exact />
          <Route component={() => <AddTodo />} path={links.add} exact />
          <Route component={() => <About />} path={links.about} exact />
          <Route component={() => <Settings />} path={links.settings} exact />
          <Route component={() => <Members />} path={links.members} exact />
        </Switch>
      </div>
    </div>
  );
};

export default NoteBookBody;
