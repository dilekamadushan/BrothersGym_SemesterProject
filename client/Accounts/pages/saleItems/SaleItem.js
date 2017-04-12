Template.Schedule.onCreated(function(){
    this.editMode = new ReactiveVar (false );
    // this.editMode = new ReactiveVar ( );
    // this.editMode.set(false);
    //self.subscribe('images');

});



Template.SaleItem.helpers({
    updateSaleItemId:function (){
        return this._id;
    },

    editMorde: function(){
        return Template.instance().editMode.get();
    },
    // images:function () {
    //     return Images.find({_id:this.fileId})
    //
    //
    // }

});



Template.SaleItem.events({
    'click .toggle-menu': function(){
        console.log('click');
        Meteor.call('toggleSaleItem', this._id, this.inMenu);
    },
    'click .fa-trash' :function() {
        if(confirm("delete")){
            Meteor.call('deleteSaleItem', this._id);
        }


    },
    'click .fa-pencil' :function(event, template) {
        //Session.set('editMode', !Session.get('editMode'));
        template.editMode.set( !template.editMode.get());
        Session.set('newSaleItem',false);
    }
});
