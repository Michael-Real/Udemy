// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001)); 

// this keyword - no longer bound with arrow functions

const user = {
    name: 'Mike',
    cities: ['Philadelphia', 'London', 'Puerto Rico'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' is tired of living in ' + city);
    }
};

user.printPlacesLived(); //?

/* this.cities.forEach((city) => {
    console.log(this.name + ' has lived in ' + city)
 }); //? */

 // Challenge Area
 const multiplier = {
     numbers: [1, 2, 3, 4],
     multiplyBy: 4,
     multiply() {
         return this.numbers.map((number) => number * this.multiplyBy); //?
     }
 };

multiplier.multiply(); //?