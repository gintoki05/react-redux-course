import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'RESET':
      return {
        count: (state.count = 0)
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
});

store.subscribe(() => {
  console.log(store.getState());
});

// Increment
store.dispatch({
  type: 'INCREMENT'
});

// Increment
store.dispatch({
  type: 'INCREMENT'
});

// Reset
store.dispatch({
  type: 'RESET'
});

// Decrement
store.dispatch({
  type: 'DECREMENT'
});
