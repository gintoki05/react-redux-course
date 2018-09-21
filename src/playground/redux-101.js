import { createStore } from 'redux';

// Action Generator

// const add = ({ a, b }, c) => {
//   return a + b + c;
// };

// console.log(add({ a: 1, b: 12 }, 100));

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy
  };
};

const resetCount = () => {
  return {
    type: 'RESET'
  };
};

const setCount = ({ count }) => {
  return {
    type: 'SET',
    count
  };
};

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
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
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

// Increment
store.dispatch(incrementCount());

// Reset
store.dispatch(resetCount());

// Decrement
store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

// Set
store.dispatch(setCount({ count: 101 }));
