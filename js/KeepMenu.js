var setMenu = "1";

/*function SetNormal(id) {
	if(document.getElementById(id).getAttribute("class") != "selected") {
        document.getElementById(id).setAttribute("class", "normal");
    }
}

function SetHover(id) {
    if(document.getElementById(id).getAttribute("class") != "selected") {
        document.getElementById(id).setAttribute("class", "hover");
    }
}*/

function SetSelected(id) {
	document.getElementById(setMenu).setAttribute("class", "normal");
    document.getElementById(id).setAttribute("class", "selected");
	
	setMenu = id;
}