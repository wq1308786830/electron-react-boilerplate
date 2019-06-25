import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import TodoStore from '@/stores/TodoStore';

const { ipcRenderer } = window.require('electron');

const Simple = observer(() => {
  const { remainingTodos } = useContext(TodoStore);

  useEffect(() => {
    ipcRenderer.on('asynchronous-reply', (event, arg) => {
      console.log(arg); // prints "pong"
    });
  });

  const onPrint = fileUrl => {
    let printInfo = {
      //pdfUrl是网络PDF文件的地址
      pdf: fileUrl
    };
    ipcRenderer.send('print', printInfo);
  };

  return (
    <>
      <p>remainingTodos: {remainingTodos}</p>
      <button onClick={() => onPrint('')}>打印</button>
      <Link to={'/'}>Page Index</Link>
    </>
  );
});

export default Simple;
