Template.MemberProfile.onCreated(function(){
    this.editMode = new ReactiveVar (false );
    this.editMode = new ReactiveVar ( );
    // this.editMode.set(false);

});



Template.MemberProfile.helpers({
    updateMemberProfileId:function (){
        return this._id;
    },

    editMorde: function(){
        return Template.instance().editMode.get();
    }

});



Template.MemberProfile.events({
    'click .toggle-menu': function(){
        console.log('click');
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },
    'click .fa-trash' :function() {
        Meteor.call('deleteMemberProfile', this._id);

    },
    'click .fa-pencil' :function(event, template) {
        //Session.set('editMode', !Session.get('editMode'));

        let user= Meteor.users.findOne({_id:this.profile});

        this.name = user.profile.firstName;
        MemberProfiles.update(this._id,{
            $set:{
                name: user.profile.firstName,
            }
        })


        template.editMode.set( !template.editMode.get());

    },

})