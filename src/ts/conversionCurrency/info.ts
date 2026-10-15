export interface information {
  base: string;
  quote: string;
  rate: number;
  date: string;
}

export const currencies: Record<string, string> = {
  USD: "US Dollar",
  CAD: "Canadian Dollar",
  MXN: "Mexican Peso",
  BRL: "Brazilian Real",
  ARS: "Argentine Peso",
  COP: "Colombian Peso",
  CLP: "Chilean Peso",
  PEN: "Peruvian Sol",
};
