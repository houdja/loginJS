const visibility = document.querySelector('.visibility span');
const passwordInput = document.querySelector('.passwordInput');

visibility.addEventListener('click', function(){
    if(passwordInput.type == 'password'){
        passwordInput.type = 'text'
        visibility.innerHTML = 'visibility_off';
    }else{
        passwordInput.type = 'password'
        visibility.innerHTML = 'visibility';
    }
})
