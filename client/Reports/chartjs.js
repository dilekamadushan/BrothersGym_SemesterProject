
Template.charts.helpers({
    paymentCount: function() {
        var start = new Date(2017, 2, 1);
        console.log("here is the start date",start);

        var end = new Date(2017, 2, 31);
        console.log("here is the end date",end);

       let f= MemberPayments.find({createdAt: {$gte: start, $lt: end}}).count();
        //let f= MemberPayments.find().count();
        return f;
    },
    createChart: function () {

        chart = {
            target: 'chart4',
            type: 'BarChart',
            columns: [
                ['string', 'Topping'],
                ['number', 'Slices']
            ],
            rows: [
                ['Mushrooms',],
                ['Onions', 1],
                ['Olives', 1],
                ['Zucchini', 1],
                ['Pepperoni', 2]
            ],
            options: {
                'title':'How Much Pizza I Ate Last Night',
                'width':400,
                'height':300
            }
        };
        drawChart(chart);
    }
});

Template.charts.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('memberPayments');

    });
});

Template.charts.onRendered(function () {


    chart = {
        target: 'chart1',
        type: 'BarChart',
        columns: [
            ['string', 'Topping'],
            ['number', 'Slices']
        ],
        rows: [
            ['Mushrooms', 4],
            ['Onions', 1],
            ['Olives', 1],
            ['Zucchini', 1],
            ['Pepperoni', 2]
        ],
        options: {
            'title':'How Much Pizza I Ate Last Night',
            'width':400,
            'height':300
        }
    };

    drawChart(chart);
    chart = {
        target: 'chart3',
        type: 'BarChart',
        columns: [
            ['string', 'Topping'],
            ['number', 'Slices']
        ],
        rows: [
            ['Mushrooms', 10],
            ['Onions', 1],
            ['Olives', 8],
            ['Zucchini', 1],
            ['Pepperoni', 2]
        ],
        options: {
            'title':'How Much Chocolate',
            'width':400,
            'height':300
        }
    };

    drawChart(chart);

    chart2 = {
        target: 'chart2',
        type: 'Map',
        data: [
            ['Country', 'Population'],
            ['China', 'China: 1,363,800,000'],
            ['India', 'India: 1,242,620,000'],
            ['US', 'US: 317,842,000'],
            ['Indonesia', 'Indonesia: 247,424,598'],
            ['Brazil', 'Brazil: 201,032,714'],
            ['Pakistan', 'Pakistan: 186,134,000'],
            ['Nigeria', 'Nigeria: 173,615,000'],
            ['Bangladesh', 'Bangladesh: 152,518,015'],
            ['Russia', 'Russia: 146,019,512'],
            ['Japan', 'Japan: 127,120,000']
        ]
    };

    drawChart(chart2);









})
