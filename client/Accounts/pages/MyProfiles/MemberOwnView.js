

Template.MemberOwnView.onCreated(function () {

    this.editMode = new ReactiveVar (false );
    console.log("this is editMode"+this.editMode);
    var self = this;
    console.log(Router.current().params._id);
    self.autorun(function () {
        self.subscribe('myOwnView',Router.current().params._id);
        self.subscribe('memberAttendances');
        self.subscribe('FitnessClasses');
    });
});



Template.MemberOwnView.helpers({

    profile: ()=> {

        return MyProfiles.findOne({memberId:Router.current().params._id});
    }


});
Template.MemberOwnView.helpers({
    updateMyProfileOwnId:function (){

        let p= MyProfiles.findOne({memberId:Router.current().params._id});
        console.log("autosaveId"+p._id);
        return p._id;
    },

    editMorde: function(){
        return Template.instance().editMode.get();
    },
    calculateExpiry:function(){
        console.log("this is the memberProfile");
        console.log(this);
        let p= MyProfiles.findOne({memberId:Router.current().params._id});

        console.log("this the profile id  " +p._id);
        console.log("this is the the last memberAttendance");
        //memberId:this._id

        let memberAttendance=MemberAttendances.find({memberId:p.memberId}, {sort: {createdAt: -1}, limit: 1}).fetch().pop()
        if (memberAttendance){
            console.log(memberAttendance);
            console.log("this is the flag");
            let flag = moment(p.expiryDate).isAfter(memberAttendance.createdAt);
            console.log(flag);
            return !flag;
        }
        else {
            let flag = moment(p.expiryDate).isAfter(new Date());
            return !flag;
        }

    }

});
Template.MemberOwnView.events({
    'click .toggle-menu': function(){
        console.log('click');
        //Meteor.call('toggleMenuItemMyProfile', Router.current().params._id, this.inMenu);
    },
    'click .fa-trash' :function() {
        Meteor.call('deleteMyProfile', p._id);

    },
    'click .fa-pencil' :function(event, template) {
        //Session.set('editMode', !Session.get('editMode'));
        template.editMode.set( !template.editMode.get());
        Session.set('newMyProfile',false);
    }
});


