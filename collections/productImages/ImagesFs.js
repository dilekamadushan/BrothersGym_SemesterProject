

// Images = new FS.Collection("images", {
//     stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
// });
//
//
// Images.allow({
//     'insert': function (userId,doc) {
//         // add custom authentication code here
//         return true;
//     },
//     'update': function (userId,doc) {
//         return true;
//     },
//     'download': function (userId) {
//         return true;
//     }
// });
Images = new FS.Collection("images", {
    stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});

// Images.allow({
//     download: function () {
//         return true;
//     },
//     fetch: null
// });
Images.allow({
    'insert': function (userId,doc) {
        // add custom authentication code here
        return true;
    },
    'update': function (userId,doc) {
        return true;
    },
    'download': function (userId) {
        return true;
    }
});