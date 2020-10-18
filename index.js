
let product = [

    {
      id:1,
      name:"Black Jacket",
      size:"L",
      color:"Black",
      price:"2000",
      image:"product 1.jpg",
      description:"Good looking jacket",
    },

    {
        id:2,
        name:"Checked shirt",
        size:"L",
        color:"Red",
        price:"1800",
        image:"product 2.jpg",
        description:"Attractive checked shirt",
    },

    {
        id:3,
        name:"White shirt",
        size:"XL",
        color:"White",
        price:"1500",
        image:"product 3.jpg",
        description:"Stylish shirt",
    },

    {
        id:4,
        name:"Indian Dress",
        size:"L",
        color:"Black",
        price:"2500",
        image:"product 4.jpg",
        description:"Traditional dress",
    },

    {
        id:5,
        name:"Skirt",
        size:"S",
        color:"Blue",
        price:"1200",
        image:"product 5.jpg",
        description:"Short skirt",
    },

    {
        id:6,
        name:"Frock",
        size:"L",
        color:"Pink",
        price:"2000",
        image:"product 6.jpg",
        description:"Beautiful frock",
    },

    {
      id:7,
      name:"Sherwani",
      size:"L",
      color:"Red",
      price:"2500",
      image:"product 7.jpg",
      description:"Traditional Sherwani",
    },

    {
        id:8,
        name:"Coat",
        size:"L",
        color:"Grey",
        price:"2200",
        image:"product 8.jpg",
        description:"Formal coat",
    },

    {
        id:9,
        name:"Half shirt",
        size:"L",
        color:"Blue",
        price:"1500",
        image:"product 9.jpg",
        description:"Summer fashion",
    },

    {
      id:10,
      name:"Lehenga",
      size:"L",
      color:"Yellow",
      price:"2500",
      image:"product 10.jpg",
      description:"Attractive Lehenga",
    },

    {
      id:11,
      name:"Gown",
      size:"L",
      color:"Red",
      price:"2500",
      image:"product 11.jpg",
      description:"Long Gown",
    },

    {
        id:12,
        name:"Salwar",
        size:"L",
        color:"Green",
        price:"2000",
        image:"product 12.jpg",
        description:"Traditional Salwar",
    },

]




let cart=  [];
let count = 0;
function displayproduct(products, type="main", place="card") {
  console.log(products);
  let strproduct = "";
  let arrproduct = "";
  products.forEach(function (ele, index) 
  {
    if(type == "main")
    {
      strproduct = ` <div class="productcardbg">
      <div class="image">
      <img src="products/${ele.image}" width="100%" />
      </div>
      <div>
      <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
      <p>Size : ${ele.size}</p>
      <p>Color : ${ele.color}</p>
      <p>price : ${ele.price} INR</p>
      <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
      <p style="padding-top: 5px">
      <button class="buttonbg" onclick="addToCart(${ele.id})">Add to Cart</button>
      </p>
      </div>
      </div>`;
      arrproduct += strproduct;
    }
          
    if(type=="cartd")
    {
      strproduct = ` <div class="productcardbg">
      <div class="image">
        <img src="products/${ele.image}" width="100%" />
      </div>
      <div>
        <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
        <p>Size : ${ele.size}</p>
        <p>Color : ${ele.color}</p>
        <p>price : ${ele.price} INR</p>
        <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
        <p style="padding-top: 5px">
          <button class="buttonbg" onclick="deleteproduct(${ele.id})">Delete item</button>
        </p>
      </div>
    </div>`;
              
    arrproduct += strproduct;    
  
    }
  });
      
  document.getElementById(place).innerHTML = arrproduct;
      
}
  
  
function getProductByID(prod, id) 
{
  return prod.find(function (ele) 
  {
      return ele.id == id;
  });
}


let flag = false;
function addToCart(id) 
{
  flag = false;
  let item = getProductByID(product, id);
  
  cart.forEach(function(element)
  {
    if(element.id == item.id)
    {
      flag=true;
    }
  })

  if (flag) 
  {
    alert("This product is already in cart.");
    return 0;
  }
    cart.push(item);
    count += 1;
    document.getElementById("numb").innerText = count;
    let type="cartd";
    let place="cartcard";
    displayproduct(cart, type, place);
  
  }
  
  
  function search()
  {
    console.log("calling");
  }


  function deleteproduct(id)
  {
    let item = getProductByID(product, id); 
    let index = cart.findIndex(function (item1) 
    {
      return item1.id == id;
    });
    cart.splice(index, 1);
    count -= 1;
    document.getElementById("numb").innerText = count;
    let type = "cartd";
    let place = "cartcard";
    displayproduct(cart, type, place);
  }
  

  function filter()
  {
    let minv = document.getElementById("minp").value;
    let maxv = document.getElementById("maxp").value;
    let items = product.filter(function(itemsl)
    {
      return itemsl.price >= minv && itemsl.price <= maxv;
    })
    displayproduct(items);
    document.getElementById("minp").value="";
    document.getElementById("maxp").value="";
  }
  

function search()
{
  let str= document.getElementById("serstr").value;
  console.log(str);
  let items = product.filter(function(ele) 
  {
    return ele.name.indexOf(str) != -1;
  });
  displayproduct(items);
  
}

displayproduct(product);



