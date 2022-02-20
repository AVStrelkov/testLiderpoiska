import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";

// window.load = function(){
//   myBody = document.getElementById('#transition_disabled');
//   myBody.removeAttr("id");
// }
// $("window").load(function() {
//   $("body").removeAttr("id");
// });

const product = document.querySelector('.maincontent');
const basket = document.querySelector('.basket__circle');
var size = 0;
var array = [];
let storage = localStorage;

function sum(){
  let allPrice = Array
      .from(document.querySelectorAll('.product__figure'))
      .map((item) => {
        return item.innerHTML 
      })
      .map(Number);
    let total = allPrice.reduce((sum, item) => {
      return sum+item;
    });
    console.log(total);
    var myTotal = document.querySelector('.total__num');
    myTotal.innerText = total;
}

product.addEventListener('click', function(e){
  const item = e.target;
  console.log(item.getAttribute('class'));
  if(item.getAttribute('class') === 'product__btn blue'){
    item.classList.add("green");
    item.classList.remove("blue");
    item.innerText = 'В корзине';
    // item.innerHTML = `<ul><li>${size}</li><li>2</li></ul>`;
    size++;
    basket.classList.add("visible");
    basket.innerText = size;

    var productInfo = item.parentNode;
    var productImg = productInfo.previousElementSibling.firstElementChild.src;
    var productAbout = productInfo.firstElementChild.innerText
    var productPrice = productInfo.childNodes[3].firstElementChild.innerText;
    // console.log(productImg);
    // console.log(productAbout);
    // console.log(productPrice);


    var obj ={
      img: productImg,
      about: productAbout,
      price: productPrice
    }

    array.push(obj);

    
    storage.date = JSON.stringify(array);


    // for (var i = 0; i < 10; i++) {
    //   console.log('placemark' + i);    
    // }
  }
  if(item.getAttribute('class') === 'product__up'){
    e.preventDefault();
    var mySize = item.nextElementSibling.innerText
    var myPrice = item.parentNode.nextElementSibling.firstElementChild.innerText
    var newPrice = myPrice;
    console.log(myPrice);
    if(mySize < 10){
      myPrice = (myPrice/mySize) + Number(newPrice);
      item.parentNode.nextElementSibling.firstElementChild.innerText = myPrice;
      mySize++;
    }
    item.nextElementSibling.innerText = mySize;
    
    sum();
    
  };
  if(item.getAttribute('class') === 'product__down'){
    e.preventDefault();
    var mySize = item.previousElementSibling.innerText
    var myPrice = item.parentNode.nextElementSibling.firstElementChild.innerText
    var newPrice = myPrice/mySize;
    if(mySize > 1){
      myPrice = Number(myPrice) - Number(newPrice);
      item.parentNode.nextElementSibling.firstElementChild.innerText = myPrice;
      mySize--;
    }
    item.previousElementSibling.innerText = mySize;
    
    sum();

  };

  if(item.getAttribute('class') === 'product__dell'){
    e.preventDefault;
    const parentDell = item.parentNode.parentNode.parentNode;
    console.log(parentDell);
    const childDell = item.parentNode.parentNode;
    parentDell.removeChild(childDell);
    const imgDell = item.parentNode.parentNode.firstElementChild.firstElementChild.src;
    console.log(imgDell);
    if (parentDell.firstElementChild) {
      sum();
    }
    else{
      var myTot = document.querySelector('.total');
      var myTitle = document.querySelector('.title');
      myTot.innerHTML = "";
      myTitle.innerText = "Корзина пуста";
    }
  }
});
if(document.querySelector('.basket-product__list')){
  const newArray = JSON.parse(storage.date || '{}');
  // console.log(newArray);
  var list = document.querySelector('.basket-product__list');
  
  

  for(var i = 0; i < newArray.length; i++){
    console.log(newArray[i].img);
    const newItem = document.createElement('li');
    newItem.classList.add('basket-product__item');
    newItem.innerHTML = `
    <div class="product__img product__img-maxsize"><img class="product__pic" src="/${newArray[i].img.split("/").reverse()[0]}"></div>
    <div class="product__info">
      <div class="product__about product__about-maxsize">${newArray[i].about}</div>
      <div class="product__count">
        <a class="product__up" href="#">+</a>
        <div class="product__number">1</div>
        <a class="product__down" href="#">-</a>
      </div>
      <div class="product__price  product__price-minwidth"><span class="product__figure">${newArray[i].price}</span> ₽</div>
      <div class="product__dell" href="#"><span>Удалить</span></div>
    </div>`
    list.appendChild(newItem);  
  };
  sum();
  var myForm = document.querySelector('#form');
  var myName = myForm.elements.name;
  var myPhone = myForm.elements.phone;
  var myEmail = myForm.elements.email;
  var myBtn = myForm.elements.btn;
  var myOverlay = document.querySelector('.overlay');
  var myOverlayName = document.querySelector('.overlay__name');
  var myOverlayPhone = document.querySelector('.overlay__phone');
  
  myName.addEventListener('input', changeBackground);
  myPhone.addEventListener('input', changeBackground);
  myEmail.addEventListener('input', changeBackground);

  function changeBackground() {
    if (myName.value != '' && myPhone.value != '' && myEmail.value != '') {
      myBtn.classList.remove("btn-bgcolor");
    } 
    else{
      myBtn.classList.add("btn-bgcolor");
    }
  }

  function ValidMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myEmailError = document.querySelector('.email__error');
    var valid = re.test(myEmail.value);
    if (valid){
      myEmailError.classList.add("error-none");
    } 
    else {
      myEmailError.classList.remove("error-none");
    }
    return valid;
  }

function ValidPhone() {
  var re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  var myPhoneError = document.querySelector('.phone__error');
  var valid = re.test(myPhone.value);
  if (valid){
    myPhoneError.classList.add("error-none");
  } 
  else {
    myPhoneError.classList.remove("error-none");
  }
  return valid;
}
  
  myBtn.addEventListener('click', function(e){
    e.preventDefault();
    var validEmail = ValidMail();
    var validMyPhone = ValidPhone();
    if(myName.value && myPhone.value && myEmail.value && validEmail && validMyPhone){
      myOverlay.classList.remove("overlay-none");
      myOverlayName.innerText = myName.value;
      myOverlayPhone.innerText = myPhone.value;
    };
  });

  myOverlay.addEventListener('click', function(e){
    e.preventDefault();
    var myClose = e.target; 
    if(myClose.getAttribute('class') === 'overlay__close'){
      myOverlay.classList.add("overlay-none");
    }
  });
}


// item.innerHTML = `
// <li class="basket-product__item">
  // <div class="product__img"><img class="product__pic" src="/666cf5d4f1106c22f6f480a563723f06.jpg"></div>
  // <div class="product__info">
  //   <div class="product__about product__about-maxsize">Фитнес-трекер HONOR Band 5 CRS-B19S, 0.95", черный / розовый</div>
  //   <div class="product__count">
  //     <a class="product__up" href="#">+</a>
  //     <div class="product__number">1</div>
  //     <a class="product__down" href="#">-</a>
  //   </div>
  //   <div class="product__price product__price-minwidth">1650 ₽</div>
  //   <a class="product__dell" href="#"></a>
  // </div>
// </li>`

