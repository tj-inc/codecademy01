$(document).ready(function(){
    var ctx = document.getElementById('myCanvas').getContext('2d');
    //Setting up image sources
    var bf4 = new Image();
    var redAlert3 = new Image();
    var watchdogs = new Image();
    bf4.src = 'img/bf4.jpeg';
    redAlert3.src = 'img/redalert3.jpg';
    watchdogs.src = 'img/watchdogs.png';
    //Setting up autocomplete
        var items = [
      "Battlefield 4",
      "Red Alert 3",
      "Watchdogs",
    ];
    $("#chooseItem").autocomplete({
      source: items
    });
    //Setting up see picture
    $('#picture').click(function(chosenItem){
        var chosenItem = document.getElementById('chooseItem').value;
        ctx.fillStyle = 'white';
        ctx.fillRect(0,0,500,250);
        switch (chosenItem)
        {
        case 'Battlefield 4':
            ctx.drawImage(bf4,100,20);
            break;
        case 'Red Alert 3':
            ctx.drawImage(redAlert3,100,10);
            break;
        case 'Watchdogs':
            ctx.drawImage(watchdogs,40,20);
            break;
        default:
            return;
        };

    });
    //Settung up checkout
    $('#checkout').click(function(){
        var chosenItem = document.getElementById('chooseItem').value;
        var text = "Your chosen item is:\t"+chosenItem+"!"
        alert(text);
    });
    
})