import React from "react";
import { Todo } from "../../types/model";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { todo } = props;
  return (
    <div className="item_todo">
      <h1>{todo.nm}</h1>
    </div>
  );
};

export default TodoItem;
