import { executeCurrency } from "../conversionCurrency/currencyComparison.js";
import { executePersonalExcel } from "../personalExcel/showExcel.js";

export const initButtons = async () => {
  const btnTutorial = document.querySelector("#btn-tutorial");
  const btnGoExcel = document.querySelector("#go-excel");
  const btnImport = document.querySelector("#btn-import");
  const btnTotal = document.querySelector("#total");

  const linkCreateExcel = `https://docs.google.com/spreadsheets/u/0/create?usp=sheets_home&ths=true`;
  const linkTutorial = `https://youtu.be/Q7Kk3h8te34`;

  btnTutorial?.addEventListener("click", () => {
    window.location.href = linkTutorial;
  });

  btnGoExcel?.addEventListener("click", () => {
    window.location.href = linkCreateExcel;
  });

  btnImport?.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter the Excel Link";
    btnImport.parentNode?.appendChild(input);

    input.addEventListener("keydown", async (e) => {
      if (e.key === "Enter") {
        localStorage.setItem("linkExcel", input.value);
      }
      await executePersonalExcel();
    });

    const message = document.createElement("span");
    message.textContent = "*Press Enter";
    btnImport.parentNode?.appendChild(message);
  });
};
