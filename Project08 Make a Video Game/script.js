$(document).ready(function(){
    var theNumber = parseInt(Math.random()*10);
    for (var i=0; i<=theNumber;i++)
    {
        var theRandomTop = Math.random()*300+'px';
        var theRandomLeft = Math.random()*300+'px';
        var middle = "<img id='img" + i + "' src='http://statfaking1.firstpost.in/wp-content/uploads/2012/12/alien.jpg' style='left:" + theRandomLeft+ ";top:" + theRandomTop + ";position:absolute;z-index:"+i+";'/>";
        document.getElementById("body").innerHTML += middle;
    }
    var countDie = 0;
    $('img').click(function(){
        $(this).fadeOut('fast');
        countDie++;
        if (countDie == theNumber + 1) {
            window.setTimeout("alert('You win!')", 1000);
        }
    })
})