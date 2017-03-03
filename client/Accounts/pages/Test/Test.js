
Template.NewIngredient.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('ingredients');
        self.subscribe('recipes');
    });
});

Template.NewIngredient.helpers({
    ingredients: ()=>{
        return Ingredients.find();
    },
    recipes: ()=>{
        return Recipes.find();
    }
});