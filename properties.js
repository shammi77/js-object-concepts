const bottle = {
    color: 'blue',
    name: 'water',
    price: 500,
    isCleaned: true
};
// Object.seal(bottle);
// bottle.price = 1000;
// bottle.height = 14;
Object.freeze(bottle);
bottle.price = 1000;
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
const entries = Object.entries(bottle);
// console.log(entries);

delete bottle.isCleaned;
console.log(bottle);