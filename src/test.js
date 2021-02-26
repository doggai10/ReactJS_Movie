
// function sayHello(name= "test"){
//   return "Hello" + name;
// }

// const sayHello = (name="Human") => "Hello" + name;
const sayHello = (name="Human") => `Hello ${name}`;
const test= sayHello();
console.log(test);

const human = {
  name:"doheon",
  lastName: "kim",
  nationality : "korean",
  favFood : {
    breakfast : "kimbob",
    lunch : "ramen",
    dinner : "rice cake"
  }
};

const {name, lastName, nationality:difName, favFood: {dinner,breakfast,lunch}} = human;
console.log(name, lastName, difName, dinner,breakfast,lunch);


const days= ["Mon", "Tues", "Wed","Thu", "Fri"];

const addNumber = (day, index) => `${index+1} ${day}`;

const testDays= days.map(addNumber);
console.log(testDays);

// const otherDays = ["Thu", "Fri", "Sat"];

// const allDays= [...days, ...otherDays];
// console.log(allDays);



class Human {
  constructor(name,lastName){
    this.name=name;
    this.lastName=lastName;
  }
}

class Baby extends Human {
  cry(){
    console.log("waaaa");
  }

  sayName(){
    console.log(`My name is ${this.name}`);
  }
}

const person=new Human("test1", "test2");
console.log(person.name);

const myBaby = new Baby("mini", "me");
console.log(myBaby);
console.log(myBaby.cry());

console.log(myBaby.cry(), myBaby.sayName());


const numbers= [1,2,3,4,5,6,7,8,9];

const lessThan5 = numbers.filter(number => number <5);
console.log(lessThan5);


let posts =["Hi", "Hello", "Bye"];
posts.forEach(post =>console.log(post));
posts.push("new");
console.log(posts);

if(!posts.includes("Hi")){
  posts.push("Hi");
}

// const button = document.querySelector('button');
// button.addEventListener("click", event => console.log(event));