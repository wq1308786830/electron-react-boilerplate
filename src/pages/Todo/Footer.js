import React, { useContext } from 'react';
import TodoStore from '../../stores/TodoStore';
import { observer } from 'mobx-react-lite/dist/index';

const Footer = observer(() => {
  const { todos, remainingTodos } = useContext(TodoStore);

  return (
    <p>
      {remainingTodos} / {todos.length} left
    </p>
  );
});

export default Footer;
