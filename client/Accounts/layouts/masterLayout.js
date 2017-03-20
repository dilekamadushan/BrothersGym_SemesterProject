Template.master_layout.helpers({



    goMemberPage:function () {

        console.log('printed');
        Router.go('memberWelcome');

    },
    goAdminPage:function () {

        console.log('printed');
        Router.go('adminWelcome');

    }
})