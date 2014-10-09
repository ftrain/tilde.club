/*
 *  ▄▄▄▄    ██▓     ██▓ ███▄    █  ██ ▄█▀
 * ▓█████▄ ▓██▒    ▓██▒ ██ ▀█   █  ██▄█▒
 * ▒██▒ ▄██▒██░    ▒██▒▓██  ▀█ ██▒▓███▄░
 * ▒██░█▀  ▒██░    ░██░▓██▒  ▐▌██▒▓██ █▄
 * ░▓█  ▀█▓░██████▒░██░▒██░   ▓██░▒██▒ █▄
 * ░▒▓███▀▒░ ▒░▓  ░░▓  ░ ▒░   ▒ ▒ ▒ ▒▒ ▓▒
 * ▒░▒   ░ ░ ░ ▒  ░ ▒ ░░ ░░   ░ ▒░░ ░▒ ▒░
 *  ░    ░   ░ ░    ▒ ░   ░   ░ ░ ░ ░░ ░
 *  ░          ░  ░ ░           ░ ░  ░
 *       ░
 */
window.onload = function() {
    var objs = document.getElementsByTagName("blink");
    var objColors = {};
    var blinkTimeout = 750;
    var blink = function() {
        for (var i = 0; i < objs.length; i++) {
            var obj = objs[i];
            if (objColors[i] === undefined) {
                objColors[i] = obj.style.color;
            }
            if (obj.style.color == objColors[i]) {
                newColor = "rgba(0, 0, 0, 0)";
            } else {
                newColor = objColors[i];
            }
            obj.style.color = newColor;
        }
        window.setTimeout(blink, blinkTimeout);
    }
    window.setTimeout(blink, blinkTimeout);
};
