google.charts.load('current', {
    packages: ['corechart', 'bar']
});

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
            artist: row[1]
        })
    })

    arrList.shift();

    var finalData = [
        ["Artist", "Frequence"]
    ]

    findOcc(arrList, "artist").forEach((obj) => {
        if (obj["occurrence"] > 1) {
            finalData.push(
                [obj["artist"], obj["occurrence"]]
            )
        }
    })

    return finalData
}

// Create visualization

function freqartistdata() {
    d3.csv("assets/dataForSite/exportCsv/metartworks.csv").then(drawViz);
}

function drawViz(rawData) {

    var arr = [
        [
            "Artwork",
            "Artist",
            "Transfer"
        ]
    ]

    rawData.forEach(function (el) {
        arr.push([
            el.Title,
            el.ArtistAlphaSort,
            el.lastTransfer
        ])
    })

    var metData = freqArray(arr);

    const metSortedData = metData.sort((a, b) => b[1] - a[1])
    console.log(metSortedData)

    var data = google.visualization.arrayToDataTable(metData.slice(0, 13));

    var options = {
        title: 'Most recurrent Italian painter at MET',
        hAxis: {
            title: 'Artists',
            slantedText: true,
            textStyle: {'fontSize': 9}
        },
        vAxis: {
            title: 'Occurrence in the collection',
            viewWindow: {
                max: 25,
                min: 0
            }
        },
        height: 400,
        width: 1000,
        legend: 'none',
        colors: ['red']
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}