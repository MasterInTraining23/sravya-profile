window.onload = function() {
	setupSmoothTransitionOnTabSelection();
	setupChangeTitleCallbackForTabs();
};

var SECTION_TABS = 'li.section-tab';

function setupSmoothTransitionOnTabSelection() {
	$(SECTION_TABS).click(function(){
	    $('html, body').animate({
	        scrollTop: $( '#' + $(this).attr('data-section') ).offset().top
	    }, 500);
	    return false;
	});
}

function setupChangeTitleCallbackForTabs() {
	// 'section-content' elements are expected to have 'page-title'
	// data attributes set. The element's 'data-page-title' value
	// will be used to update the page's title.
	$(SECTION_TABS).click(function() { document.title = $(this).attr('data-page-title') });
}