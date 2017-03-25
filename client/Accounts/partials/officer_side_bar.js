

Template.officer_side_bar.events({

});
Template.officer_side_bar.helpers({
    getUserName:function(){
        return currentUser.profile.firstName;
    },  firstName: function() {
        return Meteor.user().profile.firstName;
    }
});