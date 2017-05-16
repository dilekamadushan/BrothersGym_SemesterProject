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
    addSaleNotification: function(id,name,price){
        console.log("im in notification")
        SaleNotifications.insert({ saleItemId: id,type:"Sales", payment: name,name: price,buyerId:this.userId});
    },
    addNewMemberNotification: function(id,name){
        console.log("im in member notification")
        SaleNotifications.insert({ memberId: id,name:name,type:"New Member",author:this.userId, date:new Date()});
    },
    addMemberPaymentNotification: function(id,name){
        console.log("im in notification")
        SaleNotifications.insert({ memberId: id,type:"member Payment", member: name,author:this.userId,date:new Date() });
    }

});