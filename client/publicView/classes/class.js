Template.Class.onCreated(function(){
    this.editMode = new ReactiveVar (false );
    // this.editMode = new ReactiveVar ( );
    // this.editMode.set(false);


});

Template.Class.onCreated(function () {
    var self = this;
    self.autorun(function () {

        self.subscribe('TrainersToView');
    });
});



Template.Class.helpers({

});



Template.Class.events({

});
