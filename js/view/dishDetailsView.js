var DishDetailsView = function(container, model) {

    this.goBackButton = container.find($('#goBackToDishesButton'));
    this.addDishToMenuButton = container.find($('#addDishToMenuButton'));

    var dishName = container.find($('#dishName'));
    var dishImg = container.find($('#dishImg'));
    var dishDescription = container.find($('#dishDescription'));
    var ingredientTable = container.find($('#ingredientList'));
    var ingredientGuestCount = container.find($('#ingredientGuestCount'));

    this.updateView = function() {
        var dishId = parseInt(model.getCurrentDish());
        var dishDetails = model.getDish(dishId);
        console.log(dishDetails);
        var numberOfGuest = model.getNumberOfGuests();

        console.log(dishDetails.name);
        ingredientGuestCount.text(numberOfGuest);
        dishName.text(dishDetails.name);
        dishImg.html($('<img style="display: block; margin-left: auto; margin-right: auto;" src="images/' + dishDetails.image + '" >'));
        dishDescription.text(dishDetails.description);
        console.log(dishDetails);

        var ingredientList = $('<table class="table">');
        ingredientList.append($('<thead><th scope="col">Quantity</th><th scope="col">Name</th><th scope="col" colspan="2">Price</th><tbody>'));
        dishDetails.ingredients.forEach(function(value) {
            console.log(value);
            var tr = $('<tr><td>'+Math.round((value.quantity*numberOfGuest)*100)/100+' '+value.unit+'</td><td>'+value.name+'</td><td>SEK</td><td>'+Math.round((value.price*numberOfGuest)*100)/100+'</td></tr>');
            ingredientList.append(tr)
        });
        ingredientList.append($('</tobdy></table>'));
        ingredientTable.html(ingredientList);

    };

    this.show = function() {
        model.addObserver(this);
        this.updateView();
        container.show();
    };

    this.hide = function() {
        container.hide();
        model.removeObserver(this);
    }
};