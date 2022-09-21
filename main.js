const arrayMine = setupMatrix();
console.log(arrayMine)

const test = document.querySelectorAll(".minesweeper-container > div") 
console.log(test)

const checkCase = caseIndex => {
    console.log(caseIndex)
}

for(let i = 0; i < 361; i++) {
    test[i].addEventListener("click", () => checkCase(i))
}