Template.Trainers.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('Trainers');
    });
});

Template.Trainers.helpers({
    Trainers: ()=>{
        return Meteor.users.find({roles:"trainer"});
    }
});

Template.Trainers.events({

})