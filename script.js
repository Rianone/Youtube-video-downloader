var convertBtn = document.getElementById("convert-button");
var URLinput = document.getElementById("URL-input");
convertBtn.addEventListener("click", () => {
  console.log(`URL: ${URLinput.value}`);
  sendURL(URLinput.value);
});


function sendURL(URL) {
  // We will put code here later
}
