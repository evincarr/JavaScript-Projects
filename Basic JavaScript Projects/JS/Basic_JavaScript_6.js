function Vote() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Result").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

function Dog(Breed, Age, Color) {
    this.Dog_Breed = Breed;
    this.Dog_Age = Age;
    this.Dog_Color = Color;
}

var Baybee = new Dog("Border Collie", 14, "Black and White");
var Angel = new Dog("Terrier", 12, "Sand and White");
var Teddy = new Dog("Retriever", 5, "Gold");

function myDog() {
    document.getElementById("New_and_This").innerHTML =
    "Baybee is a " + Baybee.Dog_Color + " " + Baybee.Dog_Breed + 
    " who is " + Baybee.Dog_Age + " years old.";
}

function subtractTen () {
    document.getElementById("Nested_Function").innerHTML = count(); 
    function count () {
        var start = 100;
        function minusTen() {start -= 10;}
        minusTen();
        return start;
    }
}