google.charts.load('current', {
    'packages': ['corechart']
});

// Ancillary functions

function findOccLine(arr, key) {
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

function freqArrayLine(arr) {
    let arrList = []

    arr.forEach((row) => {
        arrList.push({
            artwork: row[0],
            year: parseInt(row[1])
        })
    })

    arrList.shift();
    
    var finalData = [
        [{type: 'string', label: 'Year'}, 'Number of Accessions']
    ]

    findOccLine(arrList, "year").forEach((obj) => {
        finalData.push(
            [obj["year"], obj["occurrence"]]
        )
    })

    console.log("Accession Line")

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

    var metData = freqArrayLine(arr);

    const metSortedData = metData.sort((a, b) => a[0] - b[0])

    //console.log(metSortedData)

    var data = google.visualization.arrayToDataTable(metSortedData);


    var options = {
        title: 'Accessions of Italian paintings at MET',
        hAxis: {title: 'Year'},
        vAxis: {title: 'Number of paintings accessioned'},
        legend: 'none',
        colors: ['red'],
        height: 350,
        width: 1000,
    };

    var chart = new google.visualization.LineChart(document.getElementById('linechart'));

    chart.draw(data, options);
}