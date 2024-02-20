let price = [180,200,1800,2800,2550];
let quantity = [0,0,0,0,0];

let product_1={
    brand:"Kingfisher",
    price:180,
    msg:"Out Of Stock",
    qty:0,
    totalPrice:0
}

let product_2={
    brand:"RoyalStag",
    price:200,
    msg:"Out Of Stock",
    qty:0,
    totalPrice:0
}

let product_3={
    brand:"Imperial Blue",
    price:1800,
    msg:"Out Of Stock",
    qty:0,
    totalPrice:0
}


let product_4={
    brand:"BagPiper",
    price:2800,
    msg:"Out Of Stock",
    qty:0,
    totalPrice:0
}

let product_5={
    brand:"100 Pipers",
    price:2550,
    msg:"Out Of Stock",
    qty:0,
    totalPrice:0
}



let product_info = [product_1, product_2,product_3,product_4,product_5];

function loadHtml()
{
    for(let i=1;i<=price.length;i++){
        console.log(i);
        let cartItem=` <div><span>${product_info[i-1].brand}</span></div>
        <div><span>${product_info[i-1].price}</span></div>
        <div><span id="p-msg${i.toString()}">${product_info[i-1].msg}</span></div>
        <div><i class="fa fa-minus-circle pe-2"
        onclick="decX(${i.toString()});"></i><span id="p-qty${i.toString()}">${product_info[i-1].qty}</span><i class="fa fa-plus-circle ps-2"
        onclick="incX(${i.toString()});"></i></div>
        <div><span id="t-price${i.toString()}">${product_info[i-1].qty*product_info[i-1].totalPrice}</span></div>`;
        document.getElementById('item'+i.toString()).innerHTML=cartItem;

    }
}

loadHtml();




function decX(id)
{
    if (quantity[id-1]>0)
    {
        quantity[id-1]--;
        productCalculation(id);
        setMsg(id);
    }
}

function incX(id)
{
    quantity[id-1]++;
    productCalculation(id);
    setMsg(id);
}

function productCalculation(id)
{
    document.getElementById('p-qty'+id.toString()).innerText = quantity[id-1];
    document.getElementById('t-price'+id.toString()).innerText = quantity[id-1]*price[id-1];
}

function setMsg(id)
{
    if (quantity[id-1] === 0) {
        document.getElementById('p-msg'+id.toString()).innerText = "Out of Stock!!!";
    } else if (quantity[id-1] < 10) {
        document.getElementById('p-msg'+id.toString()).innerText = "Few Left. Hurry Up!!!";
    } else {
        document.getElementById('p-msg'+id.toString()).innerText = "In Stock!!!";
    }
}


