const Dice = () => {

    let diceVal = null;

    const roll = () => {
        diceVal = Math.floor(Math.random() * 6) + 1;
    };

    const getDiceVal = () => {
        return diceVal;
    }

    return { roll, getDiceVal };
}