var DishesController = function(view, generalState, model) {
	view.starterMenu.click(function() {
		console.log('starter selected');
		view.selectedMenu = "starter";
		view.recipes = model.getAllDishes("starter");
		view.updateView();
	});

	view.mainDishMenu.click(function() {
		console.log('main dish selected');
		view.selectedMenu = "main dish";
		view.recipes = model.getAllDishes("main dish");
		view.updateView();
	});

	view.dessertMenu.click(function() {
		console.log('dessert selected');
		view.selectedMenu = "dessert";
		view.recipes = model.getAllDishes("dessert");
		view.updateView();
	});

	view.dishesDisplay.click(function(event) {
		console.log(event.target.getAttribute("value"));
        //document.cookie = "displayDish="+event.target.getAttribute("value");
        model.setCurrentDish(event.target.getAttribute("value"));
        generalState.hideDishesView();
        generalState.showDishDetailsView();
        //$.cookie("displayingDish", event.target.id);
	});

	view.dishSearchBox.keyup(function(event) {
		console.log(event.target.value);
		if(view.selectedMenu!="Select a menu") {
		    view.recipes = model.getAllDishes(view.selectedMenu, event.target.value);
            console.log(view.recipes);
        }
        else {
		    view.recipes = model.getAllDishes("starter", event.target.value);
		    view.recipes = view.recipes.concat(model.getAllDishes("main dish", event.target.value));
		    view.recipes = view.recipes.concat(model.getAllDishes("dessert", event.target.value));
        }
        view.updateView();
	});
};