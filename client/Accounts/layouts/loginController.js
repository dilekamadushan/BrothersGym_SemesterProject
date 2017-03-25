Template.login_controller_layout.helpers({



    goMemberPage:function () {

        console.log('printed');
        Router.go('memberWelcome');

    },
    goAdminPage:function () {

        console.log('printed');
        Router.go('adminWelcome');

    }, goTrainerPage:function () {

        console.log('printed');
        Router.go('trainerWelcome');

    },
    goOfficerPage:function () {

        console.log('printed');
        Router.go('officerWelcome');

    }
})