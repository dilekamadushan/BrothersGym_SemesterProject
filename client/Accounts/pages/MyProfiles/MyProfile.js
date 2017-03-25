 Template.MyProfile.onCreated(function(){
     this.editMode = new ReactiveVar (false );
     // this.editMode = new ReactiveVar ( );
     // this.editMode.set(false);


 });

 Template.MyProfile.onCreated(function () {
     var self = this;
     self.autorun(function () {

         self.subscribe('memberAttendances');
     });
 });



 Template.MyProfile.helpers({
   updateMyProfileId:function (){
       return this._id;
   },

   editMorde: function(){
       return Template.instance().editMode.get();
   },
   calculateExpiry:function(){
       console.log("this is the memberProfile");
       console.log(this);
       console.log("this is the the last memberAttendance");
       //memberId:this._id
       console.log("this the profile id  " +this.memberId);
       let memberAttendance=MemberAttendances.find({memberId:this.memberId}, {sort: {createdAt: -1}, limit: 1}).fetch().pop()
       console.log(memberAttendance);
       console.log("this is the flag");
       let flag = moment(this.expiryDate).isAfter(memberAttendance.createdAt);
       console.log(flag);
       return flag;
   }

});



 Template.MyProfile.events({
     'click .toggle-menu': function(){
         console.log('click');
         Meteor.call('toggleMenuItemMyProfile', this._id, this.inMenu);
     },
      'click .fa-trash' :function() {
       Meteor.call('deleteMyProfile', this._id);

   },
    'click .fa-pencil' :function(event, template) {
       //Session.set('editMode', !Session.get('editMode'));
       template.editMode.set( !template.editMode.get());
       Session.set('newMyProfile',false);
    }
 });
