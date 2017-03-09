Meteor.publish('allUsers',function () {

    if(Roles.userIsInRole(this.userId,'admin')){

        return Meteor.users.find({});
    }
    else if(Roles.userIsInRole(this.userId,'admin')){

    }


});


Meteor.publish('memberProfiles',function () {


    if(Roles.userIsInRole(this.userId,'admin')){
        return MemberProfiles.find({});

    }
    else if(Roles.userIsInRole(this.userId,'member')){
        return MemberProfiles.find({profile:this.userId});

    }
});
// Meteor.publish('myProfiles',function () {
//
//
//     if(Roles.userIsInRole(this.userId,'admin')){
//         return MyProfiles.find({});
//
//     }
//     else if(Roles.userIsInRole(this.userId,'member')){
//         return MyProfiles.find({profile:this.userId});
//
//     }
// });

//
// Meteor.publish('singleRecipe',function (id) {
//     check(id, String);
//     return Recipes.find({_id: id});
// });


Meteor.publish('schedules',function () {
    return Schedules.find({});
});



Meteor.publish('recipes',function () {
    return Recipes.find({});
});

Meteor.publish('occupations', function () {
    return Occupations.find();
});
Meteor.publish('clients', function () {
    return Clients.find();
});

Meteor.publish('memberPayments',function () {
    return MemberPayments.find({});
});

// Meteor.publish('singleRecipe',function (id) {
//     check(id, String);
//     return Schedules.find({_id: id});
// });