import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';

export const MatchMaker = observer(() => {
  const store = useStore();

  // for a sake of example filtering is done here
  // you might as well expose it on the store directly
  const count = store.count;
  return <div>{count}</div>;
});
