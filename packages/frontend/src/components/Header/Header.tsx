import { Component, createSignal, Show } from "solid-js";
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

interface HeaderProps {
    fetchTodos: () => Promise<void>;
}

export const Header: Component<HeaderProps> = (props) => {
    const [isOpen, setIsOpen] = createSignal(false);
    const [title, setTitle] = createSignal("");
    const addTodo = async (title: string) => {
        try {
          const docRef = await addDoc(collection(db, "todo"), {
            title: title,
            status: false
          });
          console.log("Document written with ID: ", docRef.id);
      
          await props.fetchTodos();
        } catch (e) {
          console.error("Error adding document: ", e);
        }
    };

    return (
        <>
            <button onClick={() => setIsOpen(true)}>NEW</button>
            <Show when={isOpen()}>
                <div>
                    <h2>Add a new Todo</h2>
                    <input
                        type="text"
                        placeholder="Enter todo title"
                        value={title()}
                        onInput={(e) => setTitle(e.currentTarget.value)}
                    />
                    <button onClick={() => addTodo(title())}>Add Todo</button>
                    <button onClick={() => setIsOpen(false)}>Cancel</button>
                </div>
            </Show>
        </>
    );
};