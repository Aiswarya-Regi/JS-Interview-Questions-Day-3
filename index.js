// // Q:1
// function makeFunc() {
//     const name = 'Hey All!';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();

// //   Q:2
//   let person = {
//     firstName: 'John',
//     lastName: 'Doe'
//     };
//     console.log(person);

// // Q:3
// function User (name, age) {
//     this.name = name;
//     this.age = age;
// }
//     var user1 = new User('Bob', 25);
//     var user2 = new User('Alice', 27);
//     console.log(user1);

// Q:4
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  }
  Person.prototype.nationality = "English";
  const myFather = new Person("John", "Doe", 50, "blue");
  console.log("The nationality of my father is " + myFather.nationality);  

// Q:5
