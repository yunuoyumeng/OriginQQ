scroll(function (direction) {
    const navbarBrand = $('#navbar-brand');
    navbarBrand.stop(true, false).fadeOut(1000, function () {
        if (direction === "down") {
            navbarBrand.text("Genes Hunt工作室").fadeIn(1500);
        } else {
            navbarBrand.text("小陌美化社").fadeIn(1500);
        }
    })
});

function scroll(fn) {
    var beforeScrollTop = document.documentElement.scrollTop,
        fn = fn || function () { };
    window.addEventListener("scroll", function () {
        var afterScrollTop = document.documentElement.scrollTop,
            delta = afterScrollTop - beforeScrollTop;
        if (delta === 0) return false;
        fn(delta > 0 ? "down" : "up");
        beforeScrollTop = afterScrollTop;
    }, false);
}
