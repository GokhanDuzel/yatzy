// yatzy_engine.js
function calculateTurnScore(game, scoreType) {
  let score = 0;
  // Calcule le score pour une case donnée en fonction de la valeur sur les dés
  for (let i = 0; i < 5; i++) {
    if (game.diceValues[i] === scoreType) {
      score += scoreType;
    }
  }
  return score;
}

function updateTotalScore(game) {
  // Calcule le score total pour toutes les cases
  let totalScore = 0;
  for (let scoreType = 1; scoreType <= 6; scoreType++) {
    totalScore += calculateTurnScore(game, scoreType);
  }
  
  // Applique le bonus si nécessaire
  if (totalScore >= 63) {
    totalScore += 50;
  }
  return totalScore;
}

