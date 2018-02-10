var DinnerMenuView = function(container, model) {

	var numOfGuests = container.find($('#numOfGuests'));
	this.selectedDishes = container.find($('#selectedDishes'));

	this.addNumberOfGuestButton = container.find($('#addNoGuestButton'));
	this.reduceNumberOfGuestButton = container.find($('#reduceNoGuestButton'));
	this.confirmDinnerButton = container.find($('#confirmDinnerButton'));

	numOfGuests.text(model.getNumberOfGuests());

	this.show = function() {
        this.updateView();
        model.addObserver(this);
		container.show();
	};

	this.hide = function() {
	    container.hide();
	    model.removeObserver(this);
    };

	this.updateView = function() {
		numOfGuests.text(model.getNumberOfGuests());
        var totalCost = 0.0;
        var fullMenu = model.getFullMenu();
        if(fullMenu.length>0) {
            this.confirmDinnerButton.show();
        }
        else {
            this.confirmDinnerButton.hide();
        }

        var menu = $('<table class="table">');
        menu.append($('<thead><th scope="col">Dish Name</th><th scope="col">Cost</th></thead><tbody>'));
        fullMenu.forEach(function(value) {
            var cost = 0.0;
            value.ingredients.forEach(function(ingredient) {
                cost += ingredient.price;
            });
            cost *= model.getNumberOfGuests();
            totalCost += cost;
            var tr = $('<tr><td value="'+value.id+'">'+value.name+'</td><td>'+cost+'</td></tr>');
            menu.append(tr)
        });
        menu.append($('<tr><td colspan="2" align="right">'+totalCost+' SEK</td></tr>'));
        menu.append($('</tbobdy></table>'));
        this.selectedDishes.html(menu);
	};
};
