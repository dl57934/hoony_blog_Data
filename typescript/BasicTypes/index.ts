let isDone: boolean = false;

let decimal: number = 10;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = "red";

// js와 같이 `와 ${}를 사용하여 변수를 집어 넣을 수 있습니다.
let age: number = 24;
let fullName: string = "hoony";
let introduce: string = `my name is ${fullName} my age is ${age}`;

// Array
let list: number[] = [1, 2, 3, 4, 5];
let list2: Array<number> = [1, 2, 3, 4, 5];

// Tuple
let x: [string, number];
x = ["hello", 10];

// console.log(x[0].substring(0));
// console.log(x[1].substring(0));

// x[2] = "world";
// console.log(x[5].toString());

//Enum
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4
}
let colorName: string = Color[1];

//Any
let notSure: any = 44;
notSure = "sure";
notSure = false;

let anyValue: any[] = [1, "sure", false];
anyValue[1] = false;

// let prettySure: Object = 4;
// prettySure.toFixed();

let unusable: object = { hoony: true };

//Never
//never를 리턴할때 반드시 도달하지 않는 end point를 갖고 있어야합니다.
function error(message: string): never {
  throw new Error(message);
}

// never type으로 추론됩니다.
function fail() {
  return error("something failed");
}

// never를 리턴할 때 end point가 도달하지 않는 포인트를 가져야한다.
function infiniteLoop(): never {
  while (true) {}
}
