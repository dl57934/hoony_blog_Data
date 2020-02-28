var isDone = false;
var decimal = 10;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var color = "blue";
color = "red";
// js와 같이 `와 ${}를 사용하여 변수를 집어 넣을 수 있습니다.
var age = 24;
var fullName = "hoony";
var introduce = "my name is " + fullName + " my age is " + age;
// Array
var list = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4, 5];
// Tuple
var x;
x = ["hello", 10];
// console.log(x[0].substring(0));
// console.log(x[1].substring(0));
// x[2] = "world";
// console.log(x[5].toString());
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var colorName = Color[1];
//Any
var notSure = 44;
notSure = "sure";
notSure = false;
var anyValue = [1, "sure", false];
anyValue[1] = false;
// let prettySure: Object = 4;
// prettySure.toFixed();
var unusable = 1;
