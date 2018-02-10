var DishesView = function(container, model) {

	this.starterMenu = container.find($('#starterMenu'));
	this.mainDishMenu = container.find($('#mainDishMenu'));
	this.dessertMenu = container.find($('#dessertMenu'));
	this.dishSearchBox = container.find($('#dishSearchBox'));

    this.dishesDisplay = container.find($('#dishesDisplay'));
    var menuDropdown = container.find($('#menuDropdown'));

	this.recipes = model.getAllDishes("starter");
	this.recipes = this.recipes.concat(model.getAllDishes("main dish"));
	this.recipes = this.recipes.concat(model.getAllDishes("dessert"));

	//this.selectedMenu = "Select a menu <span class=\"caret\"></span>";
    this.selectedMenu = "Select a menu";

    this.show = function() {
        model.addObserver(this);
        this.updateView();
        container.show();
    };

    this.hide = function() {
        container.hide();
        model.removeObserver(this);
    };

	this.updateView = function() {
		menuDropdown.html(this.selectedMenu + " <span class=\"caret\"></span>");
		var htmlString = "";

		this.recipes.forEach(function(recipe) {
			htmlString += "<div style=\"text-align: center;\" value=\"" + recipe.id + "\" class=\"col-md-3\"><h4 value=\"" + recipe.id + "\">" + recipe.name
				+ "</h4><img style=\"display: block; margin-left: auto; margin-right: auto;\" value=\"" + recipe.id + "\" src=images/" + recipe.image
				+ " class=\"img - thumbnail\" width=\"200\" >"
				+ "<p>" + recipe.description + "</p></div>";

		});

		this.dishesDisplay.html(htmlString);
	};
};
