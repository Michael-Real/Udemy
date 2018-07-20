function square(x) {
    return x*x;
};

const squareArrow = (x) => {
    return x*x;
};

const arrowSquared = (x) => x * x;


console.log(square(8)); //?
console.log(squareArrow(9)); //?
console.log(arrowSquared(6)); //?

const fullName = 'Buddy Budds';
let firstName = "Michael";
let lastName = "Real";

const getLastName = (fullName) => {
    return fullName.split(' ')[1]; //?
};
console.log(getLastName("Alex Butthead")); //?

