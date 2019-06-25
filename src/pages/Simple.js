import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import TodoStore from '../stores/TodoStore';

const Simple = observer(() => {
  const { remainingTodos } = useContext(TodoStore);
  return (
    <>
      <p>remainingTodos: {remainingTodos}</p>
      <Link to={'/'}>Page Index</Link>
    </>
  );
});

export default Simple;
