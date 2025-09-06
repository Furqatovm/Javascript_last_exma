setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 2000);

let order = JSON.parse(localStorage.getItem("orders")) || [];
let orderlar =document.getElementById("salom");
let Total_price =document.getElementById("totalPrice");

let savat_NUmber =document.getElementById("savatNumber");
let body =document.querySelector("body");
let bosh =document.querySelector(".boshsh");
let boshElement =document.getElementById("narsa");
order = order.map(item => ({ ...item, counter: item.counter || 1, userPrice: item.price * (item.counter || 1) }));

function changeNumber(arr){
    let natija = arr.length;
    savat_NUmber.textContent =natija;
}

function addUIshop(order){
    orderlar.innerHTML = "";
    order.forEach((value) =>{
      let div =document.createElement("div");
      div.classList.add(
        "p-[2rem]",
    "flex",
    "justify-between",
    "items-center",
    "border-t",
    "border-gray-400",
    "children"
      );
  
      div.innerHTML = `
                      <div class="max-w-[150px]">
                          <img src="${value.img}" class="w-full" alt="">
                      </div>
                      <div>
                          <h4 class="text-[18px]">${value.name.slice(0, 10)}</h4>
                          <button class="mt-[5px] py-[3px] px-[10px] rounded-[8px] bg-brand text-white">TCL</button>
                      </div>
                      <div class="flex gap-[2rem] items-center">
                          <button class="w-[30px] h-[30px] rounded-full border border-brand text-center flex items-center justify-center decrement" id="${value.id}">-</button>
                          <div>${value.counter}</div>
                          <button class="w-[30px] h-[30px] rounded-full border border-brand text-center flex items-center justify-center increment" id="${value.id}">+</button>
          
                      </div>
                      <div class="flex flex-col gap-[0.5rem]">
                          <span class="text-brand font-bold">${value.userPrice.toLocaleString()}</span>
                          <button class="text-[#FE7300] text-[14px] text-left w-full p-[5px]  rounded-[4px] border border-[#FE7300] bg-transparent">1292992 x 12 мес</button>
                      </div>
                      <div class="text-gray-300">
                          <i class="fa-regular fa-heart hover:text-red-500 cursor-pointer"></i>
                          <i class="fa-solid fa-trash delete hover:text-red-500 cursor-pointer" id="${value.id}"></i>
                      </div>
      `;
      if(orderlar){
      orderlar.append(div);
      } else{
        return;
      }
    });
  }


  body.addEventListener("click", (e)=>{
    if(e.target.classList.contains("delete")){
        let id =e.target.id;
        Data_Delete(id);
    }
    if(e.target.classList.contains("increment")){
      let id =e.target.id;
      incrementCounter(id);
    };

    if(e.target.classList.contains("decrement")){
      let id =e.target.id;
      Decrementt(id);
    }
  });


  function Data_Delete(id){
   order = order.filter((value) => value.id !==+id);
   localStorage.setItem("orders", JSON.stringify(order));
   addUIshop(order);
   changeNumber(order);
   EMPTY(order);
   total_price(order)
  }

  function EMPTY(arr){
    if(arr.length === 0){
        bosh.classList.add("hidden");
        boshElement.classList.remove('hidden');
    } else {
        bosh.classList.remove("hidden");
        boshElement.classList.add('hidden');
    }
  };

  function total_price(arr){
    let total = 0;
    arr.forEach((value) => {
        total += value.price * value.counter; 
    });
    Total_price.textContent = total.toLocaleString();
};

  function incrementCounter(id) {
    order = order.map(value => {
        if (value.id === +id) {
            let newCOunter =value.counter +1
            return { ...value, counter: newCOunter, userPrice: value.price *newCOunter };
        }
        return value;
    });
    localStorage.setItem("orders", JSON.stringify(order));
    addUIshop(order);
    total_price(order);
}


function Decrementt(id) {
  order = order.map(value => {
      if (value.id === +id) {
          let newCOunter =value.counter == 1? 1: value.counter -1;
          return { ...value, counter: newCOunter, userPrice: value.price *newCOunter };
      }
      return value;
  });
  localStorage.setItem("orders", JSON.stringify(order));
  addUIshop(order);
  total_price(order);
}

  total_price(order);


  changeNumber(order);
  EMPTY(order);

  addUIshop(order)