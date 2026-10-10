import { link } from "./data.js";
//console.log(link);

const getPersonalExcel = async () => {
  try {
    const localCurrency = await fetch(link);
    const data = await localCurrency.text();
    //console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching personal Excel data:", error);
    throw error;
  }
};

const dataConvert = async () => {
  try {
    const data = await getPersonalExcel();
    const dataConverted = data
      .trim()
      .split(/\r?\n/)
      .map((row) => row.split(","));
    return dataConverted;
  } catch (error) {
    console.error("Error converting data:", error);
    throw error;
  }
};

const dataOrganize = async () => {
  try {
    const info = await dataConvert();
    console.table(info);
    const [header = [], ...rows] = info;

    const htmlHeader = header
      .map((column, index) => {
        const colLetter = String.fromCharCode(65 + index);
        const rowNumber = 1;
        const cellId = `${colLetter}${rowNumber}`;
        return `<th id="${cellId}">${column}</th>`;
      })
      .join("");
    const htmlRows = rows
      .map(
        (row, rowIndex) =>
          `<tr >${row
            .map((cell, colIndex) => {
              const colLetter = String.fromCharCode(65 + colIndex);
              const rowNumber = rowIndex + 2;
              const cellId = `${colLetter}${rowNumber}`;
              return `<td id="${cellId}" >${cell}</td>`;
            })
            .join("")}</tr>`,
      )
      .join("");

    return `<table><thead><tr>${htmlHeader}</tr></thead><tbody>${htmlRows}</tbody></table>`;
  } catch (error) {
    console.error("Error organizing data:", error);
    throw error;
  }
};

const showExcel = async () => {
  try {
    const info = await dataOrganize();
    const currencyInfo = document.getElementById("personal-excel");
    currencyInfo!.innerHTML = `<p>${info}</p>`;
  } catch (error) {
    console.error("Error showing Excel data:", error);
  }
};

export const executePersonalExcel = async () => {
  await showExcel();
};
