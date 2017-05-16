
Router.route('/',{
    name:"home",

action: function () {
    BlazeLayout.render('Master',{content: 'HomeIndex'});

}
});
Router.route('/trainers',{
    name:"Trainers",

    action: function () {
        BlazeLayout.render('Master',{content: 'TrainersIndex'});

    }
});
Router.route('/classes',{
    name:"Classes",

    action: function () {
        BlazeLayout.render('Master',{content: 'ClassesIndex'});

    }
});

Router.route('/chat', {
    action: function() {

            BlazeLayout.render('meteoris_themeAdminMain', {content:"oneToOneChat"});








       // BlazeLayout.render('meteoris_themeAdminMain', {content:"radiegtya_chatIndex"});

    }
});

Router.route('/group_chat', {
    action: function() {



        if( Roles.userIsInRole(Meteor.userId(),'member')){

            BlazeLayout.render('MemberMainLayout',{body:'radiegtya_chatIndex'});

        }
        else {

            BlazeLayout.render('meteoris_themeAdminMain', {content:"radiegtya_chatIndex"});

        }

    }

});

Router.route('/services', {

    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');
        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },

    action: function () {


        if( Roles.userIsInRole(Meteor.userId(),'member')){

            BlazeLayout.render('MemberMainLayout',{body:'services'});

        }
        else {

            BlazeLayout.render('master_layout', {body:'services'});

        }
    }


});







Router.route('/chat/member/:_id',{
    action: function() {



       // BlazeLayout.render('meteoris_themeAdminMain', {content:"chatToMember"});

        if( Roles.userIsInRole(Meteor.userId(),'member')){
            let item = this.params._id;
            BlazeLayout.render('MemberMainLayout', {body:"chatToMember",data:item});

        }
        else {

            let item = this.params._id;
            BlazeLayout.render('meteoris_themeAdminMain', {content:"chatToMember",data:item});;

        }

    }
});

Router.route('/login', {
    onBeforeAction: function () {
        $('body').addClass('hold-transition login-page');
        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition login-page');
    },

    action: function () {

        BlazeLayout.render('login_controller_layout');
    }
});
Router.route('/login_admin', {
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');
        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    name:"adminWelcome",

    action: function () {
        BlazeLayout.render('master_layout',{body:'LandingPage'});
    }
});

Router.route('/reports', {
    onBeforeAction: function () {+

        $('body').addClass('hold-transition skin-blue sidebar-mini');
        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    // name:"adminWelcome",

    action: function () {

        //BlazeLayout.render('master_layout',{body:'charts'});
        BlazeLayout.render('master_layout',{body:'report_satisfaction'});

    }
});

Router.route('/reports2', {
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');

        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    // name:"adminWelcome",

    action: function () {

        BlazeLayout.render('master_layout',{body:'report_satisfaction'});
    }
});
Router.route('/notifications', {
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');
        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    // name:"adminWelcome",

    action: function () {

        if( Roles.userIsInRole(Meteor.userId(),'member')){

            BlazeLayout.render('MemberMainLayout',{body:'Notifications'});

        }
        else {

            BlazeLayout.render('master_layout', {body:'Notifications'});

        }
    }
});













Router.route('/login/trainer', {
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');
        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    name:"trainerWelcome",

    action: function () {

        BlazeLayout.render('master_layout',{body:'LandingPage'});
    }
});
Router.route('/login/officer', {
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');
        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    name:"officerWelcome",

    action: function () {

        BlazeLayout.render('master_layout',{body:'LandingPage'});
    }
});

Router.route('/login/member',{
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');

        this.next();
    },
    name:'memberWelcome',

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {
        // functionvar item=Meteor.users.findOne({_id:this.params._id});
        BlazeLayout.render('MemberMainLayout',{body:'LandingPage'});

    }
});



//hold-transition skin-blue sidebar-mini
Router.route('/editUser',{
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');
        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {

       // BlazeLayout.render('master_layout');

        if( Roles.userIsInRole(Meteor.userId(),'admin')){

            BlazeLayout.render('master_layout',{body:'Users',dashboard:'UserDashboard',pageHeader:'EditUserHeader'});

        }
        else {
            Router.go('home');

           // BlazeLayout.render('master_layout', {body:'Notifications'});

        }
    }
});
Router.route('/addUser',{
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');
        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {

        // BlazeLayout.render('master_layout');

        if( Roles.userIsInRole(Meteor.userId(),'admin')){

            BlazeLayout.render('master_layout',{body:'AddUser',dashboard:'UserDashboard',pageHeader:'AddUserHeader'});

        }
        else {
            Router.go('home');

            // BlazeLayout.render('master_layout', {body:'Notifications'});

        }
    }
});
Router.route('/addMember',{
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');
        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {

        // BlazeLayout.render('master_layout');


        if( Roles.userIsInRole(Meteor.userId(),'admin')){

            BlazeLayout.render('master_layout',{body:'AddMember'});

        }
        else if( Roles.userIsInRole(Meteor.userId(),'officer')){
            BlazeLayout.render('master_layout',{body:'AddMember'});
        }
        else{
            Router.go('home');
        }


            // BlazeLayout.render('master_layout', {body:'Notifications'});


    }
});
Router.route('/addMemberProfile',{
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');

        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {

       // BlazeLayout.render('adminLayout',{body:'NewMemberProfile'});
        // BlazeLayout.render('master_layout');



        if( Roles.userIsInRole(Meteor.userId(),'admin')){

            BlazeLayout.render('master_layout',{body:'NewMemberProfile'});

        }
        else if( Roles.userIsInRole(Meteor.userId(),'officer')){
            BlazeLayout.render('master_layout',{body:'NewMemberProfile'});
        }
        else{
            Router.go('home');
        }
    }
});
Router.route('/viewMemberProfile',{
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');

        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {
        if( Roles.userIsInRole(Meteor.userId(),'member')){
            BlazeLayout.render('MemberMainLayout',{body:'MyProfiles'});
        }
        else{
            BlazeLayout.render('master_layout',{body:'MyProfiles'});
        }

        // BlazeLayout.render('master_layout');
    }
});
Router.route('/viewMemberProfile/:_id',{
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');

        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {
        var profile=this.params._id;
        if( Roles.userIsInRole(Meteor.userId(),'member')){
            BlazeLayout.render('MemberMainLayout',{body:'MyProfileSingle',data:profile});
        }
        else{
            BlazeLayout.render('master_layout',{body:'MyProfileSingle',data:profile});
        }

    }
});

Router.route('/saleItems',{
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');

        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {
        if (Roles.userIsInRole(Meteor.userId(), 'member')) {

            BlazeLayout.render('MemberMainLayout', {body: 'SaleItems'});

        }
        else {

            BlazeLayout.render('master_layout', {body: 'SaleItems'});


        }
    }
});



















Router.route('/memberFeedback',{
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');

        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {
        if( Roles.userIsInRole(Meteor.userId(),'member')){
            BlazeLayout.render('MemberMainLayout',{body:'MemberFeedbacks'});
        }
        else{
            BlazeLayout.render('master_layout',{body:'MemberFeedbacks'});
        }

        // BlazeLayout.render('master_layout');
    }
});










// Router.route('/markAttendance',{
//     onBeforeAction: function () {
//         $('body').addClass('hold-transition skin-blue sidebar-mini');
//
//         this.next();
//     },
//
//     onStop: function () {
//         $('body').removeClass('hold-transition skin-blue sidebar-mini');
//     },
//     action: function () {
//         if( Roles.userIsInRole(Meteor.userId(),'officer')){
//             console.log("here in correct route");
//             BlazeLayout.render('master_layout',{body:'markAttendance'});
//         }
//         BlazeLayout.render('master_layout',{body:'markAttendance'});
//
//         // BlazeLayout.render('master_layout');
//     }
// });

Router.route('/viewAttendance',{
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');

        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {

        if( Roles.userIsInRole(Meteor.userId(),'member')){

            BlazeLayout.render('MemberMainLayout',{body:'memberAttendances'});
        }
        else{
            BlazeLayout.render('master_layout',{body:'memberAttendances'});
        }

        // BlazeLayout.render('master_layout');
    }
});











Router.route('/viewSchedule',{
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');

        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {
        if( Roles.userIsInRole(Meteor.userId(),'member')){
            console.log("here in correct route");
            BlazeLayout.render('MemberMainLayout',{body:'Schedules'});
        }
        else{
            BlazeLayout.render('master_layout',{body:'Schedules'});
        }
    }
});
Router.route('/fitnessClasses',{
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');

        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {

        if( Roles.userIsInRole(Meteor.userId(),'member')){
            BlazeLayout.render('MemberMainLayout',{body:'FitnessClasses'});
        }
        else{
            BlazeLayout.render('master_layout',{body:'FitnessClasses'});
        }


    }
});

//
//
// Router.route('/admin/editUser/:_id',{
//     onBeforeAction: function () {
//         $('body').addClass('hold-transition skin-blue sidebar-mini');
//
//         this.next();
//     },
//
//     onStop: function () {
//         $('body').removeClass('hold-transition skin-blue sidebar-mini');
//     },
//     action: function () {
//         var item=Meteor.users.findOne({_id:this.params._id});
//       BlazeLayout.render('master_layout',{body:'EditUser',data:item});
//
//     }
// });

Router.route('/manageUsers',{
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');

        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {



        if( Roles.userIsInRole(Meteor.userId(),'admin')){
            BlazeLayout.render('master_layout',{dashboard:'UserDashboard'});
        }
        else{
           Router.go('home');
        }

    }
});
Router.route('/memberPayments',{
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');

        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {

        if( Roles.userIsInRole(Meteor.userId(),'admin')){
            BlazeLayout.render('master_layout',{body:'MemberPayments'});
        }
        else if( Roles.userIsInRole(Meteor.userId(),'officer')){
            BlazeLayout.render('master_layout',{body:'MemberPayments'});
        }
        else if( Roles.userIsInRole(Meteor.userId(),'member')){
            BlazeLayout.render('MemberMainLayout',{body:'MemberPayments'});
        }
        else{
            Router.go('home');
        }
    }
});