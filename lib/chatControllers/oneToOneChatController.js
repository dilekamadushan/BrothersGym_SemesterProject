/**
 * Created by Dileka on 4/9/2017.
 */


/**
 * create namespace, in my case I am using
 * Radiegtya as my meteor username/module, and
 * ChatController for my controllername
 */
Namespace('OneToOne.ChatController');

/**
 * our controller extends Meteoris.Controller to get the inheritance method
 * from Meteoris.Controller which is very useful, and reusable
 */
OneToOne.ChatController = Meteoris.Controller.extend({
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
    index: function(id1,id2) {
        var models = this.getAll(id1,id2);
        return {
            isEmpty: models.count() === 0 ? true : false,
            models: models,
        };
    },
    /* action getAll data from Chat collection */
    getAll: function(id1,id2) {
       // return OneToOneChat.find(this.getCriteria(id1,id2), this.getSortLimit());
        return OneToOneChat.find(

            {
                $and : [
                    { $or : [ { channelId1 :id1 }, { channelId1: id2 } ] },
                    { $or : [ { channelId2 :id1 }, { channelId2: id2 } ] }
                ]
            }

            , this.getSortLimit())
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
    getCriteria: function(id1,id2) {
        var criteria = {channelId: [id1,id2]};
        return criteria;
    },
    /* private get user input docs */
    _getDoc: function(t,id1,id2) {

        return {

            channelId1: id1,
            //insert channelId from hardcoded value
            channelId2: id2,
            message: t.find('#message').value, //find message value from t/from user input


        };
    },
    /* action inserting data/sending message in this case */
    post: function(t,_id1,id2) {
        var doc = this._getDoc(t,_id1,id2);

        OneToOneChat.insert(doc, function(err,id2) {
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
