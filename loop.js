const bottle = {
    color: 'blue',
    name: 'water',
    price: 500,
    isCleaned: true
};
// for (const name in bottle) {
//     console.log(name, bottle[name]);
// }

// const keys = Object.keys(bottle);
// console.log(keys);
// for (const name of keys) {
//     console.log(name, bottle[name]);
// }

const entries = Object.entries(bottle);
// console.log(entries);
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}
