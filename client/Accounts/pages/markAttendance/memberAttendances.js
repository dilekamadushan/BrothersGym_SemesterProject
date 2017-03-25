

Template.memberAttendances.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('memberAttendances');
    });
});

Template.memberAttendances.helpers({
    memberAttendanceRecords: ()=>{
        //console.log(MemberAttendances.find({}, {sort: {createdAt: -1, limit: 1,}}));
        console.log(MemberAttendances.find({}, {sort: {createdAt: -1}, limit: 1}).fetch().pop());
        return MemberAttendances.find();


    }
});

Template.memberAttendances.events({
    'click .new-myProfile': () => {
        Session.set('newMyProfile', true);
    }
})
