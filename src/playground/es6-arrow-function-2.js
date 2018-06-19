// const add = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };

// console.log(add(66,3,4));

const user = {
    name: 'Lindsey',
    cities: ['Laramie', 'Provo', 'Kluang'],
    printPlacesLived() {
        return this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });//can also remove curly braces and remove "return"
    }
    // printPlacesLived() {
    //     this.cities.forEach((city) => {
    //         console.log(this.name + ' has lived in ' + city);
    //     })
    // }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}
console.log(multiplier.multiply());