//CATEGORIES
const ONES = "Ones";
const TWOS = "Twos";
const THREES = "Threes";
const FOURS = "Fours";
const FIVES = "Fives";
const SIXES = "Sixes";

//Three dice of the same number
const THREE_OF_A_KIND = "Three of a Kind";

//Four dice of the same number
const FOUR_OF_A_KIND = "Four of a Kind";

//Three dice showing the same number, and two dice
const FULL_HOUSE = "Full House";

//Any four consecutive numbers (for example, 3-4-5-6)
const SMALL_STRAIGHT = "Small Straight";

//Any five consecutive numbers (for example, 1-2-3-4-5)
const LARGE_STRAIGHT = "Large Straight";

//All 5 dice showing the same number
const YAHTZEE = "Yahtzee (Five of a Kind)";

//Any combination of dice
const CHANCE = "Chance";

const YatzyEngine = () => {

    const dice1 = Dice();
    const dice2 = Dice();
    const dice3 = Dice();
    const dice4 = Dice();
    const dice5 = Dice();

    const dices = [
        dice1,
        dice2,
        dice3,
        dice4,
        dice5
    ];

    const scores = {
        ones: null,
        twos: null,
        threes: null,
        fours: null,
        fives: null,
        sixes: null,
        threeOfAKind: null,
        fourOfAKind: null,
        fullHouse: null,
        smallStraight: null,
        largeStraight: null,
        yahtzee: null,
        chance: null,
    };

}

