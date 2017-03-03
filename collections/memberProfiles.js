

MemberProfiles = new Mongo.Collection('memberProfiles');

MemberProfiles.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function(userId,doc){
        return !!userId;
    }
});


MemberProfileSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    phone: {
        type: String,
        optional: true
    },
    address: {
        type: Object
    },
    'address.street': {
        type: String
    },
    'address.street2': {
        type: String,
        optional: true
    },
    'address.city': {
        type: String
    },
    'address.state': {
        type: String,
        allowedValues: ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],
        autoform: {
            afFieldInput: {
                firstOption: "(Select a State)"
            }
        }
    },
    'address.postalCode': {
        type: String,
        label: "ZIP"
    },
    contacts: {
        type: Array,
        optional: true
    },
    'contacts.$': {
        type: Object
    },
    'contacts.$.name': {
        type: String
    },
    'contacts.$.phone': {
        type: String
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function () {

            return new Date();
        },
        autoform: {
            type: "hidden"
        }
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
    },
});

Meteor.methods({
    deleteMemberProfile: function(id){
       MemberProfiles.remove(id);
    }
});

MemberProfiles.attachSchema(MemberProfileSchema);
