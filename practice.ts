//Readonly And Optional Properties
type Point = {
  x: number;
  readonly y: number;
  z?: number;
};

const abc: Point = { x: 23, y: 44 };

abc.x = 23;
console.log(abc.y);
//abc.y = 23; //ReadOnly so cant be assigned.

//Intersection types
type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

const ColoredCircle: Circle & Colorful = {
  radius: 4,
  color: "yellow",
};

//Arrays
const emptyArr: [] = []; //type of empty array
const activeUsers: string[] = ["abc", "def"];
const activeUsersDifferentSynatx: Array<string> = ["abc", "def"];

type Coord = {
  x: number;
  y: number;
};

const arrTypeCord: Coord[] = [{ x: 4, y: 5 }];

arrTypeCord.push({ x: 2, y: 3 });

//Multidimensional Arrays

const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

const demo: number[][][] = [[[3, 34]]];

//Union Types

let age: number | string = 23;
age = "string";
//age = false; // throws error

const arr1: (string | number)[] = [2, 3, "sda"];

//Literal Types

let zero: 0 = 0;
//zero = 2 //Error

//Union and Literal Types Together

let Moods: "Happy" | "Sad" | "Angry" = "Happy";
Moods = "Sad";
Moods = "Angry";
//Moods = "Glow"; //Error
