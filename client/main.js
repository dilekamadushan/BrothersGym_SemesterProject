import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


// if (Meteor.isClient) {
//     Template.adminTemplate.helpers({
//         // check if user is an admin
//         isAdminUser: function() {
//             // return Roles.userIsInRole(Meteor.user(), ['admin']);
//             return Roles.userIsInRole(Meteor.userId(),'admin');
//         }
//     })
// }