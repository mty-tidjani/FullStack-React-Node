import React from 'react';
import TodoItem from '../../../components/items/TodoItem';
import './Todos.scss';

const Todos: React.FC = () => {
  return (
    <div className="todos" id="todos">
      <div className="d-flex">
        {/* <!-- accordion style 2 start --> */}
        <div className="todo_section ml-auto mr-auto">
          <div className="card">
            <div className="card-title">
              <h4>Backlog</h4>
            </div>
            <div className="card-body">
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

        <div className="todo_section ml-auto mr-auto">
          <div className="card">
            <div className="card-title">
              <h4>To do</h4>
            </div>
            <div className="card-body">
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

        <div className="todo_section ml-auto mr-auto">
          <div className="card">
            <div className="card-title">
              <h4>In Progress</h4>
            </div>
            <div className="card-body">
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
        <div className="todo_section ml-auto mr-auto">
          <div className="card">
            <div className="card-title">
              <h4>Review</h4>
            </div>
            <div className="card-body">
              <div className="according gradiant-bg" id="accordion2">
                <TodoItem todo={{ _id: 'ccccc', nm: 'Greatest todo ever!' }} />
                <TodoItem todo={{ _id: 'ccccc', nm: 'Greatest todo ever!' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="todo_section ml-auto mr-auto">
          <div className="card">
            <div className="card-title">
              <h4>Approved</h4>
            </div>
            <div className="card-body">
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
        {/* <!-- accroding end --> */}
      </div>
    </div>
  );
};

export default Todos;
