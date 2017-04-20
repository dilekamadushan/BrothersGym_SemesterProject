
        Template.charts.helpers({
    paymentCount: function() {
        let February= MemberPayments.find({createdAt: {$gte: new Date(2017, 1, 1), $lt: new Date(2017, 1, 28)}}).count();
       let March= MemberPayments.find({createdAt: {$gte: new Date(2017, 2, 1), $lt: new Date(2017, 2, 31)}}).count();
        let April= MemberPayments.find({createdAt: {$gte: new Date(2017, 3, 1), $lt: new Date(2017, 3, 31)}}).count();
        let May= MemberPayments.find({createdAt: {$gte: new Date(2017, 4, 1), $lt: new Date(2017, 4, 30)}}).count();
        let June= MemberPayments.find({createdAt: {$gte: new Date(2017, 5, 1), $lt: new Date(2017, 5, 31)}}).count();
        let July= MemberPayments.find({createdAt: {$gte: new Date(2017, 6, 1), $lt: new Date(2017, 6, 30)}}).count();
        let August= MemberPayments.find({createdAt: {$gte: new Date(2017, 7, 1), $lt: new Date(2017, 7, 31)}}).count();
        chart = {
            target: 'chart1',
            type: 'BarChart',
            columns: [
                ['string', 'Topping'],
                ['number', 'Slices']
            ],
            rows: [
                ['January', 3],
                ['February', February],
                ['March', March],
                ['April', April],
                ['May', May],
                ['June', June],
                ['July', July],
                ['August', August]
            ],
            options: {
                'title':'Member Payments',
                'width':400,
                'height':300
            }
        };

        drawChart(chart);
        chart = {
            target: 'chart13',
            type: 'BarChart',
            columns: [
                ['string', 'Topping'],
                ['number', 'Slices']
            ],
            rows: [
                ['Mushrooms', 10],
                ['Onions', 1],
                ['Olives', 8],
                ['Zucchini',f],
                ['Pepperoni', 2]
            ],
            options: {
                'title':'How Much Chocolate',
                'width':400,
                'height':300
            }
        };

        drawChart(chart);

        return f;
    }
});

Template.charts.onCreated(function () {
    var self = this;

    self.autorun(function () {
        self.subscribe('memberPayments');
    });



});

Template.charts.onRendered(function () {



})
