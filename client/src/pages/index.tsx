import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
// import Auth from './Auth';
import Home from './Home';
import './index.scss';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
