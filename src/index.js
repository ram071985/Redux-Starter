import { produce } from 'immer';

let book = { title: "Harry Potter" };

function publish(book) {
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    });
}

let updated = publish(book);

console.log(book);
console.log(updated);


/*
// UPDATING ARRAYS
const numbers = [1, 2, 3];

// Adding
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

// Removing
const removed = numbers.filter(n => n !== 2);

// Updating
const updated = numbers.map(n => n === 2 ? 20 : n)

console.log(updated);
// IMMUTABILITY
const person = {
  name: "John",
  address: {
      country: "USA",
      city: "San Francisco"
  }
};
const updated = { 
    ...person, 
    address: {
    ...person.address,
    city: "New York"  
    },
    name: "Bob" };
console.log(person);

// FUNCTIONAL PROGRAMING
/**import { compose, pipe } from 'lodash/fp';
import { transform } from 'lodash';
let input = "   JavaScript   ";
let output = "<div>" + input.trim() + "</div";

const trim = str => str.trim();
const wrap = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

const transForm = pipe(trim, toLowerCase, wrap("span"));
console.log(transForm(input));
**/
