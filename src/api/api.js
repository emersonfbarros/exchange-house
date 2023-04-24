export default function fetchCoins(coin) {
  if (!coin) {
    throw new Error('Enter a currency to search.');
  }
  const currencyExchange = fetch(`https://api.exchangerate.host/latest?base=${coin}`)
    .then((res) => res.json())
    .then((coins) => coins.rates);

  return currencyExchange;
}
