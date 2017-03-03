Template.EditUser.helpers({
    formData:function(){

         return Meteor.users.findOne({_id: this.data._id});
     },
    admin: function(){

        return Roles.userIsInRole(Meteor.userId(),'admin');
    },


    userEmail: function(){
        return this.emails[0].address;
    },
    isAdmin: function(){
        return Roles.userIsInRole(this.data._id,'admin') ? 'admin' :'normal';
    }
})


Template.EditUser.onCreated(function(){

    this.autorun(() => {
        this.subscribe('allUsers')

    });


})

// Template.EditUser.events({
//     'submit form': function(event,id) {
//          event.preventDefault();
//
//         var user = this.data;
//
//         if(user) {
//             Meteor.users.update({_id:user._id}, {$set:{"profile.firstName":'Johns'}});
//             // Meteor.users.update(user, {
//             //
//             //     $set: {"profile.firstName": "Test2", "profile.new_fields": "value"}
//
//         }
//
//
// }});