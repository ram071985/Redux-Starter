function createStore() {
  let state;

  function dispatch(action) {}

  function getState() {
    return state;
  }

  return {
    dispatch,
    getState,
  };
}

export default createStore();
