var DishDetailsController = function(view, generalState, model) {

    view.goBackButton.click(function() {
       generalState.hideDishDetailsView();
       generalState.showDishesView();
    });

    view.addDishToMenuButton.click(function() {
       model.addDishToMenu(model.getCurrentDish());
       generalState.hideDishDetailsView();
       generalState.showDishesView();
    });
};