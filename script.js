function sidebar() {
  let sidebar = document.getElementsByClassName("sidebar")[0];
  sidebar.style.right = "0";
  let sideblur = document.getElementsByClassName("sideblur")[0];
  sideblur.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  sideblur.style.visibility = "visible";
  let sidebarButton = document.getElementsByClassName("sidebar-on-button")[0];
  sidebarButton.style.visibility = "hidden";
  let body = document.querySelector("body");
  body.style.overflow = "hidden";
}
function nosidebar() {
  let sidebar = document.getElementsByClassName("sidebar")[0];
  sidebar.style.right = "-25%";
  let sideblur = document.getElementsByClassName("sideblur")[0];
  sideblur.style.backgroundColor = "rgba(255, 255, 255, 0)";
  setTimeout(function () {
    sideblur.style.visibility = "hidden";
  }, 500);
  let sidebarButton = document.getElementsByClassName("sidebar-on-button")[0];
  sidebarButton.style.visibility = "visible";
  let body = document.querySelector("body");
  body.style.overflow = "scroll";
}
function adjustHeroTextHeight() {
  const heroes = document.getElementsByClassName("hero");
  let Hero = [...heroes].find((img) => img.offsetParent !== null) || heroes[0];
  const HeroText = document.getElementsByClassName("hero-text")[0];
  const HeroHeight = Hero.offsetHeight;
  HeroText.style.height = HeroHeight + "px";
}
window.addEventListener("load", adjustHeroTextHeight);
window.addEventListener("resize", adjustHeroTextHeight);
