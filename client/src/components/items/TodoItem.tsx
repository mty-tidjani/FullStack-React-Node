import React from 'react';
import { Todo } from '../../types/model';
import Lnk from '../common/Lnk';

type TodoItemProps = {
  todo: Todo;
};

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { todo } = props;
  return (
    <div className="card item_todo">
      <div className="card-header">
        <Lnk className="collapsed card-link">{todo.nm}</Lnk>
      </div>
      <div className="collapse show" data-parent="#accordion2" id="accordion23">
        <div className="card-body">
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
