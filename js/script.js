let userInput = prompt("Введите слова или цифры");
console.log(userInput);

let input = [];

input.push(userInput);
console.log(input);

while(userInput) {
    userInput = prompt("Введите слова или цифры");
    if(userInput) {
        input.push(userInput);
    }
    console.log(input);
}

function compareNumbers(a, b) {
    return a - b;
}

input.sort(compareNumbers);
console.log(input);

input.splice(2,3);
console.log(input);

