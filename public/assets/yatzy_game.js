const YatzyGame = () => {
  const yatzyEngine = YatzyEngine();
  let turn = 0;

  const rollDices = () => {
    turn++;
    if (turn <= 13) {
      yatzyEngine.rollDices();
    } else {
      throw new Error("you have no more turns!");
    }
  };

  const getTurn = () => {
    return turn;
  };

  const getDiceVals = () => {
    return yatzyEngine.getDiceVals();
  };

//   document.getElementById("button").onclick = function() {
//     rollButtonEvent();
//   };

//   const rollButtonEvent = () => {
//     rollDices();
//     console.log(getDiceVals());
//   }

  // const rollButtonEvent = () => {
  //     rollDices();
  //     console.log(getDiceVals());
  //     return getDiceVals;
  // }

  // button.onclick = () => {
  //     rollDices();
  //     console.log(getDiceVals())
  //     let results = getDiceVals();
  //     printNum(results);
  // };

  return { button, getDiceVals, getTurn, rollDices, rollButtonEvent };
};
