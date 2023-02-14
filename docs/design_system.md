Yatzy Game Documentation
Introduction
Yatzy is a dice game played with five dice. The objective of the game is to score points by rolling combinations of dice.

Design System
The Yatzy game consists of the following components:

Dice
The dice are six-sided cubes numbered from 1 to 6. The dice are used to roll combinations to score points. The dice are displayed on the game board.

Game Board
The game board displays the current score, the remaining rolls, and the available combinations to score points. The game board also displays the current round of the game.

Score Card
The score card is used to keep track of the points scored by the player. The score card is divided into 13 categories, each with a different combination of dice that must be rolled to score points. The score card is displayed on the game board.

Combinations
The following combinations can be scored in Yatzy:

Ones: The sum of all dice showing 1.
Twos: The sum of all dice showing 2.
Threes: The sum of all dice showing 3.
Fours: The sum of all dice showing 4.
Fives: The sum of all dice showing 5.
Sixes: The sum of all dice showing 6.
Three of a Kind: The sum of all dice if three dice have the same number, otherwise 0.
Four of a Kind: The sum of all dice if four dice have the same number, otherwise 0.
Full House: 25 points if three dice have the same number and the other two dice have the same number, otherwise 0.
Small Straight: 30 points if the dice show the sequence 1-2-3-4-5, otherwise 0.
Large Straight: 40 points if the dice show the sequence 2-3-4-5-6, otherwise 0.
Yatzy: 50 points if all dice have the same number, otherwise 0.
Chance: The sum of all dice.
How to Play
To play Yatzy, follow these steps:

The player rolls the dice.
The player selects which dice to keep and which dice to reroll.
The player rerolls the dice.
The player selects which dice to keep and which dice to reroll.
The player rerolls the dice.
The player selects which combination to score.
The player scores the combination.
The next round begins.
The game continues for 13 rounds, until all categories have been scored. The player with the highest score at the end of the game is the winner.


# Design System

! (A raw HTML/CSS main page preview] (assets/designsystem/main.png)

! (A raw HTML/CSS stats page] (assets/designsystem/stats.png)

* [Main HTML/CSS main page source code] (assets/designsystem/main.html)
* [Stats HTML/CSS source code here] (assets/designsystem/stats.html)

## Colours

|HEX Code | Display | Description |
| #0E1332 | !(0E1332] (assets/designsystem/0E1332.svg) | Main Background colour |

| #003C52 | !(003C52] (assets/designsystem/003C52.svg) | Results Background colour |

| #59ECF8 | !(59ECF8] (assets/designsystem/59ECF8.svg) | H1 text and images |

| #F6F8FC | !(F6F8FC] (assets/designsystem/F6F8FC.svg) | Copy text |
| #FFFFFF | !(FFFFFF] (assets/designsystem/FFFFFF.svg) | H2 text |
| #AFDC43 | !(AFDC43] (assets/designsystem/AFDC43.svg) | Primary Button background |
| #0E1332 | !(0E1332] (assets/designsystem/OE1332.svg) | Primary Button text |
| transparent | | Secondary Button background |
| #59ECF8 | !(59ECF8] (assets/designsystem/59ECF8.svg) | Secondary Button text |
| #59ECF8 | !(59ECF8] (assets/designsystem/59ECF8.svg) | Secondary Button border |
| #AFDC43 | ! (AFDC43] (assets/designsystem/AFDC43.svg) | Stats Border |

## Fonts

| Name | Provider | Display | Description |

| [Roboto] (https://fonts.google.com/specimen/Roboto) | Google Fonts | ![Roboto
font](assets/designsystem/roboto.svg) | Primary font for most text |
| [Montserrat](https://fonts.google.com/specimen/Montserrat) | Google Fonts |
| ![Montserrat font] (assets/designsystem/montserrat.pg) | Former font for
metric numbers |
