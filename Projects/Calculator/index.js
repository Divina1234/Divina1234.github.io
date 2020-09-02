function dis(val) {
  document.getElementById("ans").value += val;
}

function clr() {
  document.getElementById("ans").value = "";
}

function solve() {
  let x = document.getElementById("ans").value;
  let y = eval(x);
  document.getElementById("ans").value = y;
}
