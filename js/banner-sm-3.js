const swiperTree = new Swiper(".mySwipers-sm-3", {
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

let conncetedsTree = document.getElementById("swiper-wrappersTree");
conncetedsTree.innerHTML = " ";
let tasksTree = [
  {
    id: 1,
    storeName: " SHEIN ",
    nameProdect: " Samsung TVSAS156VCPWP Galaxy ",
    opponent: 62,
    imgDisplay: "product-1-Sh",
    imgHover: "product1-Sh",
    pargraph:
      ' Samsung TVSAS156VCPWP Galaxy " A15 6.6  128GB 6 GB Black LTE Total By Verizon Prepaid Smartphone. ',
    StorLink:
      "https://us.shein.com/Samsung-TVSAS156VCPWP-Galaxy-A15-6-6-128GB-6-GB-Black-LTE-Total-By-Verizon-Prepaid-Smartphone-p-171876118.html?src_identifier=st%3D4%60sc%3Delectronic%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_real_class1760805679050&pageListType=4&imgRatio=1-1&detailBusinessFrom=0-1_171876118&pageListType=4",
    formerPrise: 149.0,
    prise: 57.0,
  },
  {
    id: 2,
    storeName: " SHEIN ",
    nameProdect: "  Sony PlayStation",
    opponent: 14,
    imgDisplay: "product-2-Sh",
    imgHover: "product2-Sh",
    pargraph:
      "Sony PlayStation®5 Digital Edition (Slim) / Console (Slim) - Featuring Ultra-Fast SSD, 4K Gaming Support, High Frame Rates, And 1TB Storage ",
    StorLink:
      "https://us.shein.com/Sony-PlayStation-5-Digital-Edition-Slim-Console-Slim-Featuring-Ultra-Fast-SSD-4K-Gaming-Support-High-Frame-Rates-And-1TB-Storage-p-33275136.html?src_identifier=st%3D4%60sc%3Delectronic%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_real_class1760805679050&pageListType=4&imgRatio=1-1&pageListType=4",
    formerPrise: 799,
    prise: 645,
  },
  {
    id: 3,
    storeName: " SHEIN ",
    nameProdect: "Lenovo IdeaPad ",
    opponent: 15,
    imgDisplay: "product3-Sh",
    imgHover: "product-3-Sh",
    pargraph:
      ' Lenovo Certified Refurbished - Lenovo IdeaPad Slim 3 Chrome 14 " 4GB 64GB EMMC MediaTek Abyss Blue. ',
    StorLink:
      "https://us.shein.com/Lenovo-Certified-Refurbished-Lenovo-IdeaPad-Slim-3-Chrome-14-4GB-64GB-EMMC-MediaTek-Abyss-Blue-p-184302680.html?src_identifier=st%3D4%60sc%3Delectronic%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_real_class1760805679050&pageListType=4&imgRatio=1-1&detailBusinessFrom=0-1_184302680&pageListType=4",
    formerPrise: 129,
    prise: 110,
  },
  {
    id: 4,
    storeName: " SHEIN ",
    nameProdect: "Gaming Controller Wireless Game ",
    opponent: 55,
    imgDisplay: "product4-Sh",
    imgHover: "product-4-Sh",
    pargraph:
      "Wireless Gamepad For IPhone/Android/Steam Deck/PC/Table Mobile/Cell Phone Gaming Controller Wireless Game Controller Joystick Telescopic COD Mobile - Directly Play ",
    StorLink:
      "https://us.shein.com/Wireless-Gamepad-For-IPhone-Android-Steam-Deck-PC-Table-Mobile-Cell-Phone-Gaming-Controller-Wireless-Game-Controller-Joystick-Telescopic-COD-Mobile-Directly-Play-p-70312472.html?src_identifier=st%3D5%60sc%3Delectronic%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1760881641522&pageListType=4&imgRatio=1-1&detailBusinessFrom=0-1_70312472&pageListType=4",
    formerPrise: 32.2,
    prise: 14.48,
  },
  {
    id: 5,
    storeName: " SHEIN",
    nameProdect: "Multi Colored LED Mirror Desktop Alarm Clock",
    opponent: 47,
    imgDisplay: "product5-Sh",
    imgHover: "product-5-Sh",
    pargraph:
      "Multi Colored LED Mirror Desktop Alarm Clock, Digital Alarm Clock, Desktop Electronic Alarm Clock, Display Time, Night Light, Desktop USB Alarm Clock, Home Decoration Smart Clock, Bedroom Home Office Desk Clock, Desktop Clock, Temperature Date Display, Electronic Desktop, Student And Toddler Desk Mirror, LED Clock, Back To School, Beautiful Dormitory Decoration, Home Decoration ",
    StorLink:
      "https://us.shein.com/Multi-Colored-LED-Mirror-Desktop-Alarm-Clock-Digital-Alarm-Clock-Desktop-Electronic-Alarm-Clock-Display-Time-Night-Light-Desktop-USB-Alarm-Clock-Home-Decoration-Smart-Clock-Bedroom-Home-Office-Desk-Clock-Desktop-Clock-Temperature-Date-Display-Electronic-Desktop-Student-And-Toddler-Desk-Mirror-LED-Clock-Back-To-School-Beautiful-Dormitory-Decoration-Home-Decoration-p-84517973.html?src_identifier=st%3D5%60sc%3Delectronic%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1760881641522&pageListType=4&imgRatio=3-4&detailBusinessFrom=0-1_84517973&pageListType=4",
    formerPrise: 10.4,
    prise: 5.5,
  },
  {
    id: 6,
    storeName: " SHEIN ",
    nameProdect: "Apple Watch Series 5",
    opponent: 76,
    imgDisplay: "product6-Sh",
    imgHover: "product-6-Sh",
    pargraph:
      "Apple Watch Series 5 (GPS & Cellular) 41/45mm Variety Colors (Refurbished-Acceptable Condition)",
    StorLink:
      "https://us.shein.com/Apple-Watch-Series-5-GPS-Cellular-41-45mm-Variety-Colors-Refurbished-Acceptable-Condition-p-167301309.html?src_identifier=st%3D5%60sc%3Delectronic%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1760881641522&pageListType=4&imgRatio=13-16&detailBusinessFrom=0-1_167301309&pageListType=4",
    formerPrise: 485.68,
    prise: 118.84,
  },
  {
    id: 7,
    storeName: " SHEIN ",
    nameProdect: "Office Computer Monitor 27",
    opponent: 72,
    imgDisplay: "product7-Sh",
    imgHover: "product-7-Sh",
    pargraph:
      "Office Computer Monitor 27-Inch Display 100Hz Computer Display With Built-In Speaker, Frameless Display For Eye Care For Office And Home,1080p Curved Gaming Monitor 1500R Curved Monitor, 165Hz 1ms MPRT For Gaming, Home Office, Business PC Monitor. Computer Monitor, The Best Gift For Dad To Husband And Boyfriend, A Must-Have For Christmas Carnival 32-Inch Display 34-Inch HD Displa ",
    StorLink:
      "https://us.shein.com/Office-Computer-Monitor-27-Inch-Display-100Hz-Computer-Display-With-Built-In-Speaker-Frameless-Display-For-Eye-Care-For-Office-And-Home-1080p-Curved-Gaming-Monitor-1500R-Curved-Monitor-165Hz-1ms-MPRT-For-Gaming-Home-Office-Business-PC-Monitor-Computer-Monitor-The-Best-Gift-For-Dad-To-Husband-And-Boyfriend-A-Must-Have-For-Christmas-Carnival-32-Inch-Display-34-Inch-HD-Display-p-52079672.html?src_identifier=st%3D5%60sc%3Delectronic%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1760881641522&pageListType=4&imgRatio=1-1&detailBusinessFrom=0-1_52079672&pageListType=4",
    formerPrise: 176.0,
    prise: 49.4,
  },
  {
    id: 8,
    storeName: " SHEIN ",
    nameProdect: "Wired Mechanical Keyboard",
    opponent: 47,
    imgDisplay: "product8-Sh",
    imgHover: "product-8-Sh",
    pargraph:
      "Snpurdiri 60% Wired Mechanical Keyboard, Mini Gaming Keyboard With 61 Red Switches Keys For PC, Windows XP, Win 7, Win 10 (Black-Red, Red Switches) ",
    StorLink:
      "http://us.shein.com/Snpurdiri-60-Wired-Mechanical-Keyboard-Mini-Gaming-Keyboard-With-61-Red-Switches-Keys-For-PC-Windows-XP-Win-7-Win-10-Black-Red-Red-Switches-p-69563717.html?src_identifier=st%3D5%60sc%3Delectronic%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1760881641522&pageListType=4&imgRatio=1-1&detailBusinessFrom=0-1_69563717&pageListType=4",
    formerPrise: 38.0,
    prise: 20.0,
  },
  {
    id: 9,
    storeName: " SHEIN ",
    nameProdect: "Wired Mechanical Keyboard",
    opponent: 53,
    imgDisplay: "product9-Sh",
    imgHover: "product-9-Sh",
    pargraph:
      "The Latest Headphones For 2025, In Ear Headphones - Compact And Portable Design, Earbuds Wireless Sport Gaming Headsets Noise Reduction Earbuds Mic Headphones With LED Display",
    StorLink:
      "https://us.shein.com/The-Latest-Headphones-For-2025-In-Ear-Headphones-Compact-And-Portable-Design-Earbuds-Wireless-Sport-Gaming-Headsets-Noise-Reduction-Earbuds-Mic-Headphones-With-LED-Display-Earphones-Hifi-Transparent-Sport-Earphones-TWS-Wireless-Earphones-Noise-Cancellation-All-Handphones-Universal-New-Wireless-Headset-Space-Capsule-Digital-Display-Transparent-Shell-Sports-Wireless-Headset-Wireless-Sports-Game-Earbuds-TWS-Mini-Wireless-Headphones-Transparent-Case-Low-Latency-Noise-Reduction-Voice-Call-USB-Charging-Anime-Themed-For-Gaming-Adult-Use-p-178454825.html?src_identifier=st%3D5%60sc%3Delectronic%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1760881641522&pageListType=4&imgRatio=1-1&pageListType=4",
    formerPrise: 3.3,
    prise: 1.55,
  },
  // {
  //   id: 8,
  //   storeName: " SHEIN ",
  //   nameProdect: "Phone",
  //   opponent: 20,
  //   imgDisplay: "product8",
  //   imgHover: "product-8",
  //   pargraph: "Lorem, ipsum dolor sit amet consectetur adipisicing  . ",
  //   StorLink: "https://www.amazon.com/",
  //   formerPrise: 300,
  //   prise: 210,
  // },
];
localStorage.setItem("tasksTree", JSON.stringify(tasksTree));

for (swiperSlide of tasksTree) {
  conncetedsTree.innerHTML += `
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

let lenk_opjectTree = document.querySelectorAll(
  "#swiper-wrappersTree .swiper-slide"
);
console.log(lenk_opjectTree);

lenk_opjectTree.forEach(function (ele) {
  ele.addEventListener("click", function () {
    let Tree = {
      id: tasksTree[ele.getAttribute("idItem") - 1].id,
      storeName: tasksTree[ele.getAttribute("idItem") - 1].storeName,
      opponent: tasksTree[ele.getAttribute("idItem") - 1].opponent,
      nameProdect: tasksTree[ele.getAttribute("idItem") - 1].nameProdect,
      imgDisplay: tasksTree[ele.getAttribute("idItem") - 1].imgDisplay,
      imgHover: tasksTree[ele.getAttribute("idItem") - 1].imgHover,
      pargraph: tasksTree[ele.getAttribute("idItem") - 1].pargraph,
      StorLink: tasksTree[ele.getAttribute("idItem") - 1].StorLink,
      formerPrise: tasksTree[ele.getAttribute("idItem") - 1].formerPrise,
      prise: tasksTree[ele.getAttribute("idItem") - 1].prise,
    };
    localStorage.setItem("selectedProduct", JSON.stringify(Tree));

    window.location.href = "producer.html";
  });
});
