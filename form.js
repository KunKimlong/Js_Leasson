var A = document.getElementById('value_a');
var B = document.getElementById('value_b');
var rs = document.querySelector('#result');
// console.log(rs);
var calculate = document.querySelector("#btn-add");
calculate.addEventListener('click',Cal);
function Cal(){
    if(A.value == ''){
        A.value=0;
    }
    if(B.value == ''){
        B.value=0;
    }
   var total = parseFloat(A.value)+parseFloat(B.value);
   rs.value = total;
}

// undifine
// Nan