    //dice values
var //good
    SUCCESS = { success: 1 },
    ADVANTAGE = { advantage: 1 },
    TRIUMPH = { success: 1, special: 'Triumph' },
    //bad
    DEFEAT = { success: -1 },
    DISADVANTAGE = { advantage: -1 },
    DESPAIR = { success: -1, special: 'Despair' },
    //force
    DARK_SIDE = { darkside: 1 },
    LIGHT_SIDE = { lightside: 1 };

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
      [LIGHT_SIDE, LIGHT_SIDE],
      [DARK_SIDE],
      [LIGHT_SIDE, LIGHT_SIDE],
      [DARK_SIDE],
      [LIGHT_SIDE, LIGHT_SIDE],
      [DARK_SIDE],
      [LIGHT_SIDE],
      [DARK_SIDE],
      [LIGHT_SIDE],
      [DARK_SIDE],
      [DARK_SIDE, DARK_SIDE]
    ];
