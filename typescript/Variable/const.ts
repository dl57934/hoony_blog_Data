const numLivesForCat = 9;

let input = [1, 2];
let [first, second] = input;
console.log(first); // 1;
console.log(second); // 2;

function f([first, second]: [number, number]) {
  console.log(first);
  console.log(second);
}

f([1, 2]);

const [third, ...forth] = [1, 2, 3, 4];

let o = {
  a: "foo",
  b: 12,
  c: "bar"
};

// let { a, b } : {a:string, b:number} = o;

let { a, ...fire } = o;
console.log(fire.b, fire.c);

// 요소 이름 변환
// let { a: newName1, b: newName2 } = o;
// let newName1 = o.a;
// let newName2 = o.b;

type C = { a: string; b?: number };
function f6({ a, b }: C): void {}

function f5({ a = "", b = 0 } = {}): void {}
f5();

function f7({ a = "", b = 0 } = {}): void {}
f7();

function f8({ a, b = 0 } = { a: "" }): void {}

f8({ a: "yes" }); //ok default b = 0
f8(); // a= "",
// f8({});

let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second];

let defaults = { foot: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, foot: "rich" };
