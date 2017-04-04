Template.FitnessClass.onCreated(function(){
    this.editMode = new ReactiveVar (false );
    // this.editMode = new ReactiveVar ( );
    // this.editMode.set(false);


});

Template.FitnessClass.onCreated(function () {
    var self = this;
    self.autorun(function () {

        //self.subscribe('memberAttendances');
    });
});



Template.FitnessClass.helpers({
    updateFitnessClassId:function (){
        return this._id;
    },

    editMorde: function(){
        return Template.instance().editMode.get();
    }

});


Template.FitnessClass.events({
    'click .toggle-menu': function(){
        console.log('click');
        Meteor.call('toggleActiveClass', this._id, this.active);
    },
    'click .fa-trash' :function() {
        Meteor.call('deleteFitnessClass', this._id);

    },
    'click .fa-pencil' :function(event, template) {
        //Session.set('editMode', !Session.get('editMode'));
        console.log('clicked');
        template.editMode.set( !template.editMode.get());
        Session.set('new-FitnessClass',false);
    }
});
