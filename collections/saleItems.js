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












