var password = document.getElementById('password');
var checkbox = document.getElementById('checkbox');
var show     = document.querySelector(".bi-eye");
var hide     = document.querySelector('.bi-eye-slash');
// checkbox.checked
// console.log(checkbox);

checkbox.addEventListener('click',showpassword);
function showpassword(){

    if(checkbox.checked)
    {
      password.setAttribute("type","text");
    }
    else{
        password.setAttribute("type","password");
    }
}
show.addEventListener('click',function(){
    password.setAttribute("type","text");
    show.classList.add('d-none');
    hide.classList.remove('d-none');
});

hide.addEventListener('click',function(){
    password.setAttribute("type","password");
    show.classList.remove('d-none');
    hide.classList.add('d-none');
});

