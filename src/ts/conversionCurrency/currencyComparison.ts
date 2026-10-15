import type { information } from "./info.js";
import { currencies } from "./info.js";

//The executer is on the bottom

const getLocalCurrency = async (): Promise<string> => {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    return data.currency;
  } catch (error) {
    console.error("We couldn't get the local currency", error);
    return "USD";
  }
};

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

const showCurrencyComparison = async (data: information[]) => {
  const localCurrency = await getLocalCurrency();
  const newCurrency = data[0]?.quote;
  const rate = data[0]?.rate;
  const currenciesData = Object.entries(currencies)
    .map(
      ([code, currencyName]) =>
        `<option value=${code}>${currencyName}</option>`,
    )
    .join("");
  const currencyInfo = document.getElementById("currency-info");

  currencyInfo!.innerHTML = `${localCurrency} > <select><option value="" disabled selected>Select</option>${currenciesData}</select> = ${rate}`;
};

export const executeCurrency = async (
  //localCurrency: string,
  targetCurrency: string,
) => {
  const localCurrency = await getLocalCurrency();
  const comparison = await getCurrencyComparison(localCurrency, targetCurrency);
  //console.log(comparison);
  showCurrencyComparison(comparison);
};
