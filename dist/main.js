"use strict";
let count = 0;
let output = document.querySelector("#value");
let btnDecrease = document.querySelector(".decrease");
let btnReset = document.querySelector(".reset");
let btnIncrease = document.querySelector(".increase");
const decrease = () => {
    count--;
    output.innerHTML = count.toString();
};
const increase = () => {
    count++;
    output.innerHTML = count.toString();
};
const reset = () => {
    count = 0;
    output.innerHTML = count.toString();
};
// if (count < 0) { output.style.color = "red";}
// if (count > 0) { output.style.color = "green";}
// if (count === 0) { output.style.color = "#222";}
btnDecrease.addEventListener('click', decrease, false);
btnIncrease.addEventListener('click', increase, false);
btnReset.addEventListener('click', reset, false);
