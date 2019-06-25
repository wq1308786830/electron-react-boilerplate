import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import TodoStore from '../stores/TodoStore';

const Simple = observer(() => {
  const { remainingTodos } = useContext(TodoStore);
  return <span>{remainingTodos}</span>;
});

export default Simple;
