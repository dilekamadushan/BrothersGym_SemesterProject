
Template.NewIngredient.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('ingredients');
        self.subscribe('recipes');
        self.subscribe('occupations');
        self.subscribe('clients');
    });
});

Template.NewIngredient.helpers({
    ingredients: ()=>{
        return Ingredients.find();
    },
    recipes: ()=>{
        return Recipes.find();
    },
    listOccupations: function () {
        return Occupations.find({}).fetch();
    },
    myoptions: function() {
        return Clients.find({}, {fields: {clientName: 1}}).map(function (c){
            return {label: c.clientName, value: c._id};;

        })
    }
});
