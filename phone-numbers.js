/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let letters = new Map()
    letters.set("2",["a", "b", "c"])
    letters.set("3",["d", "e", "f"])
    letters.set("4",["g", "h", "i"])
    letters.set("5",["j", "k", "l"])
    letters.set("6",["m", "n", "o"])
    letters.set("7",["p", "q", "r", "s"])
    letters.set("8",["t", "u", "v"])
    letters.set("9",["w", "x", "y", "z"])
    
    let combinations = []
    digits.split("").forEach(digit => {
        let digChars = letters.get(digit)
        if (combinations.length === 0) {
            combinations = combinations.concat(digChars)
        }
        else {
            let newCombinations = []
            let combinationsClone
            digChars.forEach(char => {
                combinationsClone = [...combinations]
                combinationsClone = combinationsClone.map(word => word + char)
                newCombinations = newCombinations.concat(combinationsClone)
            })
            combinations = newCombinations
        }
    })
    return combinations
};