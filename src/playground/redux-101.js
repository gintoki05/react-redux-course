import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy =
        typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'RESET':
      return {
        count: (state.count = 0)
      };
    case 'DECREMENT':
      const decrementBy =
        typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    default:
      return state;
  }
});

store.subscribe(() => {
  console.log(store.getState());
});

// ACTION

// Increment
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
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

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

// Set
store.dispatch({
  type: 'SET',
  count: 101
});
