let count: number = 0;

let output = document.querySelector("#value") as HTMLSpanElement;
let btnDecrease = document.querySelector(".decrease") as HTMLButtonElement;
let btnReset = document.querySelector(".reset") as HTMLButtonElement;
let btnIncrease = document.querySelector(".increase") as HTMLButtonElement;

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
    output.innerHTML= count.toString();
};

// if (count < 0) { output.style.color = "red";}

// if (count > 0) { output.style.color = "green";}

// if (count === 0) { output.style.color = "#222";}


btnDecrease.addEventListener('click', decrease, false);
btnIncrease.addEventListener('click', increase, false);
btnReset.addEventListener('click', reset, false);

