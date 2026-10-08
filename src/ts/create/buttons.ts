const btnCreate = document.querySelector("#btn-nav");
const btnImport = document.querySelector("#btn-nav");

const linkCreateExcel = `https://docs.google.com/spreadsheets/u/0/create?usp=sheets_home&ths=true`;

btnCreate.addEventListener("click", () => {
  window.location.href = linkCreateExcel;
});

btnImport.addEventListener("click", () => {
  window.location.href = "/src/excel/index.html";
});
