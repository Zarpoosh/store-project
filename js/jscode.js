////////////////////////////////////////////////////////
//?============= dataProducts =============\\
const  dataProducts = [
    {id: 1,  imgSrc: './images/product12.png', productName: 'تیشرت مشکی'  ,category : "زنانه" ,price: '25,0', star: 3 , like:true , off : false , bascket : false},
    {id: 2,  imgSrc: './images/P6.jpg',        productName: 'لباس محلی'   ,category : "زنانه" ,price: '35,0', star: 3 , like:true , off : false , bascket : false},
    {id: 3,  imgSrc: './images/P8.jpg',        productName: 'دامن مجلسی'  ,category : "زنانه" ,price: '22,0', star: 3 , like:true , off : false , bascket : false},
    {id: 4,  imgSrc: './images/product1.png',  productName: 'Clothes 5' ,category : "shoes" ,price: '29,0', star: 3 , like:true , off : false , bascket : false},
    {id: 0,  imgSrc: './images/product2.png',  productName: 'مانتو پاییزی'   ,category : "زنانه" ,price: '30,0', star: 3 , like:true , off : false , bascket : false},
    {id: 5,  imgSrc: './images/product3.png',  productName: 'Clothes 6'  ,category : "shoes" ,price: '24,0', star: 3 , like:true , off : false , bascket : false},
    {id: 6,  imgSrc: './images/product4.png',  productName: 'تیشرت',      category : "plant" ,price: '32,0', star: 3 , like:true , off : false , bascket : false},
    {id: 7,  imgSrc: './images/product5.png',  productName: 'Clothes 8',category : "shoes" ,price: '40,0', star: 3 , like:true , off : false , bascket : false},
    {id: 8,  imgSrc: './images/product6.png',  productName: 'Clothes 9',category : "shoes" ,price: '40,0', star: 3 , like:true , off : false , bascket : false},
    {id: 9,  imgSrc: './images/product7.png',  productName: 'Clothes 10', price: '40,0',  star: 3 , category : "shoes" , like:true , off : false , bascket : false},
    {id: 10, imgSrc: './images/product8.png',  productName: 'کیف مجلسی', price: '40,0', star: 3 , category : "زنانه" , like:true , off : false , bascket : false},
    {id: 11, imgSrc: './images/product9.png',  productName: 'Clothes 12', price: '40,0', star: 3 , category : "shoes" , like:true , off : false , bascket : false},
    {id: 12, imgSrc: './images/product10.png', productName: 'شلوار لی ', price: '40,0', star: 3 , category : "زنانه" , like:true , off : false , bascket : false},
    {id: 13, imgSrc: './images/product11.png', productName: 'Clothes 14', price: '40,0', star: 3 , category : "shoes" , like:true , off : false , bascket : false},
    {id: 14, imgSrc: './images/product12.png', productName: 'Clothes 15', price: '40,0', star: 3 , category : "shoes" , like:true , off : false , bascket : false},
    {id: 15, imgSrc: './images/product13.png', productName: 'Clothes 16', price: '40,0', star: 3 , category : "shoes" , like:true , off : false , bascket : false},
    {id: 16, imgSrc: './images/product14.png', productName: 'Clothes 17', price: '40,0', star: 3 , category : "shoes" , like:true , off : false , bascket : false},
    {id: 17, imgSrc: './images/product15.png', productName: 'Clothes 18', price: '40,0', star: 3 , category : "shoes" , like:true , off : false , bascket : false},
    ]
  
    
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
      const container = $.querySelector(".product-sec-new");
      
      // Iterate over each unique category in the filtered data
      const categories = Array.from(new Set(dataFilter.map(item => item.category)));
      for (let category of categories) {
        // Create a new div element with the "overflow" class for each category
        let div = $.createElement('div');
        div.classList.add('row', 'overflow');
        container.appendChild(div);
    
        // Filter the data based on the current category
        const categoryFilter = dataFilter.filter(item => item.category === category);
        for (let i = 0; i < categoryFilter.length; i++) {
          let product = categoryFilter[i];
    
          // Append the product HTML to the corresponding category div
          div.insertAdjacentHTML('beforeend', `
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
                <h2>${product.productName}</h2>
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
    
    // Filter the data for a specific category
    const filterCategory = "زنانه";
  
    const dataFilter = filteredProducts(dataProducts, filterCategory);
    console.log(dataFilter)
    // Generate the container divs with the products for each category
    generateProducts(dataFilter);
    generateProducts(dataFilter);
  


  ///////////////////////////////////// == == >> old js code <<== == //////////////////////////////////////////////


  //?============= dataProducts =============\\
const  dataProducts = [
  {id: 1,  imgSrc: './images/product12.png', productName: 'تیشرت مشکی'  ,category : "زنانه" ,price: '25,0', star: 3 , like:true , off : false , bascket : false},
  {id: 2,  imgSrc: './images/P6.jpg',        productName: 'لباس محلی'   ,category : "زنانه" ,price: '35,0', star: 3 , like:true , off : false , bascket : false},
  {id: 3,  imgSrc: './images/P8.jpg',        productName: 'دامن مجلسی'  ,category : "زنانه" ,price: '22,0', star: 3 , like:true , off : false , bascket : false},
  {id: 4,  imgSrc: './images/product1.png',  productName: 'Clothes 5' ,category : "shoes" ,price: '29,0', star: 3 , like:true , off : false , bascket : false},
  {id: 0,  imgSrc: './images/product2.png',  productName: 'مانتو پاییزی'   ,category : "زنانه" ,price: '30,0', star: 3 , like:true , off : false , bascket : false},
  {id: 5,  imgSrc: './images/product3.png',  productName: 'Clothes 6'  ,category : "shoes" ,price: '24,0', star: 3 , like:true , off : false , bascket : false},
  {id: 6,  imgSrc: './images/product4.png',  productName: 'تیشرت',      category : "plant" ,price: '32,0', star: 3 , like:true , off : false , bascket : false},
  {id: 7,  imgSrc: './images/product5.png',  productName: 'Clothes 8',category : "shoes" ,price: '40,0', star: 3 , like:true , off : false , bascket : false},
  {id: 8,  imgSrc: './images/product6.png',  productName: 'Clothes 9',category : "shoes" ,price: '40,0', star: 3 , like:true , off : false , bascket : false},
  {id: 9,  imgSrc: './images/product7.png',  productName: 'Clothes 10', price: '40,0',  star: 3 , category : "shoes" , like:true , off : false , bascket : false},
  {id: 10, imgSrc: './images/product8.png',  productName: 'کیف مجلسی', price: '40,0', star: 3 , category : "زنانه" , like:true , off : false , bascket : false},
  {id: 11, imgSrc: './images/product9.png',  productName: 'Clothes 12', price: '40,0', star: 3 , category : "shoes" , like:true , off : false , bascket : false},
  {id: 12, imgSrc: './images/product10.png', productName: 'شلوار لی ', price: '40,0', star: 3 , category : "زنانه" , like:true , off : false , bascket : false},
  {id: 13, imgSrc: './images/product11.png', productName: 'Clothes 14', price: '40,0', star: 3 , category : "shoes" , like:true , off : false , bascket : false},
  {id: 14, imgSrc: './images/product12.png', productName: 'Clothes 15', price: '40,0', star: 3 , category : "shoes" , like:true , off : false , bascket : false},
  {id: 15, imgSrc: './images/product13.png', productName: 'Clothes 16', price: '40,0', star: 3 , category : "shoes" , like:true , off : false , bascket : false},
  {id: 16, imgSrc: './images/product14.png', productName: 'Clothes 17', price: '40,0', star: 3 , category : "shoes" , like:true , off : false , bascket : false},
  {id: 17, imgSrc: './images/product15.png', productName: 'Clothes 18', price: '40,0', star: 3 , category : "shoes" , like:true , off : false , bascket : false},
  ]
  const containerProduct = $.querySelector('.overflow');
  console.log(containerProduct);
  var dataFilter;
  filteredProducts(dataProducts , "زنانه");
  GeneratesProducts(dataFilter);

   



function createcontainer(category, dataFilter){
  let container=$.querySelector(".product-sec-new")
  let div = $.createElement('div');
  div.classList.add('row overflow');
  container.appendChild(div);
   

  
}
/**
    * Filters the given data based on the specified category.
    *
    * @param {Array} data - The data to be filtered.
    * @param {string} filterCategory - The category to filter the data by.
    * @return {Array} - The filtered data.
    */
   function filteredProducts(data , filterCategory){
         dataFilter = data.filter((item) => {
        if(item.category === filterCategory){
          console.log(item);
          return item
        }
       
      })
      console.log(dataFilter);
       return (dataFilter)
   } 
  
      /**
       * Generates products based on the provided data filter
       *is displayed on the screen
       * @param {Array} dataFilter - The data filter to generate products from.
       */
      function GeneratesProducts(dataFilter){
    for(let i = 0; i < dataFilter.length; i++) {
      console.log(i, dataFilter[i]);
      let product = dataFilter[i];

          // Create a new div element with the "overflow" class
 
      console.log(product.id);
      console.log(containerProduct);
      // Todo  insertAdjacentHTML  replace code Html  \\
      containerProduct.insertAdjacentHTML('afterbegin',`
   <div class="product  col-lg-3 col-md-4 col-sm-4 col-xs-12">
                <div class="shoping-card"sdsfd>
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
          
         `)
    }

  }
