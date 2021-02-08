import React from 'react';
import {
  Switch,
  BrowserRouter,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';
import Layout from '../components/Layout';
import StorageManager from '../utils/storage.manager';
import Auth from './Auth';
import Home from './Home';
import NoteBookPage from './NoteBook';
import NoteBooks from './NoteBooks';
import TodoModal from './Todo/Modal';

const isLogged = StorageManager.getUserData();

// Routes used when user is logged in
const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) => {
      if (isLogged) return <Component {...props} />;
      return <Redirect to="/" />;
    }}
  />
);
// Routes used for authentification
const AuthRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) => {
      if (!isLogged) return <Component {...props} />;
      return <Redirect to="/home" />;
    }}
  />
);
/**
 * @description Contains all routes of the app.
 * @name Routes
 */
const Routes: React.FC = () => {
  const location: any = useLocation();

  const background = location.state?.background;

  return (
    <>
      <Switch location={background || location}>
        <AuthRoute component={Auth} path="/" exact />
        <Layout>
          <PrivateRoute component={Home} path="/home" />
          <PrivateRoute component={NoteBooks} path="/notebook" exact />
          <PrivateRoute component={NoteBookPage} path="/notebook/:bookId" />
          <PrivateRoute component={NoteBookPage} path="/todo/:todoId" />
        </Layout>
      </Switch>

      {background && (
        <Switch>
          <Route component={TodoModal} path="/todo/:todoId" />
        </Switch>
      )}
    </>
  );
};

// App component
const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
