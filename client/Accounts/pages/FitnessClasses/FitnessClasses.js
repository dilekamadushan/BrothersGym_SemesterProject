

Template.FitnessClasses.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('FitnessClasses');
    });
});

Template.FitnessClasses.helpers({
    FitnessClasses: ()=>{
        return FitnessClasses.find({});
    }
});

Template.FitnessClasses.events({
    'click .new-FitnessClass': () => {
        Session.set('new-FitnessClass', true);
    }
})
