google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(linedata);

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
            year: parseInt(row[1])
        })
    })

    arrList.shift();

    var finalData = [
        ['Year', 'Number of Accessions']
    ]

    findOcc(arrList, "year").forEach((obj) => {
        finalData.push(
            [obj["year"], obj["occurrence"]]
        )
    })

    return finalData
}

// Create visualization

function linedata() {
    d3.csv("assets/dataForSite/exportCsv/metartworks.csv").then(drawChart);
}

function drawChart(rawData) {

    var arr = [
        [
            "Artwork",
            "Date"
        ]
    ]

    rawData.forEach(function (el) {
        arr.push([
            el.Title,
            parseInt(el.AccessionYear)
        ])
    })

    var metData = freqArray(arr);

    const metSortedData = metData.sort((a, b) => a[0] - b[0])

    console.log(metData);

    var data = google.visualization.arrayToDataTable(metData);


    var options = {
        title: 'House Prices vs Size',
        hAxis: {
            title: 'Square Meters'
        },
        vAxis: {
            title: 'Price in Millions'
        },
        legend: 'none'
    };

    var chart = new google.visualization.LineChart(document.getElementById('linechart_material'));

    chart.draw(data, options);
}