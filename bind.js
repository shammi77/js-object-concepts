const shammi = {
    name: 'shammi',
    id: 21,
    money: 100000,
    trt: function (expense) {
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}
const rumman = {
    name: 'rumman',
    id: 7,
    money: 30000
}
const aammin = {
    name: 'aammin',
    id: 7,
    money: 20000
}
shammi.trt(40000);

const rummanTrt = shammi.trt.bind(rumman);
rummanTrt(500);

const aamminTrt = shammi.trt.bind(aammin);
aamminTrt(10000);
