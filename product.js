let product = [
  {
    id: 1,
    name: "Black Jacket",
    size: "L",
    color: "Black",
    oldPrice: "2500",
    newPrice: "2000",
    image: "product 1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
  },

  {
    id: 2,
    name: "Checked shirt",
    size: "L",
    color: "Red",
    oldPrice: "2400",
    newPrice: "1800",
    image: "product 2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
  },

  {
    id: 3,
    name: "White shirt",
    size: "XL",
    color: "White",
    oldPrice: "1600",
    newPrice: "1500",
    image: "product 3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
  },

  {
    id: 4,
    name: "Indian Dress",
    size: "L",
    color: "Black",
    oldPrice: "3100",
    newPrice: "2500",
    image: "product 4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
  },

  {
    id: 5,
    name: "Skirt",
    size: "S",
    color: "Blue",
    oldPrice: "1290",
    newPrice: "1200",
    image: "product 5.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
  },

  {
    id: 6,
    name: "Frock",
    size: "L",
    color: "Pink",
    oldPrice: "2140",
    newPrice: "2000",
    image: "product 6.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
  },

  {
    id: 7,
    name: "Sherwani",
    size: "L",
    color: "Red",
    oldPrice: "2700",
    newPrice: "2500",
    image: "product 7.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
  },

  {
    id: 8,
    name: "Coat",
    size: "L",
    color: "Grey",
    oldPrice: "2900",
    newPrice: "2200",
    image: "product 8.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
  },

  {
    id: 9,
    name: "Half shirt",
    size: "L",
    color: "Blue",
    oldPrice: "1900",
    newPrice: "1500",
    image: "product 9.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
  },

  {
    id: 10,
    name: "Lehenga",
    size: "L",
    color: "Yellow",
    oldPrice: "2750",
    newPrice: "2500",
    image: "product 10.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
  },

  {
    id: 11,
    name: "Gown",
    size: "L",
    color: "Red",
    oldPrice: "2800",
    newPrice: "2500",
    image: "product 11.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
  },

  {
    id: 12,
    name: "Salwar",
    size: "L",
    color: "Green",
    oldPrice: "2200",
    newPrice: "2000",
    image: "product 12.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
  },
];
var curObj = {}

let cart = [];
let count = 0;
function displayproduct(products, type = "main", place = "card") {
  let strproduct = "";
  let arrproduct = "";
  products.forEach(function (ele, index) {
    if (type == "main") {
      strproduct = `	<div class="product-card">
      <div class="badge">Hot</div>
      <div class="product-tumb">
        <img class="image" src="products/${ele.image}" alt="">
      </div>
      <div class="product-details">
        <span class="product-catagory">SIZE: ${ele.size}</span>
        <h4><a href="">${ele.name}</a></h4>
        <p>${ele.description}</p>
        <div class="product-bottom-details">
          <div class="product-price"><small>₹${ele.oldPrice}</small>₹${ele.newPrice}</div>
          <div class="product-links">
            <a href=""><i class="fa fa-heart"></i></a>
            <button class="shopping-cart-button" onclick="addToCart(${ele.id})"><i class="fa fa-shopping-cart"></i></button>
          </div>
        </div>
      </div>
    </div>`;
      arrproduct += strproduct;
    }

    if (type == "cartd") {
      strproduct = `	<div class="product-card">
      <div class="badge">Hot</div>
      <div class="product-tumb">
        <img src="products/${ele.image}" alt="">
      </div>
      <div class="product-details">
        <span class="product-catagory">SIZE: ${ele.size}</span>
        <h4><a href="">${ele.name}</a></h4>
        <p>${ele.description}</p>
        <div class="product-bottom-details">
          <div class="product-price"><small>₹${ele.oldPrice}</small>₹${ele.newPrice}</div>
          <div class="product-links">
            <a href="javascript:deleteproduct(${ele.id})"><i class="fa fa-trash"></i></a>
            <button class="shopping-cart-button" onclick="addToCart(${ele.id})"><i class="fa fa-shopping-cart"></i></button>
          </div>
        </div>
      </div>
    </div>`;

      arrproduct += strproduct;
    }
  });

  document.getElementById(place).innerHTML = arrproduct;
}
function modifyCart(id){
  if(Object.keys(curObj).includes(id) || Object.keys(curObj).includes(id.toString())){
    curObj[id] += 1
  } else {
    curObj[id] = 1
  }
  document.cookie = `items=${JSON.stringify(curObj)}`
}
function getProductByID(prod, id) {
  return prod.find(function (ele) {
    return ele.id == id;
  });
}

let flag = false;
function addToCart(id) {
  flag = false;
  let item = getProductByID(product, id);
  modifyCart(id)
  cart.forEach(function (element) {
    if (element.id == item.id) {
      flag = true;
    }
  });

  cart.push(item);
  count += 1;
  document.getElementById("numb").innerText = count;
  let type = "cartd";
  let place = "cartcard";
  displayproduct(cart, type, place);
}

function search() {
  console.log("calling");
}

function deleteproduct(id) {
  let item = getProductByID(product, id);
  let index = cart.findIndex(function (item1) {
    return item1.id == id;
  });
  cart.splice(index, 1);
  count -= 1;
  document.getElementById("numb").innerText = count;
  let type = "cartd";
  let place = "cartcard";
  displayproduct(cart, type, place);
}

function filter() {
  let minv = document.getElementById("minp").value;
  let maxv = document.getElementById("maxp").value;
  let items = product.filter(function (itemsl) {
    return itemsl.newPrice >= minv && itemsl.newPrice <= maxv;
  });
  displayproduct(items);
  document.getElementById("minp").value = "";
  document.getElementById("maxp").value = "";
}

function search() {
  let str = document.getElementById("serstr").value;
  console.log(str);
  let items = product.filter(function (ele) {
    return ele.name.indexOf(str) != -1;
  });
  displayproduct(items);
}
function getProductObjById(id){
  for (const item of product){
    if(item.id == id){
      return item
    }
  }
  return {}
}
displayproduct(product);
window.onload = (event) => {
  if(getCookie("items") == undefined){
    document.cookie = 'items={}'
    }

  items = JSON.parse(getCookie("items"))
  curObj = items
  count = Object.values(curObj)
  
  console.log(count)
  count = count.map(x=>+x).reduce((a, b) => a + b, 0)
  if(items=="{}"){
    document.getElementById("numb").innerHTML = "0"
    curObj = {}
  } else {
    document.getElementById("numb").innerHTML = count.map(x=>+x).reduce((a, b) => a + b, 0)
  }
}