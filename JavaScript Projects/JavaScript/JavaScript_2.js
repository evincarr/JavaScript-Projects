function validateForm () {
    var x = document.forms["Contact"]["fname"].value;
    if (x == "") {
        alert("First name must be filled out");
        return false;
    }
    var y = document.forms["Contact"]["lname"].value;
    if (y == "") {
        alert("Last name must be filled out");
        return false;
    }
}