
function convert(degree) {
  var x;
  if (degree == "C") {
    x = document.getElementById("c").value * 9.0 / 5.0 + 32.0;
    document.getElementById("f").value = Math.round(x);
  } else {
    x = (document.getElementById("f").value -32) * 5 / 9;
    document.getElementById("c").value = Math.round(x);
  }
}
