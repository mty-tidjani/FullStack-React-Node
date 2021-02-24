import React, { lazy, Suspense, FC } from 'react';
import {
  Switch,
  BrowserRouter,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';
import Layout from '../components/Layout';
import StorageManager from '../utils/storage.manager';

const Loader: FC = () => (
  <div id="preloader">
    <div className="loader" />
  </div>
);

const Auth: FC = lazy(() => import('./Auth'));
const Home: FC = lazy(() => import('./Home'));
const ProjectPage: FC = lazy(() => import('./Project'));
const TodoModal: FC = lazy(() => import('./Todo/Modal'));

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
const Routes: FC = () => {
  const location: any = useLocation();

  const background = location.state?.background;

  return (
    <>
      <Switch location={background || location}>
        <Suspense fallback={<Loader />}>
          <AuthRoute component={Auth} path="/" exact />
          <Layout>
            <PrivateRoute component={Home} path="/home" />
            <PrivateRoute component={ProjectPage} path="/project/:bookId" />
            <PrivateRoute component={ProjectPage} path="/todo/:todoId" />
          </Layout>
        </Suspense>
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
const App: FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
