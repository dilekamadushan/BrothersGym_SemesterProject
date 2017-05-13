MemberPayments = new Mongo.Collection('memberPayments');

MemberPayments.before.insert(function (userId, doc) {
    let user = Meteor.users.findOne({_id: doc.memberId});
    doc.name = user.profile.firstName;

    let memberProfile = MyProfiles.direct.findOne({memberId: user._id});
    Meteor.call('addMemberPaymentNotification',memberProfile._id,doc.paymentType);

console.log( "BEFORE ADDING"+memberProfile);
    console.log(memberProfile);
    Meteor.call('updateExpiryDate',memberProfile,user);
});




MemberPayments.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function(userId,doc){
        return !!userId;
    }
});



MemberPaymentSchema = new SimpleSchema({

    name: {
        type: String,

        autoform: {
            type: "hidden"
        }}
        ,

    memberId: {
        type: String,
        optional:false,
        label: 'Member',

        autoform: {
            options: function () {
                let options = [];
                Meteor.users.find({roles:"member"}).forEach(function (element) {
                    options.push({
                        label: element.profile.firstName, value: element._id
                    })
                });
                return options;
            },
    },
    },

    paymentType: {
        optional: true,
        type: String,
        autoform: {
            type: "select-radio",
            options: function() {
                return [{
                    label: "Monthly",
                    value: "monthly"
                }, {
                    label: "Yearly",
                    value: "yearly"
                }, ];
            }
        }
    }

    ,
    inMenu:{
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform:{
            type: "hidden"
        }
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function () {
            return this.userId;
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function () {
            return new Date();
        },
        autoform: {
            type: "hidden"
        },

    }
});

Meteor.methods({
    toggleMenuItemMemberPayment: function(id, currentState){
        MemberPayments.update(id,{
            $set:{
                inMenu: !currentState
            }
        });
    },
    deleteMemberPayment: function(id){
        MemberPayments.remove(id);
    },
    paymentsInAMonth: function(){
        var start = new Date(2017, 2, 1);
        console.log("here is the start date",start);

        var end = new Date(2017, 2, 30);
        console.log("here is the end date",end);

         let f= MemberPayments.find({createdAt: {$gte: start, $lt: end}}).count();
            g=MemberPayments.find().count();
        console.log("here is the number in collection",f);

    return  f;


    },

});

MemberPayments.attachSchema(MemberPaymentSchema);