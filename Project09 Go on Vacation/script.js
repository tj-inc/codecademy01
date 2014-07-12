$(document).ready(function(){
    $('input').ready(function(){
        $('#departing').datepicker();
        $('#returning').datepicker();
    });
    $('#submit').mouseenter(function(){
        $(this).fadeTo('fast',0.5);
    });
    $('#submit').mouseleave(function(){
        $(this).fadeTo('fast',1.0);
    });
    var destinations = [
      "Beijing",
      "Hubei",
      "New York",
      "Washington DC",
      "Tokyo",
      "Kyoto",
      "Osaka",
      "Los Angeles",
      "Xinjiang",
      "Tibet",
      "Houston",
      "London",
      "Paris",
    ];
    $("#autocomplete").autocomplete({
      source: destinations
    });
    
    $('#submit').click(function(){
        var dateTransform = function(str){
            return str.replace(/\D/g,'');
        }
        var dest='#autocomplete'.value;
        if (dest=='')
        {
            alert('Please choose your destination first!');
            return;
        };
        var inputDepart = document.getElementById('departing').value;
        var inputReturn = document.getElementById('returning').value
        var inputDepartNum = parseInt(dateTransform(inputDepart));
        var inputReturnNum = parseInt(dateTransform(inputReturn));
        if (inputDepartNum=='')
        {
            alert('Please choose your departing date first!');
            return;
        }
        else if (inputReturnNum=='')
        {
            alert('Please choose your returning date first!');
            return;
        }
        else if (inputDepartNum>inputReturnNum)
        {
            alert('Your departing date is later than your returning date, please change!');
            return;
        }
        else
        {
        var today = new Date();
        var currentDate = parseInt(dateTransform(''+(today.getMonth()+1)+today.getDate()+today.getFullYear()));
        if (inputDepartNum<currentDate)
        {
            alert('Your departing date is before today, please change!');
            return;
        }
        else
        {
            alert('Your flight will depart on '+inputDepart+' to '+dest+' and return on '+inputReturn+'!');
            document.getElementById("submit").submit();
        };
        };
    });
})