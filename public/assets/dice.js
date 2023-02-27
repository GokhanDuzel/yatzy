const Dice = () => {

    let diceVal = null;
    let choosen = false;

    const roll = () => {
        diceVal = Math.floor(Math.random() * 6) + 1;
    };

    const getDiceVal = () => {
        return diceVal;
    };

    const setChoosen = (choice) => {
        choosen = choice;
    };

    const getIsChoosen = () => {
        return choosen;
    };

    return { roll, getDiceVal, getIsChoosen, setChoosen };
}