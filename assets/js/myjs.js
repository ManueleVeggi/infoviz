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
    toDisplay.classList.add("replicateTransition")

}
