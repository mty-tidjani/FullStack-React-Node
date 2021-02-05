import React from 'react';

const Home: React.FC = () => (
  <div className="page-container" id="home_main">
    {/* <!-- sidebar menu area start --> */}
    <div className="sidebar-menu">
      <div className="sidebar-header">
        <div className="logo">
          <a href="index.html">
            <img alt="logo" src="assets/images/icon/logo.png" />
          </a>
        </div>
      </div>
      <div className="main-menu">
        <div className="menu-inner">
          <nav>
            <ul className="metismenu" id="menu">
              <li>
                <a aria-expanded="true" href="?">
                  <i className="ti-dashboard" />
                  <span>dashboard</span>
                </a>
                <ul className="collapse">
                  <li>
                    <a href="index.html">ICO dashboard</a>
                  </li>
                  <li>
                    <a href="index2.html">Ecommerce dashboard</a>
                  </li>
                  <li>
                    <a href="index3.html">SEO dashboard</a>
                  </li>
                </ul>
              </li>
              <li>
                <a aria-expanded="true" href="?">
                  <i className="ti-layout-sidebar-left" />
                  <span>Sidebar Types</span>
                </a>
                <ul className="collapse">
                  <li>
                    <a href="index.html">Left Sidebar</a>
                  </li>
                  <li>
                    <a href="index3-horizontalmenu.html">Horizontal Sidebar</a>
                  </li>
                </ul>
              </li>
              <li>
                <a aria-expanded="true" href="?">
                  <i className="ti-pie-chart" />
                  <span>Charts</span>
                </a>
                <ul className="collapse">
                  <li>
                    <a href="barchart.html">bar chart</a>
                  </li>
                  <li>
                    <a href="linechart.html">line Chart</a>
                  </li>
                  <li>
                    <a href="piechart.html">pie chart</a>
                  </li>
                </ul>
              </li>
              <li className="active">
                <a aria-expanded="true" href="?">
                  <i className="ti-palette" />
                  <span>UI Features</span>
                </a>
                <ul className="collapse">
                  <li className="active">
                    <a href="accordion.html">Accordion</a>
                  </li>
                  <li>
                    <a href="alert.html">Alert</a>
                  </li>
                  <li>
                    <a href="badge.html">Badge</a>
                  </li>
                  <li>
                    <a href="button.html">Button</a>
                  </li>
                  <li>
                    <a href="button-group.html">Button Group</a>
                  </li>
                  <li>
                    <a href="cards.html">Cards</a>
                  </li>
                  <li>
                    <a href="dropdown.html">Dropdown</a>
                  </li>
                  <li>
                    <a href="list-group.html">List Group</a>
                  </li>
                  <li>
                    <a href="media-object.html">Media Object</a>
                  </li>
                  <li>
                    <a href="modal.html">Modal</a>
                  </li>
                  <li>
                    <a href="pagination.html">Pagination</a>
                  </li>
                  <li>
                    <a href="popovers.html">Popover</a>
                  </li>
                  <li>
                    <a href="progressbar.html">Progressbar</a>
                  </li>
                  <li>
                    <a href="tab.html">Tab</a>
                  </li>
                  <li>
                    <a href="typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="form.html">Form</a>
                  </li>
                  <li>
                    <a href="grid.html">grid system</a>
                  </li>
                </ul>
              </li>
              <li>
                <a aria-expanded="true" href="?">
                  <i className="ti-slice" />
                  <span>icons</span>
                </a>
                <ul className="collapse">
                  <li>
                    <a href="fontawesome.html">fontawesome icons</a>
                  </li>
                  <li>
                    <a href="themify.html">themify icons</a>
                  </li>
                </ul>
              </li>
              <li>
                <a aria-expanded="true" href="?">
                  <i className="fa fa-table" />
                  <span>Tables</span>
                </a>
                <ul className="collapse">
                  <li>
                    <a href="table-basic.html">basic table</a>
                  </li>
                  <li>
                    <a href="table-layout.html">table layout</a>
                  </li>
                  <li>
                    <a href="datatable.html">datatable</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="maps.html">
                  <i className="ti-map-alt" />
                  <span>maps</span>
                </a>
              </li>
              <li>
                <a href="invoice.html">
                  <i className="ti-receipt" />
                  <span>Invoice Summary</span>
                </a>
              </li>
              <li>
                <a aria-expanded="true" href="?">
                  <i className="ti-layers-alt" />
                  <span>Pages</span>
                </a>
                <ul className="collapse">
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="login2.html">Login 2</a>
                  </li>
                  <li>
                    <a href="login3.html">Login 3</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                  <li>
                    <a href="register2.html">Register 2</a>
                  </li>
                  <li>
                    <a href="register3.html">Register 3</a>
                  </li>
                  <li>
                    <a href="register4.html">Register 4</a>
                  </li>
                  <li>
                    <a href="screenlock.html">Lock Screen</a>
                  </li>
                  <li>
                    <a href="screenlock2.html">Lock Screen 2</a>
                  </li>
                  <li>
                    <a href="reset-pass.html">reset password</a>
                  </li>
                  <li>
                    <a href="pricing.html">Pricing</a>
                  </li>
                </ul>
              </li>
              <li>
                <a aria-expanded="true" href="?">
                  <i className="fa fa-exclamation-triangle" />
                  <span>Error</span>
                </a>
                <ul className="collapse">
                  <li>
                    <a href="404.html">Error 404</a>
                  </li>
                  <li>
                    <a href="403.html">Error 403</a>
                  </li>
                  <li>
                    <a href="500.html">Error 500</a>
                  </li>
                </ul>
              </li>
              <li>
                <a aria-expanded="true" href="?">
                  <i className="fa fa-align-left" />
                  <span>Multi level menu</span>
                </a>
                <ul className="collapse">
                  <li>
                    <a href="?">Item level (1)</a>
                  </li>
                  <li>
                    <a href="?">Item level (1)</a>
                  </li>
                  <li>
                    <a aria-expanded="true" href="?">
                      Item level (1)
                    </a>
                    <ul className="collapse">
                      <li>
                        <a href="?">Item level (2)</a>
                      </li>
                      <li>
                        <a href="?">Item level (2)</a>
                      </li>
                      <li>
                        <a href="?">Item level (2)</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="?">Item level (1)</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    {/* <!-- sidebar menu area end --> */}
    {/* <!-- main content area start --> */}
    <div className="main-content">
      {/* <!-- header area start --> */}
      <div className="header-area">
        <div className="row align-items-center">
          {/* <!-- nav and search button --> */}
          <div className="col-md-6 col-sm-8 clearfix">
            <div className="nav-btn pull-left">
              <span />
              <span />
              <span />
            </div>
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
              <li id="full-view">
                <i className="ti-fullscreen" />
              </li>
              <li id="full-view-exit">
                <i className="ti-zoom-out" />
              </li>
              <li className="dropdown">
                <i className="ti-bell dropdown-toggle" data-toggle="dropdown">
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
              <li className="dropdown">
                <i
                  className="fa fa-envelope-o dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <span>3</span>
                </i>
                <div className="dropdown-menu notify-box nt-enveloper-box">
                  <span className="notify-title">
                    You have 3 new notifications
                    <a href="?">view all</a>
                  </span>
                  <div className="nofity-list">
                    <a className="notify-item" href="?">
                      <div className="notify-thumb">
                        <img
                          alt="image_"
                          src="assets/images/author/author-img1.jpg"
                        />
                      </div>
                      <div className="notify-text">
                        <p>Aglae Mayer</p>
                        <span className="msg">Hey I am waiting for you...</span>
                        <span>3:15 PM</span>
                      </div>
                    </a>
                    <a className="notify-item" href="?">
                      <div className="notify-thumb">
                        <img
                          alt="image_"
                          src="assets/images/author/author-img2.jpg"
                        />
                      </div>
                      <div className="notify-text">
                        <p>Aglae Mayer</p>
                        <span className="msg">
                          When you can connect with me...
                        </span>
                        <span>3:15 PM</span>
                      </div>
                    </a>
                    <a className="notify-item" href="?">
                      <div className="notify-thumb">
                        <img
                          alt="image_"
                          src="assets/images/author/author-img3.jpg"
                        />
                      </div>
                      <div className="notify-text">
                        <p>Aglae Mayer</p>
                        <span className="msg">I missed you so much...</span>
                        <span>3:15 PM</span>
                      </div>
                    </a>
                    <a className="notify-item" href="?">
                      <div className="notify-thumb">
                        <img
                          alt="image_"
                          src="assets/images/author/author-img4.jpg"
                        />
                      </div>
                      <div className="notify-text">
                        <p>Aglae Mayer</p>
                        <span className="msg">
                          Your product is completely Ready...
                        </span>
                        <span>3:15 PM</span>
                      </div>
                    </a>
                    <a className="notify-item" href="?">
                      <div className="notify-thumb">
                        <img
                          alt="image_"
                          src="assets/images/author/author-img2.jpg"
                        />
                      </div>
                      <div className="notify-text">
                        <p>Aglae Mayer</p>
                        <span className="msg">Hey I am waiting for you...</span>
                        <span>3:15 PM</span>
                      </div>
                    </a>
                    <a className="notify-item" href="?">
                      <div className="notify-thumb">
                        <img
                          alt="image_"
                          src="assets/images/author/author-img1.jpg"
                        />
                      </div>
                      <div className="notify-text">
                        <p>Aglae Mayer</p>
                        <span className="msg">Hey I am waiting for you...</span>
                        <span>3:15 PM</span>
                      </div>
                    </a>
                    <a className="notify-item" href="?">
                      <div className="notify-thumb">
                        <img
                          alt="image_"
                          src="assets/images/author/author-img3.jpg"
                        />
                      </div>
                      <div className="notify-text">
                        <p>Aglae Mayer</p>
                        <span className="msg">Hey I am waiting for you...</span>
                        <span>3:15 PM</span>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
              <li className="settings-btn">
                <i className="ti-settings" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- header area end --> */}
      {/* <!-- page title area start --> */}
      <div className="page-title-area">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <div className="breadcrumbs-area clearfix">
              <h4 className="page-title pull-left">Dashboard</h4>
              <ul className="breadcrumbs pull-left">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <span>Accordion</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 clearfix">
            <div className="user-profile pull-right">
              <img
                alt="avatar"
                className="avatar user-thumb"
                src="assets/images/author/avatar.png"
              />
              <h4 className="user-name dropdown-toggle" data-toggle="dropdown">
                Kumkum Rai
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
      <div className="main-content-inner">
        {/* <!-- accroding start --> */}
        <div className="row">
          {/* <!-- accordion style 1 start --> */}
          <div className="col-lg-6 mt-5">
            <div className="card">
              <div className="card-body">
                <h4 className="header-title">Accordion 1</h4>
                <div className="according" id="accordion1">
                  <div className="card">
                    <div className="card-header">
                      <a
                        className="card-link"
                        data-toggle="collapse"
                        href="#accordion11"
                      >
                        Collapsible Group Item #1
                      </a>
                    </div>
                    <div
                      className="collapse show"
                      data-parent="#accordion1"
                      id="accordion11"
                    >
                      <div className="card-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo eaque porro alias assumenda accusamus
                        incidunt odio molestiae maxime quo atque in et quaerat,
                        vel unde aliquam aperiam quidem consectetur omnis dicta
                        officiis? Dolorum, error dolorem!
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <a
                        className="collapsed card-link"
                        data-toggle="collapse"
                        href="#accordion12"
                      >
                        Collapsible Group Item #2
                      </a>
                    </div>
                    <div
                      className="collapse"
                      data-parent="#accordion1"
                      id="accordion12"
                    >
                      <div className="card-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo eaque porro alias assumenda accusamus
                        incidunt odio molestiae maxime quo atque in et quaerat,
                        vel unde aliquam aperiam quidem consectetur omnis dicta
                        officiis? Dolorum, error dolorem!
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <a
                        className="collapsed card-link"
                        data-toggle="collapse"
                        href="#accordion13"
                      >
                        Collapsible Group Item #3
                      </a>
                    </div>
                    <div
                      className="collapse"
                      data-parent="#accordion1"
                      id="accordion13"
                    >
                      <div className="card-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo eaque porro alias assumenda accusamus
                        incidunt odio molestiae maxime quo atque in et quaerat,
                        vel unde aliquam aperiam quidem consectetur omnis dicta
                        officiis? Dolorum, error dolorem!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- accordion style 1 end --> */}
          {/* <!-- accordion style 2 start --> */}
          <div className="col-lg-6 mt-5">
            <div className="card">
              <div className="card-body">
                <h4 className="header-title">Accordion 1</h4>
                <div className="according accordion-s2" id="accordion2">
                  <div className="card">
                    <div className="card-header">
                      <a
                        className="card-link"
                        data-toggle="collapse"
                        href="#accordion21"
                      >
                        Collapsible Group Item #1
                      </a>
                    </div>
                    <div
                      className="collapse show"
                      data-parent="#accordion2"
                      id="accordion21"
                    >
                      <div className="card-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo eaque porro alias assumenda accusamus
                        incidunt odio molestiae maxime quo atque in et quaerat,
                        vel unde aliquam aperiam quidem consectetur omnis dicta
                        officiis? Dolorum, error dolorem!
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <a
                        className="collapsed card-link"
                        data-toggle="collapse"
                        href="#accordion22"
                      >
                        Collapsible Group Item #2
                      </a>
                    </div>
                    <div
                      className="collapse"
                      data-parent="#accordion2"
                      id="accordion22"
                    >
                      <div className="card-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo eaque porro alias assumenda accusamus
                        incidunt odio molestiae maxime quo atque in et quaerat,
                        vel unde aliquam aperiam quidem consectetur omnis dicta
                        officiis? Dolorum, error dolorem!
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <a
                        className="collapsed card-link"
                        data-toggle="collapse"
                        href="#accordion23"
                      >
                        Collapsible Group Item #3
                      </a>
                    </div>
                    <div
                      className="collapse"
                      data-parent="#accordion2"
                      id="accordion23"
                    >
                      <div className="card-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo eaque porro alias assumenda accusamus
                        incidunt odio molestiae maxime quo atque in et quaerat,
                        vel unde aliquam aperiam quidem consectetur omnis dicta
                        officiis? Dolorum, error dolorem!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- accordion style 2 end --> */}
          {/* <!-- accordion style 3 start --> */}
          <div className="col-lg-6 mt-5">
            <div className="card">
              <div className="card-body">
                <h4 className="header-title">Accordion 1</h4>
                <div className="according accordion-s3" id="accordion3">
                  <div className="card">
                    <div className="card-header">
                      <a
                        className="card-link"
                        data-toggle="collapse"
                        href="#accordion31"
                      >
                        Collapsible Group Item #1
                      </a>
                    </div>
                    <div
                      className="collapse show"
                      data-parent="#accordion3"
                      id="accordion31"
                    >
                      <div className="card-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo eaque porro alias assumenda accusamus
                        incidunt odio molestiae maxime quo atque in et quaerat,
                        vel unde aliquam aperiam quidem consectetur omnis dicta
                        officiis? Dolorum, error dolorem!
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <a
                        className="collapsed card-link"
                        data-toggle="collapse"
                        href="#accordion32"
                      >
                        Collapsible Group Item #2
                      </a>
                    </div>
                    <div
                      className="collapse"
                      data-parent="#accordion3"
                      id="accordion32"
                    >
                      <div className="card-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo eaque porro alias assumenda accusamus
                        incidunt odio molestiae maxime quo atque in et quaerat,
                        vel unde aliquam aperiam quidem consectetur omnis dicta
                        officiis? Dolorum, error dolorem!
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <a
                        className="collapsed card-link"
                        data-toggle="collapse"
                        href="#accordion33"
                      >
                        Collapsible Group Item #3
                      </a>
                    </div>
                    <div
                      className="collapse"
                      data-parent="#accordion3"
                      id="accordion33"
                    >
                      <div className="card-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo eaque porro alias assumenda accusamus
                        incidunt odio molestiae maxime quo atque in et quaerat,
                        vel unde aliquam aperiam quidem consectetur omnis dicta
                        officiis? Dolorum, error dolorem!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- accordion style 3 end --> */}
          {/* <!-- accordion style 4 start --> */}
          <div className="col-lg-6 mt-5">
            <div className="card">
              <div className="card-body">
                <h4 className="header-title">Accordion 1</h4>
                <div
                  className="according accordion-s3 gradiant-bg"
                  id="accordion4"
                >
                  <div className="card">
                    <div className="card-header">
                      <a
                        className="card-link"
                        data-toggle="collapse"
                        href="#accordion41"
                      >
                        Collapsible Group Item #1
                      </a>
                    </div>
                    <div
                      className="collapse show"
                      data-parent="#accordion4"
                      id="accordion41"
                    >
                      <div className="card-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo eaque porro alias assumenda accusamus
                        incidunt odio molestiae maxime quo atque in et quaerat,
                        vel unde aliquam aperiam quidem consectetur omnis dicta
                        officiis? Dolorum, error dolorem!
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <a
                        className="collapsed card-link"
                        data-toggle="collapse"
                        href="#accordion42"
                      >
                        Collapsible Group Item #2
                      </a>
                    </div>
                    <div
                      className="collapse"
                      data-parent="#accordion4"
                      id="accordion42"
                    >
                      <div className="card-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo eaque porro alias assumenda accusamus
                        incidunt odio molestiae maxime quo atque in et quaerat,
                        vel unde aliquam aperiam quidem consectetur omnis dicta
                        officiis? Dolorum, error dolorem!
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <a
                        className="collapsed card-link"
                        data-toggle="collapse"
                        href="#accordion43"
                      >
                        Collapsible Group Item #3
                      </a>
                    </div>
                    <div
                      className="collapse"
                      data-parent="#accordion4"
                      id="accordion43"
                    >
                      <div className="card-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo eaque porro alias assumenda accusamus
                        incidunt odio molestiae maxime quo atque in et quaerat,
                        vel unde aliquam aperiam quidem consectetur omnis dicta
                        officiis? Dolorum, error dolorem!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- accordion style 4 end --> */}
          {/* <!-- accordion style 5 start --> */}
          <div className="col-lg-6 mt-5">
            <div className="card">
              <div className="card-body">
                <h4 className="header-title">Accordion 1</h4>
                <div
                  className="according accordion-s2 gradiant-bg"
                  id="accordion5"
                >
                  <div className="card">
                    <div className="card-header">
                      <a
                        className="card-link"
                        data-toggle="collapse"
                        href="#accordion51"
                      >
                        Collapsible Group Item #1
                      </a>
                    </div>
                    <div
                      className="collapse show"
                      data-parent="#accordion5"
                      id="accordion51"
                    >
                      <div className="card-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo eaque porro alias assumenda accusamus
                        incidunt odio molestiae maxime quo atque in et quaerat,
                        vel unde aliquam aperiam quidem consectetur omnis dicta
                        officiis? Dolorum, error dolorem!
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <a
                        className="collapsed card-link"
                        data-toggle="collapse"
                        href="#accordion52"
                      >
                        Collapsible Group Item #2
                      </a>
                    </div>
                    <div
                      className="collapse"
                      data-parent="#accordion5"
                      id="accordion52"
                    >
                      <div className="card-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo eaque porro alias assumenda accusamus
                        incidunt odio molestiae maxime quo atque in et quaerat,
                        vel unde aliquam aperiam quidem consectetur omnis dicta
                        officiis? Dolorum, error dolorem!
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <a
                        className="collapsed card-link"
                        data-toggle="collapse"
                        href="#accordion53"
                      >
                        Collapsible Group Item #3
                      </a>
                    </div>
                    <div
                      className="collapse"
                      data-parent="#accordion5"
                      id="accordion53"
                    >
                      <div className="card-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo eaque porro alias assumenda accusamus
                        incidunt odio molestiae maxime quo atque in et quaerat,
                        vel unde aliquam aperiam quidem consectetur omnis dicta
                        officiis? Dolorum, error dolorem!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- accordion style 5 end --> */}
          {/* <!-- accordion style 6 start --> */}
          <div className="col-lg-6 mt-5">
            <div className="card">
              <div className="card-body">
                <h4 className="header-title">Accordion 1</h4>
                <div className="according gradiant-bg" id="accordion6">
                  <div className="card">
                    <div className="card-header">
                      <a
                        className="card-link"
                        data-toggle="collapse"
                        href="#accordion61"
                      >
                        Collapsible Group Item #1
                      </a>
                    </div>
                    <div
                      className="collapse show"
                      data-parent="#accordion6"
                      id="accordion61"
                    >
                      <div className="card-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo eaque porro alias assumenda accusamus
                        incidunt odio molestiae maxime quo atque in et quaerat,
                        vel unde aliquam aperiam quidem consectetur omnis dicta
                        officiis? Dolorum, error dolorem!
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <a
                        className="collapsed card-link"
                        data-toggle="collapse"
                        href="#accordion62"
                      >
                        Collapsible Group Item #2
                      </a>
                    </div>
                    <div
                      className="collapse"
                      data-parent="#accordion6"
                      id="accordion62"
                    >
                      <div className="card-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo eaque porro alias assumenda accusamus
                        incidunt odio molestiae maxime quo atque in et quaerat,
                        vel unde aliquam aperiam quidem consectetur omnis dicta
                        officiis? Dolorum, error dolorem!
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <a
                        className="collapsed card-link"
                        data-toggle="collapse"
                        href="#accordion63"
                      >
                        Collapsible Group Item #3
                      </a>
                    </div>
                    <div
                      className="collapse"
                      data-parent="#accordion6"
                      id="accordion63"
                    >
                      <div className="card-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo eaque porro alias assumenda accusamus
                        incidunt odio molestiae maxime quo atque in et quaerat,
                        vel unde aliquam aperiam quidem consectetur omnis dicta
                        officiis? Dolorum, error dolorem!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- accordion style 6 end --> */}
        </div>
        {/* <!-- accroding end --> */}
      </div>
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

export default Home;
