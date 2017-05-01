Meteor.publish('allUsers',function () {

    if(Roles.userIsInRole(this.userId,'admin')){

        return Meteor.users.find({});
    }
    else if(Roles.userIsInRole(this.userId,'officer')){

    }


});

Meteor.publish('memberFeedbacks',function () {

    if(Roles.userIsInRole(this.userId,'admin')){

        return MemberFeedback.find({});
    }
    else {

        return MemberFeedback.find({author:this.userId});
    }


});

Meteor.publish('memberUsers',function () {

    if(Roles.userIsInRole(this.userId,'officer')){

        return Meteor.users.find({roles:"member"});
    }

});

Meteor.publish('Trainers',function () {



        return Meteor.users.find({roles:"trainer"});


});

Meteor.publish('FitnessClasses',function () {



    return FitnessClasses.find({});


});
Meteor.publish('images',function () {



    return Images.find({});


});
Meteor.publish('saleItems',function () {



    return SaleItems.find({});


});



//
// Meteor.publish('memberProfiles',function () {
//
//
//     if(Roles.userIsInRole(this.userId,'admin')){
//         return MemberProfiles.find({});
//
//     }
//     else if(Roles.userIsInRole(this.userId,'member')){
//         return MemberProfiles.find({profile:this.userId});
//
//     }
//     else if(Roles.userIsInRole(this.userId,'member')){
//         return MemberProfiles.find({profile:this.userId});
//
//     }
// });

Meteor.publish('memberAttendances',function () {


    if(Roles.userIsInRole(this.userId,'officer')){
        return MemberAttendances.find({});

    }
    if(Roles.userIsInRole(this.userId,'admin')){
        return MemberAttendances.find({});

    }
    if(Roles.userIsInRole(this.userId,'member')){
        return MemberAttendances.find({memberId:this.userId});

    }
    if(Roles.userIsInRole(this.userId,'trainer')){
        return MemberAttendances.find({});

    }



});



Meteor.publishComposite('radiegtya_chat', function(doc, sort) {
    console.log("subscribing some Chat with it's relation");
    var doc = doc || {};
    var sort = sort || {};
    return{
        find: function() {
            return Radiegtya.Chat.find(doc, sort);
        },
        children: [
            /* return all related Users */
            {
                find: function(collection) {
                    return Meteor.users.find(collection.userId);
                }
            },
        ],
    }
});
Meteor.publishComposite('oneToOneChat', function(id1,id2, sort) {
    console.log("subscribing some Chat with it's relation");
    var doc = doc || {};
    var sort = sort || {};
    return{
        find: function() {
           // return OneToOneChat.find(doc, sort);
            return OneToOneChat.find(



            {
                $and : [
                    { $or : [ { channelId1 :id1 }, { channelId1: id2 } ] },
                    { $or : [ { channelId2 :id1 }, { channelId2: id2 } ] }
                ]

            },sort)
        },
        children: [
            /* return all related Users */
            {
                find: function(collection) {
                    return Meteor.users.find(collection.userId);
                }
            },
        ],
    }
});


Meteor.publish('saleNotifications',function () {
    return SaleNotifications.find({});

    //
    // if(Roles.userIsInRole(this.userId,'admin')){
    //     return MyProfiles.find({});
    //
    // }
    // else if(Roles.userIsInRole(this.userId,'officer')){
    //     return MyProfiles.find({});
    //
    // }
    // else if(Roles.userIsInRole(this.userId,'trainer')){
    //     return MyProfiles.find({});
    //
    // }
    // else if(Roles.userIsInRole(this.userId,'member')){
    //     return MyProfiles.find({memberId:this.userId});
    //
    // }
});












Meteor.publish('myProfiles',function () {


    if(Roles.userIsInRole(this.userId,'admin')){
        return MyProfiles.find({});

    }
    else if(Roles.userIsInRole(this.userId,'officer')){
        return MyProfiles.find({});

    }
    else if(Roles.userIsInRole(this.userId,'trainer')){
        return MyProfiles.find({});

    }
    else if(Roles.userIsInRole(this.userId,'member')){
        return MyProfiles.find({memberId:this.userId});

    }
});
Meteor.publish('chatProfiles',function () {



        return MyProfiles.find({});



});

Meteor.publish('memberPayments',function () {


    if(Roles.userIsInRole(this.userId,'admin')){
        return MemberPayments.find({});

    }
    else if(Roles.userIsInRole(this.userId,'member')){
        return MemberPayments.find({memberId:this.userId});

    }
    else if(Roles.userIsInRole(this.userId,'officer')){
        return MemberPayments.find({});

    }
});


Meteor.publish('schedules',function () {
    return Schedules.find({});
});


