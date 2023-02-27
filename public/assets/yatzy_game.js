const YatzyGame = () => {
    const yatzyEngine = YatzyEngine();
    let turn = 0;

    const rollDices = () => {
        turn++;
        if(turn <= 13){
            yatzyEngine.rollDices();
        } else {
            throw new Error("you have no more turns!");
        };
    };


}

