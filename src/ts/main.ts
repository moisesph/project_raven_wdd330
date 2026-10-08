import { executeCurrency } from "./conversionCurrency/currencyComparison.js";
import { getLocalCurrency } from "./conversionCurrency/localCurrency.js";
import { executePersonalExcel } from "./personalExcel/showExcel.js";
import { initCalculator } from "./calculator/ui.js";

executeCurrency("USD", "EUR");
getLocalCurrency();
executePersonalExcel();
initCalculator();
