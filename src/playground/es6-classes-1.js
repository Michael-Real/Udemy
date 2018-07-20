class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }  
  getGreeting() {
      //return 'Hi. I am ' + this.name + '.';
      return `Hi, I am ${this.name} and I'm ${this.age}`;
  }
};

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
   hasMajor() {
       return !!this.major;
   } 
   getGreeting(){
     let description = super.getGreeting();
     if(this.hasMajor()){
         description += `. My major is ${this.major}.`;
     }
     return description;
   }
};

const me = new Student('Michael Real', 28, "Idiocy");
console.log(me.getGreeting());

const other = new Student ();
console.log(other.hasMajor());