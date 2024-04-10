import { Component, For } from 'solid-js';
import TodoItem from './TodoItem';

export interface TodoItem {
  id: string;
  title: string;
  status: boolean;
}

interface TodoListProps {
  todos: TodoItem[];
//   onComplete: (id: string) => void;
//   onEdit: (id: string) => void;
//   onDelete: (id: string) => void;
}

export const TodoList: Component<TodoListProps> = (props) => {
  return (
    <div>
      <For each={props.todos}>
        {(todo) => (
          <TodoItem
            id={todo.id}
            title={todo.title}
            completed={todo.status}
            // onComplete={props.onComplete}
            // onEdit={props.onEdit}
            // onDelete={props.onDelete}
          />
        )}
      </For>
    </div>
  );
};
