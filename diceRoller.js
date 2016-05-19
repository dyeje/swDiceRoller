var rollButton = $('a.roll');
var diceForm = $('form.dice-form');

rollButton.click(function (e) {
  var diceInputs = diceForm.serializeArray();

  var diceSets = _.compact(_.map(diceInputs, function (diceInput) {
    var diceCount = parseInt(diceInput.value, 10);

    if (diceCount > 0) {
      return {
        diceCount: diceCount,
        diceType: mapDiceType(diceInput.name)
      };
    }
  }));

  console.log(roll(diceSets));
});

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function mapDiceType(name) {
  switch (name) {
    case "yellow": return YELLOW;
    case "green": return GREEN;
    case "blue": return BLUE;
    case "red": return RED;
    case "purple": return PURPLE;
    case "black": return BLACK;
    case "force": return FORCE;
  }
}

//flatten and return an array of result objects arrays
function roll(diceSets) {
  return _.flattenDeep(_.map(diceSets, function (diceSet) {
    return diceResults(diceSet.diceCount, diceSet.diceType);
  }));
}

//get an array of result objects
function diceResults(diceCount, diceType) {
  return _.map(Array(diceCount), function () {
    return dieResult(diceType);
  });
}

//get a result object
function dieResult(die) {
  return die[randomInt(die.length)]
}
