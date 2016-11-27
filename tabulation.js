window.onload = function() {
	setupChangeTitleCallbackForTabs();
};

function setupChangeTitleCallbackForTabs() {
	console.log("hello world");
	var sectionTabs = document.getElementsByClassName('section-tab');

	// 'section-content' elements are expected to have 'page-title'
	// data attributes set. The element's 'data-page-title' value
	// will be used to update the page's title.
	for (var i = sectionTabs.length - 1; i >= 0; i--) {
	 var newPageTitle = sectionTabs[i].dataset.pageTitle;
	 sectionTabs[i].addEventListener('click', producePageTitleUpdater(newPageTitle));
	}
}

function producePageTitleUpdater(title) {
	return function() {
 		document.title = title;
 	}; 
}