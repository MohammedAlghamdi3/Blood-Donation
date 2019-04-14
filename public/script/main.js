//  Gander
var ctx = document.getElementById("myChart");
var FTA = document.getElementById("bloodFAs").innerHTML;
var FTAB = document.getElementById("bloodFABs").innerHTML;
var FTB = document.getElementById("bloodFBs").innerHTML;
var FTO = document.getElementById("bloodFOs").innerHTML;
var MTA = document.getElementById("bloodMAs").innerHTML;
var MTAB = document.getElementById("bloodMABs").innerHTML;
var MTB = document.getElementById("bloodMBs").innerHTML;
var MTO = document.getElementById("bloodMOs").innerHTML;



var farr = [FTA, FTAB, FTB, FTO]
var marr = [MTA, MTAB, MTB, MTO]

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Male',
            data: marr,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
        }, {
            label: 'Famele',
            data: farr,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',

            // Changes this dataset to become a line
            type: 'bar'
        }],
        labels: ["A", "AB", "B", "O"]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



//  City 

var ctx = document.getElementById("circle");
var riy = document.getElementById("riyadh").innerHTML;
var mak = document.getElementById("makkah").innerHTML;
var Dam = document.getElementById("Dammam").innerHTML;
var med = document.getElementById("Medina").innerHTML;

var valuearr = [riy, mak, Dam, med]

console.log(valuearr);
var circle = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Riyadh", "Makkah", "Dammam", "Maddina"],
        datasets: [{
            label: '# of Votes',
            data: valuearr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


// Horizontal Bar Chart

//line

//var speedCanvas = document.getElementById("line");
var JAN = document.getElementById("bloodDJAN").innerHTML;
var FE = document.getElementById("bloodDFE").innerHTML;
var MARCH = document.getElementById("bloodDMAR").innerHTML;
var APRIL = document.getElementById("bloodDAPR").innerHTML;
var MA = document.getElementById("bloodDMAY").innerHTML;
var JU = document.getElementById("bloodDJUN").innerHTML;
var JULY = document.getElementById("bloodDJULY").innerHTML;
var AUG = document.getElementById("bloodDAUG").innerHTML;
var SEP = document.getElementById("bloodDSEP").innerHTML;
var OCT = document.getElementById("bloodDOCT").innerHTML;
var NOV = document.getElementById("bloodDNOV").innerHTML;
var DEC = document.getElementById("bloodDDEC").innerHTML;
var ctx = document.getElementById("line");

var valuearr = [JAN, FE, MARCH, APRIL, MA, JU, JULY, AUG, SEP, OCT, NOV, DEC]

console.log(valuearr);
var line = new Chart(ctx,
    {
        "type": "line",
        "data":
        {
            "labels": ["january", "Febrauery", "March", "April", "May", "JULY", "Auguest", "septemper", "October", "Novamber", "December"],
            "datasets":
                [{
                    "label": (new Date()).getFullYear(),
                    "data": valuearr,
                    "fill": false,
                    "borderColor": "rgb(75, 192, 192)",
                    "lineTension": 0.1
                }
                ]
        },
        "options": {
            scales: {
                yAxes: [{
                    display: true,
                    stacked: true,
                    ticks: {
                        min: 0, // minimum value

                    }
                }]
            }
        }
    });