
Template.newMemberAttendance.events({
    'click .fa-close' : function (  ) {
        Session.set('newMemberAttendance',false)

    }
    // 'click .new-myProfile': () => {
    //     Session.set('newMyProfile', true);
    // }
    // 'click .new-memberAttendance': () => {
    //     Session.set('newMemberAttendance', true);
    // },
    //
    //
    // 'click .toggle-menu': function(){
    //     console.log('click');
    //     Meteor.call('toggleMenuItemMyProfile', this._id, this.inMenu);
    // },
    // 'click .fa-trash' :function() {
    //     Meteor.call('deleteMemberAttendance', this._id);
    //
    // },
    // 'click .fa-pencil' :function(event, template) {
    //     //Session.set('editMode', !Session.get('editMode'));
    //     template.editMode.set( !template.editMode.get());
    //     Session.set('newMyProfile',false);
    // }
})
