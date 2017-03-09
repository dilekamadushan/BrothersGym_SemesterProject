MemberPayments = new Mongo.Collection('memberPayments');

MemberPayments.before.insert(function (userId, doc) {
    let user = Meteor.users.findOne({_id: doc.memberId});
    doc.name = user.profile.firstName;

    let memberProfile = MemberProfiles.direct.findOne({profile: user._id});

console.log( "BEFORE ADDING"+memberProfile);
    console.log(memberProfile);



    // let today       =memberProfile.expiryDate;
    // let in_a_day   =new Date(today).setDate(today.getDate()+5);
    //
    // if (memberProfile) {
    //     MemberProfiles.update(memberProfile._id, {
    //         $set: {
    //             expiryDate:in_a_day
    //                 //moment(memberProfile.expiryDate).add(31, 'days').toDate()
    //         }
    //     });
    // } else {
    //     console.log("memberProfile not found");
    // }


    if (memberProfile) {
        if (!memberProfile.expiryDate) {
            console.log("expiryDate was not previously set!");
        } else {
            MemberProfiles.update(memberProfile._id, {
                $set: {
                    expiryDate: moment(memberProfile.expiryDate).add(31, 'days').toDate()
                }
            });
        }
    } else {
        console.log("memberProfile not found");
    }
    let memberProfile2 = MemberProfiles.direct.findOne({profile: user._id});
    console.log( "aFTER aDDING"+memberProfile2);
    console.log(memberProfile2);
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

});

MemberPayments.attachSchema(MemberPaymentSchema);