let xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.json-generator.com/api/json/get/ceeEOrLWiG?indent=2");
xhr.send();
xhr.onload = func;

function func() {
    var products = JSON.parse(xhr.response);
    checkBasket();
    showBasket(products);
};

function showBasket(products) {
        var out = '';
        for (var key in basket) {

            out += `<div class="goods" onmouseover="mOver(this)" onmouseout="mOut(this)">
                        <img  src="${products[key].image}"> 
                        <h4>${products[key].name}</h4>
                        <p>${products[key].color}</p>
                        <p>${products[key].gender}</p>
                        <h5>${products[key].price} ₴</h5>
                        <input type="text" class="totalByGood" value="${basket[key] * products[key].price}" > ₴
                        <div class="cntrlBtn">
                            <button class="minus" data-art="${key}" onclick="minusProducts(this)" onmouseover="buttonOver(this)" onmouseout="buttonOut(this)">-</button>
                            <input class="numGood" value="${basket[key]}" readonly>
                            <button class="plus" data-art="${key}" onclick="plusProducts(this)"  onmouseover="buttonOver(this)" onmouseout="buttonOut(this)">+</button>
                            <button class="delete" data-art="${key}" onclick="deleteProducts(this)">Delete from basket</button> 
                        </div>
                    </div>`
        };
        document.getElementById('my-basket').innerHTML = out;
    };

function plusProducts(el) {
    var products = JSON.parse(xhr.response);
    var articul = el.getAttribute('data-art');
    basket[articul]++;
    saveBasketToLS();
    showBasket(products);
};

function minusProducts(el) {
    var products = JSON.parse(xhr.response);
    var articul = el.getAttribute('data-art');
    if (basket[articul] > 1) {
        basket[articul]--;
    } else {
        delete basket[articul];
    };
    saveBasketToLS();
    showBasket(products);
};

function deleteProducts(el) {
    var products = JSON.parse(xhr.response);
    var articul = el.getAttribute('data-art');
    delete basket[articul];
    saveBasketToLS();
    showBasket(products);
};

function checkBasket() {
    if (localStorage.getItem('basket') != null) {
        basket = JSON.parse(localStorage.getItem('basket'));
    };
};

function saveBasketToLS() {
    localStorage.setItem('basket', JSON.stringify(basket));
;}

function mOver(element) {
    element.style.opacity = "0.7";
};

function mOut(element) {
    element.style.opacity = "1";
};

function buttonOver(element){
    element.style.background = "#7ad258";
};

function buttonOut(element){
    element.style.background = "tomato";
};

function totalSum(){
    let priceForItems = document.querySelector(".totalByGood").value;
    //console.log(priceForItems)
    let res = Number(priceForItems);
    //console.log(res)
    document.getElementById("sum").innerHTML = res;
}
totalSum();
