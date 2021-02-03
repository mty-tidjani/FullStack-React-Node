import React from 'react';
import {
  Switch, BrowserRouter, Route, Redirect,
} from 'react-router-dom';
import StorageManager from '../utils/storage.manager';
import Auth from './Auth';
import Home from './Home';
import './index.scss';

const isLogged = StorageManager.getUserData();

// Routes used when user is logged in
const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) => (isLogged ? <Component {...props} /> : <Redirect to="/" />)}
  />
);
// Routes used for authentification
const AuthRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) => (!isLogged ? <Component {...props} /> : <Redirect to="/home" />)}
  />
);

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <AuthRoute component={Auth} path="/" />
      <PrivateRoute component={Home} path="/home" />
    </Switch>
  </BrowserRouter>
);

export default App;
