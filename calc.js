var screen = document.getElementById("screen");

function btnClick(value) {
  screen.value += value;
}
function Clear() {
  screen.value = "";
}

function res() {
  var resutl = eval(screen.value);
  screen.value = resutl;
}
