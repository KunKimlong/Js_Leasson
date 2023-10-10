// function change_color(){
//     var color = prompt('Enter Color:');
//     // console.log(color);
//     var box = document.getElementById('test');
//     box.setAttribute('style','background-color: '+color+';');
// }


function change_image(){
    var new_image = "./Image/city.jpg"
    document.querySelector('img').setAttribute('src',new_image)
}
function unchange_image(){
    var new_image = "./Image/city3.jpg"
    document.querySelector('img').setAttribute('src',new_image)
}