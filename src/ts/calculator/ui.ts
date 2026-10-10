const templateSigns = () => {
  const calculator = document.getElementById("calculator");
  const sum = document.createElement("button");
  const res = document.createElement("button");
  const mul = document.createElement("button");
  const div = document.createElement("button");
  const equal = document.createElement("button");

  sum.textContent = "+";
  res.textContent = "-";
  mul.textContent = "×";
  div.textContent = "/";
  equal.textContent = "=";

  calculator?.appendChild(sum);
  calculator?.appendChild(res);
  calculator?.appendChild(mul);
  calculator?.appendChild(div);
  calculator?.appendChild(equal);
};

const templateInput = () => {
  const input = document.getElementById("calculator");
  const box = document.createElement("input");

  box.type = "number";
  box.placeholder = "Enter a number";
  box.min = "0";
  box.max = "1000000";
  box.id = "entryCalculator";

  input?.appendChild(box);
};

export const initCalculator = () => {
  templateInput();
  templateSigns();
};
