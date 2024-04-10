import { Component, For } from 'solid-js';
import TodoItem from './TodoItem';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onComplete: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList: Component<TodoListProps> = (props) => {
  return (
    <div>
      <For each={props.todos}>
        {(todo) => (
          <TodoItem
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onComplete={props.onComplete}
            onEdit={props.onEdit}
            onDelete={props.onDelete}
          />
        )}
      </For>
    </div>
  );
};

export default TodoList;
