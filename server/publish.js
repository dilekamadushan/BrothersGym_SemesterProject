Meteor.publish('allUsers',function () {

    if(Roles.userIsInRole(this.userId,'admin')){

        return Meteor.users.find({});
    }
    else if(Roles.userIsInRole(this.userId,'officer')){

    }


});

Meteor.publish('memberUsers',function () {

    if(Roles.userIsInRole(this.userId,'officer')){

        return Meteor.users.find({roles:"member"});
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

Meteor.publish('memberAttendances',function () {


    if(Roles.userIsInRole(this.userId,'officer')){
        return MemberAttendances.find({});

    }
    if(Roles.userIsInRole(this.userId,'admin')){
        return MemberAttendances.find({});

    }

});








Meteor.publish('myProfiles',function () {


    if(Roles.userIsInRole(this.userId,'admin')){
        return MyProfiles.find({});

    }
    else if(Roles.userIsInRole(this.userId,'officer')){
        return MyProfiles.find({});

    }
    else if(Roles.userIsInRole(this.userId,'member')){
        return MyProfiles.find({memberId:this.userId});

    }
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


