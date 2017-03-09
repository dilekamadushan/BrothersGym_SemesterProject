

Template.MemberPayments.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('memberPayments');
        self.subscribe('memberProfiles');
    });
});

Template.MemberPayments.helpers({
    memberPayments: ()=>{
        return MemberPayments.find({});
    }
});

Template.MemberPayments.events({
    'click .new-recipe': () => {
        Session.set('newMemberPayment', true);
    }
})