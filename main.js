const gameMatrix = setupMatrix();
let gameRunning = true;

const test = document.querySelectorAll(".minesweeper-container > div") 

const displayLose = compteur => {
    const theDiv = document.createElement("div")
    theDiv.classList.add("mine")
    test[compteur].appendChild(theDiv)
    document.querySelector(".modal-layout").style.display = "flex";   
    gameRunning = false;
    document.querySelector(".modal-layout p").innerText = 'Vous avez perdu !'
}

const displayFlag = compteur => {
    const theDiv = document.createElement("div")
    theDiv.classList.add("flaged")
    test[compteur].appendChild(theDiv) 
}

const displayVictory = () => {
    gameRunning = false;
    document.querySelector(".modal-layout").style.display = "flex";
    document.querySelector(".modal-layout p").innerText = 'Vous avez gagné !'
}

const isWinning = () => {
    let count = 0;
    for(let i = 0; i < 19; i++) {
        for(let j = 0; j < 19; j++) {
            if(gameMatrix[i][j] != 'M' && !test[count].classList.contains("revealed")) return false
            count++;
        }
    }
    return true
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
    
    if(isWinning()) return displayVictory()

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
    if(!gameRunning) return
    const caseValue = gameMatrix[parseInt(caseIndex / 19)][caseIndex % 19]
    if(caseValue == 'M') displayLose(caseIndex); 
    else revealCase(parseInt(caseIndex / 19), caseIndex % 19, caseIndex)
}

const putAFlag = (event, index) => {
    event.preventDefault();
    if(test[index].classList.contains("revealed")) return
    displayFlag(index);
} 

const replay = () => window.location.reload()

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