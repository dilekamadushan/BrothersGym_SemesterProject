/**
 * Created by Dileka on 4/9/2017.
 */


/**
 * create namespace, in my case I am using
 * Radiegtya as my meteor username/module, and
 * ChatController for my controllername
 */
Namespace('Radiegtya.OneToOneChatController');

/**
 * our controller extends Meteoris.Controller to get the inheritance method
 * from Meteoris.Controller which is very useful, and reusable
 */
Radiegtya.OneToOneChatController = Meteoris.Controller.extend({
    /*
     * for now we are Hard coded the channel id to general
     * you can change this later by Flow Router uri/query parameter or Session
     * as you wish
     */
    //channelId: "",
    /*
     * passing data to index helpers template
     * because our template has index suffix
     */
    index: function() {
        var models = this.getAll();
        return {
            isEmpty: models.count() === 0 ? true : false,
            models: models,
        };
    },
    /* action getAll data from Chat collection */
    getAll: function() {
        return Radiegtya.Chat.find(this.getCriteria(), this.getSortLimit());
    },
    /* get sortLimit for limit & sorting collection */
    getSortLimit: function() {
        //sort by createdAt ascending
        var sort = {
            sort: {
                'createdAt': 1
            }
        };
        //set limit message to 100 (hardcoded for now)
        sort.limit = 100;
        return sort;
    },
    /*
     * get criteria for searching collection
     * we are giving channelId as general (hardcoded)
     */
    getCriteria: function() {
        var criteria = {channelId: "LqtvAWqqJjrMwDkC"};
        return criteria;
    },
    /* private get user input docs */
    _getDoc: function(t,_id) {
        console.log(_id)
        return {
           // channelId: _id.toString,
            channelId: "LqtvAWqqJjrMwDkC",   //insert channelId from hardcoded value
            message: t.find('#message').value, //find message value from t/from user input


        };
    },
    /* action inserting data/sending message in this case */
    post: function(t,_id) {
        var doc = this._getDoc(t,_id);

        Radiegtya.Chat.insert(doc, function(err, _id) {
            if (err) {
                Meteoris.Flash.set('danger', err.message);
                throw new Meteor.Error(err);
            }
            //using meteoris Flash to show Toast/Flash message
            Meteoris.Flash.set('success', "Message Sent!");

            //empty the value of message text
            t.find('#message').value = "";
        });
    },
});
