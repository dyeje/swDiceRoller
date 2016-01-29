    //dice values
var //good
    SUCCESS = 'success',
    ADVANTAGE = 'advantage',
    TRIUMPH = 'triumph',
    //bad
    DEFEAT = 'defeat',
    DISADVANTAGE = 'disadvantage',
    DESPAIR = 'despair',
    //force
    DARK_SIDE = 'dark_side',
    LIGHT_SIDE = 'light_side',

    //dice
var //D6
    BLUE = [
      [],
      [],
      [ADVANTAGE],
      [SUCCESS],
      [ADVANTAGE, ADVANTAGE],
      [SUCCESS, ADVANTAGE]
    ],
    BLACK = [
      [],
      [DISADVANTAGE],
      [DEFEAT],
      [],
      [DISADVANTAGE],
      [DEFEAT]
    ],
    //D8
    GREEN = [
      [SUCCESS],
      [ADVANTAGE],
      [SUCCESS, ADVANTAGE],
      [SUCCESS, SUCCESS],
      [ADVANTAGE],
      [SUCCESS],
      [ADVANTAGE, ADVANTAGE],
      []
    ],
    PURPLE = [
      [DISADVANTAGE],
      [DEFEAT],
      [DEFEAT, DISADVANTAGE],
      [DISADVANTAGE],
      [],
      [DISADVANTAGE, DISADVANTAGE],
      [DEFEAT, DEFEAT],
      [DISADVANTAGE]
    ],
    //D12
    YELLOW = [
      [ADVANTAGE, ADVANTAGE],
      [ADVANTAGE],
      [ADVANTAGE, ADVANTAGE],
      [TRIUMPH],
      [SUCCESS],
      [SUCCESS, ADVANTAGE],
      [SUCCESS],
      [SUCCESS, ADVANTAGE],
      [SUCCESS, SUCCESS],
      [SUCCESS, ADVANTAGE],
      [SUCCESS, SUCCESS],
      []
    ],
    RED = [
      [DISADVANTAGE, DISADVANTAGE],
      [DISADVANTAGE],
      [DISADVANTAGE, DISADVANTAGE],
      [DISADVANTAGE],
      [DEFEAT, DISADVANTAGE],
      [DEFEAT],
      [DEFEAT, DISADVANTAGE],
      [DEFEAT],
      [DEFEAT, DEFEAT],
      [DESPAIR],
      [DEFEAT, DEFEAT],
      []
    ],
    FORCE = [
      [DARK_SIDE],
      [LIGHT_SIDE, LIGHT_SIDE]
      [DARK_SIDE],
      [LIGHT_SIDE, LIGHT_SIDE]
      [DARK_SIDE],
      [LIGHT_SIDE, LIGHT_SIDE]
      [DARK_SIDE],
      [LIGHT_SIDE]
      [DARK_SIDE],
      [LIGHT_SIDE]
      [DARK_SIDE],
      [DARK_SIDE, DARK_SIDE]
    ]
