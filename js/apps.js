

function getPin(){
    const pin = genaretPin();
    const pinString = pin + '';
    
    if (pinString.length === 4) {
        return pin;
    }
    else {
        // console.log('Please 4 dijite pin');
        return getPin();
    }
}

function genaretPin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('genaret-pin').addEventListener('click', function(){
    const pin = getPin();
    // display filed pin
    const pinDisplayFild = document.getElementById('show-pin');
    // const pinValue = pinFild.value;
    pinDisplayFild.value = pin;
})

document.getElementById('number-value').addEventListener('click', function(event){
    const number = event.target.innerText;
    const numberType = document.getElementById('type-number');
    const numberTypeSrring = numberType.value;
    // console.log(number);
    if(isNaN(number)){
        if(number === 'C'){
            numberType.value = '';
        }
        else if(number === '<'){
            const digite = numberTypeSrring.split('');
            digite.pop();
            const remaindingDigite = digite.join('');
            numberType.value = remaindingDigite;
        }
    }
    else{
        const numberValue = numberTypeSrring + number;
        numberType.value = numberValue;
    }
})

document.getElementById('varify-pin').addEventListener('click', function(){
    const pinDisplay = document.getElementById('show-pin');
    const pinDisplayFildValue = pinDisplay.value;

    const typeInputPin = document.getElementById('type-number');
    const typeInputPinValue = typeInputPin.value;

    const pinSuccessMassage = document.getElementById('pin-success');
    const pinFiledMassage = document.getElementById('pin-error');

    if(typeInputPinValue === pinDisplayFildValue){
        pinSuccessMassage.style.display = 'block';
        pinFiledMassage.style.display = 'none';
    }
    else{
        pinFiledMassage.style.display = 'block';
        pinSuccessMassage.style.display = 'none';
    }
})