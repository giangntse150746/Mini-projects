let count = 0;

$(document).mousemove(
  function(event) {
    // get mouse coords data on document
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coords;

    // track text to mouse
    var coordsText = document.getElementById("coords");
    var coX = x + 48;
    var coY = y - 18;
    coordsText.style.visibility = 'visible';
    coordsText.style.left = coX + "px";
    coordsText.style.top = coY + "px";

    // track object to mouse
    var canvas = document.getElementById("myCanvas");
    var caX = x - 48;
    var caY = y - 48;
    canvas.style.visibility = 'visible';
    canvas.style.left = caX + "px";
    canvas.style.top = caY + "px";
});

$(document).click(
  function(event) {
    // get mouse coords data on document
    var x = event.clientX;
    var y = event.clientY;
    var canvas = document.getElementById("myCanvas");
    var coords = "X coords: " + x + ", Y coords: " + y;

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();

    count++;
});