/**
 * Created by Dileka on 4/9/2017.
 */
/*
 * create a namespace according to your module,
 * in my case is Radiegtya who is my meteor username, and
 * Chat as collection name
 */
Namespace('OneToOneChat');

/*
 * create new mongo collection
 * in my case my collection name will be "radiegtya_chat"
 * this is to avoid crash between another collection name called "chat"
 */
OneToOneChat = new Mongo.Collection("oneToOne_chat");

/*
 * define the schema
 */
var schemas = new SimpleSchema({
    channelId1: {
        type: String,
        label: "Channel",
    },
    channelId2: {
        type: String,
        label: "Channel",
    },
    message: {
        type: String,
        label: "Message",
    },
    /* AUTOVALUE */
    userId: {
        type: String,
        label: "Created by",
        autoValue: function() {
            if (this.isInsert && this.userId)
                return Meteor.user()._id;
        },
        denyUpdate: true,
        optional: true
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            if (this.isInsert)
                return new Date;
        },
        denyUpdate: true,
        optional: true
    }
});
//attach the schema to collection
OneToOneChat.attachSchema(schemas);

/*
 * allow insert for loggedin user which is called group "user"
 * and also allow insert for admin user which is called group "admin"
 * in this tutorial we'll use simple GROUP ROLE functionality
 * you can modify this later if you want to use "userIsInRole" rather than "userIsInGroup"
 */
OneToOneChat.allow({
    // insert: function(userId, doc) {
    // return Meteoris.Role.userIsInGroup("user") || Meteoris.Role.userIsInGroup("admin");

    insert: function (userId,doc) {
        return !!userId;
    },
    update: function(userId,doc){
        return !!userId;
    }

});


/*
 * in meteoris we can use dburles:collection-helper package out of the box
 * so we can get belongsTo relationship easily using this code
 */
OneToOneChat.helpers({
    /* belongsTo relation user */
    user: function() {
        return Meteor.users.findOne(this.userId);
    }
});
