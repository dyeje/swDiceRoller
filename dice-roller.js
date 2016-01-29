function getRandomDieSide(dieLength) {
  return Math.floor(Math.random() * diceLength);
}

function rollDice(dice) {
  var diceResults = dice.map(function (die) {
    return die[getRandomDiceSide(die.length)]
  });

  //flatten
  diceResults = [].concat.apply([], diceResults)

  return diceResults;
}