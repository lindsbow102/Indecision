class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting () {
        return `Hi! My name is ${ this.name }!`;
    }
    getDescription() {
        //return 'Hi.  I am ' + this.name + '!';
        return `Hi. ${ this.name } is ${ this.age } year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !! this.major;//!!undefined will equal false
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;//same as description = description + `...`.
        }
        return description;
    }
}

class Traveler extends Person {
    constructor (name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getHomeLocation () {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.getHomeLocation()) {
            greeting += ` I am visiting from ${this.homeLocation}.`
        }
        return greeting;
    }
}

const me = new Traveler('Lindsey Bowen', 38, 'Laramie');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());