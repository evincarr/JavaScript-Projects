function add() {
    var num1 = Math.floor(Math.random() * 101);
    var num2 = Math.floor(Math.random() * 101);
    var num3 = num1 + num2;
    document.getElementById("Math").innerHTML = "Your first number is " + num1 + ". " + "Your second number is " + num2 + ".  " + "Your result is " + num3 + ".";
}

function subtract() {
    var num1 = Math.floor(Math.random () * 101);
    var num2 = Math.floor(Math.random() * 101);
    var num3 = num1 - num2;
    document.getElementById("Math").innerHTML = "Your first number is " + num1 + ". " + "Your second number is " + num2 + ". " + "Your result is " + num3 + ".";
}

function multiply() {
    var num1 = Math.floor(Math.random() * 101);
    var num2 = Math.floor(Math.random() * 101);
    var num3 = num1 * num2;
    document.getElementById("Math").innerHTML = "Your first number is " + num1 + ". " + "Your second number is " + num2 + ". " + "Your result is " + num3 + ".";
}

function divide() {
    var num1 = Math.floor(Math.random() * 101);
    var num2 = Math.floor(Math.random() * 101);
    var num3 = num1 / num2;
    document.getElementById("Math").innerHTML = "Your first number is " + num1 + ". " + "Your second number is " + num2 + ". " + "Your result is " + num3 + ".";
}

function extraMath() {
    var num1 = Math.floor(Math.random() * 11);
    var num2 = Math.floor(Math.random() * 11);
    var num3 = Math.floor(Math.random() * 11);
    var num4 = Math.floor(Math.random() * 11);
    var num5 = Math.floor(Math.random() * 11);
    var num6 = (num1 + num2) * num3 / num4 - num5;
    document.getElementById("Math").innerHTML = num1 + " plus " + num2 + ", multiplied by " + num3 + ", divided by " + num4 + " and then subtracted by " + num5 + " is equal to " + num6 + ".";
}

function remainder() {
    var num1 = Math.floor(Math.random() * 101);
    var num2 = Math.floor(Math.random() * 101);
    var num3 = num1 % num2;
    document.getElementById("Math").innerHTML = "Dividing " + num1 + " by " + num2 + " gives a remainder of " + num3 + ".";
}

function negative() {
    var num1 = Math.floor(Math.random() * 101);
    document.getElementById("Math").innerHTML = "Your number is " + num1 + ". The negative is " + -num1 + ".";
}

function increment() {
    var num1 = Math.floor(Math.random() * 101);
    num1++;
    document.getElementById("Math").innerHTML = "Your incremented number is " + num1 + ".";
}

function decrement() {
    var num1 = Math.floor(Math.random () * 101);
    num1--;
    document.getElementById("Math").innerHTML = "Your decremented number is " + num1 + ".";
}