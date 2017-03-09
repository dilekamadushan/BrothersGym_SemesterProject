Occupations=new Mongo.Collection('occupations');
Occupations.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function(userId,doc){
        return !!userId;
    }
});
OccupationSchema = new SimpleSchema({
    name:{
        type: String

    },

    author: {
        type: String,
        label: "Author",
        autoValue: function () {
            return this.userId;
        },
        autoform: {
            type: "hidden"
        }
    }
});


Occupations.attachSchema(OccupationSchema);

Clients = new Mongo.Collection('clients');
Clients.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function(userId,doc){
        return !!userId;
    }
});
Clients.attachSchema(new SimpleSchema({
    clientName: {
        type: String,
        label: "Mandator Name",
        max: 200
    }
}));
