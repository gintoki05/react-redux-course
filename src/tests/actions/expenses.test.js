import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should remove expense action', () => {
  const action = removeExpense({ id: '123' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123'
  });
});

test('should edit expense action', () => {
  const action = editExpense('123', { note: 'New note' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: { note: 'New note' }
  });
});

test('should add expense action with provided value', () => {
  const expenseData = {
    description: 'Rent',
    amount: 20000,
    createdAt: 1000,
    note: 'Tagihan'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should add expense action with default value', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
