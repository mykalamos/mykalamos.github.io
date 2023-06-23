function selectTab(evt, categoryName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.className += " active";
}

function onLoadCompleted(event, divId) {
    selectTab(event, divId);
}

function toggleVisibility(t) {
    var displayed = true;
    document.querySelectorAll('[id=' + t + ']').forEach(element => {
        if (element.className == "hiddenx")
            element.className = "displayed";
        else {
            element.className = "hiddenx";
            displayed = false;
        }
    });
    var icon = document.getElementById(t + "Icon")
    if (displayed == true)
        icon.innerHTML = "&#x21F1;"
    else
        icon.innerHTML = "&#x21F2;"
}