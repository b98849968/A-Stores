const swiperTow = new Swiper(".mySwipers-sm-2", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  grabCursor: true,
  touchRatio: 1,
  touchAngle: 45,

  effect: "slide",
  speed: 300,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    420: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    430: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    550: {
      slidesPerView: 1,
      spaceBetween: 17,
    },
    750: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 5,
      spaceBetween: 7,
    },
  },
});
let conncetedsTow = document.getElementById("swiper-wrappersTow");
conncetedsTow.innerHTML = " ";
let tasksTow = [
  {
    id: 1,
    storeName: " Alibaba ",
    nameProdect: " Android Smartphone 2024 Original Android  ",
    opponent: 11,
    imgDisplay: "product1-Ab",
    imgHover: "product-1-Ab",
    pargraph:
      "China Android Smartphone 2024 Original Android Pova5pro SmartPhone 128GB Mobile Phone Cell Gaming Phone Smartphone 3G ",
    StorLink:
      "https://www.alibaba.com/product-detail/China-Android-Smartphone-2024-Original-Android_1601287996782.html?spm=a2700.galleryofferlist.normal_offer.d_image.478313a0zZBCZD&selectedCarrierCode=SEMI_MANAGED_STANDARD%40%40STANDARD&priceId=ba87d3540e2c45da82640afda907d838",
    formerPrise: 33.78,
    prise: 30.07,
  },
  {
    id: 2,
    storeName: " Alibaba ",
    nameProdect: "Wireless Bluetooth-compatible Headphones",
    opponent: 20,
    imgDisplay: "product2-Ab",
    imgHover: "product-2-Ab",
    pargraph:
      "Wireless Bluetooth-compatible Headphones With Mic Stereo Sound Max Fone Bluetooth Sport Waterproof Headset ",
    StorLink:
      "https://www.alibaba.com/product-detail/Wireless-Bluetooth-compatible-Headphones-With-Mic_1600754552972.html?spm=a2700.galleryofferlist.normal_offer.d_image.188613a0zJ6wlu&priceId=22469cb4d61e4f4e84fdfd76b61029a3",
    formerPrise: 3.9,
    prise: 3.12,
  },
  {
    id: 3,
    storeName: " Alibaba ",
    nameProdect: "VALDUS F9 Headphones",
    opponent: 12,
    imgDisplay: "product3-Ab",
    imgHover: "product-3-Ab",
    pargraph:
      "VALDUS F9 Headphones Fone De Ouvido Audifonos Auriculares Wireless Earphone Waterproof BT 5.0 F9-5 F9-5C TWS Earbuds",
    StorLink:
      "https://www.alibaba.com/product-detail/VALDUS-F9-Headphones-Fone-De-Ouvido_62503303549.html?spm=a2700.galleryofferlist.normal_offer.d_image.188613a0zJ6wlu&selectedCarrierCode=SEMI_MANAGED_STANDARD%40%40STANDARD&priceId=22469cb4d61e4f4e84fdfd76b61029a3",
    formerPrise: 3.44,
    prise: 3.35,
  },
  {
    id: 4,
    storeName: " Alibaba ",
    nameProdect: " Screen Pretty Design 165HZ Computer Gamer",
    opponent: 19,
    imgDisplay: "product4-Ab",
    imgHover: "product-4-Ab",
    pargraph:
      "27 Inch 32 Inch Curved Screen Pretty Design 165HZ Computer Gamer 16:9 Gaming Monitor ",
    StorLink:
      "https://www.alibaba.com/product-detail/27-Inch-32-Inch-Curved-Screen_1601286076052.html?spm=a2700.galleryofferlist.topad_classic.d_image.516913a0mJlvNT&priceId=a0912dbd386e439c834a139ff9e5c31e",
    formerPrise: 42.44,
    prise: 39.84,
  },
  {
    id: 5,
    storeName: " Alibaba  ",
    nameProdect: "Chair PC",
    opponent: 32,
    imgDisplay: "product5-Ab",
    imgHover: "product-5-Ab",
    pargraph:
      "Home Furniture Fabric Racing Chair Adjustable PC Chair Comfortable Computer Silla Modern Gaming Chair",
    StorLink:
      "https://www.alibaba.com/product-detail/Home-Furniture-Fabric-Racing-Chair-Adjustable_1601343500068.html?spm=a2700.galleryofferlist.topad_classic.i1.403413a0o0w6fW",
    formerPrise: 24.26,
    prise: 23.39,
  },
  {
    id: 6,
    storeName: " Alibaba ",
    nameProdect: "Large Digital Wall Clock LED",
    opponent: 3,
    imgDisplay: "product6-Ab",
    imgHover: "product-6-Ab",
    pargraph:
      "Large Digital Wall Clock LED Alarm Mirror Display USB Powered Timer Calendar Thermometer Hygrometer Countdown ",
    StorLink:
      "https://www.alibaba.com/product-detail/Large-Digital-Wall-Clock-LED-Alarm_1601535350240.html?spm=a2700.galleryofferlist.p_offer.d_image.403213a0q6E7T8&priceId=a8de20c3e82648f2bee347f4abfbbf3d",
    formerPrise: 4.51,
    prise: 4.42,
  },
  {
    id: 7,
    storeName: " Alibaba ",
    nameProdect: "Table Wooden Desktop Computer Desk",
    opponent: 12.4,
    imgDisplay: "product7-Ab",
    imgHover: "product-7-Ab",
    pargraph:
      "2025 Latest RGB LED Computer Desk Gaming Table Wooden Desktop Computer Desk",
    StorLink:
      "https://www.alibaba.com/product-detail/2025-Latest-RGB-LED-Computer-Desk_1600104240745.html?spm=a2700.galleryofferlist.normal_offer.d_image.1d8313a0pZy6Aa&priceId=5d8b438174114c4bbc56dc980d3e7cff",
    formerPrise: 60.63,
    prise: 50.24,
  },
  {
    id: 8,
    storeName: " Alibaba ",
    nameProdect: "HP Pro Tower 288 G9 E Desktop Computer",
    opponent: 21,
    imgDisplay: "product8-Ab",
    imgHover: "product-8-Ab",
    pargraph:
      "HP Pro Tower 288 G9 E Desktop Computer with Single Host I5-13500/16G/512SSD Win11 Mouse & Keyboard 220V Monitor Optional",
    StorLink:
      "https://www.alibaba.com/product-detail/HP-Pro-Tower-288-G9-E_1601511191548.html?spm=a2700.galleryofferlist.normal_offer.d_image.40aa13a0MMHnj3&priceId=c642615235e74e239bef5e7db1678819",
    formerPrise: 426.11,
    prise: 424.38,
  },
];
for (swiperSlide of tasksTow) {
  conncetedsTow.innerHTML += `
                <div class="swiper-slide" idItem="${swiperSlide.id}">
                    <div class="ptodect card">
                        <div class="img_prodecrs">
                            <div class="ratio_prodet">
                                <p> <span>${swiperSlide.opponent}</span>%</p>
                            </div>
                            <img src="img/product/${swiperSlide.imgDisplay}.jpg" alt="">
                            <img class="img_hover" src="img/product/${swiperSlide.imgHover}.jpg" alt="">
                        </div>
                        <div class="content-card">
                            <h4>Store name : <span title="A store Amazon"> ${swiperSlide.storeName}</span> </h4>
                            <h3 class="name_prodect"><a href="${swiperSlide.StorLink}" target="_blank">
                                    ${swiperSlide.nameProdect}
                                </a></h3>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </div>
                            <div class="prices">
                                <p><Span>$ ${swiperSlide.prise}</Span></p>
                                <p class="old_price">$ ${swiperSlide.formerPrise}</p>
                                <a href="${swiperSlide.StorLink}" target="_blank"><i title="Visiting the snitch" class="fa-solid fa-cart-shopping"></i></a> 
                            </div>
                        </div>

                    </div>
            </div>
    `;
}

let lenk_opjectTow = document.querySelectorAll(
  "#swiper-wrappersTow .swiper-slide"
);
console.log(lenk_opjectTow);

lenk_opjectTow.forEach(function (ele) {
  ele.addEventListener("click", function () {
    let Tow = {
      id: tasksTow[ele.getAttribute("idItem") - 1].id,
      storeName: tasksTow[ele.getAttribute("idItem") - 1].storeName,
      opponent: tasksTow[ele.getAttribute("idItem") - 1].opponent,
      nameProdect: tasksTow[ele.getAttribute("idItem") - 1].nameProdect,
      imgDisplay: tasksTow[ele.getAttribute("idItem") - 1].imgDisplay,
      imgHover: tasksTow[ele.getAttribute("idItem") - 1].imgHover,
      pargraph: tasksTow[ele.getAttribute("idItem") - 1].pargraph,
      StorLink: tasksTow[ele.getAttribute("idItem") - 1].StorLink,
      formerPrise: tasksTow[ele.getAttribute("idItem") - 1].formerPrise,
      prise: tasksTow[ele.getAttribute("idItem") - 1].prise,
    };
    localStorage.setItem("selectedProduct", JSON.stringify(Tow));

    window.location.href = "producer.html";
  });
});
