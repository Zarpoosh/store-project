// function handlerDataProducts(category){

  
// filteredProducts.forEach(product =>{

//   // ==========> filter data Products <========== \\
//   let dataPlanet = dataProducts.filter((item) => {
//       if(item.category =category){
//         console.log(item);
//         return item
//       }
//     })
//     // ===========  view data products  <========== \\
  
//   for(let i = 0; i < dataPlanet.length; i++) {
//     console.log(i, dataPlanet[i]);
//     let product = dataPlanet[i];
   
//     console.log(product.id);
//     console.log(containerProduct);
//     // Todo  insertAdjacentHTML  replace code Html  \\
//     containerProduct.insertAdjacentHTML('afterbegin',`
       
//   <div class="product  col-lg-3 col-md-4 col-sm-6 col-xs-12">
//               <div class="shoping-card">
//                 <div class="img-sec">
//                     <img src=${product.imgSrc} alt="">
//                     <span class="hot-offer ">پیشنهاد ویژه</span>
                    
//                     <div class="stars">
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                     </div>
//                 </div>
//                 <h2>${product.productName}</h2>
//                 <h2>${product.category}</h2>
//                 <div class="buttons">
//                     <div class="right">
//                         <span class="price">${product.price}</span>
    
//                     </div>
//                     <div class="left">
//                         <div class="extend-btn">
//                         <a class="b-text" href="">علاقه</a>
//                         <a class="b-icon" href=""><i class="fa-solid fa-heart"></i></a>
//                     </div>
//                     <div class="extend-btn">
//                         <a class="b-text" href="">خرید</a>
//                         <a class="b-icon" href=""><i class="fa-solid fa-cart-shopping"></i></a>
//                      </div>
//                   </div>
//                 </div>
//                </div>
//             </div>
        
//        `)
//   }
// })

// }  

// //////////////////////////////////////////////////////////////////////////////////


// function handlerDataProducts(category) {
//   // Clear the container
//   containerProduct.innerHTML = '';

//   // Filter products based on the category
//   let filteredProducts = dataProducts.filter(item => item.category === category);

//   // Group products by category
//   let groupedProducts = {};
//   filteredProducts.forEach(product => {
//     if (groupedProducts.hasOwnProperty(product.category)) {
//       groupedProducts[product.category].push(product);
//     } else {
//       groupedProducts[product.category] = [product];
//     }
//   });

//   // Display products by category
//   for (let categoryName in groupedProducts) {
//     let productList = groupedProducts[categoryName];

//     // Create a new category list
//     let categoryList = document.createElement('ul');
//     categoryList.className = 'category-list';
//     categoryList.innerHTML = `<h2>${categoryName}</h2>`;

//     // Add products to the category list
//     productList.forEach(product => {
//       let listItem = document.createElement('li');
//       listItem.innerHTML = `
//         <div class="product col-lg-3 col-md-4 col-sm-6 col-xs-12">
//           <div class="shoping-card">
//             <div class="img-sec">
//               <img src=${product.imgSrc} alt="">
//               <span class="hot-offer">پیشنهاد ویژه</span>
//               <div class="stars">
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//               </div>
//             </div>
//             <h2>${product.productName}</h2>
//             <h2>${product.category}</h2>
//             <div class="buttons">
//               <div class="right">
//                 <span class="price">${product.price}</span>
//               </div>
//               <div class="left">
//                 <div class="extend-btn">
//                   <a class="b-text" href="">علاقه</a>
//                   <a class="b-icon" href=""><i class="fa-solid fa-heart"></i></a>
//                 </div>
//                 <div class="extend-btn">
//                   <a class="b-text" href="">خرید</a>
//                   <a class="b-icon" href=""><i class="fa-solid fa-cart-shopping"></i></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       `;

//       // Add the product to the category list
//       categoryList.appendChild(listItem);
//     });

//     // Add the category list to the container
//     containerProduct.appendChild(categoryList);
//   }
// }
