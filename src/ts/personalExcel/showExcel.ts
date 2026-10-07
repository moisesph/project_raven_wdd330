import { link } from "./data.js";

console.log(link);

const getPersonalExcel = async () => {
  const localCurrency = await fetch(link);
  const data = await localCurrency.text();
  console.log(data);
  return data;
};



getPersonalExcel();
