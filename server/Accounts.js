var postSignUp =function(userId, info){
    console.log(userId);
    console.log(info.profile.profession);
    Roles.addUsersToRoles(userId,[info.profile.profession]);
    Router.route('admin/users');
    FlowRouter.go('admin/users');
}
AccountsTemplates.configure({
    postSignUpHook: postSignUp,
    // sendVerificationEmail: true,
    // enforceEmailVerification:true,
});
