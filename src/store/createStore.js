export function createStore() {
  // storing variable in closure means you can access it in methods
  // otherwise you would have to use `this` which doesn't work well with TypeScript
  const store = {
    friends: [],
    makeFriend(name, isFavorite = false, isSingle = false) {
      const oldFriend = store.friends.find(friend => friend.name === name);
      if (oldFriend) {
        oldFriend.isFavorite = isFavorite;
        oldFriend.isSingle = isSingle;
      } else {
        store.friends.push({ name, isFavorite, isSingle });
      }
    },
    get singleFriends() {
      return store.friends.filter(friend => friend.isSingle);
    },
  };
  return store;
}
