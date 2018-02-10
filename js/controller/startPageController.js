var StartPageController = function(view, generalState) {
	view.createNewDinnerButton.click(function() {
		console.log('create new dinner button clicked');
		generalState.hideStartPage();
	});
};