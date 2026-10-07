const getCurrency = async (localCurrency: string, targetCurrency: string) => {
  const comparison = await fetch(
    `https://api.frankfurter.dev/v2/rates?base=${localCurrency}&quotes=${targetCurrency}`,
  );
  const data = await comparison.json();

  return data;
};

const showCurrency = (information: string) => {
  const currencyInfo = document.getElementById("currency-info");
  currencyInfo!.innerHTML = `<p>${information}</p>`;
};

export const executeCurrency = (
  localCurrency: string,
  targetCurrency: string,
) => {
  const comparison = getCurrency(localCurrency, targetCurrency);
  showCurrency(comparison);
};
