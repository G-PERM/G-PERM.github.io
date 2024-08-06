function web() {
 window.location.assign("index.html")
}

function NAVnottop() {
 document.getElementById("NAVtop").style.color = "#00FFFF";
 document.getElementById("NAVnottop").style.color = "#FF0000";
 document.getElementById("NAVtop").style.backgroundColor = "#979797";
 document.getElementById("NAVnottop").style.backgroundColor = "#303030";
 document.getElementById("NAV").style.position = "static";
}
function NAVtop() {
 document.getElementById("NAVnottop").style.color = "#00FFFF";
 document.getElementById("NAVtop").style.color = "#FF0000";
 document.getElementById("NAVnottop").style.backgroundColor = "#979797";
 document.getElementById("NAVtop").style.backgroundColor = "#303030";
 document.getElementById("NAV").style.position = "sticky";
}