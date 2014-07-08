var userAge = parseInt(prompt("How old are you?"),10);
if (isNaN(userAge))
{
    console.log("Your input is not a number!");
}
else if (userAge<18){
    console.log("You need to be at least 18!");
}
else{
    console.log("You are good to go!");
}