function sentence () {
    var line1 = "The elevator ";
    var line2 = "to success ";
    var line3 = "is out of order. "
    var line4 = "You'll have to "
    var line5 ="use the stairs."
    var complete = line1.concat(line2, line3, line4, line5);
    document.getElementById("create").innerHTML = complete;
}

function slice() {
    var original = "I love cats.";
    var sliced = original.slice(7,11);
    document.getElementById("slice").innerHTML = sliced;
}

function locate() {
    var sentence = "I like black cats.";
    var position = sentence.search("cats");
    document.getElementById("cats").innerHTML = position;
}

function upper() {
    var text = "Cats are awesome!";
    var textNew = text.toUpperCase();
    document.getElementById("meow").innerHTML = textNew;
}

function string() {
    var num = 88;
    document.getElementById("number").innerHTML = num.toString();
}

function precision () {
    var num = 1847053.21948172350;
    document.getElementById("precise").innerHTML = num.toPrecision(13);
}

function fixed() {
    var x = 132.467323;
    document.getElementById("fixed").innerHTML = x.toFixed(2);
}

function value() {
    var x = 131 + 54;
    var y = x.valueOf();
    document.getElementById("value").innerHTML = y;
}