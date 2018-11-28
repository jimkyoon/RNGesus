const logicController = {};

logicController.coinFlip = () => {
  const result = Math.floor(Math.random() * Math.floor(2));
  if (result === 0) return { message: 'Your coin flip result was', result: 'Tails' };
  if (result === 1) return { message: 'Your coin flip result was', result: 'Heads' };
};

logicController.diceRoll = (sides) => {
  const diceMessage = `Your D${sides} rolled a`;
  const result = Math.floor(Math.random() * Math.floor(sides)) + 1;
  const returnObj = {};
  returnObj.message = diceMessage;
  returnObj.result = result;
  return returnObj;
};

logicController.pickANumber = (num) => {
  const numMessage = `The number picked between 1 and ${num} was`;
  const result = Math.floor(Math.random() * Math.floor(num)) + 1;
  const returnObj = {};
  returnObj.message = numMessage;
  returnObj.result = result;
  return returnObj;
}

logicController.lottery = (regMax, megaMax) => {
  // the object to return
  const result = {};
  // the message for the object
  const lottoMessage = 'Your lotto numbers are';
  // the array of winning numbers
  const lottoNums = [];
  // first adding in the 5 numbers between 1 and the regMax
  while (lottoNums.length < 5) {
    // generate the random number
    const randNum = Math.floor(Math.random() * (regMax - 1 + 1) + 1);
    // if the lottoNums array already has the number included, "restart" the process
    if (lottoNums.includes(randNum)) {
      continue;
    } else {
      // if it isnt, add it to the lottoNums array
      lottoNums.push(randNum);
    }
  }
  // sort it from smallest to largest to make it easier to write down
  lottoNums.sort((a, b) => a - b);
  // finally, add in the mega number, as a string, to differeniate from the other numbers
  lottoNums.push(Math.floor(Math.random() * (megaMax - 1 + 1) + 1).toString());
  result.message = lottoMessage;
  result.result = lottoNums;
  return result;
};

module.exports = logicController;
