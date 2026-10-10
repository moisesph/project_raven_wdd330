const sum = (a: number, b: number) => {
  return a + b;
};
const res = (a: number, b: number) => {
  return a - b;
};
const mul = (a: number, b: number) => {
  return a * b;
};
const div = (a: number, b: number) => {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
};

export const initCalculator = (a: number, b: number, operator: string) => {
  if (operator === "+") {
    return sum(a, b);
  }
  if (operator === "-") {
    return res(a, b);
  }
  if (operator === "*") {
    return mul(a, b);
  }
  if (operator === "/") {
    return div(a, b);
  }
};
