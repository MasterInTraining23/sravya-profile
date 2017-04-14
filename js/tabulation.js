var currentSectionHeightName = "currentSectionHeight"; 

window.onload = function() {
	setupSmoothTransitionOnTabSelection();
	setupChangeTitleCallbackForTabs();
	localStorage.setItem(currentSectionHeightName, $(window).height() - 85);
};

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