$(document).ready(function(){
    var ctx = document.getElementById('myCanvas').getContext('2d');
    $('#draw').click(function(){
        var x = parseInt(document.getElementById('x').value);
        var y = parseInt(document.getElementById('y').value);
        var r = parseInt(document.getElementById('r').value);
    
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2*Math.PI);
        ctx.stroke();
    });

    $('#clear').click(function(){
        ctx.fillStyle = 'white';
        ctx.fillRect(0,0,500,250);
    });
    
})