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
