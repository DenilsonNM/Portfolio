var copybtn = document.getElementById("copybtn");
var copytext = document.getElementById("copytext");

copybtn.onclick = function () {
  navigator.clipboard.writeText(copytext.innerHTML);
  alert("denilsonjnm31@gmail.com");
  // copybtn.innerHTML = "Copied"
  // setTimeout(function () {
  //   copybtn.innerHTML = "Copy"
  // }, 2000)
}