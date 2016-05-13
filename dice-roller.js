function getRandomDieSide(dieLength) {
  return Math.floor(Math.random() * diceLength);
}

// ex.
// var dicePools = [
//   { diceCount: 1, diceType: BLUE },
//   { diceCount: 2, diceType: GREEN },
//   { diceCount: 4, diceType: PURPLE }
// ]

//flatten and return an array of result objects arrays
function roll(diceSets) {
  return _.flattenDeep(_.map(dicePools, function (diceSet) {
    return diceResults(diceSet.diceCount, dice.diceType);
  }));
}

//get an array of result objects
function diceResults(diceCount, diceType) {
  return _.map(Array.new(diceCount), function () {
    return rollDie(diceType);
  });
}

//get a result object
function dieResult(die) {
  return die[getRandomDieSide(die.length)]
}