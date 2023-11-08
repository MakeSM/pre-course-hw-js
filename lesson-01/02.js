// генерируем рандомное число
let number1 = Math.floor(Math.random() * 100);
//проверяем, четное ли число
if (number1 % 2 === 0) {
    console.log(number1 + " это четное число");
} else {
    console.log(number1 + " это нечетное число");
}
