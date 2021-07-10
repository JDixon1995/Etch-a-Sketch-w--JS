//Etch-A-Sketch

//Grid Generation

for(i = 0; i < 256; i++) {
    var div = document.createElement("div");
    div.style.width = "500px";
    div.style.height = "500px";
    div.style.background = "white";
    div.style.border = "black solid 1px";
}

document.getElementById("gridDiv").appendChild(div);