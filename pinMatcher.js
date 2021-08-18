function generatePin(){
    let pin = (Math.round(Math.random() *10000)) + '';
    if(pin.length==4){
        const key = document.getElementById('key');
        key.value = pin;
        return pin;        
    }
    else{
        return generatePin();
    }    
}


document.getElementById('generate-btn').addEventListener('click', function(){
    generatePin();
})

document.getElementById('key-pad').addEventListener('click', function(event){
    const key = event.target.innerText;
    event.stopImmediatePropagation();
    let inputKey = document.getElementById('typed-numbers');
    if(isNaN(key)){
        if(key == 'C' || key == '<'){
        inputKey.value = '';
        }
    }
    else{
        inputKey.value += key;
    }   
})

function verifyPin(){
    const pin = document.getElementById('key').value;
    const typedPin = document.getElementById('typed-numbers').value;
    if(pin==typedPin){
        document.getElementById('matched').style.display = 'block';
        document.getElementById('not-matched').style.display = 'none';
    }
    else{
        document.getElementById('not-matched').style.display = 'block';
        document.getElementById('matched').style.display = 'none';
    }
}
