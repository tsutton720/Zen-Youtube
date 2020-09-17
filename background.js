chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ button: null }, function () {
    console.log("comment set to show and rec to show");
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: "youtube.com" },
          }),
        ],

        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});
