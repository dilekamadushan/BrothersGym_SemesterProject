Template.MemberPayment.onCreated(function(){
    this.editMode = new ReactiveVar (false );
    // this.editMode = new ReactiveVar ( );
    // this.editMode.set(false);

});



Template.MemberPayment.helpers({
    updateMemberPaymentId:function (){
        return this._id;
    },

    editMorde: function(){
        return Template.instance().editMode.get();
    }

});



Template.MemberPayment.events({
    'click .toggle-menu': function(){
        console.log('click');
        Meteor.call('toggleMenuItemMemberPayment', this._id, this.inMenu);
    },
    'click .fa-trash' :function() {
        if(confirm("delete")){
            Meteor.call('deleteMemberPayment', this._id);
        }


    },
    'click .fa-pencil' :function(event, template) {
        //Session.set('editMode', !Session.get('editMode'));

        template.editMode.set( !template.editMode.get());
        Session.set('newMemberPayment',false);
    }
});
