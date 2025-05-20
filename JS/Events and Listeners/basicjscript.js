// Just practicing basic JS syntax


//******************* for loop types **********************/

  // let arr = [1, 3, 5, 45, 4];
  // // arr.forEach((index,value )=>{
  // //   console.log(value, index);
  // // });


  // // for(let a in arr){
  // //   console.log(a, arr[a]);
  // // }

  // for(let a of arr){
  //   console.log(a);
  // }


//   function greetMe(fullName) {
//   console.log("hello", fullName);
//   greet();
// }

// function greet() {
//   console.log("Greeting for the day");
// }

// greetMe("Babbar");

//****************** Objects *******************/


// let obj = {
//   name1 : "Talal", 
//   age : 23, 
//   greet: () => {
//     console.log("in the object");
//   }
// }

// console.log(obj.name1);
// console.log(obj["greet"]());


// console.log(obj["name1"]);
// // console.log(obj["greet"]);
// let func = "greet";

// obj[func]();



//*********************Classes and Objects************************/

// class Human{
//   name1 = "talal";
//   #wt = 23; // Use # symbol to make private member
  
//   // Parameterized Constructor
//   constructor(n, w){
//     this.name1 = n;
//     this.#wt = w;
//   }

//   // getter can be used to access private members
//   get fetchWeight(){
//     return this.#wt;
//   }

//   // Setter to set value
//   set setWeight(weight){
//     this.#wt = weight;
//   }


//   weight(){
//     return this.#wt;
//   }

//   hello = (age) => {
//     console.log("my age is", age);
//   }


// }

// let obj = new Human();
// // console.log(obj.name1);

// // console.log(obj.#wt); // gives error, can't access private members directly


// // getters/setters in JavaScript are accessed like properties, not like functions.
// console.log(obj.fetchWeight);

// obj.setWeight = 434;
// console.log(obj.fetchWeight);

// //  Accessing private members using functions

// // obj.hello(34);
// // let rwt = obj.weight();
// // console.log(rwt);



let date = new Date();
console.log(date);