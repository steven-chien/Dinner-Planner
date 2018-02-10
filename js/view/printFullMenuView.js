var PrintFullMenuView = function(container, model) {
    var menuList = container.find($('#menuList'));

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

        var htmlString = '';
        var numberOfGuest = model.getNumberOfGuests();

        model.getFullMenu().forEach(function(dish) {
            var id = dish.id;
            var name = dish.name;
            var image = dish.image;
            var preparation = dish.description;
            var ingredients = dish.ingredients

            htmlString += ('<div class="row">');

            htmlString += ('<div class="col-md-3">');
            htmlString += ('<img style="display: block; margin-left: auto; margin-right: auto;" value="' + id + '" src="images/' + image + '" class="img - thumbnail" width="200">');
            htmlString += ('</div>');

            htmlString += ('<div class="col-md-4">');
            htmlString += ('<h3>'+name+'</h3>');

            var ingredientList = '<table class="table">';
            ingredientList += ('<thead><th scope="col">Quantity</th><th scope="col">Name</th><th scope="col" colspan="2">Price</th><tbody>');
            ingredients.forEach(function(value) {
                console.log(value);
                var tr = '<tr><td>'+Math.round((value.quantity*numberOfGuest)*100)/100+' '+value.unit+'</td><td>'+value.name+'</td><td>SEK</td><td>'+Math.round((value.price*numberOfGuest)*100)/100+'</td></tr>';
                ingredientList += (tr)
            });
            ingredientList += ('</tobdy></table>');

            htmlString += (ingredientList);
            htmlString += ('</div>');

            htmlString += ('<div class="col-md-4">');
            htmlString += ('<h3>Preparation</h3>');
            htmlString += ('<p>'+preparation+'</p>');
            htmlString += ('</div>');

            htmlString += ('</div>');
            console.log(htmlString);

        });
        console.log(htmlString);
        menuList.html(htmlString);
    };
};