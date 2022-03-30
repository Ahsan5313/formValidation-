
const form = document.getElementById('form');
const names = document.getElementById('name');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const pass1 = document.getElementById('pass1');

form.addEventListener('submit', (e) => {

    e.preventDefault();
    checkInputs();
});

function checkInputs(){

    const nameValue = names.value.trim();
    const emailValue = email.value.trim();
    const passValue = pass.value.trim();
    const pass1Value = pass1.value.trim();

    if(nameValue === ''){

        // show error message
        // add class 
        setErrorFor(names, 'User Name can not be blank')
        
    }else{

        // add success class
        setSuccessFor(names)
    }

    if(emailValue === ''){

        setErrorFor(email, 'Email can not be blank')
    }else if(!isEmail(emailValue)){

        setErrorFor(email, 'Email is not valid')
    }else{

        setSuccessFor(email)
    }

    if(passValue === ''){
        setErrorFor(pass, 'Password can not be blank')
        
    }else{

        setSuccessFor(pass)
    }
    if(pass1Value === ''){
        setErrorFor(pass1, 'You should again type password')
        
    }else{

        setSuccessFor(pass1)
    }

}

function setErrorFor(input, message){

    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.innerText = message;

    formControl.className = 'form-control error'

}
function setSuccessFor(input){

    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    formControl.className = 'form-control success'
    small.innerText = '';
}

function isEmail(input){

    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}