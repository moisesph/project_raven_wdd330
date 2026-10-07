import { link } from "./data.js";

console.log(link);

const getPersonalExcel = async () => {
  const localCurrency = await fetch(link);
  const data = await localCurrency.text();
  console.log(data);
  return data;
};

const showExcel = (info: string) => {
  const currencyInfo = document.getElementById("personal-excel");
  currencyInfo!.innerHTML = `<p>${info}</p>`;
};

export const executePersonalExcel = async () => {
  const data = await getPersonalExcel();
  showExcel(data);
};

executePersonalExcel();
