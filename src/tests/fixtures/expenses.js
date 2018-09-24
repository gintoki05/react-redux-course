import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Mobil',
    note: '',
    amount: 200,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Pesawat',
    note: '',
    amount: 350000,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf()
  },
  {
    id: '3',
    description: 'Udemy',
    note: '',
    amount: 1250,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf()
  }
];
