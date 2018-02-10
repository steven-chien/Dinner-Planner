var DinnerOverviewController = function(view, generalState, model) {
    view.goBackButton.click(function() {
        generalState.hideDinnerOverviewView();
        generalState.showDishesView();
        generalState.showDinnerMenuView();
    });

    view.printFullRecipeButton.click(function() {
        generalState.hideDinnerOverviewView();
        generalState.showPrintFullMenuView();
    });
};