import type { information } from "./info.js";

//The executer is on the bottom

const getCurrencyComparison = async (
  localCurrency: string,
  targetCurrency: string,
) => {
  const comparison = await fetch(
    `https://api.frankfurter.dev/v2/rates?base=${localCurrency}&quotes=${targetCurrency}`,
  );
  const data = await comparison.json();

  return data;
};

const showCurrencyComparison = (data: information[]) => {
  const current = data[0]?.base;
  const newCurrency = data[0]?.quote;
  const rate = data[0]?.rate;

  const currencyInfo = document.getElementById("currency-info");
  currencyInfo!.innerHTML = `<p>${current} to ${newCurrency} rate: ${rate}</p>`;
};

export const executeCurrency = async (
  localCurrency: string,
  targetCurrency: string,
) => {
  const comparison = await getCurrencyComparison(localCurrency, targetCurrency);
  //console.log(comparison);
  showCurrencyComparison(comparison);
};

executeCurrency("USD", "EUR");
