const gridContainer = document.querySelector(".container");

function makeRow() {
    for(let i = 0; i < 16; i++) {
       let newBox = document.createElement("div");
       gridContainer.appendChild(newBox);
       newBox.classList.add("gridDiv");
    }
}

//makeRow();

function makeGrid() {
    for(let i = 0; i < 16; i++) {
        let newCol = document.createElement("div");
        for(let aNum = 0; aNum < 16; aNum++) {
            let aBox = document.createElement("div");
            newCol.appendChild(aBox);
            aBox.classList.add("gridDiv");
        }
        gridContainer.appendChild(newCol);
        newCol.classList.add("gridColumn");
    }
}

makeGrid();