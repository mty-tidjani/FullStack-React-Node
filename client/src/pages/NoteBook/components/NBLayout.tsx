import React from 'react';

const NBLayout: React.FC = () => {
  return (
    <div className="sidebar-menu">
      <div className="sidebar-header">
        <div className="logo text-white">
          <span>NOTE MENU</span>
        </div>
      </div>
      <div className="main-menu">
        <div className="menu-inner">
          <nav>
            <ul className="metismenu" id="menu">
              <li>
                <a href="?">
                  <i className="fa fa-table" />
                  <span>Todos</span>
                </a>
              </li>
              <li>
                <a href="?">
                  <i className="fa fa-table" />
                  <span>Add todos</span>
                </a>
              </li>
              <li className="active">
                <a href="?">
                  <i className="fa fa-table" />
                  <span>Members</span>
                </a>
              </li>
              <li>
                <a href="?">
                  <i className="fa fa-table" />
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="?">
                  <i className="fa fa-table" />
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NBLayout;
