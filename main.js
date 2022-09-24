const gameMatrix = setupMatrix();

const test = document.querySelectorAll(".minesweeper-container > div") 

const displayLose = compteur => {
    const theDiv = document.createElement("div")
    theDiv.classList.add("mine")
    test[compteur].appendChild(theDiv)
    
}

const displayFlag = compteur => {
    const theDiv = document.createElement("div")
    theDiv.classList.add("flaged")
    test[compteur].appendChild(theDiv) 
}

const getIndexFromPos = (caseIndexX, caseIndexY) => caseIndexX * 19 + caseIndexY

const revealCase = (caseIndexY, caseIndexX) => {
    const index = getIndexFromPos(caseIndexY, caseIndexX)
    if(test[index] == undefined) return

    if(test[index].classList.contains("revealed") || test[index].classList.contains("flaged")) return
    const numberMineNear = gameMatrix[caseIndexY][caseIndexX]
    test[index].innerHTML = numberMineNear
    test[index].classList.add("near-" + numberMineNear)   
    test[index].classList.add("revealed");   
    
    if(numberMineNear !== 0) return
    
    if(gameMatrix[caseIndexY + 1] != undefined && gameMatrix[caseIndexY + 1][caseIndexX + 1] != 'M' && gameMatrix[caseIndexY + 1][caseIndexX + 1] != undefined) revealCase(caseIndexY + 1, caseIndexX + 1)
    if(gameMatrix[caseIndexY + 1] != undefined && gameMatrix[caseIndexY + 1][caseIndexX] != 'M' && gameMatrix[caseIndexY + 1][caseIndexX] != undefined) revealCase(caseIndexY + 1, caseIndexX)
    if(gameMatrix[caseIndexY + 1] != undefined && gameMatrix[caseIndexY + 1][caseIndexX - 1] != 'M' && gameMatrix[caseIndexY + 1][caseIndexX - 1] != undefined) revealCase(caseIndexY + 1, caseIndexX - 1)
    if(gameMatrix[caseIndexY] != undefined && gameMatrix[caseIndexY][caseIndexX + 1] != 'M' && gameMatrix[caseIndexY][caseIndexX + 1] != undefined) revealCase(caseIndexY, caseIndexX + 1)
    if(gameMatrix[caseIndexY] != undefined && gameMatrix[caseIndexY][caseIndexX - 1] != 'M' && gameMatrix[caseIndexY][caseIndexX - 1] != undefined) revealCase(caseIndexY, caseIndexX - 1)
    if(gameMatrix[caseIndexY - 1] != undefined && gameMatrix[caseIndexY - 1][caseIndexX + 1] != 'M' && gameMatrix[caseIndexY - 1][caseIndexX + 1] != undefined) revealCase(caseIndexY - 1, caseIndexX + 1)
    if(gameMatrix[caseIndexY - 1] != undefined && gameMatrix[caseIndexY - 1][caseIndexX] != 'M' && gameMatrix[caseIndexY - 1][caseIndexX] != undefined) revealCase(caseIndexY - 1, caseIndexX)
    if(gameMatrix[caseIndexY - 1] != undefined && gameMatrix[caseIndexY - 1][caseIndexX - 1] != 'M' && gameMatrix[caseIndexY - 1][caseIndexX - 1] != undefined) revealCase(caseIndexY - 1, caseIndexX - 1)
}

const checkCase = caseIndex => {
    const caseValue = gameMatrix[parseInt(caseIndex / 19)][caseIndex % 19]
    if(caseValue == 'M') displayLose(caseIndex); 
    else revealCase(parseInt(caseIndex / 19), caseIndex % 19, caseIndex)
}

const putAFlag = (event, index) => {
    event.preventDefault();
    if(test[index].classList.contains("revealed")) return
    displayFlag(index);
} 

for(let i = 0; i < 361; i++) {
    test[i].addEventListener("click", event => checkCase(i))   
    test[i].addEventListener("contextmenu", event => putAFlag(event, i));
}

// let compteur = 0;

// for(let i = 0; i < 19; i++) {
//     for(let j = 0; j < 19; j++) {
//         if(gameMatrix[i][j] == 'M') test[compteur].appendChild(document.createElement("div"))    
//         else {
//             test[compteur].innerHTML = gameMatrix[i][j]
//             test[compteur].classList.add("near-" + gameMatrix[i][j])
//         }
//         compteur++
//     }    
// }