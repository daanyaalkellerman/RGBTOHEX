//the variables
let r = document.querySelector('#input');
let g = document.querySelector('#input2');
let b = document.querySelector('#input3');
let btn = document.querySelector('#convert');
let output = document.querySelector('#output');

btn.addEventListener('click', convert);
//to change it to a letter
function convertHex(value) {
    let hex = '';
    hex = value.toString(16);
    if (hex.length !== 2) {
        hex = '0' + hex;
    }
    return hex.toUpperCase();
}
//setting the boundaries
function checkValue(value) {
    if (value < 0) {
        value = 0;
    } else if (value > 255) {
        value = 255;
    }
    return value;
}
//the end result
function convert() {
    r = checkValue(+r.value);
    g = checkValue(+g.value);
    b = checkValue(+b.value);
    
    let hex = '';
    hex += convertHex(r);
    hex += convertHex(g);
    hex += convertHex(b);
    
    output.textContent = hex;
}


