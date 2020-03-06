class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return `Hello ${this.greeting}`;
  }
}

let greeting = new Greeter("TS");

class Animal {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

const animal = new Animal("cat");
animal.name;

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}
const dog = new Dog("test");
dog.bark();
dog.move(10);
dog.bark();

class Snake extends Animal {
  constructor(name) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

class Octopus {
  readonly legs: number = 8;

  constructor(readonly name: string) {}
}

let dad = new Octopus("I have Third Strong leg");
dad.name;

const fullNameLength = 10;

class Employee {
  _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    this._fullName = newName;
  }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  console.log(employee.fullName); // 출력 완료
}

class Grid {
  static origin: { x: number; y: number } = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }

  constructor(public scale: number) {}
}

let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

abstract class Animal2 {
  abstract makeSound(): void;
  move(): void {
    console.log("roaming the earth...");
  }
}

abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing"); // constructors in derived classes must call super()
  }

  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }

  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

let department: typeof Department; // ok to create a reference to an abstract type
department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
department.generateReports(); // error: method doesn't exist on declared abstract type
