Ingredients=new Mongo.Collection('ingredients');
Ingredients.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function(userId,doc){
        return !!userId;
    }
});
IngredientSchema = new SimpleSchema({
    name:{
        type: String

    },
    amount:{
        type: String
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
    }
});

Meteor.methods({

    toggleMenuItemIngredient: function(id, currentState){
        Ingredients.update(id,{
            $set:{
                inMenu: !currentState
            }
        });
    },
    deleteIngredient: function(id){
        Ingredients.remove(id);
    }
});



Ingredients.attachSchema(IngredientSchema);