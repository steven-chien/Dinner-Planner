var DinnerOverviewView = function(container, model) {
    this.printFullRecipeButton = container.find($('#printFullRecipeButton'));
    var confirmFullMenu = container.find($('#confirmFullMenu'));
    var confirmFullMenuPrice = container.find($('#confirmFullMenuPrice'));
    var numberOfGuestDisplay = container.find($('#numOfGuestConfirm'));

    this.goBackButton = container.find($('#goBackToDishes'));

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
        var htmlString = "";
        var totalPrice = 0.0;

        numberOfGuestDisplay.text(model.getNumberOfGuests());

        model.getFullMenu().forEach(function (recipe) {
            var cost = 0.0;

            recipe.ingredients.forEach(function (value) {
                totalPrice += value.price;
                cost += value.price;
            });

            htmlString += "<div style=\"text-align:center\" value=\"" + recipe.id + "\" class=\"col-md-4\"><h4 value=\"" + recipe.id + "\">" + recipe.name
                + "</h4><img style=\"display: block; margin-left: auto; margin-right: auto;\" value=\"" + recipe.id + "\" src=\"images/" + recipe.image
                + "\" class=\"img - thumbnail\" width=\"200\" >"
                + "<p style=\"vertical-align=bottom;\">" + cost + " SEK</p>"
                + "</div>";
        });

        confirmFullMenuPrice.text("Total price: " + totalPrice + " SEK");
        confirmFullMenu.html(htmlString);
    };
};