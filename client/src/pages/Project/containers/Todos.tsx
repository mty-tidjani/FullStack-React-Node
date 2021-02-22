import React from 'react';
import Lnk from '../../../components/common/Lnk';
import TodoItem from '../../../components/items/TodoItem';

const Todos: React.FC = () => {
  return (
    <div className="todos" id="todos">
      <div className="manu-area clearfix">
        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            aria-controls="fkdjsdj"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#fkdjsdj"
            data-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="fkdjsdj"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Lnk className="nav-link">All (8)</Lnk>
              </li>
              <li className="nav-item">
                <Lnk className="nav-link">Pending (2)</Lnk>
              </li>
              <li className="nav-item">
                <Lnk className="nav-link">Assigned (0)</Lnk>
              </li>
              <li className="nav-item">
                <Lnk className="nav-link">Done (2)</Lnk>
              </li>
              <li className="nav-item">
                <Lnk className="nav-link">Rejected (1)</Lnk>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* <!-- accroding start --> */}
      <div className="rom m-0">
        {/* <!-- accordion style 2 start --> */}
        <div className="col-lg-8 mt-5 ml-auto mr-auto">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title">Todo List</h4>
              <div className="according gradiant-bg" id="accordion2">
                <TodoItem todo={{ _id: 'ccccc', nm: 'Greatest todo ever!' }} />
                <TodoItem todo={{ _id: 'ccccc', nm: 'Greatest todo ever!' }} />
                <TodoItem todo={{ _id: 'ccccc', nm: 'Greatest todo ever!' }} />
                <TodoItem todo={{ _id: 'ccccc', nm: 'Greatest todo ever!' }} />
                <TodoItem todo={{ _id: 'ccccc', nm: 'Greatest todo ever!' }} />
                <TodoItem todo={{ _id: 'ccccc', nm: 'Greatest todo ever!' }} />
                <TodoItem todo={{ _id: 'ccccc', nm: 'Greatest todo ever!' }} />
                <TodoItem todo={{ _id: 'ccccc', nm: 'Greatest todo ever!' }} />
                <TodoItem todo={{ _id: 'ccccc', nm: 'Greatest todo ever!' }} />
                <TodoItem todo={{ _id: 'ccccc', nm: 'Greatest todo ever!' }} />
                <TodoItem todo={{ _id: 'ccccc', nm: 'Greatest todo ever!' }} />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- accordion style 2 end --> */}
      </div>
      {/* <!-- accroding end --> */}
    </div>
  );
};

export default Todos;
