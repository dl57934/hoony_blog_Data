// // function printLabel(labelObj: { label: string }) {
// //   console.log(labelObj.label);
// // }

// // let myObj = { size: 10, label: "size 10 Obj" };

// // printLabel(myObj);

// // interface LabeledValue {
// //   label: string;
// // }

// // function printLabel2(labelObj: LabeledValue) {
// //   console.log(labelObj.label);
// // }

// // let myObj2 = { size: 10, label: "Size 10 Object" };
// // printLabel2(myObj2);

// // interface SquareConfig {
// //   color?: string;
// //   width?: number;
// // }

// // function createSquare(config: SquareConfig): { color: string; area: number } {
// //   let newSquare = { color: "white", area: 100 };
// //   if (config.color) newSquare.color = config.color;
// //   if (config.width) newSquare.area = config.width * config.width;
// //   return newSquare;
// // }
// // let mySquare = createSquare({ color: "black" });

// // interface Point {
// //   readonly x: number;
// //   readonly y: number;
// // }

// // let point: Point = { x: 12, y: 14 };
// // // point.x = 14;

// // let a: number[] = [1, 2, 3, 4];
// // let ro: ReadonlyArray<number> = a;
// // ro[0] = 12; // error
// // ro.push(14); // error
// // ro.length = 100; // error
// // a = ro; // error

// // a = ro as number[];

// interface SquareConfig {
//   color?: string;
//   width?: number;
//   [propName: string]: any;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   // ...

//   config.color;

//   return { color: "test", area: 12 };
// }

// // let mySquare = createSquare({ colour: "red", width: 100 });

// // let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

// let squareOptions = { colour: "red", width: 100 };
// let mySquare = createSquare(squareOptions);

// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc;
// mySearch = function(source: string, sub: string) {
//   let result = source.search(sub);
//   return result > -1;
// };

// mySearch = function(src, sub) {
//   let result = src.search(sub);
//   return "";
// };

// interface stringArray {
//   [index: number]: string;
// }

// let myArray: stringArray;
// myArray = ["bob", "Fred"];

// let myStr: string = myArray[0];

// interface ReadonlyStringInterface {
//   readonly [index: number]: string;
// }

// let myArray2: ReadonlyStringInterface = ["test", "test2"];
// myArray2[0] = "123";

// class Animal {
//   name: string;
// }

// class Dog extends Animal {
//   breed: string;
// }

// interface NotOkay {
//   [x: number]: Animal;
// }

// interface NumberDictionary {
//   [index: string]: number;
//   length: number; // ok, length is a number
//   name: string; // error, the type of 'name' is not a subtype of the indexer
// }

// interface NumberOrStringDictionary {
//   [index: string]: number | string;
//   length: number;
//   name: string;
// }

// // interface ClockInterface {
// //   currentTime: Date;
// //   setTime(d: Date): void;
// // }

// // class Clock implements ClockInterface {
// //   currentTime: Date = new Date();
// //   setTime(d: Date): void {
// //     this.currentTime = d;
// //   }
// //   constructor(h: number, m: number) {}
// // }
// interface ClockConstructor {
//   new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//   tick(): void;
// }

// function createClock(
//   ctor: ClockConstructor,
//   hour: number,
//   minute: number
// ): ClockInterface {
//   return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface {
//   constructor(h: number, m: number) {}
//   tick() {
//     console.log("beep beep");
//   }
// }
// class AnalogClock implements ClockInterface {
//   constructor(h: number, m: number) {}
//   tick() {
//     console.log("tick tock");
//   }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);

// interface Shape {
//   color: string;
// }

// interface Square extends Shape {
//   sideLength: number;
// }

// let square = {} as Square;
// square.color = "yellow";
// square.sideLength = 100;

// interface Counter {
//   (start: number): string;
//   interval: number;
//   reset(): void;
// }

// function getCounter(): Counter {
//   let counter = function(start: number) {} as Counter;
//   counter.interval = 130;
//   counter.reset = function() {};
//   return counter;
// }

// class Control {
//   private state: any;
// }

// interface SelectableControl extends Control {
//   select(): void;
// }

// class Button extends Control implements SelectableControl {
//   constructor() {
//     super();
//     this.select;
//   }
//   select(): void {}
// }

// class TextBox extends Control {}

// // Error: Property 'state' is missing in type 'Image'.
// class Image implements SelectableControl {
//   select(): void {}
// }

// class Location {}
