function web() {
 window.location.assign("index.html")
}

function NAVnottop() {
 document.getElementById("NAVtop").style.color = "#00FFFF";
 document.getElementById("NAVnottop").style.color = "#FF0000";
 document.getElementById("NAVtop").style.backgroundColor = "#979797";
 document.getElementById("NAVnottop").style.backgroundColor = "#303030";
 document.getElementById("NAV").style.position = "static";
 document.getElementById("NAV").style.position = " -webkit-static";
}
function NAVtop() {
 document.getElementById("NAVnottop").style.color = "#00FFFF";
 document.getElementById("NAVtop").style.color = "#FF0000";
 document.getElementById("NAVnottop").style.backgroundColor = "#979797";
 document.getElementById("NAVtop").style.backgroundColor = "#303030";
 document.getElementById("NAV").style.position = "sticky";
 document.getElementById("NAV").style.position = " -webkit-sticky";
}
function pocket() {
 window.location.assign("pocket.html")
}
function magic() {
 window.location.assign("magic.html")
}
function pyraminx() {
 window.location.assign("pyraminx.html")
}