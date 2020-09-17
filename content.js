chrome.storage.sync.get(["button"], function (result) {
  showHide(result.button);
});

function showHide(id) {
  var el = document.getElementById(id);
  if (el.style.display == "none") el.style.display = "block";
  else el.style.display = "none";
}
