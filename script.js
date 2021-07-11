//Etch-A-Sketch

//Grid Generation

const container = document.getElementById("gridDiv");

function makeRows(rows, columns) {
    const resetButton = document.getElementById("resetButton");
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-columns", columns);
    for(c = 0; c < (rows * columns); c++) {
        let cell = document.createElement("div");
        cell.innerText = c + 1;
        cell.className = "grid-cell";
        cell.addEventListener("mouseover", function() {
            cell.className = "grid-item-darkened";
        })
        resetButton.addEventListener("click", function() {
            cell.className = "grid-item";
        })
        cell.setAttribute('style','font-size:2rem, border:1px solid black');
        container.appendChild(cell).className = "grid-item";
    };
};

makeRows(16, 16);

