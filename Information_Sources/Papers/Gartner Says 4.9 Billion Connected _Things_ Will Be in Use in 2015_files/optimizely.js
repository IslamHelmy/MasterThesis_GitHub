function getScript(url, success) {
  var script = document.createElement('script');
  script.src = url;
  var head = document.getElementsByTagName('head')[0], done = false;

  script.onload = script.onreadystatechange = function() { // Attach handlers for all browsers
    if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
      done = true;
      if (typeof success === "function") success();
      script.onload = script.onreadystatechange = null;
      head.removeChild(script);
    }
  };
  head.appendChild(script);
} // getScript(url, success)

if (jQuery === undefined) { // This ensures that jQuery is loaded before running document ready code:
  getScript('/imagesrv/apps/common/js/jq/jquery-1.9.1.js', function() {
    if (jQuery !== undefined) {
      jQuery(document).ready(function(){
        docReady();
      });
    }
  });
} else { // jQuery was already loaded
  $(document).ready(function(){
    docReady();
  });
}

var clock_count = 0;

function docReady() { // custom document ready function that only runs after jQuery is loaded:
	getScript('//cdn.optimizely.com/js/84280487.js');
  if($("script[src*='84280487']").length === 0) {
    setTimeout(function() { 
      if(clock_count >= 500) return;
      else {
        clock_count += 50;
        docReady();
      }
    }, 50);
  }
} // docReady()
