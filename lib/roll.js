export default function roll(numSide, numDice, numRolls) {
    var output = [];
    
    for(var i = 0; i < numRolls; i++){
        output[i] = 1 + Math.floor(Math.random() * numSide);
    }
    
    var obj = {
        sides: numSide,
        dice: numDice,
        rolls: numRolls,
        results: output
    };

    return obj;
}