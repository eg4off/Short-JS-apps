var item = [];
var basket = {};
let xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.json-generator.com/api/json/get/ceeEOrLWiG?indent=2");
xhr.send();
xhr.onload = itemGood;


function itemGood() {
    var products = JSON.parse(xhr.response);

    checkItem();
    checkBasket();
    showItem(products);
    title(products);
};

function title(products) {
    for (var key in item) {
        document.title = (`${products[key].name}`);
    }
};

function showItem(products) {
    var out = '';
        for (var key in item) {

            out += `<div class="goods" onmouseover="mOver(this)" onmouseout="mOut(this)">
                        <img  src="${products[key].image}"> 
                        <h4>${products[key].name}</h4>
                        <p>${products[key].color}</p>
                        <p>${products[key].gender}</p>
                        <h5>${products[key].price} ₴</h5>
                    </div>`
        };
    document.getElementById('item').innerHTML = out;
};

function checkItem() {
    if (localStorage.getItem('item') !== null) {
        item = JSON.parse(localStorage.getItem('item'));
    }
};

function checkBasket(){
    if(localStorage.getItem('basket') !== null){
        basket = JSON.parse(localStorage.getItem('basket'));
    };
};
