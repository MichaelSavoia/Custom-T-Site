var subTotal = 0;
var timeStamp = 0;

var isBlackInCart = false;
var isPinkInCart = false;
var isWhiteInCart = false;
var isNavyInCart = false;
var isInCart = false;
var open = false;

var taxN = 0.065;
var text = "";

var timeStart = new Date();

var cartButton = document.getElementById('cartIcon');

var remove = document.getElementById('remove')
var subTotalBox = document.getElementById("subtotal");
var tax = document.getElementById("tax")
var totalBox = document.getElementById('total');
var quantity = document.getElementById('quantity')
var items = document.getElementById('items')
var shirtPrice = document.getElementById('shirtPrice')

var cart = document.getElementById('cart');

var blackShirt = {
	color: 'black',
	price: 20,
	name: "Black Crew Neck",
	timeStart: 0,
}

var whiteShirt = {
	color: 'white',
	price: 20,
	name: "White Crew Neck",
	timeStart: 0,
}

var navyShirt = {
	color: 'navy',
	price: 20,
	name: "Navy Crew Neck",
	timeStart: 0,
}

var pinkShirt = {
	color: 'pink',
	price: 20,
	name: "Pink Crew Neck",
	timeStart: 0,
}

var carted = [];

function updateCart(){
	subTotal = 0;
	items.innerHTML ="";
	text= "";
	carted.forEach(function(shirt){
		subTotal += shirt.price;
		date = new Date(shirt.timeStart);
		timeStamp = moment(date).fromNow();
		text += `<div class="item"><span onClick="removeItem('${shirt.name}')" id="remove">x</span><h3 class="shirtName">${shirt.name}</h3><h3 class="shirtPrice">$${shirt.price}</h3><span class="time">added to cart ${timeStamp}</span></div>`;
	});

	items.innerHTML = text;
	quantity.innerHTML = carted.length;
	subTotalBox.innerHTML = subTotal.toFixed(2);
	tax.innerHTML = (subTotal*taxN).toFixed(2);
	totalBox.innerHTML = (subTotal*taxN+subTotal).toFixed(2);
	console.log(cart)
	localstorage.setitems('cart', JSON.stringify(carted));
}

function addToCart(price,color){
	items.innerHTML = "";
	text = "";
	if(color==='black' && isBlackInCart === false)
	{
		// subTotal += price;
		isBlackInCart = true;
		carted.push(blackShirt);
		// carted.forEach(function(shirt){
		// 	subTotal = 0
		// 	subTotal += shirt.price;
		// })
		date = new Date();
		blackShirt.timeStart = date;
	}

	else if(color==='black' && isBlackInCart === true){
		// subTotal -= price;
		isBlackInCart = false;
		var pos = carted.indexOf(blackShirt);
		carted.splice(pos,1);
	}

	if(color==='pink' && isPinkInCart === false)
	{
		// subTotal += price;
		isPinkInCart = true;
		carted.push(pinkShirt);
		// carted.forEach(function(shirt){
		// 	subTotal = 0
		// 	subTotal += shirt.price;
		// })
		pinkShirt.timeStart = Date.now();
	}

	else if(color==='pink' && isPinkInCart === true){
		// subTotal -= price;
		isPinkInCart = false;
		var pos = carted.indexOf(pinkShirt);
		carted.splice(pos,1);
	}

	if(color==='white' && isWhiteInCart === false)
	{
		// subTotal += price;
		isWhiteInCart = true;
		carted.push(whiteShirt);
		// carted.forEach(function(shirt){
		// 	subTotal = 0
		// 	subTotal += shirt.price;
		// })
		whiteShirt.timeStart = Date.now();
	}

	else if(color==='white' && isWhiteInCart === true){
		// subTotal -= price;
		isWhiteInCart = false;
		var pos = carted.indexOf(whiteShirt);
		carted.splice(pos,1);
	}

	if(color==='navy' && isNavyInCart === false)
	{
		// subTotal += price;
		isNavyInCart = true;
		carted.push(navyShirt);
		// carted.forEach(function(shirt){
		// 	subTotal = 0
		// 	subTotal += shirt.price;
		// })
		navyShirt.timeStart = Date.now();
	}

	else if(color==='navy' && isNavyInCart === true){
		// subTotal -= price;
		isNavyInCart = false;
		var pos = carted.indexOf(navyShirt);
		carted.splice(pos,1);
	}


	updateCart();


	console.log(price,color)
	console.log(subTotal)
	console.log(shirtName)
	console.log(shirtPrice)
}

function removeItem(shirt){
	var currentItem = null;
	carted.forEach(function(item){
		if(item.name===shirt){
			var pos = carted.indexOf(item);
			carted.splice(pos,1);
			currentItem = item;
		}
	})
	updateCart();
	if(currentItem.color==='black'){
		isBlackInCart = false;
	}
	if(currentItem.color==='pink'){
		isPinkInCart = false;
	}
	if(currentItem.color==='white'){
		isWhiteInCart = false;
	}
	if(currentItem.color==='navy'){
		isNavyInCart = false;
	}
}

cartButton.addEventListener("click",function(){
	if (open === false) {
		cart.className = "animateCartOpen cart";
		open = true;
	}
	else{
		cart.className = "animateCartClose cart";
		open = false;
	}

});