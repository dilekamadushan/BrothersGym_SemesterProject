Meteor.publish('allUsers',function () {

    if(Roles.userIsInRole(this.userId,'admin')){

        return Meteor.users.find({});
    }


});


Meteor.publish('memberProfiles',function () {
    return MemberProfiles.find({});
});

//
// Meteor.publish('singleRecipe',function (id) {
//     check(id, String);
//     return Recipes.find({_id: id});
// });


Meteor.publish('schedules',function () {
    return Schedules.find({});
});

Meteor.publish('ingredients',function () {
    return Ingredients.find({});
});

Meteor.publish('recipes',function () {
    return Recipes.find({});
});


// Meteor.publish('singleRecipe',function (id) {
//     check(id, String);
//     return Schedules.find({_id: id});
// });