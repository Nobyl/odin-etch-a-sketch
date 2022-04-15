const grid = document.querySelector(".grid");

for (let i = 0; i < 16; i++) {
    const column = document.createElement("div");
    column.classList.add("column");

    for (let j = 0; j < 16; j++) {
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