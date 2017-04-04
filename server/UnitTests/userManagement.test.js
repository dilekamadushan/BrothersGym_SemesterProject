import {resetDatabase} from 'meteor/xolvio:cleaner';

describe('ExpiryDateCalculation', function () {
    it('method updates the ExpiryDate', function () {
        beforeEach(function () {
            resetDatabase();
        });

        let user = Meteor.users.findOne({_id: "EsukoTLGwnrRCx7js"});


        let memberProfile = MyProfiles.direct.findOne({memberId: user._id});
        Meteor.call('updateExpiryDate',memberProfile,user);



    })
});

describe('AssignSchedule', function () {
    it('method assigns nmember schedules', function () {
        beforeEach(function () {
            resetDatabase();
                              });
        Meteor.apply('toggleAssignItem',"EsukoTLGwnrRCx7js",false);
    })
});

describe('ToggleMemberPrescence', function () {
    it('method marks member Prescence', function () {
        beforeEach(function () {
            resetDatabase();
        });
        Meteor.apply('togglePresentMemberAttendance',"EsukoTLGwnrRCx7js",false);
    })
});