
Template.report_satisfaction.onCreated(function () {
    var self = this;
    self.autorun(function () {
        //self.subscribe('rates');
    });

    self.charts = new ReactiveDict();

    self.charts.set("range_pie_chart_options", {
        segmentShowStroke: true,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 50,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        responsive: true,
        maintainAspectRatio: false,
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
        legend: {
            display: true
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    //get the concerned dataset
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    //get the current items value
                    var currentValue = dataset.data[tooltipItem.index];
                    return currentValue + "%";
                }
            }
        }

    });
});

Template.report_satisfaction.helpers({

});

Template.report_satisfaction.events({
    'click #wholeChart': function(event, template){
        event.preventDefault();
         const total = 30

        if(total==0){
            $('#msg').html("No Data Avaliable");
        }else{
            $('#msg').html("");
            veryhappy = Math.round((6/30)*100);
            happy = Math.round((10/30)*100);
            neutral = Math.round((9/total)*100);
            sad = Math.round((5/total)*100);
            angry = Math.round((5/total)*100);
        }

        const PieData = [
            {
                value: veryhappy,
                color: "#00ff00",
                highlight: "#00ff00",
                label: "Very Happy"
            },
            {
                value: happy,
                color: "#00a65a",
                highlight: "#00a65a",
                label: "Happy"
            },
            {
                value: neutral,
                color: "#ffff00",
                highlight: "#ffff00",
                label: "Neutral"
            },
            {
                value: sad,
                color: "#FF1493",
                highlight: "#FF1493",
                label: "Sad"
            },
            {
                value: angry,
                color: "#FF0000",
                highlight: "#FF0000",
                label: "Angry"
            }
        ];

        range_pie_chart.Doughnut(PieData, template.charts.get("range_pie_chart_options"));
    }
});

Template.report_satisfaction.onRendered(function(){
    $('#inputBegin').datepicker({
        autoclose: true
    });

    $('#inputEnd').datepicker({
        autoclose: true
    });

    const pieChartCanvas = $("#pieChart").get(0).getContext("2d");
    range_pie_chart = new Chart(pieChartCanvas);

});
//----

//REPORT SUMMARY
Template.report_summary.onRendered(function(){
    $('#inputBegin').datepicker({
        autoclose: true
    });

    $('#inputEnd').datepicker({
        autoclose: true
    });
});

Template.report_satisfaction.onCreated(function () {
    var self = this;
    self.autorun(function () {
        // self.subscribe('bills');
        // self.subscribe('orders');
    });
});
//----