var currentSectionHeightName = "currentSectionHeight"; 

window.onload = function() {
	setupSmoothTransitionOnTabSelection();
	setupChangeTitleCallbackForTabs();
	localStorage.setItem(currentSectionHeightName, $(window).height() - 85);
	disableScroll();
};

// $(window).scroll(function(e) {
//     var documentScrollTop = $(document).scrollTop();
//     var totalViewableContent = parseInt(localStorage.getItem(currentSectionHeightName)) + 85;
//     var heightOfSeenContent = documentScrollTop + $(window).height();
//     console.log("are we here");
//     if (heightOfSeenContent > totalViewableContent) {
//     	console.log("totalViewableContent", totalViewableContent);
// 	    console.log("heightOfSeenContent", heightOfSeenContent);
// 	    console.log(e);
// 	    console.log(documentScrollTop - (heightOfSeenContent - totalViewableContent))
// 	    $(document).scrollTop(documentScrollTop - (heightOfSeenContent - totalViewableContent));
//     }
// });

var SECTION_TABS = 'li.section-tab';

function setupSmoothTransitionOnTabSelection() {
	$(SECTION_TABS).click(function(){
		var section = $( '#' + $(this).attr('data-section'));
		var scrollLeft = section.offset().left;
	    $('html, body').animate({scrollLeft: scrollLeft}, 500);
	    $('#header').animate({left: scrollLeft}, 500);
	    localStorage.setItem(currentSectionHeightName, section.outerHeight());
	    return false;
	});
}

function setupChangeTitleCallbackForTabs() {
	// 'section-content' elements are expected to have 'page-title'
	// data attributes set. The element's 'data-page-title' value
	// will be used to update the page's title.
	$(SECTION_TABS).click(function() { document.title = $(this).attr('data-page-title') });
}

var lastScrollTop = 0;

// down: 40
var keys = {40: 1};

function preventDefault(e) {
	console.log("lastScrollTop", lastScrollTop);
	var documentScrollTop = $(document).scrollTop();
	console.log("documentScrollTop", documentScrollTop);
    var totalViewableContent = parseInt(localStorage.getItem(currentSectionHeightName)) + 85;
    var heightOfSeenContent = documentScrollTop + $(window).height();
    console.log("are we here");
    // if (heightOfSeenContent > totalViewableContent) {
    // 	console.log("totalViewableContent", totalViewableContent);
	   //  console.log("heightOfSeenContent", heightOfSeenContent);
	   //  console.log(e);
	   //  console.log(documentScrollTop - (heightOfSeenContent - totalViewableContent))
	   //  $(document).scrollTop(documentScrollTop - (heightOfSeenContent - totalViewableContent));
    // }
    if (heightOfSeenContent > totalViewableContent) {
		e = e || window.event;
		if (e.preventDefault)
		    e.preventDefault();
		e.returnValue = false;
	}
	lastScrollTop = documentScrollTop;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}