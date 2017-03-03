

Template.Schedules.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('schedules');
    });
});

Template.Schedules.helpers({
    schedules: ()=>{
        return Schedules.find({});
    }
});

Template.Schedules.events({
    'click .new-recipe': () => {
        Session.set('newRecipe', true);
    }
})