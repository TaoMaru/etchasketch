const gridContainer = document.querySelector(".container");

function makeGrid() {
    for(let i = 0; i < 16; i++) {
        let newBox = document.createElement("div");
        gridContainer.appendChild(newBox);
        newBox.classList.add("gridDiv");
    }
}

makeGrid();