const shammi = {
    name: 'shammi',
    id: 21,
    age: 22,
    money: 100000,
    trt: function (expense, tips) {
        this.money = this.money - expense - tips;
        console.log(this);
        return this.money;
    }
}
// shammi.trt(500);

const rumman = {
    name: 'rumman',
    id: 37,
    money: 40000
}

const aammin = {
    name: 'aamin',
    id: 7,
    money: 700000
}


// bind
// const rummanTrt = shammi.trt.bind(rumman);
// rummanTrt(5000, 1000);

// call

shammi.trt.call(rumman, 35000, 400);

shammi.trt.apply(aammin, [40000, 5000]);