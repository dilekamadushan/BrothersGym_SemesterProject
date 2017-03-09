Template.MemberProfiles.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('memberProfiles');
    });
});

Template.MemberProfiles.helpers({
    memberProfiles: ()=>{
        return MemberProfiles.find({});
    },
    IsUserAdmin: function(){

        return Roles.userIsInRole(Meteor.userId(),'admin');
    }
});

Template.MemberProfiles.events({
    'click .new-recipe': () => {
        Session.set('newMemberProfile', true);
    }
})