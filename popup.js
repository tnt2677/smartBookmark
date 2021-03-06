document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#openBookmark").addEventListener('click', openBookmarkFunction);
  document.querySelector("#addBookmark").addEventListener('click', fetchCurrentUrl);
});
function openBookmarkFunction(){
    console.log("open button");
    //chrome.runtime.sendMessage({"greeting": "from_popup_to_open_bookmark","url":"https://callstack.com/blog/say-goodbye-to-old-fashioned-forks-thanks-to-the-patch-package/"});
    chrome.tabs.create({"url": "https://callstack.com/blog/say-goodbye-to-old-fashioned-forks-thanks-to-the-patch-package/"});
}
function fetchCurrentUrl(){
  
  chrome.runtime.sendMessage({"greeting": "from_popup_to_fetch_url"});
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.greeting === "save_current_url_from_background" ) {
      
      document.querySelector("#addPopupDiv").innerHTML = request.url;
      //chrome.tabs.create({"url": request.url});
    }
  }
);
