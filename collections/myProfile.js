// MyProfiles = new Mongo.Collection('myProfiles');
//
//
//
// MyProfiles.allow({
//     insert: function (userId, doc) {
//         return !!userId;
//     },
//     update: function(userId,doc){
//         return !!userId;
//     }
// });
//
//
//
// MyProfileSchema = new SimpleSchema({
//
//     name: {
//         type: String,
//
//         autoform: {
//             type: "hidden"
//         }}
//     ,
//
//     memberId: {
//         type: String,
//         optional:false,
//         label: 'Member',
//         autoform: {
//             options: function () {
//                 if(Roles.userIsInRole(Meteor.userId(),'admin')){
//                     let options = [];
//                     Meteor.users.find({roles:"member"}).forEach(function (element) {
//                         options.push({
//                             label: element.profile.firstName, value: element._id
//                         })
//                     });
//                     return options;
//                 }
//                 else  if(Roles.userIsInRole(Meteor.userId(),'member')){
//                     let options = [];
//                     Meteor.users.find({_id:Meteor.userId()}).forEach(function (element) {
//                         options.push({
//                             label: element.profile.firstName, value: element._id
//                         })
//                     });
//                     return options;
//
//                 }
//             }
//             ,
//         }
//             },
//
//
//     inMenu:{
//         type: Boolean,
//         defaultValue: false,
//         optional: true,
//         autoform:{
//             type: "hidden"
//         }
//     },
//     author: {
//         type: String,
//         label: "Author",
//         autoValue: function () {
//             return this.userId;
//         },
//         autoform: {
//             type: "hidden"
//         }
//     },
//     createdAt: {
//         type: Date,
//         label: "Created At",
//         autoValue: function () {
//             return new Date();
//         },
//         autoform: {
//             type: "hidden"
//         },
//
//     }
// });
//
// Meteor.methods({
//     toggleMenuItemMyProfile: function(id, currentState){
//         MyProfiles.update(id,{
//             $set:{
//                 inMenu: !currentState
//             }
//         });
//     },
//     deleteMyProfile: function(id){
//         MyProfiles.remove(id);
//     },
//
// });
//
// MyProfiles.attachSchema(MyProfileSchema);