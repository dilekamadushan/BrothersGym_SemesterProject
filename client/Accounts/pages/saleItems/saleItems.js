

Template.SaleItems.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('saleItems');
        self.subscribe('images');
    });
});

Template.SaleItems.helpers({
    saleItems: ()=>{
        return SaleItems.find({});
        //return SaleItems.find({}, {sort: {createdAt: -1}});
    }
});

Template.SaleItems.events({
    'click .new-recipe': () => {
        Session.set('newSaleItem', true);
    }
})