
Router.route('/',{

action: function () {
    BlazeLayout.render('Master',{content: 'HomeIndex'});

}
});


//
//
// FlowRouter.route('/trainers',{
//     name: 'viewTrainers',
//     action(){
//        // BlazeLayout.render('Master');
//
//         // GAnalytics.pageview();
//        BlazeLayout.render('Master',{content: 'TrainersIndex'});
//     }
// });
// FlowRouter.route('/login',{
//     name: 'login',
//
//         action() {
//             BlazeLayout.render("AppLayout");
//         }
//
// });
//
// FlowRouter.route('/dashboard',{
//
//
//     action() {
//         BlazeLayout.render("AppLayout", {main: "Dashboard"});
//     }
//
// });
//
//
//
// var adminRoutes = FlowRouter.group({
//     prefix : '/admin',
//     name:'admin'
// });
//
// adminRoutes.route('/users',{
//     name:'users',
//     action(){
//         BlazeLayout.render("AppLayout",{main:"Users"});
//     }
// })








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




Router.route('/admin/users',{
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');
        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {
        BlazeLayout.render('master_layout',{body:'Users'});
       // BlazeLayout.render('master_layout');
    }
});
Router.route('/admin/adduser',{
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');
        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {
        BlazeLayout.render('master_layout',{body:'AddUser'});
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
        BlazeLayout.render('master_layout',{body:'MemberProfiles'});
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

    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {
        var item=Meteor.users.findOne({_id:this.params._id});
        BlazeLayout.render('master_layout',{body:'NewIngredient'});

    }
});