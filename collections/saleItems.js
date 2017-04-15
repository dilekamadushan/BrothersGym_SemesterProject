// SaleItems = new Mongo.Collection('saleItems');
//
//
// SaleItems.allow({
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
// SaleItemSchema = new SimpleSchema({
//     title: {
//         type: String,
//         label: "Title"
//     },
//     desc: {
//         type: String,
//         label: "Description"
//     },
//     picture:{
//         type: String,
//         autoform:{
//             type: 'fileUpload',
//             collection: 'Images',
//             label: 'Choose file',
//
//         },
//
//
//     }
//
//
//
//     ,
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
//         }
//     }
// });
//
// Meteor.methods({
//     toggleSaleItem: function(id, currentState){
//         SaleItems.update(id,{
//             $set:{
//                 inMenu: !currentState
//             }
//         });
//     },
//     deleteSaleItem: function(id){
//         SaleItems.remove(id);
//     },
//
// });
//
// SaleItems.attachSchema(SaleItemSchema);


SaleItems = new Mongo.Collection("saleItems");
SaleItems.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function(userId,doc){
        return !!userId;
    }
});
mySchema = new SimpleSchema({
    name: {
        type: String
    },
    description:{
       type: String
    },
    price:{
        type:Number,
        label: "Price",
        // autoform: {
        //     type:number,
        // }

    },
    fileId: {
        type: String,
        autoform: {
            afFieldInput: {
                type: "cfs-file",
                collection: "images"
            }
        }
    }
})
SaleItems.attachSchema(mySchema);












