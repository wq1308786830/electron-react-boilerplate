import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';

export const FriendsMaker = observer(() => {
  const store = useStore();
  const onSubmit = React.useCallback(({ preventDefault, name, favorite, single }) => {
    preventDefault();
    store.makeFriend(name, favorite, single);
  }, [store]);
  return (
    <form onSubmit={onSubmit}>
      Total friends: {store.friends.length}
      <input type="text" id="name" />
      <input type="checkbox" id="favorite" />
      <input type="checkbox" id="single" />
    </form>
  );
});
