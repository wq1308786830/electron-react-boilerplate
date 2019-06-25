import React from 'react';
import { Link } from 'react-router-dom';
import TodoList from './TodoList';
import Footer from './Footer';

function Todo() {
  return (
    <>
      <h2>A Todo App yet again!</h2>
      <TodoList />
      <Footer />
      <Link to={'/Simple'}>Page Simple</Link>
    </>
  );
}

export default Todo;
