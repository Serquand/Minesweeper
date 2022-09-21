let arrayMine;

const setupMatrix = () => {
    arrayMine = initializeMineArray()
    console.log(arrayMine);
}

setupMatrix()

const test = document.querySelectorAll(".minesweeper-container > div") 
console.log(test)

for(let i = 0; i < 361; i++) {
    test[i].addEventListener("click", () => console.log("Test"))
}