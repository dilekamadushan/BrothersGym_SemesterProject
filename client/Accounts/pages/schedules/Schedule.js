Template.Schedule.onCreated(function(){
    this.editMode = new ReactiveVar (false );
    // this.editMode = new ReactiveVar ( );
    // this.editMode.set(false);

});



Template.Schedule.helpers({
    updateScheduleId:function (){
        return this._id;
    },

    editMorde: function(){
        return Template.instance().editMode.get();
    }

});



Template.Schedule.events({
    'click .toggle-menu': function(){
        console.log('click');
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },
    'click .fa-trash' :function() {
        if(confirm("delete")){
            Meteor.call('deleteSchedule', this._id);
        }


    },
    'click .fa-pencil' :function(event, template) {
        //Session.set('editMode', !Session.get('editMode'));
        template.editMode.set( !template.editMode.get());
        Session.set('newRecipe',false);
    }
});
