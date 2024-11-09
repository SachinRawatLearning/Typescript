"use strict";
const abc = { x: 23, y: 44 };
abc.x = 23;
console.log(abc.y);
const ColoredCircle = {
    radius: 4,
    color: "yellow",
};
//Arrays
const emptyArr = []; //type of empty array
const activeUsers = ["abc", "def"];
const activeUsersDifferentSynatx = ["abc", "def"];
const arrTypeCord = [{ x: 4, y: 5 }];
arrTypeCord.push({ x: 2, y: 3 });
//Multidimensional Arrays
const board = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"],
];
const demo = [[[3, 34]]];
//Union Types
let age = 23;
age = "string";
//age = false; // throws error
const arr1 = [2, 3, "sda"];
//Literal Types
let zero = 0;
//zero = 2 //Error
//Union and Literal Types Together
let Moods = "Happy";
Moods = "Sad";
Moods = "Angry";
//Moods = "Glow"; //Error
//Tuples
const myTuple = [2, 3, 4];
const goodResponse = [200, "OK"];
const badResponse = [400, "Network Error"];
const responses = [[404, "Not Found"]];
const someTuple = ["abc", 23];
//someTuple.push(23);// not allowed
//Enums
var Responses;
(function (Responses) {
    Responses[Responses["No"] = 0] = "No";
    Responses[Responses["Yes"] = 1] = "Yes";
    Responses[Responses["Maybe"] = 23] = "Maybe";
})(Responses || (Responses = {}));
const myResponse = Responses.Yes;
const printName = (person) => {
    console.log(person);
};
printName({ name: "John Cena", age: 44 });
const person1 = { id: 23, first: "John" };
person1.first = "Sam";
const person2 = {
    name: "abc",
    greet: () => {
        return "Hello";
    },
};
const shoes = {
    product: "Red Tape",
    getDiscount: (amount) => {
        return 23;
    },
};
shoes.getDiscount(55); //23
const jerry = {
    name: "Jerry",
    age: 6,
    breed: "labradore",
    bark: () => {
        return "Bow Bow";
    },
};
const tom = {
    job: "guide dog",
    name: "tom",
    age: 5,
    breed: "German Shephard",
    bark() {
        return "Bark!";
    },
};
const tobey = {
    id: 23560,
    name: "Tobey",
    age: 25,
    role: "Software Developer",
    languages: ["Reactjs", "Javascript"],
};
