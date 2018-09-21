import { createStore, combineReducers } from 'redux';

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Combine Reducer

const store = createStore(
  combineReducers({ expenses: expensesReducer, filters: filtersReducer })
);
console.log(store.getState());

//

const demoState = {
  expenses: [
    {
      id: 'werwqre',
      description: 'Muharrom',
      note: 'Tagihan Website',
      amount: 50000,
      createdAt: 0
    }
  ],
  filters: {
    text: 'tagihan',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
