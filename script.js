const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const input = document.getElementById("number");

function roman(num) {
  let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let romanNum = '';

  for (let index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanNum += romanNumerals[index];
      num -= decimalValue[index];
    }
  }
  return romanNum;
}

convertBtn.addEventListener("click", () => {
  output.textContent = Number(input.value);
  console.log(Number(input.value));

  if (Number(!input.value)) {
    output.innerHTML = `
    <div class="warning">
      <p id="warning-output">Please enter a valid number</p>
    </div>`;
  } else if (Number(input.value) <= 0) {
    output.innerHTML = `
    <div class="warning">
      <p id="warning-output">Please enter a number greater than or equal to 1</p>
    </div>`;
  } else if (Number(input.value) >= 4000) {
    output.innerHTML = `
    <div class="warning">
      <p id="warning-output">Please enter a number less than or equal to 3999</p>
    </div>`;
  } else {
    output.innerHTML = `
    <div class="output-div">
      <p id="output">${roman(input.value)}</p>
    </div>`;
  }
});