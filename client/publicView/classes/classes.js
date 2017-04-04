Template.Classes.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('FitnessClasses');
    });
});

Template.Classes.helpers({
    Classes: ()=>{
        return FitnessClasses.find({});
    }
});

Template.Classes.events({

})