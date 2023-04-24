export default function fetchCoins(coin) {
  const currencyExchange = fetch(`https://api.exchangerate.host/latest?base=${coin}`)
    .then((res) => res.json())
    .then((coins) => Object.entries(coins.rates));

  return currencyExchange;
}
import fetchCoins from './api/api';

const inputCoin = document.getElementById('user-input');
const searchBtn = document.getElementById('search-coin');
