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

const revealCase = (caseIndexY, caseIndexX, index) => {
    if(test[index].classList.contains("revealed") || test[index].classList.contains("flaged")) return
    console.log(caseIndexY, caseIndexX)
    test[index].innerHTML = gameMatrix[caseIndexY][caseIndexX]
    test[index].classList.add("near-" + gameMatrix[caseIndexY][caseIndexX])   
    test[index].classList.add("revealed");   
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