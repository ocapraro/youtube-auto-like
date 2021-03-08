$( document ).ready(function() {

  function updateLogo() {

    if ($("#power").is(":checked")){
      chrome.browserAction.setIcon({
        path : "logo.png"
      });
      $("#logo").attr("data-power", "on");
    }else{
      chrome.browserAction.setIcon({
        path : "off-logo2.png"
      });
      $("#logo").attr("data-power", "off");
    }
  }
  
  chrome.storage.sync.get("ytAutoLikePower", function(items){
    //  items = [ { "yourBody": "myBody" } ]
    $("#power").prop("checked", items.ytAutoLikePower);
    updateLogo();
    $("body").css("display", "block");
  });


  $("#power, #logo").click(function() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
      chrome.storage.sync.set({ "ytAutoLikePower": $("#power").is(":checked") });
      chrome.tabs.sendMessage(tabs[0].id, $("#power").is(":checked"));
      updateLogo();
    });
  });
});