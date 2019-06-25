import React, { useContext } from 'react';
import TodoStore from '../stores/TodoStore';
import { observer } from 'mobx-react-lite';
import Simple from './Simple';

const Footer = observer(() => {
  const { todos } = useContext(TodoStore);

  return (
    <p>
      <Simple /> / {todos.length} left
    </p>
  );
});

export default Footer;
