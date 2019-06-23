import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';

export const MatchMaker = observer(() => {
  const store = useStore();
  // for a sake of example filtering is done here
  // you might as well expose it on the store directly
  const singleAndFavoriteFriends = store.singleFriends.filter(friend => friend.isFavorite);
  return (
    <div>
      {singleAndFavoriteFriends.map(friend => (
        <p>{friend.name}</p>
      ))}
    </div>
  );
});
