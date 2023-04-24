const boardCurrency = document.getElementById('currency-list');
const currencyTitle = document.getElementById('currency-title');

function createBoardTitle(base) {
  currencyTitle.innerHTML = `Values referring to 1 ${base}`;
}

function createCoinEl(name, value) {
  const coinInfos = document.createElement('li');
  const floatLimit = 3;
  const img = '<img src="./src/assets/coin.svg" alt="coin logo">';
  coinInfos.innerHTML = `${img}${name} <span>${value.toFixed(floatLimit)}</span>`;
  return coinInfos;
}

export function clearBoard() {
  boardCurrency.innerHTML = '';
  currencyTitle.innerHTML = '';
}

export function renderBoard(base, rates) {
  if (!(Object.keys(rates).includes(base))) {
    throw new Error('This currency does not exist!');
  }

  clearBoard();

  createBoardTitle(base);

  Object.entries(rates).forEach((rate) => {
    const coinEl = createCoinEl(rate[0], rate[1]);
    boardCurrency.appendChild(coinEl);
  });
}
