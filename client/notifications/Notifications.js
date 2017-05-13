

Template.Notifications.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('saleNotifications');

    });
});

Template.Notifications.helpers({
    notifications: ()=>{
        return SaleNotifications.find({});
    }
});

Template.Notifications.events({
    'click .new-recipe': () => {
        Session.set('newRecipe', true);
    }
})