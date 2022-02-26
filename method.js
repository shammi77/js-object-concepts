const student = {
    id: 21,
    money: 4000,
    bestFriend: {
        name: 'shammi'
    },
    parent: ['misbah', 'fateha'],
    exam: function () {
        console.log(this.id, 'shammi');
    },
    treat: function (expense, tips) {
        this.money = this.money - expense - tips;
        return this.money;
    }
}
student.exam();

const remaining1 = student.treat(350, 40);

const remaining2 = student.treat(340, 50);
console.log(remaining2);