

Template.NewMemberProfile.onRendered({


});

Template.NewMemberProfile.events({
    'click .fa-close' : function (  ) {
        Session.set('newMemberProfile',false)

    }
});
Template.NewMemberProfile.helpers({
    // AutoForm:hooks ({
    //     insertMemberProfileForm: {
    //         before: {
    //             insert: function(doc) {
    //                 MemberProfileSchema.simpleSchema().clean(doc);
    //                 return doc;
    //             }
    //         }
    //     }
    // })
})