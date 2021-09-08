const john = {
    name: 'John',
    age: 32,
    celebrateBirthday() {
        const wishJohn = () => {
            console.log(`Happy birthday ${this.name}`);
        };

        const incrAge = () => {
            this.age++;
        };

        wishJohn();
        incrAge();
    }
};

john.celebrateBirthday();
console.log(john);

const johnCopy = {
    name: 'John',
    age: 32,
    celebrateBirthday() {
        const wishJohn = function() {
            console.log(`Happy birthday ${this.name}`);
        };

        const incrAge = () => {
            this.age++;
        };

        wishJohn();
        incrAge();
    }
};

johnCopy.celebrateBirthday();
console.log(johnCopy);