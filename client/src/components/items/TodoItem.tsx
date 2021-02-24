import React from 'react';
import { Todo } from '../../types/model';
// import { strRandom } from '../../utils/helpers';

type TodoItemProps = {
  todo: Todo;
};

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { todo } = props;
  // const id = strRandom(5);
  return (
    <div className="card item_todo">
      {/* <div className="card-header">
        <a className="card-link" data-toggle="collapse" href={`#${id}`}>
          {todo.nm}
        </a>
      </div> */}
      <div className="collapse show" data-parent="#accordion2" id="accordion23">
        <div className="card-body">
          <h5>{todo.nm}</h5>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque
          porro alias assumenda accusamus incidunt odio molestiae maxime quo
          atque in et quaerat, vel unde aliquam aperiam quidem consectetur omnis
          dicta officiis? Dolorum, error dolorem!
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
