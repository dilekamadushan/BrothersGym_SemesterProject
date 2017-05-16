

Template.MyProfileSingle.onCreated(function () {
    var self = this;
    console.log(Router.current().params._id);
    self.autorun(function () {
        self.subscribe('myProfileSingle',Router.current().params._id);
    });
});



Template.MyProfileSingle.helpers({

    profile: ()=> {

        return MyProfiles.findOne({_id:Router.current().params._id});
    }


});

