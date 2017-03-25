

Template.markAttendance.onCreated(function () {

    this.editMode = new ReactiveVar (false );
    var self = this;
    self.autorun(function () {
        self.subscribe('memberUsers');
        self.subscribe('memberAttendances');
    });

});

Template.markAttendance.helpers({
    memberUsers: ()=>{
        return Meteor.users.find({})
        //Users.find({});
    },


    editMorde: function(){
        return Template.instance().editMode.get();
    }

});

Template.markAttendance.events({
    // 'click .new-myProfile': () => {
    //     Session.set('newMyProfile', true);
    // }


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
})
