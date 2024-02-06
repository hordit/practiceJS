const btnAdd = document.querySelector('button[data-add]');
const btnReset = document.querySelector('button[data-reset]');
const inputValue = document.querySelector('input[data-value]');
const outputEl = document.querySelector('.js-output span');

let total = 0;

btnAdd.addEventListener('click', function () {
console.log('Click for Add');

const value = Number(inputValue.value);

total += value;
outputEl.textContent = total;
inputValue.value = '';
});

btnReset.addEventListener('click', function () {
    console.log('Click for reset');
    total = 0;
    outputEl.textContent = total;
});

const decimalToBinary = function(decimalNumber) {
    return decimalNumber.toString(2);
};

const binaryRapresentation = decimalToBinary(11144);

console.log(binaryRapresentation);