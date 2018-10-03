let levelScroll = function () {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById('goTop').style.display = "block";
    } else {
        document.getElementById('goTop').style.display = "none";
    }
}
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    levelScroll();
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
};


let goTop = document.getElementById('goTop');

goTop.addEventListener('click', function () {
    levelScroll();

    var $target = $('html,body');
    $target.animate({
        scrollTop: 0
    }, 750);
});