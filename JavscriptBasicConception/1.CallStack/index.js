function third() {
  console.log("hi I am three");
  throw Error("making Error By My Hand");
}

function second() {
  third();
}

function first() {
  second();
}

function zero() {
  first();
}

zero();
