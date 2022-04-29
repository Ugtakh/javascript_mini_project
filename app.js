let operand1 = 0;
let operand2 = 0;
let operation = "";

const numbersBtn = document.getElementsByClassName("numbers");
const display = document.getElementsByClassName("display")[0];
const operatorsBtn = document.getElementsByClassName("operator");
const equalBtn = document.getElementsByClassName("equal")[0];
const clear = document.getElementsByClassName("clear")[0];

for (let i = 0; i < numbersBtn.length; i++) {
  numbersBtn[i].addEventListener("click", function (event) {
    console.log("Daragdlaa", event.target.textContent);
    if (display.textContent === "0") {
      display.textContent = event.target.textContent;
    } else {
      display.textContent += event.target.textContent;
    }
  });
}
//ES6 for/of
//[{},{},{}]
for (let operator of operatorsBtn) {
  console.log(operator);
  operator.addEventListener("click", function (event) {
    console.log(event.target.textContent);
    operation = event.target.textContent;
    operand1 = display.textContent;
    console.log(operand1);
    display.textContent = "0";
  });
}

function add(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

//arrow
const div = (a, b) => {
  return a / b;
};

const sub = (a, b) => a - b;

//es6 arrow function
//parseInt();
equalBtn.addEventListener("click", () => {
  let result = 0;
  operand2 = display.textContent;
  switch (operation) {
    case "+":
      result = add(parseInt(operand1), parseInt(operand2));
      break;
    case "-":
      result = sub(parseInt(operand1), parseInt(operand2));
      break;
    case "*":
      result = mul(parseInt(operand1), parseInt(operand2));
      break;
    case "/":
      result = div(parseInt(operand1), parseInt(operand2));
      break;

    default:
      display.textContent = "Wrong !!!";
  }
  //   if (operation === "+") {
  //   } else if (operation === "-") {
  //     result = sub(parseInt(operand1), parseInt(operand2));
  //   } else if (operation === "*") {
  //     result = mul(parseInt(operand1), parseInt(operand2));
  //   } else if (operation === "/") {
  //     result = div(parseInt(operand1), parseInt(operand2));
  //   } else {
  //     display.textContent = "Wrong !!!";
  //   }

  display.textContent = result;
});

clear.addEventListener("click", () => {
  display.textContent = "0";
});

const myArray = ["Naraa", "Naran", "Saraa", "Murun", "Saran", 5, 6, 7, 8, 9];

// for (let item of myArray) {
//   console.log(`Item: ${item}`);
// }

// myArray.forEach((a) => console.log(`Item: ${a}`));
// console.log(myArray.indexOf(2));
// console.log(myArray.findIndex((a) => a === 2));
