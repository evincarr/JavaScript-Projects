var num = 78;

function add () {
    var addMe = 21;
    document.write(num + addMe);
}

function subtract () {
    console.log(num - addMe);
}

function today () {
    if (new Date().getHours() < 12) {
        document.getElementById("Morning").innerHTML = "Good morning!";
    }
}

function guess () {
    number = document.getElementById("input").value;
    if (number != 13) {
        document.getElementById("Guess").innerHTML = "You guessed wrong.";
    }
    else {
        document.getElementById("Guess").innerHTML = "You guessed correctly!";
    }
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}