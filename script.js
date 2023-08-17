const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm_password');

confirmPass.addEventListener('input', correctPassword);

function correctPassword() {
    if(!(password.value.startsWith(confirmPass.value)&&confirmPass.value.length<=password.value.length)){
        confirmPass.classList.add('error');
        document.querySelector('button').setAttribute('disabled', '');
    } else {
        confirmPass.classList.remove('error');
        document.querySelector('button').removeAttribute('disabled');
    }
}
