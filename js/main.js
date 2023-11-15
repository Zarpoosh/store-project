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


//?============= dataProducts =============\\
const  dataProducts = [
  {id: 11, imgSrc: './images/product9.png',  productName: 'Clothes 12', price: '40,0', star: 3 , category : "shoes" , like:true , off : false , bascket : false},
  {id: 1,  imgSrc: './images/product12.png', productName: 'تیشرت مشکی'  ,category : "زنانه" ,price: '25,0', star: 3 , like:true , off : false , bascket : false},
  {id: 2,  imgSrc: './images/P6.jpg',        productName: 'لباس محلی'   ,category : "زنانه" ,price: '35,0', star: 3 , like:true , off : false , bascket : false},
  {id: 3,  imgSrc: './images/P8.jpg',        productName: 'دامن مجلسی'  ,category : "زنانه" ,price: '22,0', star: 3 , like:true , off : false , bascket : false},
  {id: 10, imgSrc: './images/product8.png',  productName: 'کیف مجلسی', price: '40,0', star: 3 , category : "زنانه" , like:true , off : false , bascket : false},
  {id: 12, imgSrc: './images/product10.png', productName: 'شلوار لی ', price: '40,0', star: 3 , category : "زنانه" , like:true , off : false , bascket : false},
  {id: 0,  imgSrc: './images/product2.png',  productName: 'مانتو پاییزی'   ,category : "زنانه" ,price: '30,0', star: 3 , like:true , off : false , bascket : false},
  
  {id: 6,  imgSrc: './images/product4.png',  productName: 'پالتو مردانه',      category : "مردانه" ,price: '32,0', star: 3 , like:true , off : false , bascket : false},
  {id: 9,  imgSrc: './images/product7.png',  productName: 'تیشرت مشکی', price: '40,0',  star: 3 , category : "مردانه" , like:true , off : false , bascket : false},
  {id: 7,  imgSrc: './images/product5.png',  productName: 'کلاه آفتابی',category : "مردانه" ,price: '40,0', star: 3 , like:true , off : false , bascket : false},
  {id: 17, imgSrc: './images/product15.png', productName: 'ست لی جدید', price: '40,0', star: 3 , category : "مردانه" , like:true , off : false , bascket : false},
  {id: 4,  imgSrc: './images/product1.png',  productName: 'کاپشن کوهنوردی' ,category : "مردانه" ,price: '29,0', star: 3 , like:true , off : false , bascket : false},
  {id: 8,  imgSrc: './images/product6.png',  productName: 'کفش ورزشی',category : "مردانه" ,price: '40,0', star: 3 , like:true , off : false , bascket : false},
  {id: 13, imgSrc: './images/product11.png', productName: 'کت و شلوار', price: '40,0', star: 3 , category : "مردانه" , like:true , off : false , bascket : false},
  {id: 16, imgSrc: './images/product14.png', productName: 'ست لی', price: '40,0', star: 3 , category : "مردانه" , like:true , off : false , bascket : false},

  {id: 7,  imgSrc: './images/product5.png',  productName: 'کلاه آفتابی',category : "کفش" ,price: '40,0', star: 3 , like:true , off : false , bascket : false},
  {id: 8,  imgSrc: './images/product6.png',  productName: 'کفش ورزشی',category : "کفش" ,price: '40,0', star: 3 , like:true , off : false , bascket : false},
  {id: 27,  imgSrc: './images/shoes2.jpg',  productName: 'کفش ورزشی',category : "کفش" ,price: '40,0', star: 3 , like:true , off : false , bascket : false},
  {id: 28,  imgSrc: './images/shoes.jpg',  productName: 'کفش مجلسی',category : "کفش" ,price: '40,0', star: 3 , like:true , off : false , bascket : false},
 
  {id: 5,  imgSrc: './images/product3.png',  productName: 'تیشرت مشکی'  ,category : "دخترانه" ,price: '24,0', star: 3 , like:true , off : false , bascket : false},
  {id: 25, imgSrc: './images/P9.jpg', productName: 'کت مجلسی', price: '40,0', star: 3 , category : "دخترانه" , like:true , off : false , bascket : false},
  {id: 14, imgSrc: './images/product12.png', productName: 'تیشرت مجلسی', price: '40,0', star: 3 , category : "دخترانه" , like:true , off : false , bascket : false},
  {id: 15, imgSrc: './images/product13.png', productName: 'کت و شلوار', price: '40,0', star: 3 , category : "دخترانه" , like:true , off : false , bascket : false},
  {id: 26, imgSrc: './images/P12.jpg', productName: 'شلوار کتان', price: '40,0', star: 3 , category : "دخترانه" , like:true , off : false , bascket : false},

  {id: 18, imgSrc: './images/h1.jpg', productName: 'هنسفری بلوتوثی', price: '40,0', star: 3 , category : "هدفون" , like:true , off : false , bascket : false},
  {id: 19, imgSrc: './images/h2.jpg', productName: 'هنسفری', price: '40,0', star: 3 , category : "هدفون" , like:true , off : false , bascket : false},
  {id: 20, imgSrc: './images/h3.jpg', productName: 'هنسفری سیمی', price: '40,0', star: 3 , category : "هدفون" , like:true , off : false , bascket : false},
  {id: 21, imgSrc: './images/h4.jpg', productName: 'هنسفری', price: '40,0', star: 3 , category : "هدفون" , like:true , off : false , bascket : false},
  {id: 22, imgSrc: './images/h5.jpg', productName: 'هدفون', price: '40,0', star: 3 , category : "هدفون" , like:true , off : false , bascket : false},
  {id: 23, imgSrc: './images/h6.jpg', productName: 'هدفون بلوتوثی', price: '40,0', star: 3 , category : "هدفون" , like:true , off : false , bascket : false},
  {id: 24, imgSrc: './images/super-product.jpg', productName: 'هدفون بی سیم', price: '40,0', star: 3 , category : "هدفون" , like:true , off : false , bascket : false},

  ]

  const containerProduct = $.querySelectorAll('.overflow');

  
  
  // Filter the data for each category div
  for (let i = 0; i < containerProduct.length; i++) {
    const container = containerProduct[i];
    const filterCategory = container.dataset.category;
    
    const dataFilter = filteredProducts(dataProducts, filterCategory);
    console.log("Load-Data-Dilter",dataFilter);
    // Generate the products for each category div
    generateProducts(dataFilter);
  }
var container_category = $.querySelector("#tag-btn");
var productsContainerAll =$.querySelector(".product-sec-new");
var elmContainerSearch= document.createElement("div");
var elm_Category=document.getElementsByClassName("category-style");
console.log('====================================');
console.log("first__category",container_category);
console.log('====================================');
/////////////////////////input search///////////////////////
const searchIcon = $.querySelector(".search-icon");
function searchProducts() {
  elmContainerSearch.classList.add('overflow');
  elmContainerSearch.classList.add('row');
productsContainerAll.appendChild(elmContainerSearch);
  console.log(productsContainerAll);
  const input = $.querySelector(".search-form input").value;
  const products = $.getElementsByClassName("product");
  console.log("all class =.products",products);
  // console.log(input)
// const titleCategory=$.querySelectorAll(".category-style")
let filterSearch=dataProducts.filter( (product)=>{
   return product.productName === input
  })
console.log(filterSearch );
if(filterSearch.length){
  container_category.classList.add('hidden');
  console.log("search okey");
  for(i=0; i < products.length ; i++){
  products[i].classList.add("hidden");}
  for(i in filterSearch){
  elmContainerSearch.insertAdjacentHTML('beforeend', `
          <div class="product col-lg-3 col-sm-4 col-xs-12">
            <div class="shoping-card">
              <div class="img-sec">
                <img src="${filterSearch[i].imgSrc}" alt="">
                <span class="hot-offer">پیشنهاد ویژه</span>
                <div class="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
              <h3>${filterSearch[i].productName}</h3>
              <h5>${filterSearch[i].category}</h5>
              <div class="buttons">
                <div class="right">
                  <span class="price">${filterSearch[i].price}</span>
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
        `);
  
         console.log('====================================');
         console.log(elmContainerSearch);
         console.log('====================================');
   for(i=0; i < elm_Category.length ; i++){
    elm_Category[i].classList.add("hidden");
   }
// elm_Category.forEach((category_item)=>{

//   category_item.classList="hidden"
// })

}
    
} else {
  const containerProduct = $.querySelectorAll('.overflow');
console.log('====================================');
console.log(filterSearch);
console.log('====================================');
   //var elm_Category=document.querySelectorAll(".category-style")
   container_category.classList.remove('hidden');
  for(i=0; i < products.length ; i++){
    products[i].classList.remove("hidden");
    
  }

  // Filter the data for each category div
  for (let i = 0; i < containerProduct.length; i++) {
    const container = containerProduct[i];
    const filterCategory = container.dataset.category;
    
    const dataFilter = filteredProducts(dataProducts, filterCategory);
    console.log("Data-Filter-Input_Search",dataFilter);
    // Generate the products for each category div
    console.log("elm_Category",elm_Category);
    for(i=0; i < elm_Category.length ; i++){
      elm_Category[i].classList.remove("hidden")
     }
    generateProducts(dataFilter);
  console.log("elm_Category",elm_Category);
    // elm_Category.forEach((category_item)=>{
    //   console.log('====================================');
    //   console.log(category_item);
    //   console.log('====================================');
    //   category_item.
    // })
    console.log('====================================');
    console.log(elmContainerSearch);
    console.log('====================================');
    if($.querySelector('.ContainerSearch')){
  var ClassContainerSearch =  $.querySelector('.ContainerSearch');
   console.log('====================================');
    console.log(ClassContainerSearch);
    console.log('====================================');
    ClassContainerSearch.remove();
    }
  }
}
 }
 function showProducts(cat , buttonElement) {
  var productsCategory = $.getElementsByClassName('overflow');
  var title=$.getElementsByClassName("category-style")
  var buttons = $.getElementsByClassName('cat-btn'); // Replace 'your-button-class' with the actual class name of your buttons
  console.log(cat)

  // Remove red background from all buttons
  for (var j = 0; j < buttons.length; j++) {
    buttons[j].style.backgroundColor = "";
  }

  // Change background color of the clicked button to red
  buttonElement.style.backgroundColor = " rgba(255, 174, 0, 0.651)";
  
  // console.log(productsCategory)
  for (var i = 0; i < productsCategory.length; i++) {
    if ( title[i].classList.contains(cat)) {
      productsCategory[i].style.display = "flex";
      title[i].style.display = "flex";

    } else {
      productsCategory[i].style.display = "none";
      title[i].style.display = "none";
    }
  }
}

searchIcon.addEventListener("click", searchProducts)
////////////////categories/////////////////////
const categoryTag=$.querySelectorAll(".category-tag");
// console.log(categoryTag)
// categoryTag.addEventListener("click" , function(){
//   console.log("clicked")
// })
/**
   * Filters the given data based on the specified category.
   *
   * @param {Array} data - The data to be filtered.
   * @param {string} filterCategory - The category to filter the data by.
   * @return {Array} - The filtered data.
   */
  function filteredProducts(data, filterCategory) {
    return data.filter((item) => item.category === filterCategory);
  }
  
  /**
   * Generates products based on the provided data filter and displays
   * it on the screen.
   *
   * @param {Array} dataFilter - The data filter to generate products from.
   */
  function generateProducts(dataFilter) {
    var loadContainer =$.querySelector(".product-sec-new");
    
    for (let i = 0; i < containerProduct.length; i++) {
      const container = containerProduct[i];
      const categoryFilter = filteredProducts(dataFilter, container.dataset.category);
      
      for (let j = 0; j < categoryFilter.length; j++) {
        let product = categoryFilter[j];
        
        // Append the product HTML to the corresponding category div
        container.insertAdjacentHTML('beforeend', `
          <div class="product col-lg-3 col-sm-4 col-xs-12">
            <div class="shoping-card">
              <div class="img-sec">
                <img src="${product.imgSrc}" alt="">
                <span class="hot-offer">پیشنهاد ویژه</span>
                <div class="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
              <h3>${product.productName}</h3>
              <h5>${product.category}</h5>
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
        `);
      }
    }
  }