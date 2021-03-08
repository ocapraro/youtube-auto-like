// alert("hello");
let power = true;

chrome.runtime.onMessage.addListener(function(request) {
  power = request;
});
chrome.storage.sync.get("ytAutoLikePower", function(items){
  //  items = [ { "yourBody": "myBody" } ]
  power = items.ytAutoLikePower
  
});

function likeVideo() {
  console.log(power);
  if(power){  
    setTimeout(function(){
        let likeButton = $("#top-level-buttons ytd-toggle-button-renderer:first");
        const liked = $(likeButton).hasClass("style-default-active");
        console.log(liked);
        if(!liked){
          console.log("liked");
            $(likeButton).click();
        }
    },3000);
  }
}
window.addEventListener('yt-page-data-updated', likeVideo);