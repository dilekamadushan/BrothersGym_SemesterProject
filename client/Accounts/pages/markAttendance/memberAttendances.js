

Template.memberAttendances.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('memberAttendances');
        self.subscribe('memberUsers');
    });
});

Template.memberAttendances.helpers({
    memberAttendanceRecords: ()=>{
        //console.log(MemberAttendances.find({}, {sort: {createdAt: -1, limit: 1,}}));
        console.log(MemberAttendances.find({}, {sort: {createdAt: -1}, limit: 1}).fetch().pop());
        return MemberAttendances.find({}, {sort: {createdAt: -1}});
        return MemberAttendances.find();


    }
});

Template.memberAttendances.events({
    'click .new-memberAttendance': () => {
        Session.set('newMemberAttendance', true);
    }
})
