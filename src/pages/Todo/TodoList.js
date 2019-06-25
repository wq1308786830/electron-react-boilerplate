import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite/dist/index';
import TodoStore from '../../stores/TodoStore';

const TodoList = observer(() => {
  const { todos, toggleTodo } = useContext(TodoStore);
  return (
    <ul style={{ listStyle: 'none' }}>
      {todos &&
        todos.map((t, i) => (
          <li
            onClick={() => toggleTodo(i)}
            style={{
              margin: 10,
              opacity: t.completed ? 0.5 : 1,
              cursor: 'pointer',
              textDecoration: t.completed ? 'line-through' : 'none'
            }}
            key={t.id}
          >
            {t.text}
          </li>
        ))}
    </ul>
  );
});

export default TodoList;
