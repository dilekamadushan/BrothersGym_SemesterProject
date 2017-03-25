MemberAttendances = new Mongo.Collection('memberAttendances');
MemberAttendances.before.insert(function (userId, doc) {
    let user = Meteor.users.findOne({_id: doc.memberId});
    doc.name = user.profile.firstName;

    let memberProfile = MyProfiles.direct.findOne({memberId: user._id});
});



MemberAttendances.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function(userId,doc){
        return !!userId;
    }
});



MemberAttendanceSchema = new SimpleSchema({

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
        }}

    ,
    present:{
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
        label: "Preesent Date",
        autoValue: function () {
            //
            //  return new Date();
            return new Date();
        },
        autoform: {
            type: "hidden"
        }
    }
});

Meteor.methods({
    togglePresentMemberAttendance: function(id, currentState){
        MemberAttendances.update(id,{
            $set:{
                present: !currentState
            }
        });
    },
    deleteMemberAttendance: function(id){
        MemberAttendances.remove(id);
    },

});

MemberAttendances.attachSchema(MemberAttendanceSchema);