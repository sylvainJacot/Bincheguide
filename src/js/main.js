function callAll(jsfiles) {
    var src = document.createElement("script");
    src.setAttribute("type", "text/javascript");
    src.setAttribute("src", jsfiles);
    document.getElementsByTagName("body")[0].appendChild(src);
}

callAll("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js");
callAll("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js");
callAll("./src/js/scroll-reveal.js");
callAll("./src/js/magnet.js");
callAll("./src/js/loader.js");
callAll("./src/js/menu-icon.js");
callAll("./src/js/cursor.js");



