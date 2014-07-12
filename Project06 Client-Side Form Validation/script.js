var namePattern = /(\W|^[a-z]|\d)/g;
var emailPattern = /!@/g;
$(document).ready(function(){
    $('input').ready(function(){
        $('#birthday').datepicker();
    });
    //Check first name (no number/special characters)
    $('#lastName').focus(function(){
        var firstName=document.getElementById('firstName').value;
        if (firstName==''||namePattern.test(firstName))
        { 
            alert('Please make sure that your first name has the correct format!');
            $('#lastName').blur();
        };
    });
    //Check last name (no number/special characters)
    $('#email').focus(function(){
        var lastName=document.getElementById('lastName').value;
        if (lastName==''||namePattern.test(lastName))
        { 
            alert('Please make sure that your last name has the correct format!');
            $('#email').blur();
        };
    });
    //Check email format (@ must present)
    $('#email').blur(function(){
        var email=document.getElementById('email').value;
        if (email==''||emailPattern.test(email))
        { 
            alert('Please make sure that your email has the correct format!');
            $('#email').focus();
        };
    });
    //Check birthday (must be before today)
    $('.gender').click(function(){
        var dateTransform = function(str){
            return str.replace(/\D/g,'');
        }
        var input = document.getElementById('birthday').value;
        if (input=='')
        {
            alert('Please choose your birthday first!');
            this.checked = false;
            return;
        }
        var today = new Date();
        var inputDate = parseInt(dateTransform(input));
        var currentDate = parseInt(dateTransform(''+(today.getMonth()+1)+today.getDate()+(today.getFullYear())));
        if (inputDate>currentDate)
        {
            alert('Please check your birthday to make sure it is not in the future!')
            this.checked = false;
        }
    });
    //Check male or femail (one of them must be checked)+submit
    $('#submit').click(function(){
        var maleChecked = document.getElementById('male').checked;
        var femaleChecked = document.getElementById('female').checked;
        if (!maleChecked&&!femaleChecked)
        {
            alert('Please choose your gender first!');
            return;
        }
        else
        {
            alert('Thank you for your submission!');
            document.getElementById("form").submit();
        }
    });
})