let a = '';
let b = '';
let oper;

const calc = document.querySelector(".calc");
const screen = document.querySelector(".screen");
const btns = document.querySelector(".buttons");
const nums = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const dot = document.querySelector(".dot");
const backspace = document.querySelector(".backspace");
const clear = document.querySelector(".clear");


operators.forEach(element => {
    element.addEventListener("click", ()=>{
        if(a == '' || a == undefined || a == null) oper = undefined;
        else{
            switch(element.textContent){
                case '+':
                    oper = '+';
                break;
                case '-':
                    oper = '-';
                break;
                case 'x':
                    oper = 'x';
                break;
                case '÷':
                    oper = '/';
                break;
            }
        }
    })
});

nums.forEach(element => {
    element.addEventListener("click", (num)=>{
        if(oper == undefined){
            if(a.length>=17) return 0;
        num = Number(element.textContent);
        a+=num;
        screen.textContent = a;
        }
        else{
            if(b.length >=17) return 0;
            screen.textContent = '';
            num = Number(element.textContent);
            b+=num;
            screen.textContent = b;
        }
    })
});

equal.addEventListener("click", (e)=>{
    if(a != '' && oper != undefined && b!= ''){
        switch(oper){
            case '+':
                add(a,b);
            break;
            case '-':
                subtract(a,b);
            break;
            case '/':
                divide(a,b);
            break;
            case 'x':
                multiply(a,b);
            break;
        }
    }
});

dot.addEventListener("click", ()=>{
    if(a != '' && oper == undefined){
        if(a.includes('.')) return 0;
        a = a + '.';
        screen.textContent = a;
        return a;
    }
    else if (a != '' && oper != undefined && b != ''){
        if(b.includes('.')) return 0;
        b = b + '.';
        screen.textContent = b;
        return b;
    }
});

backspace.addEventListener("click", ()=>{
    if(a != '' && oper == undefined){
        a = a.substring(0, a.length -1);
        screen.textContent = a;
        return a;
    }
    else if (a != '' && oper != undefined && b != ''){
        b = b.substring(0, b.length -1);
        screen.textContent = b;
        return b;
    }
});

clear.addEventListener("click", (e)=>{
    a = '';
    oper = undefined;
    b = '';
    screen.textContent = '';
});

function add(x,y){
    x = Number(x);
    y = Number(y);
    result = x+y;
    screen.textContent = result;
    a = '';
    b = ''
    oper = undefined;
}

function subtract(x,y){
    x = Number(x);
    y = Number(y);
    result = x-y;
    screen.textContent = result;
    a = '';
    b = ''
    oper = undefined;}

function multiply(x,y){
    x = Number(x);
    y = Number(y);
    result = x*y;
    screen.textContent = result;
    a = '';
    b = ''
    oper = undefined;}

function divide(x,y){
    x = Number(x);
    y = Number(y);
    result = x/y;
    screen.textContent = result;
    a = '';
    b = ''
    oper = undefined;}

let d = document.getElementById("footer");
d.textContent += new Date().getFullYear();

