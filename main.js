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

// let compteur = 0;

// for(let i = 0; i < 19; i++) {
//     for(let j = 0; j < 19; j++) {
//         if(arrayMine[i][j] == 'M') test[compteur].appendChild(document.createElement("div"))    
//         else {
//             test[compteur].innerHTML = arrayMine[i][j]
//             test[compteur].classList.add("near-" + arrayMine[i][j])
//         }
//         compteur++
//     }    
// }