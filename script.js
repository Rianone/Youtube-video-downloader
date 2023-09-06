var convertBtn = document.getElementById("convert-button");
var URLinput = document.getElementById("URL-input");
var invalid = document.getElementById("invalid");
var regVideo = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

convertBtn.addEventListener("click", () => {
    url = URLinput.value;

    if (url) {
        if (url.match(regVideo)) {
          console.log(`URL: ${url}`);
          invalid.style.visibility = "hidden";
          sendURL(url);
        } else {
          invalid.style.visibility = "visible";
        }
    }
    else {
        invalid.style.visibility = "visible";
    }
});


function sendURL(URL) {
  window.location.href = `http://localhost:4000/download?URL=${URL}`;
}
