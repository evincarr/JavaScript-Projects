function Dictionary () {
    var Guitar = {
        Brand: "Jackson",
        Color: "Sunburst Orange",
        Year: 2019,
        StrGauge: 10
    };
    delete Guitar.StrGauge;
    document.getElementById("Dictionary").innerHTML = Guitar.StrGauge;
}