var ctx = document.getElementById("myCanvas").getContext("2d"),
    r = [{
        x: 10,
        y: 9
    }, {
        x: 10,
        y: 8
    }],
    co = 40,
    e = null;
ctx.shadowBlur = 20, ctx.shadowColor = "black";
setInterval(function() {
    if (check(r[0], 0) || r[0].x < 0 || r[0].x >= 24 || r[0].y < 0 || r[0].y >= 24) return;
    e != null && ((co == 40 && r[0].x == e.x && r[0].y + 1 == e.y) || (co == 38 && r[0].x == e.x && r[0].y - 1 == e.y) || (co == 37 && r[0].x - 1 == e.x && r[0].y == e.y) || (co == 39 && r[0].x + 1 == e.x && r[0].y == e.y)) ? (r.unshift(e), e = null, r.unshift(r.pop())) : (r.unshift(r.pop()));
    (co == 40 || co == 38) ? (r[0].x = r[1].x, r[0].y = r[1].y + (co == 40 ? 1 : -1)) : (r[0].x = r[1].x + (co == 39 ? 1 : -1), r[0].y = r[1].y);
    ctx.clearRect(0, 0, 240, 240);
    if (e) ctx.fillRect(e.x * 10, e.y * 10, 10, 10);
    for (var i = 0; i < r.length; i++) ctx.fillRect(r[i].x * 10, r[i].y * 10, 10, 10);
    while (e == null || check(e)) e = {
        y: (Math.random() * 24 >>> 0),
        x: (Math.random() * 24 >>> 0)
    };
    if (check(r[0], 0) || r[0].x < 0 || r[0].x >= 24 || r[0].y < 0 || r[0].y >= 24) alert("game over\nYou get [" + (r.length - 2) + "]");
}, 100);
document.onkeyup = function(event) {
    co = event.keyCode >= 37 && event.keyCode <= 40 && (Math.abs(event.keyCode - co) != 2) ? event.keyCode : co;
}

function check(e, j) {
    for (var i = 0; i < r.length; i++)
        if (j != i && r[i].x == e.x && r[i].y == e.y) return true;
    return false;
}