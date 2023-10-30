let slideIndex = 1;
let remainingTime = 70000;
const $ = document;

// function setTime() {
//   if (remainingTime == 0) return;
//   let h = Math.floor(remainingTime / 3600);
//   let m = Math.floor((remainingTime % 3600) / 60);
//   let s = (remainingTime % 3600) % 60;
//   $.querySelector("#hours").innerHTML = h;
//   $.querySelector("#minutes").innerHTML = m;
//   $.querySelector("#seconds").innerHTML = s;
// }

// setInterval(() => {
//   remainingTime -= 1;
//   setTime();
// }, 1000);



function setSlide(input, index) {
  slideIndex = index;
  let item = $.querySelector(`#${input}`);
  let slides = [...$.querySelector(".slides").children];
  slides.forEach((element) => {
    element.classList.remove("active");
  });
  item.classList.add("active");
}

setInterval(() => {
  slideIndex += 1;
  if (slideIndex == 4) {
    slideIndex = 1;
  }
  setSlide(`slide${slideIndex}`, slideIndex);
}, 4000);

const containerProduct = $.querySelector('.overflow');
console.log(containerProduct);
//?============= dataProducts =============\\
const  dataProducts = [
    {id: 0, imgSrc: './images/product10.png', productName: 'هندزفری',category : "shoes" ,price: '30,0', star: 3 , like:true , off : false , bascket : false},
    {id: 1, imgSrc: './images/product12.png', productName: 'Clothes 2',category : "shoes" ,price: '25,0', star: 3 , like:true , off : false , bascket : false},
    {id: 2, imgSrc: './images/product3.png', productName: 'Clothes 3',category : "plant" ,price: '35,0', star: 3 , like:true , off : false , bascket : false},
    {id: 3, imgSrc: './images/product6.png', productName: 'Clothes 4',category : "shoes" ,price: '22,0', star: 3 , like:true , off : false , bascket : false},
    {id: 4, imgSrc: './images/product3.png', productName: 'Clothes 5',category : "shoes" ,price: '29,0', star: 3 , like:true , off : false , bascket : false},
    {id: 5, imgSrc: './images/product3.png', productName: 'Clothes 6',category : "shoes" ,price: '24,0', star: 3 , like:true , off : false , bascket : false},
    {id: 6, imgSrc: './images/product3.png', productName: 'تیشرت',category : "plant" ,price: '32,0', star: 3 , like:true , off : false , bascket : false},
    {id: 7, imgSrc: './images/product3.png', productName: 'Clothes 8',category : "shoes" ,price: '40,0', star: 3 , like:true , off : false , bascket : false},
    {id: 8, imgSrc: './images/product3.png', productName: 'Clothes 9',category : "shoes" ,price: '40,0', star: 3 , like:true , off : false , bascket : false},
    {id: 9, imgSrc: './images/product3.png', productName: 'Clothes 10', price: '40,0',  star: 3 , category : "shoes" , like:true , off : false , bascket : false},
    {id: 10, imgSrc: './images/product6.png', productName: 'Clothes 11', price: '40,0', star: 3 , category : "shoes" , like:true , off : false , bascket : false},
    {id: 11, imgSrc: './images/product6.png', productName: 'Clothes 12', price: '40,0', star: 3 , category : "shoes" , like:true , off : false , bascket : false},
    {id: 12, imgSrc: './images/product6.png', productName: 'کفش', price: '40,0', star: 3 , category : "plant" , like:true , off : false , bascket : false},
    {id: 13, imgSrc: './images/product6.png', productName: 'Clothes 14', price: '40,0', star: 3 , category : "shoes" , like:true , off : false , bascket : false},
    {id: 14, imgSrc: './images/product6.png', productName: 'Clothes 15', price: '40,0', star: 3 , category : "shoes" , like:true , off : false , bascket : false},
    {id: 15, imgSrc: './images/product6.png', productName: 'Clothes 16', price: '40,0', star: 3 , category : "shoes" , like:true , off : false , bascket : false},
    {id: 16, imgSrc: './images/product6.png', productName: 'Clothes 17', price: '40,0', star: 3 , category : "shoes" , like:true , off : false , bascket : false},
    {id: 17, imgSrc: './images/product6.png', productName: 'Clothes 18', price: '40,0', star: 3 , category : "shoes" , like:true , off : false , bascket : false},
    ]
    // ==========> filter data Products <========== \\
    let dataPlanet = dataProducts.filter((item) => {
        if(item.category === "plant"){
          console.log(item);
          return item
        }
      })
      // ===========  view data products  <========== \\
    for(let i = 0; i < dataPlanet.length; i++) {
      console.log(i, dataPlanet[i]);
      let product = dataPlanet[i];
     
      console.log(product.id);
      console.log(containerProduct);
      // Todo  insertAdjacentHTML  replace code Html  \\
      containerProduct.insertAdjacentHTML('afterbegin',`
         
   <div class="product  col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="shoping-card">
                  <div class="img-sec">
                      <img src=${product.imgSrc} alt="">
                      <span class="hot-offer ">پیشنهاد ویژه</span>
                      
                      <div class="stars">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                      </div>
                  </div>
                  <h2>${product.productName}</h2>
                  <h2>${product.category}</h2>
                  <div class="buttons">
                      <div class="right">
                          <span class="price">${product.price}</span>
      
                      </div>
                      <div class="left">
                          <div class="extend-btn">
                          <a class="b-text" href="">علاقه</a>
                          <a class="b-icon" href=""><i class="fa-solid fa-heart"></i></a>
                      </div>
                      <div class="extend-btn">
                          <a class="b-text" href="">خرید</a>
                          <a class="b-icon" href=""><i class="fa-solid fa-cart-shopping"></i></a>
                       </div>
                    </div>
                  </div>
                 </div>
              </div>
          
         `)
    }

// ////////////////////  new js  ///////////////////////////

window.addEventListener("resize", function () {
  if (window.innerWidth < 575) {
    let form = $.getElementById("search-form");
    let div = $.getElementById("add-searchbar");
    div.appendChild(form);
  } else {
    if (window.innerWidth > 575) {
      let form = $.getElementById("search-form");
      let div = $.getElementById("add-searchbar");
      let navRight = $.getElementById("nav-right");

      div.removeChild(form);
      navRight.appendChild(form);
    }
  }
});



/////////////////////////input search///////////////////////
const searchIcon = $.querySelector("#search-icon");
function searchProducts() {
  console.log("clicked");

  const input = $.querySelector("#search-form input").value;
  const products = $.getElementsByClassName("product");
  const banner = $.querySelector("#banner");
  const error = $.querySelector("#error");

  for (let i = 0; i < products.length; i++) {
    var productName = products[i].textContent;

    if (productName.includes(input)) {
      products[i].classList.remove("hidden");
      banner.classList.add("hidden");
    } else {
      products[i].classList.add("hidden");
      error.innerHTML = "محصول پیدا نشد.";
      banner.classList.remove("hidden");
    }
  }
}


// hello