var StartPageView = function(container) {
	this.createNewDinnerButton = container.find($('#newDinnerButton'));

	this.hide = function() {
		container.hide();
	};
};
