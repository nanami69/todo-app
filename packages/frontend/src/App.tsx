import { Component, onMount, createSignal } from 'solid-js';
import { db } from './firebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';

import styles from './App.module.css';

import { Header } from "./components/Header/Header";
import { TodoList, TodoItem } from "./components/TodoList/TodoList";

const App: Component = () => {
  const [todos, setTodos] = createSignal<TodoItem[]>([]);
  const fetchTodos = async () => {
    const querySnapshot = await getDocs(collection(db, "todo"));
    const todosArray = querySnapshot.docs.map(doc => ({ ...doc.data() as TodoItem, id: doc.id }));
    setTodos(todosArray);
  };

  onMount(() => {
    fetchTodos();
  });

  return (
    <div class={styles.App}>
      <Header />
      <TodoList
        todos={todos()}
      />
    </div>
  );
};

export default App;
