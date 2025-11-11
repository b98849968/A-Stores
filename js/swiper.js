const swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  grabCursor: true,
  touchRatio: 1,
  touchAngle: 45,

  effect: "slide",
  speed: 400,

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
    660: {
      slidesPerView: 3,
      spaceBetween: 17,
    },
    748: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    928: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 7,
    },
  },
});

//  ********  لوحه التحكم لي اضافه منتجات  العامه  ****//

let i = 0;
let connceted = document.getElementById("swiper-wrapper");
connceted.innerHTML = " ";
let tasks = [
  
  {
    id: ++i,
    storeName: " SHEIN ",
    nameProdect: "  Sony PlayStation",
    opponent: 14,
    imgDisplay: "product-2-Sh",
    imgHover: "product2-Sh",
    pargraph: "Sony PlayStation®5 Digital Edition (Slim) / Console (Slim) - Featuring Ultra-Fast SSD, 4K Gaming Support, High Frame Rates, And 1TB Storage ",
    StorLink: "https://us.shein.com/Sony-PlayStation-5-Digital-Edition-Slim-Console-Slim-Featuring-Ultra-Fast-SSD-4K-Gaming-Support-High-Frame-Rates-And-1TB-Storage-p-33275136.html?src_identifier=st%3D4%60sc%3Delectronic%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_real_class1760805679050&pageListType=4&imgRatio=1-1&pageListType=4",
    formerPrise: 799,
    prise: 645,
  },
   {
    id: ++i,
    storeName: " Alibaba ",
    nameProdect: " Screen Pretty Design 165HZ Computer Gamer",
    opponent: 19,
    imgDisplay: "product4-Ab",
    imgHover: "product-4-Ab",
    pargraph: "27 Inch 32 Inch Curved Screen Pretty Design 165HZ Computer Gamer 16:9 Gaming Monitor ",
    StorLink: "https://www.alibaba.com/product-detail/27-Inch-32-Inch-Curved-Screen_1601286076052.html?spm=a2700.galleryofferlist.topad_classic.d_image.516913a0mJlvNT&priceId=a0912dbd386e439c834a139ff9e5c31e",
    formerPrise: 42.44,
    prise: 39.84,
  },
  {
    id: ++i,
    storeName: " SHEIN ",
    nameProdect: "Gaming Controller Wireless Game ",
    opponent: 55 ,
    imgDisplay: "product4-Sh",
    imgHover: "product-4-Sh",
    pargraph: "Wireless Gamepad For IPhone/Android/Steam Deck/PC/Table Mobile/Cell Phone Gaming Controller Wireless Game Controller Joystick Telescopic COD Mobile - Directly Play ",
    StorLink: "https://us.shein.com/Wireless-Gamepad-For-IPhone-Android-Steam-Deck-PC-Table-Mobile-Cell-Phone-Gaming-Controller-Wireless-Game-Controller-Joystick-Telescopic-COD-Mobile-Directly-Play-p-70312472.html?src_identifier=st%3D5%60sc%3Delectronic%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1760881641522&pageListType=4&imgRatio=1-1&detailBusinessFrom=0-1_70312472&pageListType=4",
    formerPrise: 32.20,
    prise: 14.48,
  },
  {
    id: ++i,
    storeName: " Amazon ",
    nameProdect: "VIVO in Real Bamboo Standing Desk",
    opponent: 16,
    imgDisplay: "product3-Am",
    imgHover: "product-3-Am",
    pargraph: " VIVO Electric 60 x 24 in Real Bamboo Standing Desk, Memory Height Adjustment, 1B Series, One-Piece Top, Black Frame, DESK-KIT-1B6O ",
    StorLink: "https://www.amazon.com/VIVO-Adjustable-Workstation-Controller-DESK-KIT-1B6B/dp/B0CCSXQXYP/ref=cs_sr_dp_2?crid=7ZASBK5E1890&dib=eyJ2IjoiMSJ9.DrARpUSXU3V811qgIZ47e6syNzKphRcwlnpRGuSRpD0hlGdCIMwM3JSuz2bLy03INjnCwjTiM0t7pbtn_wkI2pNW3vJeQUwhiJhKz5bpm7MnDwSk774feGEBj8tCf4UU11uMoaMBgCznqUuFPxuLcMLFy4z5LKiynJW0h1VAZVQ4s5LZNj7C6NbSpImeptKbhdp5ZHCoeVYvUYJIbs0Fg7m49eNR1a5Wum-oM_vAUho.S5RS7DFIVb0VJcDwuR0VRaqRg1lXkj8DUX5vfR6hoU4&dib_tag=se&keywords=computer%2Bdesk&qid=1760890447&sprefix=computer%2B%2Cspecialty-aps%2C805&sr=8-2&th=1",
    formerPrise: 300,
    prise: 279,
  },
  {
    id: ++i,
    storeName: " SHEIN",
    nameProdect: "Multi Colored LED Mirror Desktop Alarm Clock",
    opponent: 47,
    imgDisplay: "product5-Sh",
    imgHover: "product-5-Sh",
    pargraph: "Multi Colored LED Mirror Desktop Alarm Clock, Digital Alarm Clock, Desktop Electronic Alarm Clock, Display Time, Night Light, Desktop USB Alarm Clock, Home Decoration Smart Clock, Bedroom Home Office Desk Clock, Desktop Clock, Temperature Date Display, Electronic Desktop, Student And Toddler Desk Mirror, LED Clock, Back To School, Beautiful Dormitory Decoration, Home Decoration ",
    StorLink: "https://us.shein.com/Multi-Colored-LED-Mirror-Desktop-Alarm-Clock-Digital-Alarm-Clock-Desktop-Electronic-Alarm-Clock-Display-Time-Night-Light-Desktop-USB-Alarm-Clock-Home-Decoration-Smart-Clock-Bedroom-Home-Office-Desk-Clock-Desktop-Clock-Temperature-Date-Display-Electronic-Desktop-Student-And-Toddler-Desk-Mirror-LED-Clock-Back-To-School-Beautiful-Dormitory-Decoration-Home-Decoration-p-84517973.html?src_identifier=st%3D5%60sc%3Delectronic%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1760881641522&pageListType=4&imgRatio=3-4&detailBusinessFrom=0-1_84517973&pageListType=4",
    formerPrise: 10.40,
    prise: 5.50,
  },
  
  {
    id: ++i,
    storeName: " SHEIN ",
    nameProdect: "Office Computer Monitor 27",
    opponent: 72,
    imgDisplay: "product7-Sh",
    imgHover: "product-7-Sh",
    pargraph: "Office Computer Monitor 27-Inch Display 100Hz Computer Display With Built-In Speaker, Frameless Display For Eye Care For Office And Home,1080p Curved Gaming Monitor 1500R Curved Monitor, 165Hz 1ms MPRT For Gaming, Home Office, Business PC Monitor. Computer Monitor, The Best Gift For Dad To Husband And Boyfriend, A Must-Have For Christmas Carnival 32-Inch Display 34-Inch HD Displa ",
    StorLink: "https://us.shein.com/Office-Computer-Monitor-27-Inch-Display-100Hz-Computer-Display-With-Built-In-Speaker-Frameless-Display-For-Eye-Care-For-Office-And-Home-1080p-Curved-Gaming-Monitor-1500R-Curved-Monitor-165Hz-1ms-MPRT-For-Gaming-Home-Office-Business-PC-Monitor-Computer-Monitor-The-Best-Gift-For-Dad-To-Husband-And-Boyfriend-A-Must-Have-For-Christmas-Carnival-32-Inch-Display-34-Inch-HD-Display-p-52079672.html?src_identifier=st%3D5%60sc%3Delectronic%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1760881641522&pageListType=4&imgRatio=1-1&detailBusinessFrom=0-1_52079672&pageListType=4",
    formerPrise: 176.00,
    prise: 49.40,
  },
  {
    id: ++i,
    storeName: " Amazon ",
    nameProdect: "Dell Desktop Computer PC",
    opponent: 20,
    imgDisplay: "product8-Am",
    imgHover: "product-8-Am",
    pargraph: "Dell OptiPlex Desktop RGB Computer PC, Intel Core i7 Quad-Core Processor, 16GB RAM, 512GB SSD, 24 Inch HDMI Monitor, RGB Keyboard Mouse and Headset, WiFi, Windows 11 Pro (Renewed) ",
    StorLink: "https://www.amazon.com/Dell-Optiplex-7050-Excellent-Condition/dp/B0BLQNXY8B/ref=sr_1_4?crid=1YAV7AAASKN6H&dib=eyJ2IjoiMSJ9.kJOXmgzqWiqswrFlX5YGS7-yOms8RWF2jDm3oCjvRY4Pkf72WGxhS_gThSEM9H_03era3x77zVGer6hwPhYghZTbft0NtRgwh7Z1HWOU2K74ti7Ok6BAuu6FR9C4T1awlJn7S0NRFZuhs-bo_d_A4QPtXdWXNACNhh46h5o8maMB7x8VSz7as4LRaFT6fMnYgfNJ63ooopvUjh-1blrpXzMeeY8LkE9KMnqps5gKTFU.FALPU9YWehIAC1P9ck2UKGItn4RA4wX2pxExigkmIS8&dib_tag=se&keywords=computer&qid=1760959435&sprefix=computer%2B%2Caps%2C353&sr=8-4&th=1",
    formerPrise: 359.99,
    prise: 276.89,
  },
  {
    id: ++i,
    storeName: " SHEIN ",
    nameProdect: "Wired Mechanical Keyboard",
    opponent: 47,
    imgDisplay: "product8-Sh",
    imgHover: "product-8-Sh",
    pargraph: "Snpurdiri 60% Wired Mechanical Keyboard, Mini Gaming Keyboard With 61 Red Switches Keys For PC, Windows XP, Win 7, Win 10 (Black-Red, Red Switches) ",
    StorLink: "http://us.shein.com/Snpurdiri-60-Wired-Mechanical-Keyboard-Mini-Gaming-Keyboard-With-61-Red-Switches-Keys-For-PC-Windows-XP-Win-7-Win-10-Black-Red-Red-Switches-p-69563717.html?src_identifier=st%3D5%60sc%3Delectronic%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1760881641522&pageListType=4&imgRatio=1-1&detailBusinessFrom=0-1_69563717&pageListType=4",
    formerPrise: 38.00,
    prise: 20.00,
  },
    {
    id: ++i,
    storeName: " SHEIN ",
    nameProdect: "Wired Mechanical Keyboard",
    opponent: 53,
    imgDisplay: "product9-Sh",
    imgHover: "product-9-Sh",
    pargraph: "The Latest Headphones For 2025, In Ear Headphones - Compact And Portable Design, Earbuds Wireless Sport Gaming Headsets Noise Reduction Earbuds Mic Headphones With LED Display",
    StorLink: "https://us.shein.com/The-Latest-Headphones-For-2025-In-Ear-Headphones-Compact-And-Portable-Design-Earbuds-Wireless-Sport-Gaming-Headsets-Noise-Reduction-Earbuds-Mic-Headphones-With-LED-Display-Earphones-Hifi-Transparent-Sport-Earphones-TWS-Wireless-Earphones-Noise-Cancellation-All-Handphones-Universal-New-Wireless-Headset-Space-Capsule-Digital-Display-Transparent-Shell-Sports-Wireless-Headset-Wireless-Sports-Game-Earbuds-TWS-Mini-Wireless-Headphones-Transparent-Case-Low-Latency-Noise-Reduction-Voice-Call-USB-Charging-Anime-Themed-For-Gaming-Adult-Use-p-178454825.html?src_identifier=st%3D5%60sc%3Delectronic%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1760881641522&pageListType=4&imgRatio=1-1&pageListType=4",
    formerPrise: 3.30,
    prise: 1.55,
  },
  {
    id: ++i,
    storeName: " Amazon ",
    nameProdect: " Laptop |Intel Core 7",
    opponent: 5,
    imgDisplay: "product1-Am",
    imgHover: "product-1-Am",
    pargraph: "HP OmniBook 5 Flip 2-in-1 14 FHD+ Touch Screen Laptop |Intel Core 7 150U|Intel Graphics| Copilot |Backlit| Silver | 16GB RAM DDR5 | 512GB SSD |Windows 11 Home |Bundle ",
    StorLink: "https://www.amazon.com/",
    formerPrise: 685.99 ,
    prise: 654.49,
  },
  {
    id: ++i,
    storeName: " Alibaba ",
    nameProdect: "Table Wooden Desktop Computer Desk",
    opponent: 12.4,
    imgDisplay: "product7-Ab",
    imgHover: "product-7-Ab",
    pargraph: "2025 Latest RGB LED Computer Desk Gaming Table Wooden Desktop Computer Desk",
    StorLink: "https://www.alibaba.com/product-detail/2025-Latest-RGB-LED-Computer-Desk_1600104240745.html?spm=a2700.galleryofferlist.normal_offer.d_image.1d8313a0pZy6Aa&priceId=5d8b438174114c4bbc56dc980d3e7cff",
    formerPrise: 60.63,
    prise: 50.24,
  },
  {
    id: ++i,
    storeName: " SHEIN ",
    nameProdect: "Lenovo IdeaPad ",
    opponent: 15,
    imgDisplay: "product3-Sh",
    imgHover: "product-3-Sh",
    pargraph: " Lenovo Certified Refurbished - Lenovo IdeaPad Slim 3 Chrome 14 \" 4GB 64GB EMMC MediaTek Abyss Blue. ",
    StorLink: "https://us.shein.com/Lenovo-Certified-Refurbished-Lenovo-IdeaPad-Slim-3-Chrome-14-4GB-64GB-EMMC-MediaTek-Abyss-Blue-p-184302680.html?src_identifier=st%3D4%60sc%3Delectronic%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_real_class1760805679050&pageListType=4&imgRatio=1-1&detailBusinessFrom=0-1_184302680&pageListType=4",
    formerPrise: 129,
    prise: 110,
  },
   {
    id: ++i,
    storeName: " Amazon ",
    nameProdect: "Headphones, Wireless Over-Ear Bluetooth",
    opponent: 21,
    imgDisplay: "product5-Am",
    imgHover: "product-5-Am",
    pargraph: "Soundcore by Anker Q20i Hybrid Active Noise Cancelling Headphones, Wireless Over-Ear Bluetooth, 40H Long ANC Playtime, Hi-Res Audio, Big Bass, Customize via an App, Transparency Mode (Pink)",
    StorLink: "https://www.amazon.com/soundcore-Cancelling-Headphones-Bluetooth-Transparency/dp/B0F4884LN3/ref=sr_1_3?crid=3PXKHTIROMW7K&dib=eyJ2IjoiMSJ9.BIsT-TnflPUAdm2ehLKse0BZz2cFDR7NTIEMtnar2lYd2AgZwSxmN0b6Odfw0YPUcrrQ1bo6cnYL9xx_ZP_0sRHYlsCkQ6wza0mp402fPa_COnykV_q2jmd3n-w4ujZmHXIU8kLaQ6VPdi3DQXWEXJqEVic4cdOCourHrZ68XCd8BnXmpSUeVD_OsI7dZoRlFx6d172T69UTNdj6kONgc9r1CwizIxnHqRsx-cooHOk.EqKBk5JOhtqSPyTSgenxwwaKeReSAdhMmvtLY8s-cW8&dib_tag=se&keywords=headphones&qid=1760958226&sprefix=hea%2Caps%2C336&sr=8-3&th=1",
    formerPrise: 49.99,
    prise: 39.55,
  },
  {
    id: ++i,
    storeName: " SHEIN ",
    nameProdect: " Samsung TVSAS156VCPWP Galaxy ",
    opponent: 62,
    imgDisplay: "product-1-Sh",
    imgHover: "product1-Sh",
    pargraph: " Samsung TVSAS156VCPWP Galaxy \" A15 6.6  128GB 6 GB Black LTE Total By Verizon Prepaid Smartphone. ",
    StorLink: "https://us.shein.com/Samsung-TVSAS156VCPWP-Galaxy-A15-6-6-128GB-6-GB-Black-LTE-Total-By-Verizon-Prepaid-Smartphone-p-171876118.html?src_identifier=st%3D4%60sc%3Delectronic%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_real_class1760805679050&pageListType=4&imgRatio=1-1&detailBusinessFrom=0-1_171876118&pageListType=4",
    formerPrise: 149.00,
    prise: 57.00,
  },
  {
    id: ++i,
    storeName: " Alibaba ",
    nameProdect: "Table Wooden Desktop Computer Desk",
    opponent: 12.4,
    imgDisplay: "product7-Ab",
    imgHover: "product-7-Ab",
    pargraph: "2025 Latest RGB LED Computer Desk Gaming Table Wooden Desktop Computer Desk",
    StorLink: "https://www.alibaba.com/product-detail/2025-Latest-RGB-LED-Computer-Desk_1600104240745.html?spm=a2700.galleryofferlist.normal_offer.d_image.1d8313a0pZy6Aa&priceId=5d8b438174114c4bbc56dc980d3e7cff",
    formerPrise: 60.63,
    prise: 50.24,
  },
  {
    id: ++i,
    storeName: " Amazon ",
    nameProdect: "SUNNOW Office Chair, ",
    opponent: 31,
    imgDisplay: "product2-Am",
    imgHover: "product-2-Am",
    pargraph: "SUNNOW Office Chair, Ergonomic Computer Desk Chair, Sturdy Executive Task Chair - Adjustable Lumbar Support, Flip-up Arms, Tilt Function, Comfy Wide Seat, Swivel Mesh Home Office Desk Chairs (Black) ",
    StorLink: "https://www.amazon.com/Ergonomic-Computer-Adjustable-Function-Students/dp/B0CTF8LJV3/ref=sr_1_1?crid=2M6INT7S2J1PG&dib=eyJ2IjoiMSJ9._8DEAFemOnxQcpM3xwo2xQUwYf0ZkQ4fQuFuxmnVSg4yzzjQ7D8ZtF2xbfgu3XZHp_lkAIW3X4uQzsZUJSw4D83rKwOIQ_DLL63B2v149g-VAInqU1O60YSuZxavGc-dmimd92FuOEKTPE1DEVDUNIA86Y1m8o-jMZ2I1EXVsg_SRrKZ3GtGqPoX1lvHZpt6BjYDn2sbpbMQqCVryz31FerkqBSMVTImTAWmcApMK6I.JyLeI6cPS8cY1lMzfRpjuC9d-QCDMuTN4wPzlP2Y3LA&dib_tag=se&keywords=computer%2Bchair%2BDiscounts&qid=1760888446&sprefix=computer%2Bchair%2Bdiscounts%2Cspecialty-aps%2C523&sr=8-1&th=1",
    formerPrise: 208.8,
    prise: 119.99,
  },
  {
    id: ++i,
    storeName: " Alibaba ",
    nameProdect: "HP Pro Tower 288 G9 E Desktop Computer",
    opponent: 21,
    imgDisplay: "product8-Ab",
    imgHover: "product-8-Ab",
    pargraph: "HP Pro Tower 288 G9 E Desktop Computer with Single Host I5-13500/16G/512SSD Win11 Mouse & Keyboard 220V Monitor Optional",
    StorLink: "https://www.alibaba.com/product-detail/HP-Pro-Tower-288-G9-E_1601511191548.html?spm=a2700.galleryofferlist.normal_offer.d_image.40aa13a0MMHnj3&priceId=c642615235e74e239bef5e7db1678819",
    formerPrise: 426.11,
    prise: 424.38,
  },
  {
    id: ++i,
    storeName: " SHEIN ",
    nameProdect: "Apple Watch Series 5",
    opponent: 76,
    imgDisplay: "product6-Sh",
    imgHover: "product-6-Sh",
    pargraph: "Apple Watch Series 5 (GPS & Cellular) 41/45mm Variety Colors (Refurbished-Acceptable Condition)",
    StorLink: "https://us.shein.com/Apple-Watch-Series-5-GPS-Cellular-41-45mm-Variety-Colors-Refurbished-Acceptable-Condition-p-167301309.html?src_identifier=st%3D5%60sc%3Delectronic%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1760881641522&pageListType=4&imgRatio=13-16&detailBusinessFrom=0-1_167301309&pageListType=4",
    formerPrise: 485.68,
    prise: 118.84,
  },
  {
    id: ++i,
    storeName: " Alibaba ",
    nameProdect: "Wireless Bluetooth-compatible Headphones",
    opponent: 20,
    imgDisplay: "product2-Ab",
    imgHover: "product-2-Ab",
    pargraph: "Wireless Bluetooth-compatible Headphones With Mic Stereo Sound Max Fone Bluetooth Sport Waterproof Headset ",
    StorLink: "https://www.alibaba.com/product-detail/Wireless-Bluetooth-compatible-Headphones-With-Mic_1600754552972.html?spm=a2700.galleryofferlist.normal_offer.d_image.188613a0zJ6wlu&priceId=22469cb4d61e4f4e84fdfd76b61029a3",
    formerPrise: 3.90,
    prise: 3.12,
  },
  {
    id: ++i,
    storeName: " Amazon ",
    nameProdect: " Handset Cordless Phone with",
    opponent: 14,
    imgDisplay: "product4-Am",
    imgHover: "product-4-Am",
    pargraph: "AT&T EL52213 2-Handset Cordless Phone with Answering System & Extra-large Backlit Keys ",
    StorLink: "https://www.amazon.com/AT-EL52213-2-Handset-Expandable-Extra-Large/dp/B00ILF6ZVE/ref=sr_1_2?crid=AZ2DCYJRBK76&dib=eyJ2IjoiMSJ9.TUq04qkU-YZAE7r9cIgl3AjpxcAxUgcGs7z9f_SHI4R2OynrDDUsLltJfAkf-R6CbVh--wkzaNakSGqQaZMK_asAonyTWmtgLgS5fpFo1V7HQfaF7tHI0Teoa5TA86CAw4gzKlTBcSzeZ4oMBPV3SL_QgHtFu05lc-aR0OzNJEF8qjo69B2Lf9F6WPZ6UzBS7AsIJrU3O2J1bZkGphtP-AdvotCkinV-DkZVK88_WBI.H2jSTzryBeKZzD_5CTCEpzbV1U84buqnYDsbUayRrts&dib_tag=se&keywords=electric%2Bphone&qid=1760957546&sprefix=electric%2Bphone%2Caps%2C265&sr=8-2&th=1",
    formerPrise: 67.90,
    prise: 50.71,
  },
 
  {
    id: ++i,
    storeName: " Amazon ",
    nameProdect: "PhoHeadphones, Auto NC Optimizerne",
    opponent: 9,
    imgDisplay: "product6-Am",
    imgHover: "product-6-Am",
    pargraph: "Sony WH-1000XM5 Premium Noise Canceling Headphones, Auto NC Optimizer, 30-Hour Battery, Alexa Voice Control, Black ",
    StorLink: "https://www.amazon.com/Sony-WH-1000XM5-Canceling-Headphones-Hands-Free/dp/B09XS7JWHH/ref=sr_1_16?crid=3PXKHTIROMW7K&dib=eyJ2IjoiMSJ9.BIsT-TnflPUAdm2ehLKse0BZz2cFDR7NTIEMtnar2lYd2AgZwSxmN0b6Odfw0YPUcrrQ1bo6cnYL9xx_ZP_0sRHYlsCkQ6wza0mp402fPa_COnykV_q2jmd3n-w4ujZmHXIU8kLaQ6VPdi3DQXWEXJqEVic4cdOCourHrZ68XCd8BnXmpSUeVD_OsI7dZoRlFx6d172T69UTNdj6kONgc9r1CwizIxnHqRsx-cooHOk.EqKBk5JOhtqSPyTSgenxwwaKeReSAdhMmvtLY8s-cW8&dib_tag=se&keywords=headphones&qid=1760958661&sprefix=hea%2Caps%2C336&sr=8-16&th=1",
    formerPrise: 269.98,
    prise: 259.00,
  },
  {
    id: ++i,
    storeName: " Amazon ",
    nameProdect: "KOORUI 22 Inch Computer Monitor",
    opponent: 25,
    imgDisplay: "product7-Am",
    imgHover: "product-7-Am",
    pargraph: "KOORUI Monitor 27 Inch 1080p PC Monitor 3000:1 Contrast Ratio with HDMI VGA for Office and Home, 99% SRGB, Frameless, Eye Care, Tilt Adjustment, VESA Mountable, Black ",
    StorLink: "https://www.amazon.com/KOORUI-Business-Computer-Monitor-Display/dp/B09FP4H99P/ref=sr_1_1?crid=2MTUK8M1O4D2F&dib=eyJ2IjoiMSJ9._apuWwngt9pHNRtEksv92228ePOSyglnd5bpwiEuoUQwdd8cZLcQRxA8sx4yMZa5u0txdb1-poDk4esnLBeIGNAcWeWoCmrwfeUqzikqYpjE-f3N-8ilfXBHgTbhQZloZnIfMkF_y3hFlyGW8Kp7-HjEvwZnhMO-d3gY9a7CMgkWA-GodmxIHEr8UarkEng0mhGXQR65XqAXm45I7q5_HjdgBCEIUo_pr7b6IdTgWwce_-TjOyQB-zcSGhGBnvamUO7Iol6D4dxXvsdr2m5UdcnAci-tHgHbCrSQfJx_HXo.jYaBm0w9TPD7cesNU_3tKMtW1lmOFLngEID10BOwUo8&dib_tag=se&keywords=screen&qid=1760959115&sprefix=screen%2B%2Caps%2C272&sr=8-1&th=1",
    formerPrise: 99.99,
    prise: 57.31,
  },
  {
    id: ++i,
    storeName: " Alibaba ",
    nameProdect: " Android Smartphone 2024 Original Android  ",
    opponent: 11,
    imgDisplay: "product1-Ab",
    imgHover: "product-1-Ab",
    pargraph: "China Android Smartphone 2024 Original Android Pova5pro SmartPhone 128GB Mobile Phone Cell Gaming Phone Smartphone 3G ",
    StorLink: "https://www.alibaba.com/product-detail/China-Android-Smartphone-2024-Original-Android_1601287996782.html?spm=a2700.galleryofferlist.normal_offer.d_image.478313a0zZBCZD&selectedCarrierCode=SEMI_MANAGED_STANDARD%40%40STANDARD&priceId=ba87d3540e2c45da82640afda907d838",
    formerPrise: 33.78,
    prise: 30.07,
  },
  
  {
    id: ++i,
    storeName: " Alibaba ",
    nameProdect: "VALDUS F9 Headphones",
    opponent: 12,
    imgDisplay: "product3-Ab",
    imgHover: "product-3-Ab",
    pargraph: "VALDUS F9 Headphones Fone De Ouvido Audifonos Auriculares Wireless Earphone Waterproof BT 5.0 F9-5 F9-5C TWS Earbuds",
    StorLink: "https://www.alibaba.com/product-detail/VALDUS-F9-Headphones-Fone-De-Ouvido_62503303549.html?spm=a2700.galleryofferlist.normal_offer.d_image.188613a0zJ6wlu&selectedCarrierCode=SEMI_MANAGED_STANDARD%40%40STANDARD&priceId=22469cb4d61e4f4e84fdfd76b61029a3",
    formerPrise: 3.44,
    prise: 3.35,
  },
 
  {
    id: ++i,
    storeName: " Alibaba  ",
    nameProdect: "Chair PC",
    opponent: 32,
    imgDisplay: "product5-Ab",
    imgHover: "product-5-Ab",
    pargraph: "Home Furniture Fabric Racing Chair Adjustable PC Chair Comfortable Computer Silla Modern Gaming Chair",
    StorLink: "https://www.alibaba.com/product-detail/Home-Furniture-Fabric-Racing-Chair-Adjustable_1601343500068.html?spm=a2700.galleryofferlist.topad_classic.i1.403413a0o0w6fW",
    formerPrise: 24.26,
    prise: 23.39,
  },
  {
    id: ++i,
    storeName: " Alibaba ",
    nameProdect: "Large Digital Wall Clock LED",
    opponent: 3,
    imgDisplay: "product6-Ab",
    imgHover: "product-6-Ab",
    pargraph: "Large Digital Wall Clock LED Alarm Mirror Display USB Powered Timer Calendar Thermometer Hygrometer Countdown ",
    StorLink: "https://www.alibaba.com/product-detail/Large-Digital-Wall-Clock-LED-Alarm_1601535350240.html?spm=a2700.galleryofferlist.p_offer.d_image.403213a0q6E7T8&priceId=a8de20c3e82648f2bee347f4abfbbf3d",
    formerPrise: 4.51,
    prise: 4.42,
  },
  
  
  
];
// console.log(i);


// لي عرض areey  في الصفحه  
for (swiperSlide of tasks) {
  connceted.innerHTML += `
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
                            <h4>Store name : <span title="A store ${swiperSlide.storeName}"> ${swiperSlide.storeName}</span> </h4>
                            <h3 class="name_prodect"><a href="#" target="_blank">
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
                                <a href="#" target="_blank"><i title="Visiting the snitch" class="fa-solid fa-cart-shopping"></i></a> 
                            </div>
                        </div>

                    </div>
            </div>
    `;
}
// تسخدم ارسال البيانات الئ   localStorage  و حفظها في 
let lenk_opject = document.querySelectorAll("#swiper-wrapper .swiper-slide");
 
lenk_opject.forEach(function (ele) {
  ele.addEventListener("click", function () {
    let aa = {
      id: tasks[ele.getAttribute("idItem") - 1].id,
      storeName: tasks[ele.getAttribute("idItem") - 1].storeName,
      opponent: tasks[ele.getAttribute("idItem") - 1].opponent ,
      nameProdect: tasks[ele.getAttribute("idItem") - 1].nameProdect ,
      imgDisplay: tasks[ele.getAttribute("idItem") - 1].imgDisplay,
      imgHover: tasks[ele.getAttribute("idItem") - 1].imgHover,
      pargraph:  tasks[ele.getAttribute("idItem") - 1].pargraph,
      StorLink: tasks[ele.getAttribute("idItem") - 1].StorLink,
      formerPrise: tasks[ele.getAttribute("idItem") - 1].formerPrise,
      prise:  tasks[ele.getAttribute("idItem") - 1].prise,
    };
       localStorage.setItem('selectedProduct', JSON.stringify(aa));
      //  ارسال البيانات الئ صفحه producer.html 
    window.location.href = "producer.html";
  });
});
