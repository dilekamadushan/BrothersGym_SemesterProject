Tracker.autorun(function() {
    if (Session.get('myProfileSearchQuery'))
        Meteor.subscribe('myProfileSearch', Session.get('myProfileSearchQuery'));
});

Template.MyProfiles.onCreated(function () {
   var self = this;
   self.autorun(function () {
      self.subscribe('myProfiles');
       self.subscribe('memberAttendances');
       self.subscribe('FitnessClasses');
   });
});

Template.MyProfiles.helpers({
   myProfiles: ()=>{
       return MyProfiles.find({});
   }
});

Template.MyProfiles.events({
    'click .new-myProfile': () => {
        Session.set('newMyProfile', true);
    }
})
Template.MyProfiles.events({
    'keyup [type=text]': function(event, template) {
        Session.set('myProfileSearchQuery', event.target.value);
    }
});

Template.MyProfiles.helpers({
    searchResults: function() {
       return MyProfiles.search(Session.get('myProfileSearchQuery'));
    },
    booksSearchQuery: function() {
        return Session.get('myProfileSearchQuery');
    }
});
