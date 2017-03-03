Template.MemberProfiles.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('memberProfiles');
    });
});

Template.MemberProfiles.helpers({
    memberProfiles: ()=>{
        return MemberProfiles.find({});
    }
});

Template.MemberProfiles.events({
    'click.new-recipe': () => {
        Session.set('newRecipe', true);
    }
})