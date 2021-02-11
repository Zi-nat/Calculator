const defultResult = 0;
let currentResult = defultResult;

function creatAndWriteOutput(operator, resultBeforeCalc, calcNumber){
const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
outputResult(currentResult, calcDescription);
} 

function add() {
  const enteredNumber = parseInt(userInput.value);
  const initResult = currentResult;
  currentResult = currentResult + enteredNumber;
  creatAndWriteOutput('+',initResult, enteredNumber)
}

function subtract() {
    const enteredNumber = parseInt(userInput.value);
    const initResult = currentResult;
    currentResult = currentResult - enteredNumber;
    creatAndWriteOutput('-',initResult, enteredNumber)
  }

  function multiply() {
    const enteredNumber = parseInt(userInput.value);
    const initResult = currentResult;
    currentResult = currentResult * enteredNumber;
    creatAndWriteOutput('*',initResult, enteredNumber)
  }

  function divide() {
    const enteredNumber = parseInt(userInput.value);
    const initResult = currentResult;
    currentResult = currentResult / enteredNumber;
    creatAndWriteOutput('/',initResult, enteredNumber)
  }

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
