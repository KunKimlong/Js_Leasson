// alert(123);

var btn = document.getElementById("btn-show");
var box_none = document.querySelector(".box-none");
var box = document.querySelector('.box');
var xmark = document.querySelector('.icon');
btn.addEventListener('click',function(){
    // alert(123);
    box.classList.add('show-box')
});
box_none.addEventListener('click',function(){
    box.classList.remove('show-box');
})
xmark.addEventListener('click',function(){
    box.classList.remove('show-box');
});
