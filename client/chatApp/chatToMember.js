/**
 * Created by Dileka on 4/9/2017.
 */


/*
 * instantiate the Controller here
 */
var ctrl = new Radiegtya.OneToOneChatController();

/*
 * subscribe chat from server with criteria from controller and sort limit from controller
 * when template created
 */
Template.chatToMember.onCreated(function() {

    console.log("hi im here",this.data.Id);
    console.log(Template.instance().data)
    var self = this;
    self.autorun(function() {
        self.subscribe('radiegtya_chat',  {channelId:  "LqtvAWqqJjrMwDkC"}, ctrl.getSortLimit());
    });
});

Template.chatToMember.helpers({
    /* check whether collection empty or not from index method */
    isEmpty: function() {
        return ctrl.index().isEmpty;
    },
    /* get models from index method */
    models: function() {
        console.log("in template",this.data.Id);
        console.log(Template.instance().data())
        return ctrl.index().models;
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
        console.log(this.data);
        ctrl.post(t,this.data);
    }
};
