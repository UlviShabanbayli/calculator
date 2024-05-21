"use strict";

const clear = document.querySelector(".btn--ac");
const plusOrMinus = document.querySelector(".btn--plusOrMinus");
const percent = document.querySelector(".btn--percent");
const divide = document.querySelector(".btn--divide");
const seven = document.querySelector(".btn--seven");
const eight = document.querySelector(".btn--eight");
const nine = document.querySelector(".btn--nine");
const multi = document.querySelector(".btn--multi");
const four = document.querySelector(".btn--four");
const five = document.querySelector(".btn--five");
const six = document.querySelector(".btn--six");
const minus = document.querySelector(".btn--minus");
const one = document.querySelector(".btn--one");
const two = document.querySelector(".btn--two");
const three = document.querySelector(".btn--three");
const plus = document.querySelector(".btn--plus");
const zero = document.querySelector(".btn--zero");
const dot = document.querySelector(".btn--dot");
const equal = document.querySelector(".btn--equal");
const input = document.querySelector("input");

let numbers = [];
let str = "";
let acc;

one.addEventListener("click", () => {
  input.value += 1;
});
two.addEventListener("click", () => {
  input.value += 2;
});
three.addEventListener("click", () => {
  input.value += 3;
});
four.addEventListener("click", () => {
  input.value += 4;
});
five.addEventListener("click", () => {
  input.value += 5;
});
six.addEventListener("click", () => {
  input.value += 6;
});
seven.addEventListener("click", () => {
  input.value += 7;
});
eight.addEventListener("click", () => {
  input.value += 8;
});
nine.addEventListener("click", () => {
  input.value += 9;
});
zero.addEventListener("click", () => {
  input.value += 0;
});
dot.addEventListener("click", () => {
  if (input.value === "") {
    input.value = "0.";
  } else {
    input.value += ".";
  }
});

plusOrMinus.addEventListener("click", () => {
  if (Number(input.value) > 0) {
    input.value = -input.value;
  } else if (Number(input.value) <= 0) {
    input.value = Math.abs(input.value);
  }
});

percent.addEventListener("click", () => {
  numbers.push(Number(input.value));
  input.value = "";
  str = "%";
});

plus.addEventListener("click", () => {
  numbers.push(Number(input.value));
  input.value = "";
  str = "+";
});
minus.addEventListener("click", () => {
  numbers.push(Number(input.value));
  input.value = "";
  str = "-";
});
divide.addEventListener("click", () => {
  numbers.push(Number(input.value));
  input.value = "";
  str = "/";
});
multi.addEventListener("click", () => {
  numbers.push(Number(input.value));
  input.value = "";
  str = "*";
});

equal.addEventListener("click", () => {
  numbers.push(Number(input.value));

  if (str === "+") {
    acc = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      acc += numbers[i];
    }
    input.value = acc;
  }
  if (str === "/") {
    if (!numbers.includes(0)) {
      acc = numbers[0];
      for (let i = 1; i < numbers.length; i++) {
        acc /= numbers[i];
      }
      input.value = acc;
    } else {
      input.value = "Error";
    }
  }
  if (str === "-") {
    acc = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      acc -= numbers[i];
    }
    input.value = acc;
  }
  if (str === "*") {
    acc = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      acc *= numbers[i];
    }
    input.value = acc;
  }
  if (str === "%") {
    input.value = (numbers[0] * numbers[1]) / 100;
  }
});

clear.addEventListener("click", () => {
  input.value = "";
  numbers = [];
  str = "";
});
