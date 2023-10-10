var btnshow = document.querySelector('.phone-bar .btn-show');
var btnhide = document.querySelector('.phone-bar .btn-hide');
var menu = document.querySelector('.menu-link');


btnshow.addEventListener('click',function(){
    menu.classList.add('menu-show');
    btnshow.style.display='none';
    btnhide.classList.remove('d-none');
});
btnhide.addEventListener('click',function(){
    menu.classList.remove('menu-show');
    btnshow.style.display='block';
    btnhide.classList.add('d-none');
});