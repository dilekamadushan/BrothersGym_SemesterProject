Template.MemberProfile.onCreated(function(){
    this.editMode = new ReactiveVar (false );
    // this.editMode = new ReactiveVar ( );
   // this.editMode.set(false);

});



Template.MemberProfile.helpers({
    updateMemberProfileId:function (){
        return this._id;
    },

    editMorde: function(){
        return Template.instance().editMode.get();
    },
    IsUserAdmin: function(){

        return Roles.userIsInRole(Meteor.userId(),'admin');
    }

});



Template.MemberProfile.events({
    'click .toggle-menu': function(){
        console.log('click');
        Meteor.call('toggleMenuItemMemberProfile', this._id, this.inMenu);
    },
    'click .fa-trash' :function() {
        Meteor.call('deleteMemberProfile', this._id);

    },

    'click .fa-pencil' :function(event, template) {
        console.log("clicked");
        //Session.set('editMode', !Session.get('editMode'));
        template.editMode.set( !template.editMode.get());
        //Session.set('newMemberProfile',false);
    }

})