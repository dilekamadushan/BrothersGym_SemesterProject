/**
 * Created by Dileka on 4/9/2017.
 */


/*
 * instantiate the Controller here
 */
var ctrl = new OneToOne.ChatController();

/*
 * subscribe chat from server with criteria from controller and sort limit from controller
 * when template created
 */
Template.chatToMember.onCreated(function() {

    var self = this;
    self.autorun(function() {
        console.log("the logged id",Meteor.userId(), "the receiver id",Router.current().params._id)
        self.subscribe('oneToOneChat',  Router.current().params._id,Meteor.userId(), ctrl.getSortLimit());
    });
});

Template.chatToMember.helpers({
    /* check whether collection empty or not from index method */
    isEmpty: function() {
        return ctrl.index(Router.current().params._id,Meteor.userId()).isEmpty;
    },
    /* get models from index method */
    models: function() {

        return ctrl.index(Router.current().params._id,Meteor.userId()).models;
    },
    /*
     *  use "" chat-message styling
     *  if current message is current logged in user message
     *  else use "right"
     */
    messageClass: function() {
        if (this.userId == Meteor.user()._id)
            return "";
        return "right";
    }
});

Template.chatToMember.events = {
    /* send message using t option from template, to get form value */
    'click #btnSend': function(e, t) {

        e.preventDefault();
        ctrl.post(t,Router.current().params._id,Meteor.userId());
    }
};
