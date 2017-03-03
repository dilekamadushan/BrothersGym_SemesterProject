

Schedules = new Mongo.Collection('schedules');

Schedules.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function(userId,doc){
        return !!userId;
    }
});


ScheduleSchema = new SimpleSchema({


    contacts: {
        type: Array,
        optional: true
    },
    'contacts.$': {
        type: Object
    },
    'contacts.$.name': {
        type: String,
        allowedValues: ["Dumbbell Squat","Bar Squat","Bench Press","Dumbell Bench Press","Bent Arm Pull","Cross Over","Dumbell Flies","Inclined Press","Tricep Extension","Tricep PushDown","Lying Down Tricep"],
        autoform: {
            afFieldInput: {
                firstOption: "(Select a State)"
            }
        }
    },
    'contacts.$.phone': {
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
