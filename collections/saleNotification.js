SaleNotifications = new Mongo.Collection('saleNotification');
SaleNotifications.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function(userId,doc){
        return !!userId;
    }
});

Meteor.methods({
    addNotification: function(id,name,price){
        console.log("im in notification")
        SaleNotifications.insert({ saleItemId: id, payment: name,name: price,buyerId:this.userId});
    },

});