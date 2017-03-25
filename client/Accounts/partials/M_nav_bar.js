Template.logouttemplate.events({
    'click .logoutfunc': ()=> {
        console.log(' plased loggedout');
        AccountsTemplates.logout();
       // Meteor.logout();

    }
});
Template.nav_bar.events({
    'click .logmeout': function(){
        console.log("You requested to log out");
        AccountsTemplates.logout();
        Meteor.logout();
    }
})