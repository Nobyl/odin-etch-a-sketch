const button = document.querySelector(".new-grid");
const grid = document.querySelector(".grid");

createGrid(16);

button.addEventListener("click", () => {
    let gridSize = parseInt(prompt("Please enter the size of the new grid:"));
    
    if (1 <= gridSize && 100 >= gridSize) {
        deleteContents(grid);
        createGrid(gridSize);
    } else {
        alert("Invalid input. The size of the grid must be \n an integer between 1 and 100.")
    }
});

function createGrid (gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
    
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            
            column.appendChild(cell);
        }
    
        grid.appendChild(column);
    }

    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black";
    }));
}

function deleteContents (node) {
    while (node.firstChild) {
        while (node.firstChild.firstChild) {
            deleteContents(node.firstChild);       
        }
        node.removeChild(node.firstChild);
    }
}
