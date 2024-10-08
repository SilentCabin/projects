// 1. Deposit money
// 2. Determie mumber of lines to bet on
// 3. Collect Bet 
// 4. Spin Machine
// 5. Check if user won
// 6. Give user winnings
// 7. Play again


const prompt = require("prompt-sync")();
// defining number of columns and rows
const ROWS = 3;
const COLS = 3;
// defining how many symbols of each type there are
const SYMBOLS_COUNT = {
  A: 3,
  B: 5,
  C: 7,
  D: 9
}
// defining how much each symbol is worth 
const SYMBOL_VALUES = {
  A: 20,
  B: 4,
  C: 3,
  D: 2
}


// Money Desposit
const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Please Enter a Valid Number")
    } else{
        return numberDepositAmount;6
        
    }
  }
};
// Getting how many lines to bet on
const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines < 1 || numberOfLines >3) {
        console.log("Enter valid number of lines")
    } else{
        return numberOfLines;
    }
  }
};
// getting amount of money to bet from balance
const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet amount per line: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet >balance / lines) {
        console.log("Enter a valid bet")
    } else{
        return numberBet;
    }
  }
};
// spinning the slot machine
const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries (SYMBOLS_COUNT)){
      for (let i = 0; i < count; i ++){
        symbols.push(symbol);
      } 
    }

    const reels = [];
    for (let i = 0; i < COLS; i++){
      reels.push([]);
      const reelSymbols = [...symbols];
      for (let j = 0; j < ROWS; j++){
        const randomIndex = Math.floor(Math.random() * reelSymbols.length);
        const selectedSymbol = reelSymbols [randomIndex];
        reels[i].push(selectedSymbol);
        reelSymbols.splice(randomIndex, 1);
            }
    }
    return reels;
};
  
  const transpose = (reels) => {
    const rows = [];

    for (let i = 0; i < ROWS; i++){
      rows.push ([]);
      for (let j = 0; j < COLS; j++){
        rows[i].push(reels[j][i])
      }
    }
    
    return rows
  };

  const printRows =(rows) => {
    for (const row of rows){
      let rowString = "";
      for (const [i, symbol] of row.entries()){
        rowString += symbol
        if (i != row.length - 1){
          rowString += " | "
        }
      }
      console.log (rowString);
    }
  }



const getWinnings = (rows, bet, lines) => {
    let winnings = 0;

    for (let row = 0; row < lines; row++){
        const symbols = rows[row];
        let allSame = true;

        for(const symbol of symbols){
          if (symbol != symbols[0]){
            allSame = false;
            break;
          }
        }

        if (allSame) {
          winnings += bet * SYMBOL_VALUES[symbols[0]]
                }
    }

    return winnings;
}

const game =() => {
  let balance = deposit();

  while (true){
    console.log("You have a balance of: £" + balance )
    const numberOfLines = getNumberOfLines();
    const bet = getBet(balance, numberOfLines);
    balance -= bet * numberOfLines;
    const reels = spin();
    const rows =transpose(reels);
    printRows(rows);
    const winnings = getWinnings(rows, bet, numberOfLines);
    balance += winnings;
    console.log("You won, £" + winnings.toString() + "!");

    if (balance <= 0 ){
      console.log("No funds available");
      break;
    }
    const playAgain =prompt ("Do you want to spin again? (y/n)");

    if (playAgain != "y") break;

  }

};


game();





