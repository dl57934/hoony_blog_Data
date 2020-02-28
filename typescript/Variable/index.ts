let hello = "Hello!";

function f(input: boolean) {
  let a = 100;

  if (input) {
    var b = a + 1;
    return b;
  }
  return b;
}
// x++;
// let x = 1;

function foo() {
  return a;
}

let a;

function f2(x) {
  var x;
  var x;
  if (true) {
    var x;
  }
}

// let x = 10;
// let x = 20;

function f3(condition, x) {
  if (condition) {
    let x = 100;
    return x;
  }
  return x;
}

f3(true, 0); // return 100
f3(false, 0); // return 0

function sumMatrix(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (let i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }

  return sum;
}

function theCityThatAlwaysSleeps() {
  let getCity;

  if (true) {
    let city = "Seattle";
    getCity = function() {
      return city;
    };
  }

  return getCity();
}
