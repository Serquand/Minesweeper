const isInTheTab = (tab, number) => {
    for(let i = 0; i < tab.length; i++) {
        if(tab[i] == number) return true
    }
    return false
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