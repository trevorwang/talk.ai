function updateWebviews() {
  var webview = document.querySelector("webview");
  webview.style.height = document.documentElement.clientHeight + "px";
  webview.style.width = document.documentElement.clientWidth + "px";

  webview.addEventListener('newwindow', function(e) {
      e.preventDefault();
      // console.log(e.targetUrl)
      // e.targetUrl contains the target URL of the original link click
      // or window.open() call: use it to open your own window to it.
      // Something to keep in mind: window.open() called from the
      // app's event page is currently (Nov 2013) handicapped and buggy
      // (e.g. it doesn't have access to local storage, including cookie
      // store). You can try to use it here and below, but be prepare that
      // it may sometimes produce bad results.
      // chrome.app.window.create(e.targetUrl);

     	var newWebview = document.createElement('webview');
     	// newWebview.src = e.targetUrl
  		document.body.appendChild(newWebview);
  		e.window.attach(newWebview);
  		newWebview.windowOpenDisposition = "new_popup"
  		 newWebview.style.height = document.documentElement.clientHeight + "px";
  		newWebview.style.width = document.documentElement.clientWidth + "px";
  });
}

onload = updateWebviews;
window.onresize = updateWebviews;
