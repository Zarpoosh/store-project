let slideIndex = 1;
let remainingTime = 70000;
const $ = document;

function setTime() {
  if (remainingTime == 0) return;
  let h = Math.floor(remainingTime / 3600);
  let m = Math.floor((remainingTime % 3600) / 60);
  let s = (remainingTime % 3600) % 60;
  $.querySelector("#hours").innerHTML = h;
  $.querySelector("#minutes").innerHTML = m;
  $.querySelector("#seconds").innerHTML = s;
}

setInterval(() => {
  remainingTime -= 1;
  setTime();
}, 1000);

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

///////////////////////////input search///////////////////////
// const searchInput=$.querySelector("#search-form input")
const searchIcon = $.querySelector("#search-icon");

// searchIcon.addEventListener("click", function searchProduct(){
//   // console.log("clicked")
//   const searchValue=$.querySelector("#search-form input").value;
//   const result=allProducts.filter(function(product){
//     return product.name.includes(searchValue );
//   })

//   // show result
//   const resultContainer=$.querySelector("#result-container");
//   resultContainer.innerHTML="";

//   result.forEach(function(product){
//     const productElement=$.createElement("div");
//     productElement.textContent=product.name;
//     resultContainer.appendChild(productElement);
//   })

// })

function searchProducts() {
  console.log("clicked");

  const input = $.querySelector("#search-form input").value;
  const products = $.getElementsByClassName("product");
  const banner = $.querySelector("#banner");
  const error = $.querySelector("#error");

  for (var i = 0; i < products.length; i++) {
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
