MyProfiles = new Mongo.Collection('myProfiles');
MyProfiles.before.insert(function (userId, doc) {
    let user= Meteor.users.findOne({_id:doc.memberId});

    doc.name = user.profile.firstName;
    Meteor.call('addNewMemberNotification',doc._id,doc.name);
});


MyProfiles.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function(userId,doc){
        return !!userId;
    }
});



MyProfileSchema = new SimpleSchema({

    name: {
        type: String,

        autoform: {
            type: "hidden"
        }}
    ,

    memberId: {
        type: String,
        optional:false,
        unique:true,
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
    picture: {
        type: String,
        label: "Picture Link",
        optional:true,
        autoform: {
            //label: false,
            placeholder: "schemaLabel"
        },

       },


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
    expiryDate: {
        type: Date,

        defaultValue:function () {
            return new Date();
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
    toggleMenuItemMyProfile: function(id, currentState){
        MyProfiles.update(id,{
            $set:{
                inMenu: !currentState
            }
        });
    },
    deleteMyProfile: function(id){
        MyProfiles.remove(id);
    },
    updateExpiryDate:function(memberProfile,user){

        if (memberProfile) {
            if (!memberProfile.expiryDate) {
                console.log("expiryDate was not previously set!");
            } else {
                MyProfiles.update(memberProfile._id, {
                    $set: {
                        // name:"Dileka"
                        expiryDate: moment(memberProfile.expiryDate).add(31, 'days').toDate()
                    }
                });
            }
        } else {
            console.log("memberProfile not found");
        }
        let memberProfile2 = MyProfiles.direct.findOne({memberId: user._id});
        console.log( "aFTER aDDING"+memberProfile2);
        console.log(memberProfile2);

    }

});


MyProfiles.search = function(query) {
    return MyProfiles.find({
        name: { $regex: RegExp.escape(query), $options: 'i' }
    }, {
        limit: 20
    });
};
MyProfiles.attachSchema(MyProfileSchema);