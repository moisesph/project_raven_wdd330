const createCell = () => {
  let selectedCell: { cellId: string; cellValue: string } | null = null;
  return {
    remember: (cellId: string, cellValue: string) => {
      selectedCell = { cellId, cellValue };
      return selectedCell;
    },
    get: () => {
      return selectedCell;
    },
  };
};

const createOperator = () => {
  let selectedButton: { symbol: string } | null = null;
  return {
    remember: (buttonValue: string) => {
      return buttonValue;
    },
    get: () => {
      return selectedButton;
    },
  };
};

const selectCell = (cellManager: ReturnType<typeof createCell>) => {
  const table = document.querySelector("table");
  table?.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const cell = target.closest("TD, TH");

    if (!cell) {
      return;
    }
    const cellId = cell.id;
    const cellValue = cell.textContent;
    cellManager.remember(cellId, cellValue || "");

    //console.log(cellManager.get());
    //console.log(`Cell ID: ${cellId}, Cell Value: ${cellValue}`);
  });
};

const selectButton = (operator: string) => {
  const calculator = document.querySelector("calculator");
  const entryCalculator = document.querySelector("entryCalculator");

  calculator?.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const button = target.closest("button");

    if (!button) {
      return;
    }

    const buttonValue = button.textContent;
  });
};

export const initModify = () => {
  const cellManager = createCell();
  const operatorManager = createOperator();

  selectCell(cellManager);
  //selectButton(operatorManager);
};
