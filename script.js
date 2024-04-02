function displayText(val) {
  document.getElementById("textArea").value += val;
}
function clearText() {
  document.getElementById("textArea").value = "";
}
function calculation() {
  let x = document.getElementById("textArea").value;
  let ans = eval(x);
  document.getElementById("textArea").value = ans;
}
