
setTimeout(() => {
  document.getElementById("loader").style.display = "none";
}, 2000);
let cards =document.getElementById("cards");
let API ="https://68b6da3a73b3ec66cec2ef52.mockapi.io/Asaxiy/Products";
let telefonlar =document.getElementById("telefonrlar");
let xazna =document.getElementById("xazna");
let body =document.querySelector("body");
let bestseller =document.getElementById("bestseller");
let Std =document.getElementById("talaba");
let kamputer =document.getElementById("kamputer");
let ommabop =document.getElementById("ommabop");
let savat_NUmber =document.getElementById("savatNumber");
let Gdata = [];
let order = JSON.parse(localStorage.getItem("orders")) || [];
let shop = JSON.parse(localStorage.getItem("orders")) || [];
console.log(shop)

fetch(API)
.then((response) =>response.json())
.then((data) =>{
  Gdata =data;
  addUi(data)
})
.catch((error) =>console.log(error));

function addUi(data) {
  cards.innerHTML = "";
  xazna.innerHTML = "";
  telefonlar.innerHTML = "";   // qo‘shildi
  bestseller.innerHTML = "";   // qo‘shildi
  kamputer.innerHTML = "";     // qo‘shildi
  ommabop.innerHTML = "";      // qo‘shildi
  Std.innerHTML = "";   

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
  
        if(cards){
          cards.append(div);
          } else{
            return;
          }
      } else if (element.type == "telefon"){
        let div =document.createElement("div");
        div.innerHTML =`
                <div class="p-[15px] bg-[#FFFFFF] rounded-[20px] flex flex-col gap-[8px]">
            <div class="flex items-center relative">
                <div class="w-[90%]">
                <img src="${element.img}" class="w-[100%]" alt="">
                <span class="text-white text-[12px] font-medium p-[2px] bg-[#FF9800] absolute top-0 left-0 rounded-[5px]">Chegirma</span>
                </div>
                <div class ="text-red-600 text-[20px] cursor-pointer absolute top-[10%] right-0">
                        <i class="fa-regular fa-heart" id="${element.id}"></i>

                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2_280)">
                        <g clip-path="url(#clip1_2_280)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3042 4.7443C11.3042 5.32651 11.4908 5.71465 11.9263 6.0381L12.3617 6.23217C10.6822 6.23217 9.18933 6.49093 7.88306 7.20252C6.14136 8.04349 6.14136 7.26721 5.0839 7.26721C4.52406 7.26721 3.96423 8.36694 4.89729 8.88446C5.1461 9.01384 5.64373 9.20791 5.95475 9.20791C5.0839 10.9545 4.21305 12.7658 3.3422 14.5125C3.15559 14.5125 2.90677 14.4478 2.78236 14.5772C2.40914 14.9006 3.09338 15.8063 3.27999 16.065L3.96423 16.5825C5.51932 17.5529 8.38068 17.6176 9.74916 16.2591C10.1224 15.9356 10.62 15.3534 10.62 14.7065C10.62 14.4478 10.1224 14.5125 9.99798 14.5125C9.93577 14.3831 9.74916 13.9949 9.68696 13.8656C8.94052 12.4424 8.00746 10.8251 7.44763 9.40198C7.32322 9.14322 7.38543 9.2726 7.88306 9.14322C9.00272 8.88446 10.2468 8.17287 11.3042 8.17287V18.6526C10.5578 18.6526 9.99798 19.2995 9.99798 20.0758H8.44289C7.94526 20.0758 7.32322 20.658 7.32322 21.4343H12.6727H18.0222C18.0222 20.658 17.4002 20.0758 16.9025 20.0758H15.3475C15.3475 19.2995 14.7876 18.6526 14.0412 18.6526V8.17287C15.0986 8.17287 16.3427 8.88446 17.4624 9.14322C17.96 9.2726 18.0222 9.14322 17.8978 9.40198C17.2758 10.8251 16.4049 12.4424 15.6585 13.8656C15.5963 13.9949 15.4097 14.3831 15.3475 14.5125C15.223 14.5125 14.6632 14.4478 14.6632 14.7065C14.6632 15.3534 15.223 15.9356 15.5963 16.2591C16.9025 17.6176 19.8261 17.5529 21.3812 16.5825L22.0654 16.065C22.252 15.8063 22.9363 14.9006 22.5631 14.5772C22.4387 14.4478 22.1898 14.5125 22.0032 14.5125C21.1324 12.7658 20.2615 10.9545 19.3907 9.20791C19.7017 9.20791 20.1993 9.01384 20.3859 8.88446C21.3812 8.36694 20.7592 7.26721 20.1993 7.26721C19.2041 7.26721 19.2041 8.04349 17.4624 7.20252C16.1561 6.49093 14.6632 6.23217 12.9837 6.23217L13.3569 6.0381C13.8546 5.71465 14.0412 5.32651 14.0412 4.7443C14.0412 2.99767 11.3042 2.99767 11.3042 4.7443ZM18.7064 9.46667L17.4624 11.9896L16.2183 14.5125H18.7064H21.1324L19.9505 11.9896L18.7064 9.46667ZM6.63899 9.46667L7.88306 11.9896L9.12713 14.5125H6.63899H4.15084L5.39491 11.9896L6.63899 9.46667Z" fill="#94A3B8"/>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0_2_280">
                        <rect width="24" height="24" fill="white" transform="translate(0.672729 0.434326)"/>
                        </clipPath>
                        <clipPath id="clip1_2_280">
                        <rect width="24" height="24" fill="white" transform="translate(0.672729 0.434326)"/>
                        </clipPath>
                        </defs>
                        </svg>
                </div>
            </div>
            <h3 class="text-[#141821] font-medium text-[14px]">  ${element.name.slice(0, 30)}...</h3>
                <div class="stars flex justify-between items-center">
                   <div class="left flex gap-[4px]">
                    <svg width="15" class="starr" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.90685 1.14989C7.05909 0.845407 7.30437 0.693166 7.64268 0.693166C7.98099 0.693166 8.22626 0.845407 8.3785 1.14989L10.0278 4.49916L13.7323 5.05737C14.0706 5.0912 14.2905 5.26881 14.392 5.59021C14.4935 5.9116 14.4258 6.19071 14.189 6.42753L11.4994 9.04097L12.1337 12.7455C12.1845 13.0669 12.0745 13.3248 11.8039 13.5194C11.5332 13.7139 11.2541 13.735 10.9666 13.5828L7.64268 11.8574L4.31878 13.5828C4.03122 13.7519 3.75211 13.735 3.48146 13.532C3.21081 13.3291 3.10086 13.0669 3.15161 12.7455L3.78594 9.04097L1.09638 6.42753C0.859558 6.19071 0.791896 5.9116 0.893389 5.59021C0.994882 5.26881 1.21478 5.0912 1.55309 5.05737L5.25759 4.49916L6.90685 1.14989Z" fill="#FE7300"/>
                      </svg>  
                      <span>${element.star}%</span>
                   </div> 
                   <span class="text-[12px] text-[#C2C6D1]">1 отзывов</span>                      
                </div>
                <span class="text-[#94A3B8] text-[12px] line-through">1 749 000 сум</span>
                <span class="text-brand text-[18px] font-bold">${element.price.toLocaleString()}</span>
                <button class="text-[#FE7300] text-[14px] text-left w-full p-[5px]  rounded-[4px] border border-[#FE7300] bg-transparent">${(element.price /11).toLocaleString()} x 12 мес</button>
                <div class="flex justify-between w-full mt-[10px]">
                    <button class="tugma w-[80%] text-white text-[13px] font-bold py-[10px] px-[1.5rem] rounded-[10px] bg-brand cursor-pointer" id="${element.id}">Купить в один клик</button>
                    <div class="w-[19%] p-[8px] text-white bg-[#00BFAF] flex items-center justify-center rounded-[8px]">
                        <i class="fa-solid fa-cart-shopping" id="${element.id}"></i>
                    </div>
                </div>
        </div>
        `;
        if(telefonlar){
          telefonlar.append(div);
          } else{
            return;
          }
      } else if (element.type == "xazna"){
        let div =document.createElement("div");
        div.innerHTML =`
                <div class="p-[15px] bg-[#FFFFFF] rounded-[20px] flex flex-col gap-[8px] h-full justify-between overflow-hidden shadow-[4px_4px_10px_#D1D5DF80]">
            <div class="flex items-center relative">
                <div class="w-[90%]">
                <img src="${element.img}" class="w-[100%]" alt="">
                <span class="font-bold text-white text-[12px] p-[2px] bg-[#3F6D5B] absolute top-0 right-[-20%] rotate-45 rounded-[5px] w-[100px] h-[26px] text-center">0-0-6</span>
                </div>
                <div class ="text-red-600 text-[20px] cursor-pointer absolute top-[20%] right-0">
                        <i class="fa-regular fa-heart" id="${element.id}"></i>

                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2_280)">
                        <g clip-path="url(#clip1_2_280)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3042 4.7443C11.3042 5.32651 11.4908 5.71465 11.9263 6.0381L12.3617 6.23217C10.6822 6.23217 9.18933 6.49093 7.88306 7.20252C6.14136 8.04349 6.14136 7.26721 5.0839 7.26721C4.52406 7.26721 3.96423 8.36694 4.89729 8.88446C5.1461 9.01384 5.64373 9.20791 5.95475 9.20791C5.0839 10.9545 4.21305 12.7658 3.3422 14.5125C3.15559 14.5125 2.90677 14.4478 2.78236 14.5772C2.40914 14.9006 3.09338 15.8063 3.27999 16.065L3.96423 16.5825C5.51932 17.5529 8.38068 17.6176 9.74916 16.2591C10.1224 15.9356 10.62 15.3534 10.62 14.7065C10.62 14.4478 10.1224 14.5125 9.99798 14.5125C9.93577 14.3831 9.74916 13.9949 9.68696 13.8656C8.94052 12.4424 8.00746 10.8251 7.44763 9.40198C7.32322 9.14322 7.38543 9.2726 7.88306 9.14322C9.00272 8.88446 10.2468 8.17287 11.3042 8.17287V18.6526C10.5578 18.6526 9.99798 19.2995 9.99798 20.0758H8.44289C7.94526 20.0758 7.32322 20.658 7.32322 21.4343H12.6727H18.0222C18.0222 20.658 17.4002 20.0758 16.9025 20.0758H15.3475C15.3475 19.2995 14.7876 18.6526 14.0412 18.6526V8.17287C15.0986 8.17287 16.3427 8.88446 17.4624 9.14322C17.96 9.2726 18.0222 9.14322 17.8978 9.40198C17.2758 10.8251 16.4049 12.4424 15.6585 13.8656C15.5963 13.9949 15.4097 14.3831 15.3475 14.5125C15.223 14.5125 14.6632 14.4478 14.6632 14.7065C14.6632 15.3534 15.223 15.9356 15.5963 16.2591C16.9025 17.6176 19.8261 17.5529 21.3812 16.5825L22.0654 16.065C22.252 15.8063 22.9363 14.9006 22.5631 14.5772C22.4387 14.4478 22.1898 14.5125 22.0032 14.5125C21.1324 12.7658 20.2615 10.9545 19.3907 9.20791C19.7017 9.20791 20.1993 9.01384 20.3859 8.88446C21.3812 8.36694 20.7592 7.26721 20.1993 7.26721C19.2041 7.26721 19.2041 8.04349 17.4624 7.20252C16.1561 6.49093 14.6632 6.23217 12.9837 6.23217L13.3569 6.0381C13.8546 5.71465 14.0412 5.32651 14.0412 4.7443C14.0412 2.99767 11.3042 2.99767 11.3042 4.7443ZM18.7064 9.46667L17.4624 11.9896L16.2183 14.5125H18.7064H21.1324L19.9505 11.9896L18.7064 9.46667ZM6.63899 9.46667L7.88306 11.9896L9.12713 14.5125H6.63899H4.15084L5.39491 11.9896L6.63899 9.46667Z" fill="#94A3B8"/>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0_2_280">
                        <rect width="24" height="24" fill="white" transform="translate(0.672729 0.434326)"/>
                        </clipPath>
                        <clipPath id="clip1_2_280">
                        <rect width="24" height="24" fill="white" transform="translate(0.672729 0.434326)"/>
                        </clipPath>
                        </defs>
                        </svg>
                </div>
            </div>
            <h3 class="text-[#141821] font-medium text-[14px]">  ${element.name.slice(0, 30)}...</h3>
                <div class="stars flex justify-between items-center">
                   <div class="left flex gap-[4px] items-center">
                    <svg width="15" class="starr" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.90685 1.14989C7.05909 0.845407 7.30437 0.693166 7.64268 0.693166C7.98099 0.693166 8.22626 0.845407 8.3785 1.14989L10.0278 4.49916L13.7323 5.05737C14.0706 5.0912 14.2905 5.26881 14.392 5.59021C14.4935 5.9116 14.4258 6.19071 14.189 6.42753L11.4994 9.04097L12.1337 12.7455C12.1845 13.0669 12.0745 13.3248 11.8039 13.5194C11.5332 13.7139 11.2541 13.735 10.9666 13.5828L7.64268 11.8574L4.31878 13.5828C4.03122 13.7519 3.75211 13.735 3.48146 13.532C3.21081 13.3291 3.10086 13.0669 3.15161 12.7455L3.78594 9.04097L1.09638 6.42753C0.859558 6.19071 0.791896 5.9116 0.893389 5.59021C0.994882 5.26881 1.21478 5.0912 1.55309 5.05737L5.25759 4.49916L6.90685 1.14989Z" fill="#FE7300"/>
                      </svg>  
                      <span>${element.star}%</span>
                   </div> 
                   <span class="text-[12px] text-[#C2C6D1]">0 отзывов</span>                      
                </div>
                <span class="text-brand text-[18px] font-bold">${element.price.toLocaleString()}</span>
                <button class="text-[#FE7300] text-[14px] text-left w-full p-[5px]  rounded-[4px] border border-[#FE7300] bg-transparent">${(element.price /11).toLocaleString()} x 12 мес</button>
                <div class="flex justify-between w-full mt-[10px]">
                    <button class="w-[80%] text-white text-[13px] font-bold py-[10px] px-[1.5rem] rounded-[10px] bg-brand">Купить в один клик</button>
                    <div class="w-[19%] p-[8px] text-white bg-[#00BFAF] flex items-center justify-center rounded-[8px]">
                        <i class="fa-solid fa-cart-shopping" id="${element.id}"></i>
                    </div>
                </div>
        </div>
        `;
        if(xazna){
          xazna.append(div);
          } else{
            return;
          }
      } else if (element.type == "top"){
        let div =document.createElement("div");
        div.innerHTML =`
                <div class="p-[15px] bg-[#FFFFFF] rounded-[20px] flex flex-col gap-[8px]  h-full justify-between">
            <div class="flex items-center relative">
                <div class="w-[90%]">
                <img src="${element.img}" class="w-[100%]" alt="">
                <span class="text-white text-[12px] font-medium p-[2px] bg-[#262626] px-[10px] absolute top-0 left-0 rounded-[5px]">Top</span>
                </div>
                <div class ="text-red-600 text-[20px] cursor-pointer absolute top-0 right-0 items-center">
                        <i class="fa-regular fa-heart" id="${element.id}"></i>

                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2_280)">
                        <g clip-path="url(#clip1_2_280)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3042 4.7443C11.3042 5.32651 11.4908 5.71465 11.9263 6.0381L12.3617 6.23217C10.6822 6.23217 9.18933 6.49093 7.88306 7.20252C6.14136 8.04349 6.14136 7.26721 5.0839 7.26721C4.52406 7.26721 3.96423 8.36694 4.89729 8.88446C5.1461 9.01384 5.64373 9.20791 5.95475 9.20791C5.0839 10.9545 4.21305 12.7658 3.3422 14.5125C3.15559 14.5125 2.90677 14.4478 2.78236 14.5772C2.40914 14.9006 3.09338 15.8063 3.27999 16.065L3.96423 16.5825C5.51932 17.5529 8.38068 17.6176 9.74916 16.2591C10.1224 15.9356 10.62 15.3534 10.62 14.7065C10.62 14.4478 10.1224 14.5125 9.99798 14.5125C9.93577 14.3831 9.74916 13.9949 9.68696 13.8656C8.94052 12.4424 8.00746 10.8251 7.44763 9.40198C7.32322 9.14322 7.38543 9.2726 7.88306 9.14322C9.00272 8.88446 10.2468 8.17287 11.3042 8.17287V18.6526C10.5578 18.6526 9.99798 19.2995 9.99798 20.0758H8.44289C7.94526 20.0758 7.32322 20.658 7.32322 21.4343H12.6727H18.0222C18.0222 20.658 17.4002 20.0758 16.9025 20.0758H15.3475C15.3475 19.2995 14.7876 18.6526 14.0412 18.6526V8.17287C15.0986 8.17287 16.3427 8.88446 17.4624 9.14322C17.96 9.2726 18.0222 9.14322 17.8978 9.40198C17.2758 10.8251 16.4049 12.4424 15.6585 13.8656C15.5963 13.9949 15.4097 14.3831 15.3475 14.5125C15.223 14.5125 14.6632 14.4478 14.6632 14.7065C14.6632 15.3534 15.223 15.9356 15.5963 16.2591C16.9025 17.6176 19.8261 17.5529 21.3812 16.5825L22.0654 16.065C22.252 15.8063 22.9363 14.9006 22.5631 14.5772C22.4387 14.4478 22.1898 14.5125 22.0032 14.5125C21.1324 12.7658 20.2615 10.9545 19.3907 9.20791C19.7017 9.20791 20.1993 9.01384 20.3859 8.88446C21.3812 8.36694 20.7592 7.26721 20.1993 7.26721C19.2041 7.26721 19.2041 8.04349 17.4624 7.20252C16.1561 6.49093 14.6632 6.23217 12.9837 6.23217L13.3569 6.0381C13.8546 5.71465 14.0412 5.32651 14.0412 4.7443C14.0412 2.99767 11.3042 2.99767 11.3042 4.7443ZM18.7064 9.46667L17.4624 11.9896L16.2183 14.5125H18.7064H21.1324L19.9505 11.9896L18.7064 9.46667ZM6.63899 9.46667L7.88306 11.9896L9.12713 14.5125H6.63899H4.15084L5.39491 11.9896L6.63899 9.46667Z" fill="#94A3B8"/>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0_2_280">
                        <rect width="24" height="24" fill="white" transform="translate(0.672729 0.434326)"/>
                        </clipPath>
                        <clipPath id="clip1_2_280">
                        <rect width="24" height="24" fill="white" transform="translate(0.672729 0.434326)"/>
                        </clipPath>
                        </defs>
                        </svg>
                </div>
            </div>
            <h3 class="text-[#141821] font-medium text-[14px]">  ${element.name.slice(0, 30)}...</h3>
                <div class="stars flex justify-between items-center">
                   <div class="left flex gap-[4px]">
                    <svg width="15" class="starr" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.90685 1.14989C7.05909 0.845407 7.30437 0.693166 7.64268 0.693166C7.98099 0.693166 8.22626 0.845407 8.3785 1.14989L10.0278 4.49916L13.7323 5.05737C14.0706 5.0912 14.2905 5.26881 14.392 5.59021C14.4935 5.9116 14.4258 6.19071 14.189 6.42753L11.4994 9.04097L12.1337 12.7455C12.1845 13.0669 12.0745 13.3248 11.8039 13.5194C11.5332 13.7139 11.2541 13.735 10.9666 13.5828L7.64268 11.8574L4.31878 13.5828C4.03122 13.7519 3.75211 13.735 3.48146 13.532C3.21081 13.3291 3.10086 13.0669 3.15161 12.7455L3.78594 9.04097L1.09638 6.42753C0.859558 6.19071 0.791896 5.9116 0.893389 5.59021C0.994882 5.26881 1.21478 5.0912 1.55309 5.05737L5.25759 4.49916L6.90685 1.14989Z" fill="#FE7300"/>
                      </svg>  
                      <span>${element.star}%</span>
                   </div> 
                   <span class="text-[12px] text-[#C2C6D1]">1 отзывов</span>                      
                </div>
                <span class="text-[#94A3B8] text-[12px] line-through">1 749 000 сум</span>
                <span class="text-brand text-[18px] font-bold">${element.price.toLocaleString()} so'm</span>
                <button class="text-[#FE7300] text-[14px] text-left w-full p-[5px]  rounded-[4px] border border-[#FE7300] bg-transparent">${(element.price /11).toLocaleString()} x 12 мес</button>
                <div class="flex justify-between w-full mt-[10px]">
                    <button class="w-[80%] text-white text-[13px] font-bold py-[10px] px-[1.5rem] rounded-[10px] bg-brand">Купить в один клик</button>
                    <div class="w-[19%] p-[8px] text-white bg-[#00BFAF] flex items-center justify-center rounded-[8px]">
                        <i class="fa-solid fa-cart-shopping" id="${element.id}"></i>
                    </div>
                </div>
        </div>
        `;
        if(bestseller){
          bestseller.append(div);
          } else{
            return;
          }
      } else if (element.type == "student"){
        let div =document.createElement("div");
        div.innerHTML =`
                <div class="p-[15px] bg-[#FFFFFF] rounded-[20px] flex flex-col gap-[8px]  h-full justify-between">
            <div class="flex items-center relative">
                <div class="w-[90%]">
                <img src="${element.img}" class="w-[100%]" alt="">
                <span class="text-white text-[12px] font-medium p-[2px] bg-[#262626] px-[10px] absolute top-0 left-0 rounded-[5px]">Top</span>
                </div>
                <div class ="text-red-600 text-[20px] cursor-pointer absolute top-0 right-0 items-center">
                        <i class="fa-regular fa-heart" id="${element.id}"></i>

                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2_280)">
                        <g clip-path="url(#clip1_2_280)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3042 4.7443C11.3042 5.32651 11.4908 5.71465 11.9263 6.0381L12.3617 6.23217C10.6822 6.23217 9.18933 6.49093 7.88306 7.20252C6.14136 8.04349 6.14136 7.26721 5.0839 7.26721C4.52406 7.26721 3.96423 8.36694 4.89729 8.88446C5.1461 9.01384 5.64373 9.20791 5.95475 9.20791C5.0839 10.9545 4.21305 12.7658 3.3422 14.5125C3.15559 14.5125 2.90677 14.4478 2.78236 14.5772C2.40914 14.9006 3.09338 15.8063 3.27999 16.065L3.96423 16.5825C5.51932 17.5529 8.38068 17.6176 9.74916 16.2591C10.1224 15.9356 10.62 15.3534 10.62 14.7065C10.62 14.4478 10.1224 14.5125 9.99798 14.5125C9.93577 14.3831 9.74916 13.9949 9.68696 13.8656C8.94052 12.4424 8.00746 10.8251 7.44763 9.40198C7.32322 9.14322 7.38543 9.2726 7.88306 9.14322C9.00272 8.88446 10.2468 8.17287 11.3042 8.17287V18.6526C10.5578 18.6526 9.99798 19.2995 9.99798 20.0758H8.44289C7.94526 20.0758 7.32322 20.658 7.32322 21.4343H12.6727H18.0222C18.0222 20.658 17.4002 20.0758 16.9025 20.0758H15.3475C15.3475 19.2995 14.7876 18.6526 14.0412 18.6526V8.17287C15.0986 8.17287 16.3427 8.88446 17.4624 9.14322C17.96 9.2726 18.0222 9.14322 17.8978 9.40198C17.2758 10.8251 16.4049 12.4424 15.6585 13.8656C15.5963 13.9949 15.4097 14.3831 15.3475 14.5125C15.223 14.5125 14.6632 14.4478 14.6632 14.7065C14.6632 15.3534 15.223 15.9356 15.5963 16.2591C16.9025 17.6176 19.8261 17.5529 21.3812 16.5825L22.0654 16.065C22.252 15.8063 22.9363 14.9006 22.5631 14.5772C22.4387 14.4478 22.1898 14.5125 22.0032 14.5125C21.1324 12.7658 20.2615 10.9545 19.3907 9.20791C19.7017 9.20791 20.1993 9.01384 20.3859 8.88446C21.3812 8.36694 20.7592 7.26721 20.1993 7.26721C19.2041 7.26721 19.2041 8.04349 17.4624 7.20252C16.1561 6.49093 14.6632 6.23217 12.9837 6.23217L13.3569 6.0381C13.8546 5.71465 14.0412 5.32651 14.0412 4.7443C14.0412 2.99767 11.3042 2.99767 11.3042 4.7443ZM18.7064 9.46667L17.4624 11.9896L16.2183 14.5125H18.7064H21.1324L19.9505 11.9896L18.7064 9.46667ZM6.63899 9.46667L7.88306 11.9896L9.12713 14.5125H6.63899H4.15084L5.39491 11.9896L6.63899 9.46667Z" fill="#94A3B8"/>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0_2_280">
                        <rect width="24" height="24" fill="white" transform="translate(0.672729 0.434326)"/>
                        </clipPath>
                        <clipPath id="clip1_2_280">
                        <rect width="24" height="24" fill="white" transform="translate(0.672729 0.434326)"/>
                        </clipPath>
                        </defs>
                        </svg>
                </div>
            </div>
            <h3 class="text-[#141821] font-medium text-[14px]">  ${element.name.slice(0, 30)}...</h3>
                <div class="stars flex justify-between items-center">
                   <div class="left flex gap-[4px]">
                    <svg width="15" class="starr" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.90685 1.14989C7.05909 0.845407 7.30437 0.693166 7.64268 0.693166C7.98099 0.693166 8.22626 0.845407 8.3785 1.14989L10.0278 4.49916L13.7323 5.05737C14.0706 5.0912 14.2905 5.26881 14.392 5.59021C14.4935 5.9116 14.4258 6.19071 14.189 6.42753L11.4994 9.04097L12.1337 12.7455C12.1845 13.0669 12.0745 13.3248 11.8039 13.5194C11.5332 13.7139 11.2541 13.735 10.9666 13.5828L7.64268 11.8574L4.31878 13.5828C4.03122 13.7519 3.75211 13.735 3.48146 13.532C3.21081 13.3291 3.10086 13.0669 3.15161 12.7455L3.78594 9.04097L1.09638 6.42753C0.859558 6.19071 0.791896 5.9116 0.893389 5.59021C0.994882 5.26881 1.21478 5.0912 1.55309 5.05737L5.25759 4.49916L6.90685 1.14989Z" fill="#FE7300"/>
                      </svg>  
                      <span>${element.star}%</span>
                   </div> 
                   <span class="text-[12px] text-[#C2C6D1]">1 отзывов</span>                      
                </div>
                <span class="text-[#94A3B8] text-[12px] line-through">1 749 000 сум</span>
                <span class="text-brand text-[18px] font-bold">${element.price.toLocaleString()} so'm</span>
                <button class="text-[#FE7300] text-[14px] text-left w-full p-[5px]  rounded-[4px] border border-[#FE7300] bg-transparent">${(element.price /11).toLocaleString()} x 12 мес</button>
                <div class="flex justify-between w-full mt-[10px]">
                    <button class="w-[80%] text-white text-[13px] font-bold py-[10px] px-[1.5rem] rounded-[10px] bg-brand">Купить в один клик</button>
                    <div class="w-[19%] p-[8px] text-white bg-[#00BFAF] flex items-center justify-center rounded-[8px]">
                        <i class="fa-solid fa-cart-shopping" id="${element.id}"></i>
                    </div>
                </div>
        </div>
        `;
        if(Std){
          Std.append(div);
          } else{
            return;
          }
      }else if (element.type == "pc"){
        let div =document.createElement("div");
        div.innerHTML =`
                <div class="p-[15px] bg-[#FFFFFF] rounded-[20px] flex flex-col gap-[8px]  h-full justify-between">
            <div class="flex items-center relative">
                <div class="w-[90%]">
                <img src="${element.img}" class="w-[100%]" alt="">
                <span class="text-white text-[12px] font-medium p-[2px] bg-[#262626] px-[10px] absolute top-0 left-0 rounded-[5px]">Top</span>
                </div>
                <div class ="text-red-600 text-[20px] cursor-pointer absolute top-0 right-0 items-center">
                        <i class="fa-regular fa-heart" id="${element.id}"></i>

                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2_280)">
                        <g clip-path="url(#clip1_2_280)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3042 4.7443C11.3042 5.32651 11.4908 5.71465 11.9263 6.0381L12.3617 6.23217C10.6822 6.23217 9.18933 6.49093 7.88306 7.20252C6.14136 8.04349 6.14136 7.26721 5.0839 7.26721C4.52406 7.26721 3.96423 8.36694 4.89729 8.88446C5.1461 9.01384 5.64373 9.20791 5.95475 9.20791C5.0839 10.9545 4.21305 12.7658 3.3422 14.5125C3.15559 14.5125 2.90677 14.4478 2.78236 14.5772C2.40914 14.9006 3.09338 15.8063 3.27999 16.065L3.96423 16.5825C5.51932 17.5529 8.38068 17.6176 9.74916 16.2591C10.1224 15.9356 10.62 15.3534 10.62 14.7065C10.62 14.4478 10.1224 14.5125 9.99798 14.5125C9.93577 14.3831 9.74916 13.9949 9.68696 13.8656C8.94052 12.4424 8.00746 10.8251 7.44763 9.40198C7.32322 9.14322 7.38543 9.2726 7.88306 9.14322C9.00272 8.88446 10.2468 8.17287 11.3042 8.17287V18.6526C10.5578 18.6526 9.99798 19.2995 9.99798 20.0758H8.44289C7.94526 20.0758 7.32322 20.658 7.32322 21.4343H12.6727H18.0222C18.0222 20.658 17.4002 20.0758 16.9025 20.0758H15.3475C15.3475 19.2995 14.7876 18.6526 14.0412 18.6526V8.17287C15.0986 8.17287 16.3427 8.88446 17.4624 9.14322C17.96 9.2726 18.0222 9.14322 17.8978 9.40198C17.2758 10.8251 16.4049 12.4424 15.6585 13.8656C15.5963 13.9949 15.4097 14.3831 15.3475 14.5125C15.223 14.5125 14.6632 14.4478 14.6632 14.7065C14.6632 15.3534 15.223 15.9356 15.5963 16.2591C16.9025 17.6176 19.8261 17.5529 21.3812 16.5825L22.0654 16.065C22.252 15.8063 22.9363 14.9006 22.5631 14.5772C22.4387 14.4478 22.1898 14.5125 22.0032 14.5125C21.1324 12.7658 20.2615 10.9545 19.3907 9.20791C19.7017 9.20791 20.1993 9.01384 20.3859 8.88446C21.3812 8.36694 20.7592 7.26721 20.1993 7.26721C19.2041 7.26721 19.2041 8.04349 17.4624 7.20252C16.1561 6.49093 14.6632 6.23217 12.9837 6.23217L13.3569 6.0381C13.8546 5.71465 14.0412 5.32651 14.0412 4.7443C14.0412 2.99767 11.3042 2.99767 11.3042 4.7443ZM18.7064 9.46667L17.4624 11.9896L16.2183 14.5125H18.7064H21.1324L19.9505 11.9896L18.7064 9.46667ZM6.63899 9.46667L7.88306 11.9896L9.12713 14.5125H6.63899H4.15084L5.39491 11.9896L6.63899 9.46667Z" fill="#94A3B8"/>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0_2_280">
                        <rect width="24" height="24" fill="white" transform="translate(0.672729 0.434326)"/>
                        </clipPath>
                        <clipPath id="clip1_2_280">
                        <rect width="24" height="24" fill="white" transform="translate(0.672729 0.434326)"/>
                        </clipPath>
                        </defs>
                        </svg>
                </div>
            </div>
            <h3 class="text-[#141821] font-medium text-[14px]">  ${element.name.slice(0, 30)}...</h3>
                <div class="stars flex justify-between items-center">
                   <div class="left flex gap-[4px]">
                    <svg width="15" class="starr" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.90685 1.14989C7.05909 0.845407 7.30437 0.693166 7.64268 0.693166C7.98099 0.693166 8.22626 0.845407 8.3785 1.14989L10.0278 4.49916L13.7323 5.05737C14.0706 5.0912 14.2905 5.26881 14.392 5.59021C14.4935 5.9116 14.4258 6.19071 14.189 6.42753L11.4994 9.04097L12.1337 12.7455C12.1845 13.0669 12.0745 13.3248 11.8039 13.5194C11.5332 13.7139 11.2541 13.735 10.9666 13.5828L7.64268 11.8574L4.31878 13.5828C4.03122 13.7519 3.75211 13.735 3.48146 13.532C3.21081 13.3291 3.10086 13.0669 3.15161 12.7455L3.78594 9.04097L1.09638 6.42753C0.859558 6.19071 0.791896 5.9116 0.893389 5.59021C0.994882 5.26881 1.21478 5.0912 1.55309 5.05737L5.25759 4.49916L6.90685 1.14989Z" fill="#FE7300"/>
                      </svg>  
                      <span>${element.star}%</span>
                   </div> 
                   <span class="text-[12px] text-[#C2C6D1]">1 отзывов</span>                      
                </div>
                <span class="text-[#94A3B8] text-[12px] line-through">1 749 000 сум</span>
                <span class="text-brand text-[18px] font-bold">${element.price.toLocaleString()} so'm</span>
                <button class="text-[#FE7300] text-[14px] text-left w-full p-[5px]  rounded-[4px] border border-[#FE7300] bg-transparent">${(element.price /11).toLocaleString()} x 12 мес</button>
                <div class="flex justify-between w-full mt-[10px]">
                    <button class="w-[80%] text-white text-[13px] font-bold py-[10px] px-[1.5rem] rounded-[10px] bg-brand">Купить в один клик</button>
                    <div class="w-[19%] p-[8px] text-white bg-[#00BFAF] flex items-center justify-center rounded-[8px]">
                        <i class="fa-solid fa-cart-shopping" id="${element.id}"></i>
                    </div>
                </div>
        </div>
        `;
        if(kamputer){
          kamputer.append(div);
          } else{
            return;
          }
      }else if (element.type == "ommabop"){
        let div =document.createElement("div");
        div.innerHTML =`
                <div class="p-[15px] bg-[#FFFFFF] rounded-[20px] flex flex-col gap-[8px]  h-full justify-between">
            <div class="flex items-center relative">
                <div class="w-[90%]">
                <img src="${element.img}" class="w-[100%]" alt="">
                <span class="text-white text-[12px] font-medium p-[2px] bg-[#262626] px-[10px] absolute top-0 left-0 rounded-[5px]">Top</span>
                </div>
                <div class ="text-red-600 text-[20px] cursor-pointer absolute top-0 right-0 items-center">
                        <i class="fa-regular fa-heart" id="${element.id}"></i>

                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2_280)">
                        <g clip-path="url(#clip1_2_280)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3042 4.7443C11.3042 5.32651 11.4908 5.71465 11.9263 6.0381L12.3617 6.23217C10.6822 6.23217 9.18933 6.49093 7.88306 7.20252C6.14136 8.04349 6.14136 7.26721 5.0839 7.26721C4.52406 7.26721 3.96423 8.36694 4.89729 8.88446C5.1461 9.01384 5.64373 9.20791 5.95475 9.20791C5.0839 10.9545 4.21305 12.7658 3.3422 14.5125C3.15559 14.5125 2.90677 14.4478 2.78236 14.5772C2.40914 14.9006 3.09338 15.8063 3.27999 16.065L3.96423 16.5825C5.51932 17.5529 8.38068 17.6176 9.74916 16.2591C10.1224 15.9356 10.62 15.3534 10.62 14.7065C10.62 14.4478 10.1224 14.5125 9.99798 14.5125C9.93577 14.3831 9.74916 13.9949 9.68696 13.8656C8.94052 12.4424 8.00746 10.8251 7.44763 9.40198C7.32322 9.14322 7.38543 9.2726 7.88306 9.14322C9.00272 8.88446 10.2468 8.17287 11.3042 8.17287V18.6526C10.5578 18.6526 9.99798 19.2995 9.99798 20.0758H8.44289C7.94526 20.0758 7.32322 20.658 7.32322 21.4343H12.6727H18.0222C18.0222 20.658 17.4002 20.0758 16.9025 20.0758H15.3475C15.3475 19.2995 14.7876 18.6526 14.0412 18.6526V8.17287C15.0986 8.17287 16.3427 8.88446 17.4624 9.14322C17.96 9.2726 18.0222 9.14322 17.8978 9.40198C17.2758 10.8251 16.4049 12.4424 15.6585 13.8656C15.5963 13.9949 15.4097 14.3831 15.3475 14.5125C15.223 14.5125 14.6632 14.4478 14.6632 14.7065C14.6632 15.3534 15.223 15.9356 15.5963 16.2591C16.9025 17.6176 19.8261 17.5529 21.3812 16.5825L22.0654 16.065C22.252 15.8063 22.9363 14.9006 22.5631 14.5772C22.4387 14.4478 22.1898 14.5125 22.0032 14.5125C21.1324 12.7658 20.2615 10.9545 19.3907 9.20791C19.7017 9.20791 20.1993 9.01384 20.3859 8.88446C21.3812 8.36694 20.7592 7.26721 20.1993 7.26721C19.2041 7.26721 19.2041 8.04349 17.4624 7.20252C16.1561 6.49093 14.6632 6.23217 12.9837 6.23217L13.3569 6.0381C13.8546 5.71465 14.0412 5.32651 14.0412 4.7443C14.0412 2.99767 11.3042 2.99767 11.3042 4.7443ZM18.7064 9.46667L17.4624 11.9896L16.2183 14.5125H18.7064H21.1324L19.9505 11.9896L18.7064 9.46667ZM6.63899 9.46667L7.88306 11.9896L9.12713 14.5125H6.63899H4.15084L5.39491 11.9896L6.63899 9.46667Z" fill="#94A3B8"/>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0_2_280">
                        <rect width="24" height="24" fill="white" transform="translate(0.672729 0.434326)"/>
                        </clipPath>
                        <clipPath id="clip1_2_280">
                        <rect width="24" height="24" fill="white" transform="translate(0.672729 0.434326)"/>
                        </clipPath>
                        </defs>
                        </svg>
                </div>
            </div>
            <h3 class="text-[#141821] font-medium text-[14px]">  ${element.name.slice(0, 30)}...</h3>
                <div class="stars flex justify-between items-center">
                   <div class="left flex gap-[4px]">
                    <svg width="15" class="starr" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.90685 1.14989C7.05909 0.845407 7.30437 0.693166 7.64268 0.693166C7.98099 0.693166 8.22626 0.845407 8.3785 1.14989L10.0278 4.49916L13.7323 5.05737C14.0706 5.0912 14.2905 5.26881 14.392 5.59021C14.4935 5.9116 14.4258 6.19071 14.189 6.42753L11.4994 9.04097L12.1337 12.7455C12.1845 13.0669 12.0745 13.3248 11.8039 13.5194C11.5332 13.7139 11.2541 13.735 10.9666 13.5828L7.64268 11.8574L4.31878 13.5828C4.03122 13.7519 3.75211 13.735 3.48146 13.532C3.21081 13.3291 3.10086 13.0669 3.15161 12.7455L3.78594 9.04097L1.09638 6.42753C0.859558 6.19071 0.791896 5.9116 0.893389 5.59021C0.994882 5.26881 1.21478 5.0912 1.55309 5.05737L5.25759 4.49916L6.90685 1.14989Z" fill="#FE7300"/>
                      </svg>  
                      <span>${element.star}%</span>
                   </div> 
                   <span class="text-[12px] text-[#C2C6D1]">1 отзывов</span>                      
                </div>
                <span class="text-[#94A3B8] text-[12px] line-through">1 749 000 сум</span>
                <span class="text-brand text-[18px] font-bold">${element.price.toLocaleString()} so'm</span>
                <button class="text-[#FE7300] text-[14px] text-left w-full p-[5px]  rounded-[4px] border border-[#FE7300] bg-transparent">${(element.price /11).toLocaleString()} x 12 мес</button>
                <div class="flex justify-between w-full mt-[10px]">
                    <button class="w-[80%] text-white text-[13px] font-bold py-[10px] px-[1.5rem] rounded-[10px] bg-brand">Купить в один клик</button>
                    <div class="w-[19%] p-[8px] text-white bg-[#00BFAF] flex items-center justify-center rounded-[8px]">
                        <i class="fa-solid fa-cart-shopping" id="${element.id}"></i>
                    </div>
                </div>
        </div>
        `;
        if(ommabop){
          ommabop.append(div);
          } else{
            return;
          }
      }
    });
  }
  
body.addEventListener("click", (e) =>{
  if(e.target.classList.contains("fa-heart")){
    console.log(e.target.id);
    e.target.classList.toggle("fa-solid");
    let id =e.target.id;
  } 
});





let togle =document.querySelectorAll(".togle");
togle.forEach((value) =>{
  value.addEventListener("click", ()=>{
  let span =value.parentElement.nextElementSibling;
    span.classList.toggle("hidden");
    value.classList.toggle("rotate-180")
  })
})

body.addEventListener("click", (e)=>{
  if(e.target.classList.contains("tugma")){
  e.preventDefault();
    let id =e.target.id;
     addSHop(id)
  }
})




function addSHop (id){
    let data =Gdata.find((value) => value.id ==id);
    if (shop.find((value) => value.id == data.id)) {
      shop;
    } else {
      shop = [...shop, data];
      localStorage.setItem("shop", JSON.stringify(shop));
    }
    order = shop;
    localStorage.setItem("orders", JSON.stringify(order));
  
    addUi(Gdata);
    changeNumber(order);

};


function showSavatNumber(arr){
    let natija =arr.length;
    savat_NUmber.textContent =natija;
};


function changeNumber(arr){
  let natija = arr.length;
  savat_NUmber.textContent =natija;
};






showSavatNumber(order);


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










