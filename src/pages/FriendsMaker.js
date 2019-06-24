import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';

export const FriendsMaker = observer(() => {
  const store = useStore();
  const onAdd = React.useCallback(() => {
    store.add();
  }, [store]);
  return (
    <div>
      Count in self is: {store.count}
      <button onClick={onAdd}>Add Count</button>
    </div>
  );
});
