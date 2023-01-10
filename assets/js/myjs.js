function toggleDiv(id) {
    var myClass = document.getElementsByClassName("final");
    for(var i = 0; i < myClass.length; i++) { 
        myClass[i].style.display='none'
    }
      
    document.getElementById(id).style.display = "block"; 

    if (id=="finalmain") {
        document.getElementById(id).style.marginTop = "9%";
    }
}