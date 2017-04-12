

Template.MemberFeedbacks.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('memberFeedbacks');
        self.subscribe('FitnessClasses')
    });
});

Template.MemberFeedbacks.helpers({
    memberFeedbacks: ()=>{
        return MemberFeedback.find({});
    }
});

Template.MemberFeedbacks.events({
    'click .new-memberFeedback': () => {
        Session.set('newMemberFeedback', true);
    }
})