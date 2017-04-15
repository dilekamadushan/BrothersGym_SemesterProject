var postSignUp =function(userId, info){
    console.log(userId);
    console.log(info.profile.profession);
    Roles.addUsersToRoles(userId,[info.profile.profession]);
    //These produce internal server error
    // Router.route('admin/users');
    // FlowRouter.go('admin/users');
}
AccountsTemplates.configure({

    postSignUpHook: postSignUp,
    sendVerificationEmail: true,
     enforceEmailVerification:true,
});


Meteor.startup(function () {
    process.env.MAIL_URL = 'smtp://postmaster%40sandbox895f03011a344b548bb893ce0ba518e5.mailgun.org:4866f1547aded17d2ef7a1485d1b4b86@smtp.mailgun.org:587';

});
Meteor.startup(function () {
    smtp = {
        username: 'karlson.lee09',   // eg: server@gentlenode.com
        password: 'mysrilanka',   // eg: 3eeP1gtizk5eziohfervU
        server:   'smtp.gmail.com',  // eg: mail.gandi.net
        port: 465
    }

    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});
Meteor.methods({
    myServerMethod: function(doc) {
        try {
            check(doc, mySchema);
            mySchema.clean(doc);
        }catch(e){
            throw new Meteor.Error(e);
        }

        //do some stuff here and throw a new Meteor.Error if there is a problem
    }});

