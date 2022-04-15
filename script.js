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