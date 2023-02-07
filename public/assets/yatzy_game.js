class YatzyGame {
  constructor() {
    this.rollNumber = 0;
    this.diceValues = [0, 0, 0, 0, 0];
    this.diceKeep = [false, false, false, false, false];
  }

  rollDices() {
    for (let i = 0; i < this.diceValues.length; i++) {
      if (!this.diceKeep[i]) {
        this.diceValues[i] = rollDice();
      }
    }
    this.rollNumber++;
  }

  keepDice(index) {
    this.diceKeep[index] = true;
  }

  unkeepDice(index) {
    this.diceKeep[index] = false;
  }
}

