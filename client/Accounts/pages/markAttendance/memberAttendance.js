Template.MemberAttendance.onCreated(function(){
    this.editMode = new ReactiveVar (false );
    // this.editMode = new ReactiveVar ( );
    // this.editMode.set(false);

});



Template.MemberAttendance.helpers({
    updateMemberAttendanceId:function (){
        return this._id;
    },

    editMorde: function(){
        return Template.instance().editMode.get();
    }

});



Template.MemberAttendance.events({
    'click .toggle-menu': function(){
        console.log('click');
        Meteor.call('toggleMenuItemMyProfile', this._id, this.inMenu);
    },
    'click .fa-trash' :function() {
        Meteor.call('deleteMemberAttendance', this._id);

    },
    'click .fa-pencil' :function(event, template) {
        //Session.set('editMode', !Session.get('editMode'));
        template.editMode.set( !template.editMode.get());
        Session.set('newMyProfile',false);
    }
});
