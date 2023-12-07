chrome.tabs.onUpdated.addListener(async(tabId, tab) => {
  let e = await chrome.tabs.query({active: true, lastFocusedWindow: true});
  //if the url of the tab is youtube only : 
  if (e[0].url && e[0].url.includes("youtube.com/watch")) {
    const queryParameters = e[0].url.split("?")[1];    //split it and make a unique key
    const urlParameters = new URLSearchParams(queryParameters);
    console.log(urlParameters);
    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlParameters.get("v"),
    });
  }
});
