import { Component, createSignal } from 'solid-js';

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
//   onComplete: (id: string) => void;
//   onEdit: (id: string) => void;
//   onDelete: (id: string) => void;
}

const TodoItem: Component<TodoItemProps> = (props) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.completed}
        // onChange={() => props.onComplete(props.id)}
      />
      <span>{props.title}</span>
      {/* <button onClick={() => props.onEdit(props.id)}>編集</button>
      <button onClick={() => props.onDelete(props.id)}>削除</button> */}
    </div>
  );
};

export default TodoItem;
