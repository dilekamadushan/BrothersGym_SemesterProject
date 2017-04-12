Template.MemberFeedback.onCreated(function(){
    this.editMode = new ReactiveVar (false );
    // this.editMode = new ReactiveVar ( );
    // this.editMode.set(false);

});



Template.MemberFeedback.helpers({
    updateMemberFeedbackId:function (){
        return this._id;
    },

    editMorde: function(){
        return Template.instance().editMode.get();
    }

});



Template.MemberFeedback.events({
    'click .toggle-menu': function(){
        console.log('click');
        Meteor.call('toggleMenuMemberFeedback', this._id, this.inMenu);
    },
    'click .fa-trash' :function() {
        if(confirm("delete")){
            Meteor.call('deleteMemberFeedback', this._id);
        }


    },
    'click .fa-pencil' :function(event, template) {
        //Session.set('editMode', !Session.get('editMode'));
        template.editMode.set( !template.editMode.get());
        Session.set('newMemberFeedback',false);
    }
});
