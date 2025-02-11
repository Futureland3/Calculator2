let num1;
let num2;
let operator;

const calc = document.querySelector(".calc");
const screen = document.querySelector(".screen");
const btns = document.querySelector(".buttons");

function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

console.log(multiply(2,3));

let d = document.getElementById("footer");
d.textContent += new Date().getFullYear();