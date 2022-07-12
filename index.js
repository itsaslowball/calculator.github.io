
var screen = document.getElementById('screen');
var buttons = document.querySelectorAll('button');
var screenValue = '';
for (item of buttons) {
    item.addEventListener('click', function(e) {
        var buttonText = e.target.innerText;
        console.log('button clicked is:', buttonText)
        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}