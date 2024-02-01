//HTML ELEMENTS
let listOfProducts = document.querySelector(".listOfProducts");
let cartIcons = document.querySelector(".cart-icons");
let closeCart = document.querySelector(".closeCart");
let cartItems = document.querySelector(".cartItems-div");
let quantityBags = document.querySelector(".quantity");
let totalAmount = document.querySelector(".totalAmount");
let listOfItemInCart = document.querySelector(".listOfItemInCart");

let BagProducts = [
  {
    id: 1,
    name: "Latest Bag 1",
    image: "1.jpeg",
    price: 400,
  },

  {
    id: 2,
    name: "Latest Bag 2",
    image: "2.jpeg",
    price: 400,
  },

  {
    id: 3,
    name: "Latest Bag 3",
    image: "3.jpeg",
    price: 400,
  },

  {
    id: 4,
    name: "Latest Bag 4",
    image: "4.jpeg",
    price: 400,
  },

  {
    id: 5,
    name: "Latest Bag 5",
    image: "5.jpeg",
    price: 400,
  },

  {
    id: 6,
    name: "Latest Bag 6",
    image: "6.jpeg",
    price: 400,
  },

  {
    id: 7,
    name: "Latest Bag 7",
    image: "7.jpeg",
    price: 400,
  },

  {
    id: 8,
    name: "Latest Bag 8",
    image: "8.jpeg",
    price: 400,
  },

  {
    id: 9,
    name: "Latest Bag 9",
    image: "9.jpeg",
    price: 400,
  },

  {
    id: 10,
    name: "Latest Bag 10",
    image: "10.jpeg",
    price: 400,
  },

  {
    id: 11,
    name: "Latest Bag 11",
    image: "11.jpeg",
    price: 400,
  },

  {
    id: 12,
    name: "Latest Bag 12",
    image: "12.jpeg",
    price: 400,
  },
];

let listCards = [];

const cartApp = function () {
  BagProducts.forEach((value, key) => {
    let newDivListsBags = document.createElement("div");
    newDivListsBags.classList.add("bagLabels");

    newDivListsBags.innerHTML = `
      <img src = "bag img/bag_${value.image}"/>
      <div class ="productTitle"> ${value.name} </div>
      <div class ="productPrice"> $ ${value.price.toLocaleString()}.00 </div>
      <button onclick = "addToCart(${key})" class = "addToCartBtn"> Add to Cart </button>

    `;
    listOfProducts.appendChild(newDivListsBags);
  });
};
cartApp();

cartIcons.addEventListener("click", () => {
  cartItems.classList.remove("cart-hidden");
});

closeCart.addEventListener("click", () => {
  cartItems.classList.add("cart-hidden");
});

function addToCart(key) {
  if (listCards[key] == null) {
    listCards[key] = BagProducts[key];
    listCards[key].quantityBags = 1;
  }
  reloadCard();
}

const reloadCard = function () {
  listOfItemInCart.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice += value.price;
    count += value.quantityBags;

    if (value != null) {
      let newDivListsBags = document.createElement("li");
      newDivListsBags.innerHTML = `
      
       <div> <img src = "bag img/bag_${value.image}" /> </div> 
       <div> ${value.name} </div>
       <div> ${value.price.toLocaleString()} </div>
       
       <div>
       <button onclick = "changeQuantity(${key}, ${
        value.quantityBags - 1
      })"> - </button>
       
       <div class ="count"> ${value.quantityBags}</div>

       <button onclick = "changeQuantity(${key}, ${
        value.quantityBags + 1
      })"> + </button>
       </div>
       
      `;
      listOfItemInCart.appendChild(newDivListsBags);
    }
  });
  totalAmount.innerText = totalPrice.toLocaleString();
  quantityBags.innerText = count;
};

function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantityBags = quantity;
    listCards[key].price = quantity * BagProducts[key].price;
  }
  reloadCard();
}
