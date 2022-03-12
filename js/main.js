const serviceList = [
	{
		service: "Manicure",
		price: 20.0,
	},
	{
		service: "Pedicure",
		price: 33.0,
	},
	{
		service: "Mani & Pedi",
		price: 48.0,
	},
	{
		service: "Manicure with French",
		price: 25.0,
	},
	{
		service: "Pedicure with French",
		price: 33.0,
	},
	{
		service: "French Mani & Pedi",
		price: 58.0,
	},
	{
		service: "Nail Art",
		price: 15.0,
	},
	{
		service: "Hand Polish",
		price: 10.0,
	},
	{
		service: "Toe Polish",
		price: 15.0,
	},
	{
		service: "Shellac Take-off",
		price: 10.0,
	},
	{
		service: "Shellac Manicure",
		price: 30.0,
	},
	{
		service: "Shellac Pedicure",
		price: 43.0,
	},
	{
		service: "Shellac Polish",
		price: 20.0,
	},
	{
		service: "Shellac Mani & Pedi",
		price: 68.0,
	},
	{
		service: "Deluxe Add-on",
		price: 15.0,
	},
];

const serviceButtons = Array.from(document.querySelectorAll(".btn.serviceBtn"));
const priceOutput = document.querySelector(".price-column");
const servicesOutput = document.querySelector(".service-column");
const subTotalOutput = document.querySelector("#subtotal");
const hstOutput = document.querySelector("#hst");
const totalOutput = document.querySelector("#total");

let dollarUSLocale = Intl.NumberFormat("en-US");
let subTotal = 0.0;

for (let i = 0; i < serviceList.length; i++) {
	serviceButtons[i].innerText = serviceList[i].service;
	serviceButtons[i].value = serviceList[i].price;
}

serviceButtons.forEach((button) => {
	button.addEventListener("click", addItem);
});

function addItem() {
	// create two new elements to show the services and price
	let newPrice = document.createElement("p");
	let newService = document.createElement("p");
	// update the displayout with the service and price values
	newPrice.innerText = parseFloat(this.value).toFixed(2);
	newService.innerText = this.innerText;
	//append it to the parent div to output display
	priceOutput.appendChild(newPrice);
	servicesOutput.appendChild(newService);
	// tally up the total so far
	subTotal += parseFloat(this.value);
	subTotalOutput.innerText = subTotal.toFixed(2);
	// calculate the taxes for the subtotal
	let taxes = subTotal * 0.13;
	let total = subTotal + taxes;
	// display the running Total with taxes
	hstOutput.innerText = taxes.toFixed(2);
	totalOutput.innerText = total.toFixed(2);
}

function updateDisplay() {}
