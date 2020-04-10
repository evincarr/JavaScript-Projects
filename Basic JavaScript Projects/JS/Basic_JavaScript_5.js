function numbers () {
    document.getElementById("numbers").innerHTML= 0/0;
}

function truth () {
    document.getElementById("true").innerHTML = isNaN('pizza');
}

function lie () {
    document.getElementById("false").innerHTML = isNaN(88);
}

function infinity () {
    document.getElementById("infinity").innerHTML = 3E310;
}

function negative () {
    document.getElementById("negative").innerHTML = -4E310;
}

function bTrue () {
    document.getElementById("bTrue").innerHTML = 78 > 32;
}

function bFalse () {
    document.getElementById("bFalse").innerHTML = 21 > 56;
}

console.log (32+56);
//document.write("35" + 78);
console.log (33 < 5);
//document.write(56 == 52);
//document.write(74 == 22);

function equalTrue () {
    document.getElementById("equalTrue").innerHTML = "Henry" === "Henry";
}

function different() {
    document.getElementById("different").innerHTML = "Cats" === 56;
}

function dType () {
    document.getElementById("dType").innerHTML = "77" === 77;
}

function dValue() {
    document.getElementById("dValue").innerHTML = "black" === "red";
}

document.write( 6 > 3 && 78 < 101);
document.write(54 < 52 && 78 < 98);
document.write(4 < 5 || 21 < 23);
document.write(65 > 68 || 99 < 54);
document.write(!20 > 10);
document.write(!33 < 45);