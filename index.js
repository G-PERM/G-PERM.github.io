function web() {
	window.open("index.html","_blank")
}
function notationmagic() {
	window.open("notationmagic.html","_blank")
}
function notationpocket() {
	window.open("notationpocket.html","_blank")
}
function notationpyraminx() {
	window.open("notationpyraminx.html","_blank")
}
function magic() {
	window.open("magic.html","_blank")
}
function pocket() {
	window.open("pocket.html","_blank")
}
function pyraminx() {
	window.open("pyraminx.html","_blank")
}
function testimonial() {
	window.open("testimonial.html","_blank")
}
function contact() {
	window.open("https://forms.gle/guFuocEGUjvGn8Ef9","_blank")
}

function Navtop() {
	document.getElementById("Nav").style.position = "fixed";
	document.getElementById("Nav").style.position = " -webkit-fixed";
	document.getElementById("Navtop").style.backgroundColor = " #111111";
	document.getElementById("Navtop").style.color = " #EEEEEE";
	document.getElementById("Navnottop").style.backgroundColor = " #EEEEEE";
	document.getElementById("Navnottop").style.color = " #111111";
}
function Navnottop() {
	document.getElementById("Nav").style.position = "absolute";
	document.getElementById("Nav").style.position = " -webkit-absolute";
	document.getElementById("Navtop").style.backgroundColor = " #EEEEEE";
	document.getElementById("Navtop").style.color = " #111111";
	document.getElementById("Navnottop").style.backgroundColor = " #111111";
	document.getElementById("Navnottop").style.color = " #EEEEEE";
}
window.addEventListener('load', adjustContentMargin);
window.addEventListener('resize', adjustContentMargin);
function adjustContentMargin() {
    const navbar = document.getElementById('Nav');
    const content = document.querySelector('section');
    const navbarHeight = navbar.offsetHeight;
    content.style.marginTop = `${navbarHeight}px`;
}