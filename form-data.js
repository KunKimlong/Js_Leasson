var code = document.getElementById('code');
var Name = document.getElementById('name');
var qty = document.getElementById('qty');
var price = document.getElementById('price');
var btn_buy = document.getElementById('btn-buy');
var data = `
    <table class="table table-hover table-dark">
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
            <th>Discount</th>
            <th>Payment</th>
        </tr>
    `;
btn_buy.addEventListener('click',function(){
    // console.log(code.value);
    // console.log(Name.value);
    // console.log(qty.value);
    // console.log(price.value);
    var total = price.value * qty.value;
    data += `
        <tr>
            <td>${code.value}</td>
            <td>${Name.value}</td>
            <td>${qty.value}</td>
            <td>${price.value}</td>
            <td>${total}</td>
        </tr>
    `;
   document.getElementById('data').innerHTML=data+'</table>';
});