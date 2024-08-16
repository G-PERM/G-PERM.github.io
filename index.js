function web() {
	window.location.assign("index.html")
}
function contact() {
	window.location.assign("https://forms.gle/ZEfEqayESopzo2AE9")
}

function Navtop() {
	document.getElementById("nav").style.position = "sticky";
	document.getElementById("nav").style.position = " -webkit-sticky";
	document.getElementById("Navtop").style.backgroundColor = " #111111";
	document.getElementById("Navtop").style.color = " #EEEEEE";
	document.getElementById("Navnottop").style.backgroundColor = " #EEEEEE";
	document.getElementById("Navnottop").style.color = " #111111";
}
function Navnottop() {
	document.getElementById("nav").style.position = "static";
	document.getElementById("nav").style.position = " -webkit-static";
	document.getElementById("Navtop").style.backgroundColor = " #EEEEEE";
	document.getElementById("Navtop").style.color = " #111111";
	document.getElementById("Navnottop").style.backgroundColor = " #111111";
	document.getElementById("Navnottop").style.color = " #EEEEEE";
}
