const gridContainer = document.querySelector(".container");


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

function changeColor(e) {
    console.log(e);
    let randomR = Math.floor(Math.random() * 255);
    let randomG = Math.floor(Math.random() * 255);
    let randomB = Math.floor(Math.random() * 255);

    let randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    e.target.style.backgroundColor = randomColor;
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
    removeOldGrid(currentGriddles);
    makeGrid(gridDimension);
    currentGriddles = document.querySelectorAll(".container>div");
    for(let aSquare of currentGriddles) {
        aSquare.addEventListener("mouseover", changeColor);
    }
}

function removeOldGrid(currentGridBoxes) {
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
    aBox.addEventListener("mouseover", changeColor);
};
