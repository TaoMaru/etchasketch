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

const gridBoxes = document.querySelectorAll(".container>div");
for(let aBox of gridBoxes) {
    aBox.addEventListener("mouseover", darken);
};

const btn = document.querySelector(".setGrid");
btn.addEventListener("mouseover", highlight);
btn.addEventListener("click", makeGrid);
btn.addEventListener("mouseout", removeHighlight);