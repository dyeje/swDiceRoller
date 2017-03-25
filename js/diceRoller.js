var diceForm = $('form.dice-form');
var results = $('.results')

$('a.quantity-control').click(function (e) {
  e.preventDefault();

  var input = $(this).siblings('input');
  var value = parseInt((input.val() || 0), 10);
  if ($(this).hasClass('up')) {
    input.val(value + 1);
  } else {
    input.val(Math.max(value - 1, 0));
  }
});

$('a.roll').click(function (e) {
  var diceInputs = diceForm.serializeArray();
  var forceDiceUsed = false;

  var diceSets = _.compact(_.map(diceInputs, function (diceInput) {
    var diceCount = parseInt(diceInput.value, 10);

    if (diceCount > 0) {
      if (diceInput.name ==='force') forceDiceUsed = true;

      return {
        diceCount: diceCount,
        diceType: mapDiceType(diceInput.name)
      };
    }
  }));

  var diceResults = roll(diceSets);
  displayResults(sumDiceResults(diceResults), forceDiceUsed);
  results.removeClass('hidden');
});

function displayResults (diceResults, forceDiceUsed) {
  results.find('.success .value').html(displayValue(diceResults.success, "success", "failure"));
  results.find('.advantage .value').html(displayValue(diceResults.advantage, "advantage", "disadvantage"));
  results.find('.lightside .value').html(diceResults.lightside);
  results.find('.darkside .value').html(diceResults.darkside);
  results.find('.special .value').html(diceResults.special.join(', '));

  results.find('.darkside, .lightside').toggle(forceDiceUsed);
  results.find('.special').toggle(diceResults.special.length > 0);
}

function displayValue(value, positive, negative) {
  if (value > 0) {
    value = value + " " + positive;
  } else if (value < 0) {
    value = Math.abs(value) + " " + negative;
  }

  return value;
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
