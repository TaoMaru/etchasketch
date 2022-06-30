const gridContainer = document.querySelector(".container");

function makeRow() {
    for(let i = 0; i < 16; i++) {
       let newBox = document.createElement("div");
       gridContainer.appendChild(newBox);
       newBox.classList.add("gridDiv");
    }
}

//makeRow();

function makeGrid(gridSize) {
    for(let i = 0; i < gridSize; i++) {
        let newCol = document.createElement("div");
        for(let aNum = 0; aNum < gridSize; aNum++) {
            let aBox = document.createElement("div");
            newCol.appendChild(aBox);
            aBox.classList.add("gridDiv");
        }
        gridContainer.appendChild(newCol);
        newCol.classList.add("gridColumn");
    }
}


function darken(e) {
    console.log(e);
    e.target.classList.add("dark");
}

function highlight(e) {
    console.log(e);
    e.target.classList.add("light");
}

function removeHighlight(e) {
    console.log(e);
    e.target.classList.remove("light");
}

function getGridSize() {
    do {
        try{
            gridDimension = parseInt(window.prompt(
                "Please enter a number dimension for the grid (e.g. 16): "));
        }
        catch(err) {
            gridDimension = 101;
        }
        if(isNaN(gridDimension)) {
            gridDimension = 101;
        }
    }
    while(gridDimension > 100);
}

function makeNewGrid() {
    getGridSize();
    console.log(currentGriddles);
    removeOldGrid(currentGriddles);
    makeGrid(gridDimension);
    currentGriddles = document.querySelectorAll(".container>div");
    for(let aSquare of currentGriddles) {
        aSquare.addEventListener("mouseover", darken);
    }
}

function removeOldGrid(currentGridBoxes) {
    console.log(currentGridBoxes);
    for(let box of currentGridBoxes) {
        gridContainer.removeChild(box);
    }
}

const btn = document.querySelector(".setGrid");
btn.addEventListener("mouseover", highlight);
btn.addEventListener("click", makeNewGrid);
btn.addEventListener("mouseout", removeHighlight);

let gridDimension = 16;

makeGrid(gridDimension);

let currentGriddles = document.querySelectorAll(".container>div");
for(let aBox of currentGriddles) {
    aBox.addEventListener("mouseover", darken);
};
