

Template.trainer_side_bar.events({


    // 'click .addMember': function () {
    //
    //     Session.set('newMember',true)
    //
    //     var std=Session.get('newMember');
    //     console.log(std);
    //     AccountsTemplates.addFields([
    //
    //         {
    //             _id:'member',
    //             type:'select',
    //             displayName:'Member',
    //             select:[
    //                 {
    //                     text:'member1',
    //                     value:'developer'
    //                 },{
    //                     text:'member2',
    //                     value:'designer'
    //                 }
    //             ]
    //         }
    //
    //
    //
    //     ]);
    //
    //
    //
    // }
    // ,
    // 'click .deleteMemberSession': function () {
    //
    //     Session.set('newMember',false)
    //
    //
    //     AccountsTemplates.init();
    //
    //
    //
    //
    // }
});
Template.trainer_side_bar.helpers({
    getUserName:function(){
        return currentUser.profile.firstName;
    },  firstName: function() {
        return Meteor.user().profile.firstName;
    }
});