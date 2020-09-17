document.addEventListener("DOMContentLoaded", () => {
  let toggleComments = document.getElementById("commentToggle");
  let toggleRec = document.getElementById("recommendToggle");

  toggleComments.onclick = function () {
    chrome.storage.sync.set({ button: "comments" }, function () {
      console.log("comment button pressed");
    });

    chrome.tabs.executeScript(null, { file: "content.js" });
  };

  toggleRec.onclick = function () {
    chrome.storage.sync.set({ button: "related" }, function () {
      console.log("Related button pressed");
    });
    chrome.tabs.executeScript(null, { file: "content.js" });
  };
}); 
