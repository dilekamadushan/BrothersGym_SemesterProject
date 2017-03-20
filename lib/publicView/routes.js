
Router.route('/',{

action: function () {
    BlazeLayout.render('Master',{content: 'HomeIndex'});

}
});
Router.route('/login', {
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');
        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },

    action: function () {

        BlazeLayout.render('master_layout');
    }
});
// Router.route('/login', {
//     onBeforeAction: function () {
//         $('body').addClass('hold-transition login-page');
//         this.next();
//     },
//
//     onStop: function () {
//         $('body').removeClass('hold-transition login-page');
//     },
//
//     action: function () {
//
//         BlazeLayout.render('master_layout');
//     }
// });
// Router.route('/login/admin', {
//     onBeforeAction: function () {
//         $('body').addClass('hold-transition skin-blue sidebar-mini');
//         this.next();
//     },
//
//     onStop: function () {
//         $('body').removeClass('hold-transition skin-blue sidebar-mini');
//     },
//     name:"adminWelcome",
//
//     action: function () {
//
//         BlazeLayout.render('adminLayout');
//     }
// });



//hold-transition skin-blue sidebar-mini
Router.route('/admin/editUser',{
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');
        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {
        BlazeLayout.render('master_layout',{body:'Users',dashboard:'UserDashboard',pageHeader:'EditUserHeader'});
       // BlazeLayout.render('master_layout');
    }
});
Router.route('/admin/addUser',{
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');
        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {
        BlazeLayout.render('master_layout',{body:'AddUser',dashboard:'UserDashboard',pageHeader:'AddUserHeader'});
        // BlazeLayout.render('master_layout');
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
        BlazeLayout.render('master_layout',{body:'AddMember'});
        // BlazeLayout.render('master_layout');
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
        BlazeLayout.render('master_layout',{body:'NewMemberProfile'});
       // BlazeLayout.render('adminLayout',{body:'NewMemberProfile'});
        // BlazeLayout.render('master_layout');
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
        BlazeLayout.render('master_layout',{body:'MyProfiles'});
        // BlazeLayout.render('master_layout');
    }
});

Router.route('/trainer/newSchedule',{
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');

        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {
        BlazeLayout.render('master_layout',{body:'NewSchedule'});
        // BlazeLayout.render('master_layout');
    }
});


Router.route('/trainer/viewSchedule',{
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');

        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {
        BlazeLayout.render('master_layout',{body:'Schedules'});
        // BlazeLayout.render('master_layout');
    }
});

Router.route('/admin/editUser/:_id',{
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');

        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {
        var item=Meteor.users.findOne({_id:this.params._id});
      BlazeLayout.render('master_layout',{body:'EditUser',data:item});

    }
});
Router.route('/admin/test',{
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
        BlazeLayout.render('MemberMainLayout');

    }
});
Router.route('/admin/manageUsers',{
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');

        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {

        BlazeLayout.render('master_layout',{dashboard:'UserDashboard'});

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
        BlazeLayout.render('master_layout',{body:'MemberPayments'});
        // BlazeLayout.render('master_layout');
    }
});