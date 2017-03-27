

Schedules = new Mongo.Collection('schedules');
Schedules.before.insert(function (userId, doc) {
    let user= Meteor.users.findOne({_id:doc.memberId});

    doc.name = user.profile.firstName;
});


Schedules.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function(userId,doc){
        return !!userId;
    }
});


ScheduleSchema = new SimpleSchema({
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
                if(Roles.userIsInRole(Meteor.userId(),'admin')){
                    let options = [];
                    Meteor.users.find({roles:"member"}).forEach(function (element) {
                        options.push({
                            label: element.profile.firstName, value: element._id
                        })
                    });
                    return options;
                }
                else  if(Roles.userIsInRole(Meteor.userId(),'member')){
                    let options = [];
                    Meteor.users.find({_id:Meteor.userId()}).forEach(function (element) {
                        options.push({
                            label: element.profile.firstName, value: element._id
                        })
                    });
                    return options;

                }
            }
            ,
        }
    },


    workouts: {
        type: Array,
        optional: true
    },
    'workouts.$': {
        type: Object
    },
    'workouts.$.name': {
        type: String,
        allowedValues: ["Dumbbell Squat","Bar Squat","Bench Press","Dumbell Bench Press","Bent Arm Pull","Cross Over","Dumbell Flies","Inclined Press","Tricep Extension","Tricep PushDown","Lying Down Tricep"],
        autoform: {
            afFieldInput: {
                firstOption: "(Select a State)"
            }
        }
    },
    'workouts.$.repetition': {
        type: String
    },
    inMenu:{
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform:{
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
});

Meteor.methods({
    toggleMenuItem: function(id, currentState){
        Schedules.update(id,{
            $set:{
                inMenu: !currentState
            }
        });
    },
    deleteSchedule: function(id){
        Schedules.remove(id);
    }
});

Schedules.attachSchema(ScheduleSchema);
