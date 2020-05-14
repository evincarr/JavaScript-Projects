function Guitar_Choice () {
    var Guitar_Output;
    var Brand = document.getElementById("Guitar").value;
    var Brand_text = " is a great choice!";
    switch(Brand) {
        case "Jackson":
            Guitar_Output = "Jackson" + Brand_text;
        break;
        case "Fender":
            Guitar_Output = "Fender" + Brand_text;
        break;
        case "Gibson":
            Guitar_Output = "Gibson? Are you sure?";
        break;
        case "Ibanez":
            Guitar_Output = "Ibanez" + Brand_text;
        break;
        case "Schecter":
            Guitar_Output = "Schecter" + Brand_text;
        break;
        case "PRS":
            Guitar_Output = "PRS" + Brand_text;
        break;
        case "ESP":
            Guitar_Output = "ESP" + Brand_text;
        break;
        default:
            Guita_Output = "Please enter a brand exactly as it is written.";
    }
    document.getElementById("Output").innerHTML = Guitar_Output;
}

function Changes() {
    var A = document.getElementsByClassName("Select");
    A[0].innerHTML = "I've been changed!";
}


function showGradient() {
    var c = document.getElementById("myCanvas");
    var con = c.getContext("2d");
    var grd = con.createRadialGradient(150,100,10,180,120,200);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"white");
    con.fillStyle = grd;
    con.fillRect(10,10,400,200);
}

function showText() {
    var c = document.getElementById("mySecondCanvas");
    var con = c.getContext("2d");
    con.font = "50px Arial";
    con.strokeText("Cats!", 10, 50);
}