!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=2)}([,,function(e,t,n){"use strict";n.r(t);n(3),n(4);var r=document.querySelector(".maincontent"),o=document.querySelector(".basket__circle"),i=0,l=[],c=localStorage;function a(){var e=Array.from(document.querySelectorAll(".product__figure")).map((function(e){return e.innerHTML})).map(Number).reduce((function(e,t){return e+t}));console.log(e),document.querySelector(".total__num").innerText=e}if(r.addEventListener("click",(function(e){var t=e.target;if(console.log(t.getAttribute("class")),"product__btn blue"===t.getAttribute("class")){t.classList.add("green"),t.classList.remove("blue"),t.innerText="В корзине",i++,o.classList.add("visible"),o.innerText=i;var n=t.parentNode,r={img:n.previousElementSibling.firstElementChild.src,about:n.firstElementChild.innerText,price:n.childNodes[3].firstElementChild.innerText};l.push(r),c.date=JSON.stringify(l)}if("product__up"===t.getAttribute("class")){e.preventDefault();var s=t.nextElementSibling.innerText,u=d=t.parentNode.nextElementSibling.firstElementChild.innerText;console.log(d),s<10&&(d=d/s+Number(u),t.parentNode.nextElementSibling.firstElementChild.innerText=d,s++),t.nextElementSibling.innerText=s,a()}if("product__down"===t.getAttribute("class")){e.preventDefault();var d;s=t.previousElementSibling.innerText,u=(d=t.parentNode.nextElementSibling.firstElementChild.innerText)/s;s>1&&(d=Number(d)-Number(u),t.parentNode.nextElementSibling.firstElementChild.innerText=d,s--),t.previousElementSibling.innerText=s,a()}if("product__dell"===t.getAttribute("class")){e.preventDefault;var p=t.parentNode.parentNode.parentNode;console.log(p);var m=t.parentNode.parentNode;p.removeChild(m);var v=t.parentNode.parentNode.firstElementChild.firstElementChild.src;if(console.log(v),p.firstElementChild)a();else{var f=document.querySelector(".total"),_=document.querySelector(".title");f.innerHTML="",_.innerText="Корзина пуста"}}})),document.querySelector(".basket-product__list")){for(var s=function(){""!=f.value&&""!=_.value&&""!=b.value?g.classList.remove("btn-bgcolor"):g.classList.add("btn-bgcolor")},u=JSON.parse(c.date||"{}"),d=document.querySelector(".basket-product__list"),p=0;p<u.length;p++){console.log(u[p].img);var m=document.createElement("li");m.classList.add("basket-product__item"),m.innerHTML='\n    <div class="product__img product__img-maxsize"><img class="product__pic" src="/'.concat(u[p].img.split("/").reverse()[0],'"></div>\n    <div class="product__info">\n      <div class="product__about product__about-maxsize">').concat(u[p].about,'</div>\n      <div class="product__count">\n        <a class="product__up" href="#">+</a>\n        <div class="product__number">1</div>\n        <a class="product__down" href="#">-</a>\n      </div>\n      <div class="product__price  product__price-minwidth"><span class="product__figure">').concat(u[p].price,'</span> ₽</div>\n      <div class="product__dell" href="#"><span>Удалить</span></div>\n    </div>'),d.appendChild(m)}a();var v=document.querySelector("#form"),f=v.elements.name,_=v.elements.phone,b=v.elements.email,g=v.elements.btn,y=document.querySelector(".overlay"),S=document.querySelector(".overlay__name"),x=document.querySelector(".overlay__phone");f.addEventListener("input",s),_.addEventListener("input",s),b.addEventListener("input",s),g.addEventListener("click",(function(e){e.preventDefault();var t,n,r=(t=document.querySelector(".email__error"),(n=/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i.test(b.value))?t.classList.add("error-none"):t.classList.remove("error-none"),n),o=function(){var e=document.querySelector(".phone__error"),t=/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(_.value);return t?e.classList.add("error-none"):e.classList.remove("error-none"),t}();f.value&&_.value&&b.value&&r&&o&&(y.classList.remove("overlay-none"),S.innerText=f.value,x.innerText=_.value)})),y.addEventListener("click",(function(e){e.preventDefault(),"overlay__close"===e.target.getAttribute("class")&&y.classList.add("overlay-none")}))}},function(e,t,n){},function(e,t){console.log("this is the skills module")}]);