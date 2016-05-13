function getRandomDieSide(dieLength) {
  return Math.floor(Math.random() * diceLength);
}

function rollDice(dice) {
  var allResults = [];

  if (dice.blue) {
    var results = _.map(Array.new(dice.blue), function () {
      return rollDie(BLUE);
    });

    allResults.push(results);
  }
}

function rollDie(die) {
  return die[getRandomDieSide(die.length)]
}