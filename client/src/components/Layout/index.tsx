import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import withSession, { WithSessionProps } from '../../Hocs/with.session';

const Layout: React.FC<WithSessionProps> = ({
  children,
  getSession,
  sesUser,
}) => {
  useEffect(() => {
    getSession();
  }, []);

  return (
    <div className="page-container">
      <div className="main-content">
        {/* <!-- header area start --> */}
        <div className="header-area">
          <div className="row align-items-center">
            {/* <!-- nav and search button --> */}
            <div className="col-md-6 col-sm-8 clearfix">
              <div className="search-box pull-left">
                <form action="#">
                  <input
                    name="search"
                    placeholder="Search..."
                    type="text"
                    required
                  />
                  <i className="ti-search" />
                </form>
              </div>
            </div>
            {/* <!-- profile info & task notification --> */}
            <div className="col-md-6 col-sm-4 clearfix">
              <ul className="notification-area pull-right">
                <li className="dropdown">
                  <i
                    className="fa fa-bell dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <span>2</span>
                  </i>
                  <div className="dropdown-menu bell-notify-box notify-box">
                    <span className="notify-title">
                      You have 3 new notifications
                      <a href="?">view all</a>
                    </span>
                    <div className="nofity-list">
                      <a className="notify-item" href="?">
                        <div className="notify-thumb">
                          <i className="ti-key btn-danger" />
                        </div>
                        <div className="notify-text">
                          <p>You have Changed Your Password</p>
                          <span>Just Now</span>
                        </div>
                      </a>
                      <a className="notify-item" href="?">
                        <div className="notify-thumb">
                          <i className="ti-comments-smiley btn-info" />
                        </div>
                        <div className="notify-text">
                          <p>New Commetns On Post</p>
                          <span>30 Seconds ago</span>
                        </div>
                      </a>
                      <a className="notify-item" href="?">
                        <div className="notify-thumb">
                          <i className="ti-key btn-primary" />
                        </div>
                        <div className="notify-text">
                          <p>Some special like you</p>
                          <span>Just Now</span>
                        </div>
                      </a>
                      <a className="notify-item" href="?">
                        <div className="notify-thumb">
                          <i className="ti-comments-smiley btn-info" />
                        </div>
                        <div className="notify-text">
                          <p>New Commetns On Post</p>
                          <span>30 Seconds ago</span>
                        </div>
                      </a>
                      <a className="notify-item" href="?">
                        <div className="notify-thumb">
                          <i className="ti-key btn-primary" />
                        </div>
                        <div className="notify-text">
                          <p>Some special like you</p>
                          <span>Just Now</span>
                        </div>
                      </a>
                      <a className="notify-item" href="?">
                        <div className="notify-thumb">
                          <i className="ti-key btn-danger" />
                        </div>
                        <div className="notify-text">
                          <p>You have Changed Your Password</p>
                          <span>Just Now</span>
                        </div>
                      </a>
                      <a className="notify-item" href="?">
                        <div className="notify-thumb">
                          <i className="ti-key btn-danger" />
                        </div>
                        <div className="notify-text">
                          <p>You have Changed Your Password</p>
                          <span>Just Now</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- page title area start --> */}
        <div className="page-title-area">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="manu-area clearfix">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <button
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#navbarNavDropdown"
                    data-toggle="collapse"
                    type="button"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <NavLink
                          activeClassName="active"
                          className="nav-link"
                          to="/home"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="active"
                          className="nav-link"
                          to="/notebook"
                        >
                          NoteBooks
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="col-sm-6 clearfix">
              <div className="user-profile pull-right">
                <h4
                  className="user-name dropdown-toggle"
                  data-toggle="dropdown"
                >
                  {sesUser.usrNM}
                  <i className="fa fa-angle-down" />
                </h4>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="?">
                    Message
                  </a>
                  <a className="dropdown-item" href="?">
                    Settings
                  </a>
                  <a className="dropdown-item" href="?">
                    Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- page title area end --> */}

        {/* the real content of the page */}
        {children}
        {/* the real content of the page end */}
      </div>
      {/* <!-- main content area end --> */}
      {/* <!-- footer area start--> */}
      <footer>
        <div className="footer-area">
          <p>
            © Copyright 2018. All right reserved. Template by
            <a href="https://colorlib.com/wp/">Colorlib.</a>
          </p>
        </div>
      </footer>
      {/* <!-- footer area end--> */}
    </div>
  );
};

export default withSession(Layout);
