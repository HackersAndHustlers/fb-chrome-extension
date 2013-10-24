var callback = function(tabId, changeInfo, tab) {
    var match = "https://www.facebook.com/groups/hackersandhustlers/";

    if (changeInfo.url.indexOf(match) != -1 || changeInfo.url == match) {
        chrome.tabs.executeScript(null, {file:"lib/jquery-1.8.3.min.js"}, function() {
            chrome.tabs.executeScript(null, {file:"scripts/bgs.js"});
        });
    }
};

chrome.tabs.onUpdated.addListener(callback);
