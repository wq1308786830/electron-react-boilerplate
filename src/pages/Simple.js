import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import TodoStore from '@/stores/TodoStore';

const Simple = observer(() => {
  const { remainingTodos } = useContext(TodoStore);
  let webview = useRef(null);

  const onPrint = fileUrl => {
    let printHtml = '打印内容。。。。。';
    webview.current.executeJavaScript('document.documentElement.innerHtml = `' + printHtml + '`;')
    console.log(webview.current.getWebContents())
    webview.current.getWebContents().print(
      { silent: true, printBackground: true, deviceName: '' },
      data => {
        console.log('webview success', data);
      }
    );
  };

  return (
    <div>
      <p>remainingTodos: {remainingTodos}</p>
      <button onClick={() => onPrint('')}>打印</button>
      <webview
        ref={webview}
        nodeintegration="true"
        src="./electron/print.html"
      ></webview>
      <Link to={'/'}>Page Index</Link>
    </div>
  );
});

export default Simple;
