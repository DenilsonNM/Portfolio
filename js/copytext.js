var copybtn = document.getElementById("copybtn");
var copytext = document.getElementById("copytext");

copybtn.onclick = function () {
  navigator.clipboard.writeText(copytext.innerHTML);

  copybtn.innerHTML = "Copied"
  setTimeout(function () {
    copybtn.innerHTML = "Copy"
  }, 2000)
}