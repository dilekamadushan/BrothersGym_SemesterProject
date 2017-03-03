Template.logouttemplate.events({
    'click .logoutfunc': ()=> {
        console.log(' plased loggedout');
        Meteor.logout();
        //AccountsTemplates.logout();
    }
});
Template.nav_bar.events({
    'click .logmeout': function(){
        console.log("You requested to log out");
        Meteor.logout();
    }
})