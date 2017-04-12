// /**
//  * Created by Dileka on 4/10/2017.
//  */
// jQuery(function ($) {
//     var data1 = [12, 3, 4, 2, 12, 3, 4, 17, 22, 34, 54, 67];
//     var data2 = [3, 9, 12, 14, 22, 32, 45, 12, 67, 45, 55, 7];
//     var data3 = [23, 19, 11, 134, 242, 352, 435, 22, 637, 445, 555, 57];
//
//     $("#chart1").shieldChart({
//         exportOptions: {
//             image: false,
//             print: false
//         },
//         axisY: {
//             title: {
//                 text: "Break-Down for selected quarter"
//             }
//         },
//         dataSeries: [{
//             seriesType: "bar",
//             data: data1
//         }]
//     });
//
//     $("#chart2").shieldChart({
//         exportOptions: {
//             image: false,
//             print: false
//         },
//         axisY: {
//             title: {
//                 text: "Break-Down for selected quarter"
//             }
//         },
//         dataSeries: [{
//             seriesType: "bar",
//             data: data2
//         }, {
//             seriesType: "bar",
//             data: data3
//         }]
//     });
// });
$(document).ready(function() {
    $.getScript('http://www.chartjs.org/assets/Chart.js',function(){

        var data = {
            labels : ["January","February","March","April","May","June","July"],
            datasets : [
                {
                    fillColor : "rgba(220,220,220,0.5)",
                    strokeColor : "rgba(220,220,220,1)",
                    pointColor : "rgba(220,220,220,1)",
                    pointStrokeColor : "#fff",
                    data : [65,59,90,81,56,55,40]
                },
                {
                    fillColor : "rgba(151,187,205,0.5)",
                    strokeColor : "rgba(151,187,205,1)",
                    pointColor : "rgba(151,187,205,1)",
                    pointStrokeColor : "#fff",
                    data : [28,48,40,19,96,27,100]
                }
            ]
        }

        var options = {
            animation: true
        };

        //Get the context of the canvas element we want to select
        var c = $('#myChart');
        var ct = c.get(0).getContext('2d');
        var ctx = document.getElementById("myChart").getContext("2d");
        /*********************/
        new Chart(ctx).Bar(data,options);

    })
});