const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');

let input = "";

buttons.forEach(button => {
  button.addEventListener('click', () => {
    input += button.dataset.value;
    display.value = input;
  });
});


clear.addEventListener('click', () => {
  input = "";
  display.value = "";
});

equals.addEventListener('click', () => {
  try {
    input = eval(input).toString();
    display.value = input;
  } catch {
    display.value = "Error";
    input = "";
  }
});
