import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import TodoStore from '@/stores/TodoStore';

const Footer = observer(() => {
  const { todos, remainingTodos } = useContext(TodoStore);

  return (
    <p>
      {remainingTodos} / {todos.length} left
    </p>
  );
});

export default Footer;
