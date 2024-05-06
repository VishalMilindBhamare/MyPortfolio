//tablinks & tabcontents
var tablinks = document.getElementsByClassName("tab-links"),
 tabcontents = document.getElementsByClassName("tab-contents");

 //tabfunctioncalls
 function openTab(tabname){
    for(item of tablinks) {
        item.classList.remove("active-link");
    }
    for(item of tabcontents) {
        item.classList.remove("active-tab");
 }
 event.currentTarget.classList.add("active-link");
 document.getElementById(tabname).classList.add("active-tab");
}

//forsidemenu
var sideMenu = document.getElementById("sidemenu");

//on OpenMenu function call
function openMenu(){
    sideMenu.style.right="0";
}

//on CloseMenu Function call
function closemenu(){
    sideMenu.style.right="-200px";
}