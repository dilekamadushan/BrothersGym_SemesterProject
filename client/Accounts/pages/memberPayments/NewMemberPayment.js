Template.NewMemberPayment.events({
    'click .fa-close' : function (  ) {
        Session.set('newMemberPayment',false)

    }
})

Template.NewMemberPayment.helpers({


})

Template.NewMemberPayment.onCreated(function () {
    var self = this;
    self.autorun(function () {

        self.subscribe('clients');
        self.subscribe('memberPayments');

    });
});