function toggleDiv(id) {
    var myClass = document.getElementsByClassName("final");
    for(var i = 0; i < myClass.length; i++) { 
        myClass[i].style.display='none'
    }
    
    var toDisplay = document.getElementById(id);

    if (id=='finalmain') {
        location.reload
        toDisplay.style.marginTop = "10%";
        toDisplay.style.transform = "translateY(-4rem)";
    }

    toDisplay.style.display = "block"; 

}