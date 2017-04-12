MemberFeedback = new Mongo.Collection('memberFeedbacks');

MemberFeedback.before.insert(function (userId, doc) {
    // let user = Meteor.users.findOne({_id: doc.memberId});
    // doc.name = user.profile.firstName;
    //
    // let memberProfile = MyProfiles.direct.findOne({memberId: user._id});
    //
    // console.log( "BEFORE ADDING"+memberProfile);
    // console.log(memberProfile);
    // Meteor.call('updateExpiryDate',memberProfile,user);
});

MemberFeedback.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function(userId,doc){
        return !!userId;
    }
});



MemberFeedbackSchema = new SimpleSchema({

    trainerId: {
        type: String,
        optional:true,
        label: 'Trainer',

        autoform: {
            options: function () {
                let options = [];
                Meteor.users.find({roles:"trainer"}).forEach(function (element) {
                    options.push({
                        label: element.profile.firstName, value: element._id
                    })
                });
                return options;
            },
        },
    },
    classId: {
        type: String,
        optional:true,
        label: 'Class',

        autoform: {
            options: function () {
                let options = [];
                FitnessClasses.find({}).forEach(function (element) {
                    options.push({
                        label: element.name, value: element._id
                    })
                });
                return options;
            },
        },
    },

    rating: {
        optional: true,
        type: String,
        autoform: {
            type: "select-radio",
            options: function() {
                return [{
                    label: "1 Star",
                    value: "1"
                }, {
                    label: "2 Star",
                    value: "2"
                },
                    {
                        label: "3 Star",
                        value: "3"
                    }, {
                        label: "4 Star",
                        value: "4"
                    }, {
                        label: "5 Star",
                        value: "5"
                    }];
            }
        }
    }
    ,
    description: {
            type: String,
        optional: false,
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
    toggleMenuMemberFeedback: function(id, currentState){
        MemberFeedback.update(id,{
            $set:{
                inMenu: !currentState
            }
        });
    },
    deleteMemberFeedback: function(id){
        MemberFeedback.remove(id);
    },

});

MemberFeedback.attachSchema(MemberFeedbackSchema);