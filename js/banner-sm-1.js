const swiperOne = new Swiper(".mySwipers-sm-1", {
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

let conncetedsOne = document.getElementById("swiper-wrappersOne");
conncetedsOne.innerHTML = " ";
let tasksOne = [
  {
    id: 1,
    storeName: " Amazon ",
    nameProdect: " Laptop |Intel Core 7",
    opponent: 5,
    imgDisplay: "product1-Am",
    imgHover: "product-1-Am",
    pargraph:
      "HP OmniBook 5 Flip 2-in-1 14 FHD+ Touch Screen Laptop |Intel Core 7 150U|Intel Graphics| Copilot |Backlit| Silver | 16GB RAM DDR5 | 512GB SSD |Windows 11 Home |Bundle ",
    StorLink: "https://www.amazon.com/",
    formerPrise: 685.99,
    prise: 654.49,
  },
  {
    id: 2,
    storeName: " Amazon ",
    nameProdect: "SUNNOW Office Chair, ",
    opponent: 31,
    imgDisplay: "product2-Am",
    imgHover: "product-2-Am",
    pargraph:
      "SUNNOW Office Chair, Ergonomic Computer Desk Chair, Sturdy Executive Task Chair - Adjustable Lumbar Support, Flip-up Arms, Tilt Function, Comfy Wide Seat, Swivel Mesh Home Office Desk Chairs (Black) ",
    StorLink:
      "https://www.amazon.com/Ergonomic-Computer-Adjustable-Function-Students/dp/B0CTF8LJV3/ref=sr_1_1?crid=2M6INT7S2J1PG&dib=eyJ2IjoiMSJ9._8DEAFemOnxQcpM3xwo2xQUwYf0ZkQ4fQuFuxmnVSg4yzzjQ7D8ZtF2xbfgu3XZHp_lkAIW3X4uQzsZUJSw4D83rKwOIQ_DLL63B2v149g-VAInqU1O60YSuZxavGc-dmimd92FuOEKTPE1DEVDUNIA86Y1m8o-jMZ2I1EXVsg_SRrKZ3GtGqPoX1lvHZpt6BjYDn2sbpbMQqCVryz31FerkqBSMVTImTAWmcApMK6I.JyLeI6cPS8cY1lMzfRpjuC9d-QCDMuTN4wPzlP2Y3LA&dib_tag=se&keywords=computer%2Bchair%2BDiscounts&qid=1760888446&sprefix=computer%2Bchair%2Bdiscounts%2Cspecialty-aps%2C523&sr=8-1&th=1",
    formerPrise: 208.8,
    prise: 119.99,
  },
  {
    id: 3,
    storeName: " Amazon ",
    nameProdect: "VIVO in Real Bamboo Standing Desk",
    opponent: 16,
    imgDisplay: "product3-Am",
    imgHover: "product-3-Am",
    pargraph:
      " VIVO Electric 60 x 24 in Real Bamboo Standing Desk, Memory Height Adjustment, 1B Series, One-Piece Top, Black Frame, DESK-KIT-1B6O ",
    StorLink:
      "https://www.amazon.com/VIVO-Adjustable-Workstation-Controller-DESK-KIT-1B6B/dp/B0CCSXQXYP/ref=cs_sr_dp_2?crid=7ZASBK5E1890&dib=eyJ2IjoiMSJ9.DrARpUSXU3V811qgIZ47e6syNzKphRcwlnpRGuSRpD0hlGdCIMwM3JSuz2bLy03INjnCwjTiM0t7pbtn_wkI2pNW3vJeQUwhiJhKz5bpm7MnDwSk774feGEBj8tCf4UU11uMoaMBgCznqUuFPxuLcMLFy4z5LKiynJW0h1VAZVQ4s5LZNj7C6NbSpImeptKbhdp5ZHCoeVYvUYJIbs0Fg7m49eNR1a5Wum-oM_vAUho.S5RS7DFIVb0VJcDwuR0VRaqRg1lXkj8DUX5vfR6hoU4&dib_tag=se&keywords=computer%2Bdesk&qid=1760890447&sprefix=computer%2B%2Cspecialty-aps%2C805&sr=8-2&th=1",
    formerPrise: 300,
    prise: 279,
  },
  {
    id: 4,
    storeName: " Amazon ",
    nameProdect: " Handset Cordless Phone with",
    opponent: 14,
    imgDisplay: "product4-Am",
    imgHover: "product-4-Am",
    pargraph:
      "AT&T EL52213 2-Handset Cordless Phone with Answering System & Extra-large Backlit Keys ",
    StorLink:
      "https://www.amazon.com/AT-EL52213-2-Handset-Expandable-Extra-Large/dp/B00ILF6ZVE/ref=sr_1_2?crid=AZ2DCYJRBK76&dib=eyJ2IjoiMSJ9.TUq04qkU-YZAE7r9cIgl3AjpxcAxUgcGs7z9f_SHI4R2OynrDDUsLltJfAkf-R6CbVh--wkzaNakSGqQaZMK_asAonyTWmtgLgS5fpFo1V7HQfaF7tHI0Teoa5TA86CAw4gzKlTBcSzeZ4oMBPV3SL_QgHtFu05lc-aR0OzNJEF8qjo69B2Lf9F6WPZ6UzBS7AsIJrU3O2J1bZkGphtP-AdvotCkinV-DkZVK88_WBI.H2jSTzryBeKZzD_5CTCEpzbV1U84buqnYDsbUayRrts&dib_tag=se&keywords=electric%2Bphone&qid=1760957546&sprefix=electric%2Bphone%2Caps%2C265&sr=8-2&th=1",
    formerPrise: 67.9,
    prise: 50.71,
  },
  {
    id: 5,
    storeName: " Amazon ",
    nameProdect: "Headphones, Wireless Over-Ear Bluetooth",
    opponent: 21,
    imgDisplay: "product5-Am",
    imgHover: "product-5-Am",
    pargraph:
      "Soundcore by Anker Q20i Hybrid Active Noise Cancelling Headphones, Wireless Over-Ear Bluetooth, 40H Long ANC Playtime, Hi-Res Audio, Big Bass, Customize via an App, Transparency Mode (Pink)",
    StorLink:
      "https://www.amazon.com/soundcore-Cancelling-Headphones-Bluetooth-Transparency/dp/B0F4884LN3/ref=sr_1_3?crid=3PXKHTIROMW7K&dib=eyJ2IjoiMSJ9.BIsT-TnflPUAdm2ehLKse0BZz2cFDR7NTIEMtnar2lYd2AgZwSxmN0b6Odfw0YPUcrrQ1bo6cnYL9xx_ZP_0sRHYlsCkQ6wza0mp402fPa_COnykV_q2jmd3n-w4ujZmHXIU8kLaQ6VPdi3DQXWEXJqEVic4cdOCourHrZ68XCd8BnXmpSUeVD_OsI7dZoRlFx6d172T69UTNdj6kONgc9r1CwizIxnHqRsx-cooHOk.EqKBk5JOhtqSPyTSgenxwwaKeReSAdhMmvtLY8s-cW8&dib_tag=se&keywords=headphones&qid=1760958226&sprefix=hea%2Caps%2C336&sr=8-3&th=1",
    formerPrise: 49.99,
    prise: 39.55,
  },
  {
    id: 6,
    storeName: " Amazon ",
    nameProdect: "PhoHeadphones, Auto NC Optimizerne",
    opponent: 9,
    imgDisplay: "product6-Am",
    imgHover: "product-6-Am",
    pargraph:
      "Sony WH-1000XM5 Premium Noise Canceling Headphones, Auto NC Optimizer, 30-Hour Battery, Alexa Voice Control, Black ",
    StorLink:
      "https://www.amazon.com/Sony-WH-1000XM5-Canceling-Headphones-Hands-Free/dp/B09XS7JWHH/ref=sr_1_16?crid=3PXKHTIROMW7K&dib=eyJ2IjoiMSJ9.BIsT-TnflPUAdm2ehLKse0BZz2cFDR7NTIEMtnar2lYd2AgZwSxmN0b6Odfw0YPUcrrQ1bo6cnYL9xx_ZP_0sRHYlsCkQ6wza0mp402fPa_COnykV_q2jmd3n-w4ujZmHXIU8kLaQ6VPdi3DQXWEXJqEVic4cdOCourHrZ68XCd8BnXmpSUeVD_OsI7dZoRlFx6d172T69UTNdj6kONgc9r1CwizIxnHqRsx-cooHOk.EqKBk5JOhtqSPyTSgenxwwaKeReSAdhMmvtLY8s-cW8&dib_tag=se&keywords=headphones&qid=1760958661&sprefix=hea%2Caps%2C336&sr=8-16&th=1",
    formerPrise: 269.98,
    prise: 259.0,
  },
  {
    id: 7,
    storeName: " Amazon ",
    nameProdect: "KOORUI 22 Inch Computer Monitor",
    opponent: 25,
    imgDisplay: "product7-Am",
    imgHover: "product-7-Am",
    pargraph:
      "KOORUI Monitor 27 Inch 1080p PC Monitor 3000:1 Contrast Ratio with HDMI VGA for Office and Home, 99% SRGB, Frameless, Eye Care, Tilt Adjustment, VESA Mountable, Black ",
    StorLink:
      "https://www.amazon.com/KOORUI-Business-Computer-Monitor-Display/dp/B09FP4H99P/ref=sr_1_1?crid=2MTUK8M1O4D2F&dib=eyJ2IjoiMSJ9._apuWwngt9pHNRtEksv92228ePOSyglnd5bpwiEuoUQwdd8cZLcQRxA8sx4yMZa5u0txdb1-poDk4esnLBeIGNAcWeWoCmrwfeUqzikqYpjE-f3N-8ilfXBHgTbhQZloZnIfMkF_y3hFlyGW8Kp7-HjEvwZnhMO-d3gY9a7CMgkWA-GodmxIHEr8UarkEng0mhGXQR65XqAXm45I7q5_HjdgBCEIUo_pr7b6IdTgWwce_-TjOyQB-zcSGhGBnvamUO7Iol6D4dxXvsdr2m5UdcnAci-tHgHbCrSQfJx_HXo.jYaBm0w9TPD7cesNU_3tKMtW1lmOFLngEID10BOwUo8&dib_tag=se&keywords=screen&qid=1760959115&sprefix=screen%2B%2Caps%2C272&sr=8-1&th=1",
    formerPrise: 99.99,
    prise: 57.31,
  },
  {
    id: 8,
    storeName: " Amazon ",
    nameProdect: "Dell Desktop Computer PC",
    opponent: 20,
    imgDisplay: "product8-Am",
    imgHover: "product-8-Am",
    pargraph:
      "Dell OptiPlex Desktop RGB Computer PC, Intel Core i7 Quad-Core Processor, 16GB RAM, 512GB SSD, 24 Inch HDMI Monitor, RGB Keyboard Mouse and Headset, WiFi, Windows 11 Pro (Renewed) ",
    StorLink:
      "https://www.amazon.com/Dell-Optiplex-7050-Excellent-Condition/dp/B0BLQNXY8B/ref=sr_1_4?crid=1YAV7AAASKN6H&dib=eyJ2IjoiMSJ9.kJOXmgzqWiqswrFlX5YGS7-yOms8RWF2jDm3oCjvRY4Pkf72WGxhS_gThSEM9H_03era3x77zVGer6hwPhYghZTbft0NtRgwh7Z1HWOU2K74ti7Ok6BAuu6FR9C4T1awlJn7S0NRFZuhs-bo_d_A4QPtXdWXNACNhh46h5o8maMB7x8VSz7as4LRaFT6fMnYgfNJ63ooopvUjh-1blrpXzMeeY8LkE9KMnqps5gKTFU.FALPU9YWehIAC1P9ck2UKGItn4RA4wX2pxExigkmIS8&dib_tag=se&keywords=computer&qid=1760959435&sprefix=computer%2B%2Caps%2C353&sr=8-4&th=1",
    formerPrise: 359.99,
    prise: 276.89,
  },
];
for (swiperSlide of tasksOne) {
  conncetedsOne.innerHTML += `
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
                            <h4>Store name : <span title="A store Amazon"> Amazon</span> </h4>
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

let lenk_opjectOne = document.querySelectorAll(
  "#swiper-wrappersOne .swiper-slide"
);
// console.log(lenk_opjectOwn);

lenk_opjectOne.forEach(function (ele) {
  ele.addEventListener("click", function () {
    let One = {
      id: tasksOne[ele.getAttribute("idItem") - 1].id,
      storeName: tasksOne[ele.getAttribute("idItem") - 1].storeName,
      opponent: tasksOne[ele.getAttribute("idItem") - 1].opponent,
      nameProdect: tasksOne[ele.getAttribute("idItem") - 1].nameProdect,
      imgDisplay: tasksOne[ele.getAttribute("idItem") - 1].imgDisplay,
      imgHover: tasksOne[ele.getAttribute("idItem") - 1].imgHover,
      pargraph: tasksOne[ele.getAttribute("idItem") - 1].pargraph,
      StorLink: tasksOne[ele.getAttribute("idItem") - 1].StorLink,
      formerPrise: tasksOne[ele.getAttribute("idItem") - 1].formerPrise,
      prise: tasksOne[ele.getAttribute("idItem") - 1].prise,
    };
    console.log(One);
    localStorage.setItem("selectedProduct", JSON.stringify(One));

    window.location.href = "producer.html";
  });
});
