import React from 'react';
import TodoList from './pages/TodoList';
import Footer from './pages/Footer';

export function App() {
  return (
    <div className="App">
      <h2>A Todo App yet again!</h2>
      <TodoList />
      <Footer />
    </div>
  );
}
