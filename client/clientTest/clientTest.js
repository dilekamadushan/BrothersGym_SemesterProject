// import {resetDatabase} from 'meteor/xolvio:cleaner';
// import { _ } from 'meteor/underscore';
// import { Template } from 'meteor/templating';
// import { Blaze } from 'meteor/blaze';
// import { Tracker } from 'meteor/tracker';
//
// if (Meteor.isClient) {
//
//
//     describe('ExpiryDateCalculation', function () {
//         it('method updates the ExpiryDate', function () {
//             beforeEach(function () {
//                 resetDatabase();
//             });
//
//             let user = Meteor.users.findOne({_id: "kiWHY4pM6hf958SHR"});
//
//
//             let memberProfile = MyProfiles.direct.findOne({memberId: user._id});
//             Meteor.call('updateExpiryDate',memberProfile,user);
//
//
//
//         })
//     });
//
//     describe('AssignSchedule', function () {
//         it('method assigns nmember schedules', function () {
//             beforeEach(function () {
//                 resetDatabase();
//             });
//             Meteor.apply('toggleAssignItem',"EsukoTLGwnrRCx7js",false);
//         })
//     });
//
//     describe('ToggleMemberPrescence', function () {
//         it('method marks member Prescence', function () {
//             beforeEach(function () {
//                 resetDatabase();
//             });
//             Meteor.apply('togglePresentMemberAttendance',"EsukoTLGwnrRCx7js",false);
//         })
//     });
//
//     };
//
