function Call_Loop() {
    var str = "I like cats."
    var a = str.length;
    var number = "";
    var x = a;
    while (x > -1) {
        number += "<br>" + x;
        x--;
    }
    document.getElementById("Loop").innerHTML = number;
}


var Brands = ["Jackson", "ESP", "Schecter", "Kramer", "Charvel"];
var list = "";
var y;
function Loop() {
    for (y = 0; y < Brands.length; y++) {
        list += Brands[y] + "<br>";
    }
    document.getElementById("List").innerHTML = list;
}

function color() {
    var colors = [];
    color[0] = "green";
    color[1] = "blue";
    color[2] = "red";
    color[3] = "purple";
    document.getElementById("color").innerHTML = "Your color is " + color[2] + ".";
}

let cat = {
    name: "Lucy",
    breed: "Ragdoll",
    color: "grey and white",
    description: function () {
        return "This cat is a" + this.color + this.breed + " named " + this.name;
    }
};
document.getElementById("cat").innerHTML = car.description();


function br () {
   var text = "";
    var i;
    for (i = 10; i > 0; i--) {
        if (i === 5) { break; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("break").innerHTML = text; 
}

function cont () {
    var text = "";
    var i;
    for (i = 25; i > 0; i--) {
        if (i === 20) { continue; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("continue").innerHTML = text;
}