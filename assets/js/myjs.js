function toggleDiv(className, id) {
    var myClass = document.getElementsByClassName(className);
    for (var i = 0; i < myClass.length; i++) {
        myClass[i].style.display = 'none'
    }

    var toDisplay = document.getElementById(id);

    /*
    if (id == 'finalmain') {
        location.reload
        toDisplay.style.marginTop = "8%";
        toDisplay.style.transform = "translateY(-2rem)";
    }
    */

    toDisplay.style.display = "block";

}

function toggleDivViz(className, id) {
    var myClass = document.getElementsByClassName(className);
    for (var i = 0; i < myClass.length; i++) {
        myClass[i].style.display = 'none';
        myClass[i].classList.remove("replicateTransition");
    }

    var toDisplay = document.getElementById(id);
    if (id.includes("row")) {
        toDisplay.style.display = "flex"
    } else {
        toDisplay.style.display = "block";
    }

    document.getElementById('vizheader').style.display = "none";
    document.getElementById('metfacade').style.display = "none";

    toDisplay.classList.add("replicateTransition")

}

function toggleScrJS(id) {
    var myClass = document.getElementsByClassName("myjsgooglechart");
    for (var i = 0; i < myClass.length; i++) {
        myClass[i].src = '';
    }

    if (id == "jschartartist") {
        var jspath = "assets/js/googlechart/artistgraph.js"
    } else if (id == "jschartdate") {
        var jspath = "assets/js/googlechart/accessionline.js"
    } else if (id == "jscharttype") {
        var jspath = "assets/js/googlechart/accessiontype.js"
    } else if (id == "jschartdealer") {
        var jspath = "assets/js/googlechart/dealergraph.js"
    }

    var toDisplay = document.getElementById(id);
    toDisplay.src = jspath;
}

var map = null;

function checkMap() {
    
}

function LeafletShowImg(divId, filepath) {
    /*
    if (filepath == 'letter_pag1') {
        var filepath = "assets/zeriLetters/digitalization/1949_10_13_a.jpg";
    } else if (filepath == 'letter_pag2') {
        var filepath = "assets/zeriLetters/digitalization/1949_10_13_b.jpg";
    }
    */

    var filepath = "assets/zeriLetters/digitalization/1949_10_13_a.jpg";

    var map = L.map(divId, {
        minZoom: 0,
        maxZoom: 4,
        center: [0, 0],
        zoom: 0.5,
        crs: L.CRS.Simple
    });

    // dimensions of the image
    var w = 2344,
        h = 3180,
        url = filepath;

    // calculate the edges of the image, in coordinate space
    var southWest = map.unproject([0, h], map.getMaxZoom() - 1);
    var northEast = map.unproject([w, 0], map.getMaxZoom() - 1);
    var bounds = new L.LatLngBounds(southWest, northEast);

    // add the image overlay, 
    // so that it covers the entire map
    L.imageOverlay(url, bounds).addTo(map);

    // tell leaflet that the map is exactly as big as the image
    map.setMaxBounds(bounds);

}

function showSectionProgress(className, sectionName, progressLabelNo, progressWidth) {

    // Display
    var myClass = document.getElementsByClassName(className);
    for (var i = 0; i < myClass.length; i++) {
        myClass[i].style.display = 'none'
    }

    document.getElementById(sectionName).style.display = "flex";

    // Bar
    document.getElementById('zeribar').style.width = progressWidth;

    // Color label
    var myBarLabel = document.getElementsByClassName("zeriProgressLabel");

    for (var i = 0; i < myBarLabel.length; i++) {
        if (i < myBarLabel.length - (myBarLabel.length - progressLabelNo)) {
            myBarLabel[i].style.color = "#ed0025";
        } else {
            myBarLabel[i].style.color = 'gray';
        }
    }

}