function displayType(guitar) {
    var guitarType = guitar.getAttribute("data-guitar-type");
    alert("The " + guitarType + " is a popular guitar from the " + guitar.innerHTML + " brand.")
}