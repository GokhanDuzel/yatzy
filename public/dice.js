

class Dice {
  rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  rollAllDices() {
    return Array(5).fill().map(() => this.rollDice());
  }
}
