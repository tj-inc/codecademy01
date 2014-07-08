var my_canvas = document.getElementById('canvas');
var context = my_canvas.getContext("2d");
context.beginPath();
context.arc(95, 85, 40, 0, 2*Math.PI);
context.stroke();
context.fillStyle='red'
context.fillRect(70, 85, 50, 20);
context.font = "30px Garamond";
context.fillText("Hello!",15,175);