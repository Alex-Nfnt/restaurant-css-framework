var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementByClass("navbar").style.top = "0";
  } else {
    document.getElementByClass("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}