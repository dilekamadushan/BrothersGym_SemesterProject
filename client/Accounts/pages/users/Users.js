Template.Users.helpers({
    admin: function(){

        return Roles.userIsInRole(Meteor.userId(),'admin');
    },

    users:function () {
        return Meteor.users.find();

    },
    userEmail: function(){
       return this.emails[0].address;
    },
    isAdmin: function(){
        return Roles.userIsInRole(this._id,'admin') ? 'admin' :'normal';
    }
})

Template.Users.onCreated(function(){

    this.autorun(() => {
        this.subscribe('allUsers')

    });

})