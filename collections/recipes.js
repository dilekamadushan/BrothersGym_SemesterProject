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
        occupations: {
            type: String,
            optional:true,
            label: 'Occupation',
            autoform:{
                type:"select2",
                placeholder: 'Comma spaced list of occupations',
            }
        }

,
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


// Schemas = {};

// Template.registerHelper("Schemas", Schemas);
//
// Schemas.PersonWithContacts = new SimpleSchema({
//     firstName: {
//         type: String,
//         index: 1,
//         unique: true
//     },
//     lastName: {
//         type: String,
//         optional: true
//     },
//     age: {
//         type: Number,
//         optional: true
//     },
//     contacts: {
//         type: Array,
//         optional: true
//     },
//     'contacts.$': {
//         type: Object
//     },
//     'contacts.$.name': {
//         type: String
//     },
//     'contacts.$.phone': {
//         type: String
//     }
// });

// var Collections = {};
//
// Template.registerHelper("Collections", Collections);
//
// PeopleWithContacts = Collections.PeopleWithContacts = new Mongo.Collection("PeopleWithContacts");
// PeopleWithContacts.attachSchema(Schemas.PersonWithContacts);
//
// Meteor.publish(null, function () {
//     return PeopleWithContacts.find();
// });
//
// PeopleWithContacts.allow({
//     update: function () {
//         return true;
//     }
// });
//
// Template.updateArrayItem.helpers({
//     exampleDoc: function () {
//         return PeopleWithContacts.findOne({firstName: 'Winston'});
//     }
// });Winston