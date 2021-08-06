console.log(getProductObjById(1))
let curAmt = []
let curCartItem = 0
function modifyPrices(price,quant,itemno){
	const no = itemno.slice(-1)
	console.log(price,quant,no)
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
	node.querySelector("input[type=number]").oninput = function(){modifyPrices(productDetails.newPrice,this.value,this.id)}
	node.querySelector(".cart-item-img").src = `products/${productDetails.image}`
	node.id = " "
	main_cart_panel.appendChild(node)
	curAmt.push(productDetails.newPrice * quant)
	curCartItem += 1
}
window.onload = event =>{
	showProduct(1,3)
	showProduct(8,3)
	showProduct(3,1)
	document.querySelector(".totalamount").innerHTML = parseInt(curAmt.reduce((a, b) => a + b, 0)).toFixed(2)
}