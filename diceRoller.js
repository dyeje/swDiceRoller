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

  var diceResults = roll(diceSets);
  displayResults(sumDiceResults(diceResults));
});

function displayResults (diceResults) {
  //success
  var successDisplay = diceResults.success;

  if (successDisplay > 0) {
    successDisplay = successDisplay + " success"
  } else if (successDisplay < 0) {
    successDisplay = Math.abs(successDisplay) + " failure"
  }

  $('.success-value').html(successDisplay);

  //advantage
  var advantageDisplay = diceResults.advantage;

  if (advantageDisplay > 0) {
    advantageDisplay = advantageDisplay + " advantage"
  } else if (advantageDisplay < 0) {
    advantageDisplay = Math.abs(advantageDisplay) + " disadvantage"
  }

  $('.advantage-value').html(advantageDisplay);

  //lightside
  $('.lightside-value').html(diceResults.lightside);

  //darkside
  $('.darkside-value').html(diceResults.darkside);

  //speial
  $('.special-value').html(diceResults.special.join(', '))
}

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

function sumDiceResults(diceResults) {
  var sum = {
    success: 0,
    advantage: 0,
    lightside: 0,
    darkside: 0,
    special: []
  };

  _.each(diceResults, function (diceResult) {
    if (diceResult.success)   sum.success   += diceResult.success;
    if (diceResult.advantage) sum.advantage += diceResult.advantage;
    if (diceResult.lightside) sum.lightside += diceResult.lightside;
    if (diceResult.darkside)  sum.darkside  += diceResult.darkside;
    if (diceResult.special)   sum.special.push(diceResult.special);
  });

  sum.special = _.uniq(sum.special);

  return sum;
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
