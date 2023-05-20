let container = document.querySelector(".container");
const slider = document.querySelector(".slider");
let gridSize = 16
const sizeOutput = document.querySelector(".sizeOutput")

function creategrid(x){
    let maxWidth = 550
    let maxHeight = 550
    let height = maxHeight/x;
    let width = maxWidth/x;
    for (let i = 0; i < x; i++) {
        let row = document.createElement("div");
        row.style.display = "flex";
        for (let j = 0; j < x; j++) {
            let square = document.createElement("div")
            square.classList.add("square");
            square.style.height = height.toString() + "px"
            square.style.width = width.toString() + "px"
            square.style.backgroundColor = "white"
            square.style.border = "1px solid black";
            square.style.borderRadius = "2px;"
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

creategrid(16);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


let squares = document.querySelectorAll(".square");
squares.forEach((item) => {
    item.addEventListener("mouseenter", function () {
        item.style.backgroundColor = "black";
    })
})

const restart = document.querySelector(".restart");
restart.addEventListener("click", function () {
    squares.forEach((item) => {
        item.style.backgroundColor = "white";
    } )
})


slider.addEventListener("input", function(e) {
    gridSize = e.target.value;
    sizeOutput.textContent = gridSize.toString() + " x " +gridSize.toString();
})

const apply = document.querySelector(".apply");
apply.addEventListener("click", function () {
    removeAllChildNodes(container);
    creategrid(gridSize);
    let squares = document.querySelectorAll(".square");
    squares.forEach((item) => {
        item.addEventListener("mouseenter", function () {
            item.style.backgroundColor = "black";
        })
    })
    const restart = document.querySelector(".restart");
    restart.addEventListener("click", function () {
        squares.forEach((item) => {
            item.style.backgroundColor = "white";
    } )
})
})