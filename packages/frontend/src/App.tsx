import type { Component } from 'solid-js';

import styles from './App.module.css';

import { Header } from "./components/Header/Header";

// const App: Component = () => {
//   return (
//     <div class={styles.App}>
//       <header class={styles.header}>
//         <img src={logo} class={styles.logo} alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           class={styles.link}
//           href="https://github.com/solidjs/solid"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn Solid
//         </a>
//       </header>
//     </div>
//   );
// };

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header />
    </div>
  );
};

export default App;
