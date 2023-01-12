google.charts.load('current', {
    'packages': ['corechart']
});

// Ancillary functions

// Ancillary functions

function findOcc(arr, key) {
    let arr2 = [];

    arr.forEach((x) => {

        // Checking if there is any object in arr2
        // which contains the key value
        if (arr2.some((val) => {
                return val[key] == x[key]
            })) {

            // If yes! then increase the occurrence by 1
            arr2.forEach((k) => {
                if (k[key] === x[key]) {
                    k["occurrence"]++
                }
            })

        } else {
            // If not! Then create a new object initialize 
            // it with the present iteration key's value and 
            // set the occurrence to 1
            let a = {}
            a[key] = x[key]
            a["occurrence"] = 1
            arr2.push(a);
        }
    })

    return arr2
}

function freqArray(arr) {
    let arrList = []

    arr.forEach((row) => {
        arrList.push({
            artwork: row[0],
            accessiontype: row[1]
        })
    })

    arrList.shift();

    var finalData = [
        ["Accession Type", "Frequence"]
    ]

    findOcc(arrList, "accessiontype").forEach((obj) => {
        finalData.push(
            [obj["accessiontype"], obj["occurrence"]]
        )
    })

    console.log("Type")

    return finalData
}

// Create visualization

function bardata() {
    d3.csv("assets/dataForSite/exportCsv/metartworks.csv").then(drawBar);
}

function drawBar(rawData) {

    var arr = [
        [
            "Artwork",
            "AccessionType"
        ]
    ]

    rawData.forEach(function (el) {
        if (el.lastTransfer != "") {
            arr.push([
                el.Title,
                el.lastTransfer
            ])
        }
    })

    var metData = freqArray(arr);

    //console.log(metData)

    var data = google.visualization.arrayToDataTable(metData);

    var options = {
        title: 'MET, Italian painting: accession modalities',
        chartArea: {
            width: '50%'
        },
        hAxis: {
            title: 'Occurrence',
            minValue: 0
        },
        vAxis: {
            title: 'Accession type'
        },

        legend: 'none',
        colors: ['red'],
        height: 350,
        width: 1000,
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_accession'));
    chart.draw(data, options);
}