google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(dealerdata);

function dealerdata() {
    d3.csv("assets/dataForSite/exportCsv/metdealer.csv").then(drawVizDealer);
}

function drawVizDealer(rawData) {

    var arr = [
        [
            "Dealer",
            "Frequence"
        ]
    ]
 
    rawData.forEach(function (el) {
        arr.push([
            el.dealer,
            parseInt(el.freq)
        ])
    })

    const metData = arr.sort((a, b) => b[1] - a[1])

    var data = google.visualization.arrayToDataTable(metData.slice(0, 13));

    var options = {
        title: 'Most relevant donors for the creation of MET collection',
        hAxis: {
            title: 'Donor',
            slantedText: true,
            textStyle: {
                'fontSize': 9
            }
        },
        vAxis: {
            title: 'Occurrences in the collection',
            viewWindow: {
                max: 80,
                min: 0
            }
        },
        height: 350,
        width: 1000,
        legend: 'none',
        colors: ['red']
    };
    setTimeout(function() {
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_dealer'));
        chart.draw(data, options);
    }, 400)
}
