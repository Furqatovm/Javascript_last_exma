const swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,       
    loop: true, 
  autoplay: {
    delay: 2000,
    disableOnInteraction: false, 
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    loop: true,
    autoplay: {
        delay: 2000, 
        disableOnInteraction: false, 
      },
    navigation: { 
        nextEl: ".swiper2-button-next", 
        prevEl: ".swiper2-button-prev" 
    },
});

const swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 5,
    loop: true,
    autoplay: {
        delay: 2000, 
        disableOnInteraction: false, 
      },
    navigation: { 
        nextEl: ".swiper3-button-next", 
        prevEl: ".swiper3-button-prev" 
    },
});



let cards =document.getElementById("cards");
let API ="https://68b6da3a73b3ec66cec2ef52.mockapi.io/Asaxiy/Products";


fetch(API)
.then((response) =>response.json())
.then((data) =>addUi(data))
.catch((error) =>console.log(error));

function addUi(data) {
    data.forEach(element => {
      if (element.type == "chegirma") {
        let div = document.createElement("div");
        div.classList.add(
          "min-w-[190px]",
          "swiper-slide",
          "flex",
          "flex-col",
          "gap-[1rem]",
          "bg-white",
          "p-[10px]",
          "rounded-[8px]"
        );
  
        div.innerHTML = `
          <img src="${element.img}" class="w-full" alt="">
          <div class="flex flex-col gap-[11px]">
            <h3 class="text-blacks font-semibold leading-[18px] text-[12px]">
              ${element.name.slice(0, 30)}...
            </h3>
            <div class="flex justify-between items-center">
              <span class="text-grayy text-[14px] line-through">${element.discount.toLocaleString()}</span>
              <span class="text-orangee text-[13px]">${element.Percent}%</span>
            </div>
  
            <div class="flex justify-between items-center">
              <span class="text-brand text-[14px]">${element.price.toLocaleString()}</span>
              <span class="flex items-center text-brand text-[13px] justify-center">
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.17137 1.23127C7.32372 0.92658 7.56916 0.774236 7.9077 0.774236C8.24624 0.774236 8.49169 0.92658 8.64403 1.23127L10.2944 4.58283L14.0015 5.14142C14.34 5.17528 14.56 5.35301 14.6616 5.67463C14.7632 5.99624 14.6955 6.27554 14.4585 6.51252L11.7671 9.12775L12.4018 12.8348C12.4526 13.1564 12.3426 13.4145 12.0718 13.6092C11.8009 13.8039 11.5216 13.825 11.2339 13.6727L7.9077 11.9461L4.58153 13.6727C4.29377 13.8419 4.01447 13.825 3.74364 13.6219C3.47281 13.4188 3.36278 13.1564 3.41356 12.8348L4.04833 9.12775L1.35692 6.51252C1.11994 6.27554 1.05223 5.99624 1.1538 5.67463C1.25536 5.35301 1.47541 5.17528 1.81395 5.14142L5.52098 4.58283L7.17137 1.23127Z" fill="#FE7300"/>
                </svg>
                ${element.star}
              </span>
            </div>
  
            <button class="bg-brand text-center p-[5px] rounded-[5px] w-full text-white text-[13px]">
              01.10.2025
            </button>
          </div>
        `;
  
        cards.append(div);
      }
    });
  }
  