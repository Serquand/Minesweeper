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
    for(let i = 0; i < 19; i++) {
        for(let j = 0; j < 19; j++) {
            let numberMine = 0;
            if(matrix[i][j] == 'M') continue;
            if(matrix[i - 1] != undefined) {
                if(matrix[i - 1][j - 1] == 'M') numberMine++
                if(matrix[i - 1][j] == 'M') numberMine++
                if(matrix[i - 1][j + 1] == 'M') numberMine++
            }
            if(matrix[i][j - 1] == 'M') numberMine++
            if(matrix[i][j + 1] == 'M') numberMine++
            if(matrix[i + 1] != undefined) {
                if(matrix[i + 1][j - 1] == 'M') numberMine++
                if(matrix[i + 1][j] == 'M') numberMine++
                if(matrix[i + 1][j + 1] == 'M') numberMine++
            }
            matrix[i][j] = numberMine
        }
        console.log(matrix[i])
    }
    console.log(JSON.stringify(matrix, 2));
    return matrix;
}

const setupMatrix = () => createGameMatrix(convertMineArrayToMineMatrix(convertRdmArrayToMineArray(initializeMineArray())))

console.log(setupMatrix())