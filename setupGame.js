const isInTheTab = (tab, number) => {
    for(let i = 0; i < tab.length; i++) {
        if(tab[i] == number) return true
    }
    return false
}

const convertRdmArrayToMineArray = array => {
    let mineArray = new Array(361);
    for (const index of array) mineArray[index] = 'M'
    return mineArray
}

const convertMineArrayToMineMatrix = array => {
    let compteur = 0, mineMatrix = new Array(19)
    for(let i = 0; i < 19; i++) {
        mineMatrix[i] = new Array(0)
        for(let j = 0; j < 19; j++) {
            mineMatrix[i].push(array[compteur])
            compteur++;
        }
    }
    return mineMatrix
}

const initializeMineArray = () => {
    const arrayMine = new Array(0)
    let i = 0;
    while(i < 40) {
        const rdm = Math.floor(Math.random() * 361);
        if(isInTheTab(arrayMine, rdm)) continue
        arrayMine.push(rdm)
        i++        
    }
    return arrayMine
}

const createGameMatrix = matrix => {
    
}

const setupMatrix = () => createGameMatrix(convertMineArrayToMineMatrix(convertRdmArrayToMineArray(initializeMineArray())))

console.log(setupMatrix())