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

    const printNum = () => {
        var placeholder = document.getElementById('placeholder');
        placeholder.innerHTML = diceVal;
    }

    return { roll, getDiceVal, getIsChoosen, setChoosen };
}

var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
  
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }
  
  var button = document.getElementById('button');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };
  
  