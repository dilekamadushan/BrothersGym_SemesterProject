Template.Trainer.onCreated(function(){
    this.editMode = new ReactiveVar (false );
    // this.editMode = new ReactiveVar ( );
    // this.editMode.set(false);


});

Template.Trainer.onCreated(function () {
    var self = this;
    self.autorun(function () {

        self.subscribe('TrainersToView');
    });
});



Template.Trainer.helpers({

});



Template.MyProfile.events({

});
