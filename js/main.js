let slideIndex = 1;
let remainingTime = 70000;

function setTime() {
  if (remainingTime == 0) return;
  let h = Math.floor(remainingTime / 3600);
  let m = Math.floor((remainingTime % 3600) / 60);
  let s = (remainingTime % 3600) % 60;
  document.querySelector("#hours").innerHTML = h;
  document.querySelector("#minutes").innerHTML = m;
  document.querySelector("#seconds").innerHTML = s;
}

setInterval(() => {
  remainingTime -= 1;
  setTime();
}, 1000);

function setSlide(input, index) {
  slideIndex = index;
  let item = document.querySelector(`#${input}`);
  let slides = [...document.querySelector(".slides").children];
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
    let form = document.getElementById("search-form");
    let div = document.getElementById("add-searchbar");
    div.appendChild(form);
  } else {
    if (window.innerWidth > 575) {
    let form = document.getElementById("search-form");
    let div = document.getElementById("add-searchbar");
    let navRight = document.getElementById("nav-right");

    div.removeChild(form);
    navRight.appendChild(form)

}
  }
});


///////////////////////////input search///////////////////////
// const searchInput=$.querySelector("#search-form input")
const searchIcon=$.querySelector("#search-icon");
const allProducts = [
  { id: 1, name: "هدفون", price: 20 },
  { id: 2, name: "طفلانه", price: 40 },
  { id: 3, name: "هندزفری", price: 87 },
  { id: 4, name: "کفش", price: 876 },
  { id: 5, name: "کیف", price: 345 },
  { id: 6, name: "شلوار شیک", price: 889 },
  { id: 7, name: "بهترین لباس", price: 889 },
  { id: 8, name: "بلوس", price: 889 },
];



searchIcon.addEventListener("click", function searchProduct(){
  const searchValue=$.querySelector("#search-form input").value;
  const result=allProducts.filter(function(product){
    return product.name.includes(searchValue );
  })



  // show result
  const resultContainer=$.querySelector("#result-container");
  resultContainer.innerHTML="";

  result.forEach(function(product){
    const productElement=$.createElement("div");
    productElement.textContent=product.id;
    resultContainer.appendChild(productElement);
  })

  
  
})
