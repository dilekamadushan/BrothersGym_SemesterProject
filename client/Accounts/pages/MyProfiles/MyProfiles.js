

Template.MyProfiles.onCreated(function () {
   var self = this;
   self.autorun(function () {
      self.subscribe('myProfiles');
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
