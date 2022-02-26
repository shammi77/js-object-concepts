// using literal
const student = {
    name: 'shammi',
    id: 21
}

// using constructor
const person = new Object({ like: 'halim' })
// console.log(person);

// create 
// const human = Object.create(null);
const human = Object.create(student)
console.log(human.id);

// syntactical sugar
function Manush(name) {
    this.name = name;
}
const man = new Manush('shammi');
console.log(man);