const person = {
  name: 'Ajie',
  age: 21,
  location: {
    city: 'Palembang',
    temp: 30
  }
};

const { name: firstName = 'Anonymus', age } = person; // Object destructure
// const name = person.name
// const age = person.age

console.log(`${firstName} is ${age}`);

const { city, temp: temperature } = person.location; // Object destructure

console.log(`${temperature} Celcius in ${city}`);

// CHALLENGE
const book = {
  title: 'Ego is the Enemy',
  author: '  Ryan liburan',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);
