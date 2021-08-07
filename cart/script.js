console.log(getProductObjById(1))
//Cookie Items
/* items=
{
	1: {"quant": 1},
	8: {"quant": 2}
}
*/
let curAmt = []
let curCartItem = 0
var curObj = {}
function modifyPrices(id,price,quant,itemno,parent){
	const no = itemno.slice(-1)
	//console.log(price,quant,no)
	parent.querySelector(".cart-price-multiplier").innerHTML = parseInt(quant)
	parent.querySelector(".cart-price-product").innerHTML = parseInt((quant * price)).toFixed(2)
	curAmt[no] = parseInt((quant * price))
	curObj[id] = quant
	document.cookie = `items=${JSON.stringify(curObj)}`
	//console.log(curAmt)
	document.querySelector(".totalamount").innerHTML = parseInt(curAmt.reduce((a, b) => a + b, 0)).toFixed(2)
}
function deleteItem(id,parent,totalPrice){
	//console.log(price,quant,no)
	parent.remove()
	delete curObj[id]
	document.cookie = `items=${JSON.stringify(curObj)}`
	//console.log(curAmt)
	window.location.reload()
}
function showProduct(id,quant){
	const main_cart_panel = document.getElementById("cart-items")
	let node = document.getElementById("cart-item-template").cloneNode(true)
	let productDetails = getProductObjById(id)
	node.querySelector(".cart-item-title").innerHTML = productDetails.name
	node.querySelector(".cart-price-orig").innerHTML = parseInt(productDetails.newPrice).toFixed(2)
	node.querySelector(".cart-price-multiplier").innerHTML = quant
	node.querySelector(".cart-price-product").innerHTML = parseInt(productDetails.newPrice * quant).toFixed(2)
	node.querySelector(".cartmaintext").innerHTML = productDetails.description
	node.querySelector("input[type=number]").value = quant
	node.querySelector("input[type=number]").id = `cartSel${curCartItem}`
	node.querySelector("input[type=number]").oninput = function(){modifyPrices(id,productDetails.newPrice,this.value,this.id,node)}
	node.querySelector("a").onclick = function(){deleteItem(id,node,node.querySelector(".cart-price-product").innerHTML)} 
	node.querySelector(".cart-item-img").src = `products/${productDetails.image}`
	node.id = " "
	main_cart_panel.appendChild(node)
	curAmt.push(productDetails.newPrice * quant)
	curCartItem += 1
}
window.onload = event =>{
	if(getCookie("items") == ""){
    document.cookie = 'items="{}";'
    }
	if(getCookie("items") == "{}" || getCookie("items") == undefined){
		let main_cart_panel = document.getElementById("cart-items")
		let h1 = document.createElement("h1")
		h1.innerHTML = "Your cart is empty! <br> <a href='product.html'>Go get something</a>"
		main_cart_panel.appendChild(h1)
	}
	console.log(typeof getCookie("items"))
	items = JSON.parse(getCookie("items"))
	console.log(typeof items + " " + items)
	if(items == "{}"){
		let main_cart_panel = document.getElementById("cart-items")
		let h1 = document.createElement("h1")
		h1.innerHTML = "Your cart is empty! <br> <a href='product.html'>Go get something</a>"
		main_cart_panel.appendChild(h1)
	} else {
	curObj = items
	console.log(items,Object.entries(items))
	for (const entrie of Object.entries(items)){
		id = entrie[0]
		quant = entrie[1]
		console.log(id,quant)
		showProduct(id,parseInt(quant))
	}
	document.querySelector(".totalamount").innerHTML = parseInt(curAmt.reduce((a, b) => a + b, 0)).toFixed(2)
}}