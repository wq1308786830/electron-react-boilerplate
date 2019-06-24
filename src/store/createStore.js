export function createStore() {
  // storing variable in closure means you can access it in methods
  // otherwise you would have to use `this` which doesn't work well with TypeScript
  const store = {
    count: 0,
    add() {
      store.count += 1;
    },
    get countNum() {
      return store.count;
    }
  };
  return store;
}
