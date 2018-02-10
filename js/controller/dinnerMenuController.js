var DinnerMenuController = function(view, generalState, model) {
	view.addNumberOfGuestButton.click(function() {
		model.setNumberOfGuests(model.getNumberOfGuests()+1);
	});

	view.reduceNumberOfGuestButton.click(function() {
		model.setNumberOfGuests(model.getNumberOfGuests()-1);
	});

	view.selectedDishes.click(function(event) {
		model.removeDishFromMenu(parseInt(event.target.getAttribute("value")));
	});

	view.confirmDinnerButton.click(function() {
	    generalState.hideDishesView();
	    generalState.hideDinnerMenuView();
	    generalState.hideDishDetailsView();
	    generalState.showDinnerOverviewView();
    });
};