//
//
// MemberProfiles = new Mongo.Collection('memberProfiles');
// MemberProfiles.before.insert(function (userId, doc) {
//     let user= Meteor.users.findOne({_id:doc.profile});
//
//     doc.name = user.profile.firstName;
// });
//
// MemberProfiles.allow({
//     insert: function (userId, doc) {
//         return !!userId;
//     },
//     update: function(userId,doc){
//         return !!userId;
//     }
// });
//
//
// MemberProfileSchema = new SimpleSchema({
//     profile: {
//         type: String,
//         optional:true,
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
//                 }
//              ,
//         },
//     },
//     name: {
//         type: String,
//
//
//         autoform: {
//             type: "hidden"
//         },
//
//     },
//     // phone: {
//     //     type: String,
//     //     optional: true
//     // },
//     // address: {
//     //     type: Object
//     // },
//     // 'address.street': {
//     //     type: String
//     // },
//     // 'address.street2': {
//     //     type: String,
//     //     optional: true
//     // },
//     // 'address.city': {
//     //     type: String
//     // },
//     // 'address.state': {
//     //     type: String,
//     //     allowedValues: ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],
//     //     autoform: {
//     //         afFieldInput: {
//     //             firstOption: "(Select a State)"
//     //         }
//     //     }
//     // },
//     // 'address.postalCode': {
//     //     type: String,
//     //     label: "ZIP"
//     // },
//     // contacts: {
//     //     type: Array,
//     //     optional: true
//     // },
//     // 'contacts.$': {
//     //     type: Object
//     // },
//     // 'contacts.$.name': {
//     //     type: String
//     // },
//     // 'contacts.$.phone': {
//     //     type: String
//     // },
//     expiryDate: {
//         type: Date,
//
//         // autoValue: function () {
//         //
//         //     return  moment().toDate();
//         //    // return Date.now();
//         // },
//         defaultValue:function () {
//             return new Date();
//         },
//
//
//         autoform: {
//             type: "hidden"
//         }
//     },
//
//     createdAt: {
//         type: Date,
//         label: "Created At",
//         defaultValue:function () {
//             return new Date();
//         },
//         // autoValue: function () {
//         //
//         //     return new Date();
//         // },
//         autoform: {
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
//     inMenu:{
//         type: Boolean,
//         defaultValue: false,
//         optional: true,
//         autoform:{
//             type: "hidden"
//         }
//     }
// });
//
// Meteor.methods({
//
//     toggleMenuItemMemberProfile: function(id, currentState){
//         MemberProfiles.update(id,{
//             $set:{
//                 inMenu: !currentState
//             }
//         });
//     },
//
//     deleteMemberProfile: function(id){
//        MemberProfiles.remove(id);
//     },
//     // updateExpiryDate:function(memberProfile,user){
//     //
//     //     if (memberProfile) {
//     //         if (!memberProfile.expiryDate) {
//     //             console.log("expiryDate was not previously set!");
//     //         } else {
//     //             MemberProfiles.update(memberProfile._id, {
//     //                 $set: {
//     //                    // name:"Dileka"
//     //                     expiryDate: moment(memberProfile.expiryDate).add(31, 'days').toDate()
//     //                 }
//     //             });
//     //         }
//     //     } else {
//     //         console.log("memberProfile not found");
//     //     }
//     //     let memberProfile2 = MemberProfiles.direct.findOne({profile: user._id});
//     //     console.log( "aFTER aDDING"+memberProfile2);
//     //     console.log(memberProfile2);
//     //
//     // }
// });
//
// MemberProfiles.attachSchema(MemberProfileSchema);
