function toggleDiv(className, id) { 
    var myClass = document.getElementsByClassName(className);
    for(var i = 0; i < myClass.length; i++) { 
        myClass[i].style.display='none'
    }
    
    var toDisplay = document.getElementById(id);

    if (id=='finalmain') {
        location.reload
        toDisplay.style.marginTop = "15%";
        toDisplay.style.transform = "translateY(-4rem)";
    }

    toDisplay.style.display = "block"; 

}

function toggleDivViz(className, id) {
    var myClass = document.getElementsByClassName(className);
    for(var i = 0; i < myClass.length; i++) { 
        myClass[i].style.display='none';
        myClass[i].classList.remove("replicateTransition");
    }
    
    var toDisplay = document.getElementById(id);
    if (id.includes("row")) {
        toDisplay.style.display = "flex"
    }
    else {
        toDisplay.style.display = "block"; 
    }

    document.getElementById('vizheader').style.display = "none"; 
    document.getElementById('metfacade').style.display = "none"; 
    
    toDisplay.classList.add("replicateTransition")

}

function toggleScrJS(id) {
    var myClass = document.getElementsByClassName("myjsgooglechart");
    for(var i = 0; i < myClass.length; i++) { 
        myClass[i].src='';
    }

    if (id == "jschartartist") {
        var jspath =  "assets/js/googlechart/artistgraph.js"
    } else if (id == "jschartdate") {
        var jspath =  "assets/js/googlechart/accessionline.js"
    } else if (id == "jscharttype") {
        var jspath =  "assets/js/googlechart/accessiontype.js"
    } else if (id == "jschartdealer") {
        var jspath =  "assets/js/googlechart/dealergraph.js"
    }

    var toDisplay = document.getElementById(id);
    toDisplay.src = jspath;
}