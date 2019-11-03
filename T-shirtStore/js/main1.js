let productsPerPage = +document.getElementById('countPerPage').value;
let basket = {};
let xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.json-generator.com/api/json/get/ceeEOrLWiG?indent=2");
xhr.send();

var func = (productsPerPage) => {
    let content = '';

    for (let i = 0  ; i < productsPerPage; i++) {
        content +=
            `<div class="goods" onmouseover="mOver(this)" onmouseout="mOut(this)">
            <img  src="${products[i].image}" data-index="${i}" onclick="addToNewWindow(this)"> 
            <h4>${products[i].name}</h4>
            <p>${products[i].color}</p>
            <p>${products[i].gender}</p>
            <h5>${products[i].price} ₴</h5>
            <input type="button" value="Buy now!" id="btn-cart" onmouseover="buttonOver(this)" onmouseout="buttonOut(this)" data-index="${i}" onclick="addToBasket(this)"> 
        </div>`
    };
    document.getElementById('data').innerHTML = content;
};

function addProducts(products) {
    let content = '';

    for (let i = 0; i < products.length; i++) {
        content +=
            `<div class="goods" onmouseover="mOver(this)" onmouseout="mOut(this)">
            <img  src="${products[i].image}" data-index="${i}" onclick="addToNewWindow(this)"> 
            <h4>${products[i].name}</h4>
            <p>${products[i].color}</p>
            <p>${products[i].gender}</p>
            <h5>${products[i].price} ₴</h5>
            <input type="button" value="Buy now!" id="btn-cart" onmouseover="buttonOver(this)" onmouseout="buttonOut(this)" data-index="${i}" onclick="addToBasket(this)"> 
        </div>`
    };
    document.getElementById('data').innerHTML = content;
};

//functions of sorting
function numberProducts() {
    let productsPerPage = +document.getElementById('countPerPage').value;

    products = JSON.parse(xhr.response);

    func(productsPerPage);
    drawButtons(productsPerPage);
    setEvents();
};

xhr.onload = numberProducts;

function sortByName() {
    numberProducts();
    sortName(products);
    func(productsPerPage);
};

function sortName(arr) {
    arr.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });
};

function sortByColor() {
    numberProducts();
    sortColor(products);
    func(productsPerPage);
};

function sortColor(arr) {
    arr.sort(function (a, b) {
        if (a.color > b.color) {
            return 1;
        }
        if (a.color < b.color) {
            return -1;
        }
        return 0;
    });
};

function sortByGender() {
    numberProducts();
    sortGender(products);
    func(productsPerPage);
};

function sortGender(arr) {
    arr.sort(function (a, b) {
        if (a.gender > b.gender) {
            return 1;
        }
        if (a.gender < b.gender) {
            return -1;
        }
        return 0;
    });
};

function sortByPrice() {
    numberProducts();
    sortPrice(products);
    func(productsPerPage);
};

function sortPrice(arr) {
    arr.sort(function (a, b) {
        return a.price - b.price
    });
};

//function to creating pages buttons
function drawButtons(productsPerPage) {
    let buttonCount = products.length / productsPerPage;
    let butt = '';

    for (let i = 0; i < buttonCount; i++) {

        butt += (`<button class='numBtn'>${i + 1}</button>`)
    }
    document.getElementById('buttons').innerHTML = butt;
};

function setEvents() {
    let items = document.getElementsByClassName('numBtn');

    for (let item of items) {
        item.addEventListener('click', function () {
            let pageNum = +this.innerHTML;
            let start = (pageNum - 1) * productsPerPage;
            let end = start + productsPerPage;

            let notes = products.slice(start, end)
            addProducts(notes);
            console.log(notes);
        });
    };
};

//functions of hover
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
}

//categories functions
var min = 0;
var max = 0;
function toOnLoad(){
     
    var xhr = new XMLHttpRequest();

        xhr.open("GET", "http://www.json-generator.com/api/json/get/ceeEOrLWiG?indent=2");
        xhr.send();

            var addProducts = () => {
                var content = '';

                for (var i = min; i < max; i++) {
                    content +=
                        `<div class="goods" onmouseover="mOver(this)" onmouseout="mOut(this)">
                            <img  src="${products[i].image}" data-index="${i}" onclick="addToNewWindow(this)"> 
                            <h4>${products[i].name}</h4>
                            <p>${products[i].color}</p>
                            <p>${products[i].gender}</p>
                            <h5>${products[i].price} ₴</h5>
                            <input type="button" value="Buy now!" id="btn-cart" onmouseover="buttonOver(this)" onmouseout="buttonOut(this)" data-index="${i}" onclick="addToBasket(this)">                            
                        </div>`
                };
                document.getElementById('data').innerHTML = content;
            };
            function numberProducts() {
                products = JSON.parse(xhr.response);
                addProducts();
            };
        xhr.onload = numberProducts;
};

function celebretiesTshirts(){
    min = 0;
    max = 19;
    toOnLoad();
};

function movieTshirts(){
    min = 20;
    max = 39;
    toOnLoad();
};

function musicTshirts(){
    min = 40;
    max = 59;
    toOnLoad();
};

function footballTshirts(){
    min = 60;
    max = 79;
    toOnLoad();
};

function onCheckbox() {
    var cel = document.getElementById("cel");
    var mov = document.getElementById("mov");
    var mus = document.getElementById("mus");
    var fot = document.getElementById("fot");
        if (cel.checked ) {
            celebretiesTshirts();}
        if(mov.checked){
            movieTshirts();
        } 
        if(mus.checked){
            musicTshirts();
        } 
        if(fot.checked){
            footballTshirts();
        } 
        else{
            addProducts(products);
        };
    };

//transition function to the social networks pages 
function toFacebook(){
    window.open("https://www.facebook.com/profile.php?id=100011103131492");
};

function toTelegram(){
    window.open("https://t.me/EugenChetverov");
};

function toYoutube(){
    window.open("https://www.youtube.com/channel/UCZhKE1mxOQwm_G3ekphMFqg");
};

function toLinedin(){
    window.open("https://www.linkedin.com/in/eugen-chetverov-800631185/");
};

//add to local storage
function addToBasket(e){
    let id = e.getAttribute('data-index');

    if(basket[id]===undefined){
      basket[id] = 1; 
    }else{
      basket[id]++;
    };
    localStorage.setItem('basket', JSON.stringify(basket));
    showBasket();
  };

  function checkBasket(){
      if(localStorage.getItem('basket') !== null){
          basket = JSON.parse(localStorage.getItem('basket'));
      };
  };
  checkBasket();
  showBasket();

  function showBasket(){
      let out = '';
      for(let key in basket){
        out+= basket[key];
      };
      document.querySelector('.counter').innerHTML = out.length ;
  };

function toBasket(){
    window.open("basket.html");
};

//open new item in new window

function addToNewWindow(el) {
    // let id = el.getAttribute('data-index');
    item = {};
    
    // item[id] = 1; 
   
    // localStorage.setItem('item', JSON.stringify(item));
    
    let id = el.getAttribute('data-index');

    if(item[id]===undefined){
      item[id] = 1; 
    }else{
      item[id]++;
    };
     localStorage.removeItem("item");
    localStorage.setItem('item', JSON.stringify(item));
    window.open("item.html");
};
  