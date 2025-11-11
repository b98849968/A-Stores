let storedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
// console.log(storedProduct);

let caredP = document.getElementById("productsDisply");


caredP.innerHTML = `
  <div class="productDisply" id="productDisply">
        <img src="img/product/${storedProduct.imgDisplay}.jpg"  />
        <div class="textproducet">
          <h2 >${storedProduct.nameProdect}</h2>
          <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <p class="discount"> Discount by percentage : <span>${storedProduct.opponent} %</span> </p>
          <div class="price">
            <p>$ <span>${storedProduct.prise}</span></p>
            <p class="old_price">$ <span>${ storedProduct.formerPrise}</span></p>
          </div>
          <!-- توقير المنتج ِ Avaailability  -->
          <p class="avaali">Avaailability : <span> In Stock . </span></p>
              <!-- المتجر التابع له مثل امزون  -->
          <p class="storeName"> Export from store :  <span> ${storedProduct.storeName} </span></p>
          <p class="name_prodect">
               ${storedProduct.pargraph}
          </p>
          <p class="quantity">
            Hurry Up! Only  12  products left in stock . 
          </p>
          <button class="btn"><a href="${storedProduct.StorLink}" target="_blank" >  go to <i class="fa-solid fa-cart-plus"></i></a></button>
        </div>
      </div>
  `;
