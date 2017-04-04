FitnessClasses = new Mongo.Collection('fitnessClasses');


FitnessClasses.before.insert(function (userId, doc) {
    let user= Meteor.users.findOne({_id:doc.trainerId});

    doc.trainerName = user.profile.firstName;
});


FitnessClasses.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function(userId,doc){
        return !!userId;
    }
});



MyFitnessClassSchema = new SimpleSchema({

    name: {
        type: String,
        label: 'Class Name',
    },
    trainerName: {
        type: String,
        autoform: {
            type: "hidden"
        }}
    ,

    trainerId: {
        type: String,
        optional:false,
        unique:true,
        label: 'Member',
        autoform: {
            options: function () {
                if(Roles.userIsInRole(Meteor.userId(),'admin')){
                    let options = [];
                    Meteor.users.find({roles:"trainer"}).forEach(function (element) {
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


    active:{
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
        defaultValue:function () {
            return new Date();
        },

        autoform: {
            type: "hidden"
        }
    },


});

Meteor.methods({
    toggleActiveClass: function(id, currentState){
        FitnessClasses.update(id,{
            $set:{
                active: !currentState
            }
        });
    },
    deleteFitnessClass: function(id){
        FitnessClasses.remove(id);
    }

});

FitnessClasses.attachSchema(MyFitnessClassSchema);