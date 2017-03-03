Recipes = new Mongo.Collection('recipes');


Recipes.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function(userId,doc){
        return !!userId;
    }
});



RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    desc: {
        type: String,
        label: "Description"
    },
    ingredients:{
        type: [IngredientSchema],
        autoValue: function () {
            return Ingredients.find({});
        },

         defaultValue: function () {
             return Ingredients.find({});
        },
        // autoform:{
        //
        // }
    },
    userId:{
        type:String,
        // autoValue: function () {
        //     return this.userId;
        // },
        defaultValue:function () {
            return Meteor.userId();
        },
    },
    inMenu:{
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform:{
            type: "hidden"
        }
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function () {
            return this.userId;
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function () {
            return new Date();
        },
        autoform: {
            type: "hidden"
        }
    }
});

Meteor.methods({
    toggleMenuItemRecipe: function(id, currentState){
        Recipes.update(id,{
            $set:{
                inMenu: !currentState
            }
        });
    },
    deleteRecipe: function(id){
        Recipes.remove(id);
    },

});

Recipes.attachSchema(RecipeSchema);


