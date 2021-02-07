import React from 'react';
import { NavLink } from 'react-router-dom';

type NBLayoutProps = {
  bookId: string;
};

export const linksNB = (bookId: string) => {
  const base = `/notebook/${bookId}`;
  return {
    base,
    add: `${base}/add`,
    members: `${base}/members`,
    about: `${base}/about`,
    settings: `${base}/settings`,
  };
};

const NBLayout: React.FC<NBLayoutProps> = ({ bookId }) => {
  const links = linksNB(bookId);
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
                <NavLink activeClassName="active" to={links.base} exact>
                  <i className="fa fa-table" />
                  <span>Todos</span>
                </NavLink>
              </li>
              <li className="active">
                <NavLink activeClassName="active" to={links.add}>
                  <i className="fa fa-table" />
                  <span>Add todos</span>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to={links.members}>
                  <i className="fa fa-table" />
                  <span>Members</span>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to={links.about}>
                  <i className="fa fa-table" />
                  <span>About</span>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to={links.settings}>
                  <i className="fa fa-table" />
                  <span>Settings</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NBLayout;
