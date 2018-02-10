$(function() {

	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView
	//var exampleView = new ExampleView($("#exampleView"));
	var startPageView = new StartPageView($('#startPageView'));
	var dinnerMenuView = new DinnerMenuView($('#dinnerMenuView'), model);
	var dishesView = new DishesView($('#dishesView'), model);
	var dishDetailsView = new DishDetailsView($('#dishDetailsView'), model);
	var dinnerOverviewView = new DinnerOverviewView($('#dinnerOverviewView'), model);
	var printFullMenuView = new PrintFullMenuView($('#printFullMenuView'), model);

	var startPageController = new StartPageController(startPageView, this);
	var dinnerMenuController = new DinnerMenuController(dinnerMenuView, this, model);
	var dishesController = new DishesController(dishesView, this, model);
	var dishDetailsController = new DishDetailsController(dishDetailsView, this, model);
	var dinnerOverviewController = new DinnerOverviewController(dinnerOverviewView, this, model);
	var printFullMenuController = new PrintFullMenuController(printFullMenuView, this, model);

	this.hideStartPage = function() {
	    startPageView.hide();
	    dinnerMenuView.show();
	    dishesView.show();
    };

	this.hideDinnerMenuView = function() {
		dinnerMenuView.hide();
	};

	this.showDinnerMenuView = function() {
		dinnerMenuView.show();
	};

	this.showDishesView = function() {
		dishesView.show();
	};

    this.hideDishesView = function() {
	    dishesView.hide();
    };

    this.showDishDetailsView = function() {
        dishDetailsView.show();
    };

    this.hideDishDetailsView = function() {
    	dishDetailsView.hide();
	};

    this.showDinnerOverviewView = function() {
    	dinnerOverviewView.show();
	};

    this.hideDinnerOverviewView =function() {
    	dinnerOverviewView.hide();
	};

    this.showPrintFullMenuView = function() {
        printFullMenuView.show();
    };

    this.hidePrintFullMenuView = function() {
        printFullMenuView.hide();
    };

    this.hideDinnerMenuView();
    this.hideDishesView();
    this.hideDishDetailsView();
    this.hideDinnerOverviewView();
    this.hidePrintFullMenuView();
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});
