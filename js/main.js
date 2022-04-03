const serviceList = [
	{
		service: "Manicure",
		price: 20.0,
	},
	{
		service: "Pedicure",
		price: 30.0,
	},
	{
		service: "Mani & Pedi",
		price: 45.0,
	},
	{
		service: "Manicure with French",
		price: 25.0,
	},
	{
		service: "Pedicure with French",
		price: 35.0,
	},
	{
		service: "French Mani & Pedi",
		price: 55.0,
	},
	{
		service: "Nail Art",
		price: 15.0,
	},
	{
		service: "Hand Polish",
		price: 15.0,
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
		price: 35.0,
	},
	{
		service: "Shellac Pedicure",
		price: 45.0,
	},
	{
		service: "Shellac Polish",
		price: 25.0,
	},
	{
		service: "Shellac Mani & Pedi",
		price: 75.0,
	},
	{
		service: "Deluxe Add-on",
		price: 15.0,
	},
]

const employee = [
	"Aaron",
	"Jennifer",
	"Cindy",
	"Vanager",
	"May",
	"Vy",
	"Joanne",
]
let employeeIndexSelected

const selectEmployeeButton = document.querySelector("#select-employee")
const serviceButtons = Array.from(document.querySelectorAll(".btn.serviceBtn"))
const priceOutput = document.querySelector(".price-column")
const servicesOutput = document.querySelector(".service-column")
const employeeIdOutput = document.querySelector(".employeeid-column")
const subTotalOutput = document.querySelector("#subtotal")
const hstOutput = document.querySelector("#hst")
const totalOutput = document.querySelector("#total")
const span = document.getElementsByClassName("close")[0]
const modal = document.getElementById("myModal")

span.onclick = () => {
	modal.style.display = "none"
}
window.onclick = (event) => {
	if (event.target == modal) modal.style.display = "none"
}

selectEmployeeButton.onclick = () => {
	selectEmployee()
}

// function to display modal with employee list and add employee ID to the form
function selectEmployee() {
	const employeeList = document.querySelector(".employee-list")
	employeeList.innerHTML = ""
	employee.forEach((employee, index) => {
		const div = document.createElement("div")
		div.innerHTML = `<button class="btn employeeBtn" value="${index}">${employee}</button>`
		employeeList.appendChild(div)
	})
	modal.style.display = "block"
	// add event listener to the employee buttons
	const employeeButtons = Array.from(document.querySelectorAll(".employeeBtn"))
	employeeButtons.forEach((button) => {
		button.addEventListener("click", (event) => {
			const employeeId = event.target.value
			modal.style.display = "none"
			employeeIndexSelected = employeeId
		})
	})
}

let subTotal = 0.0

for (let i = 0; i < serviceList.length; i++) {
	serviceButtons[i].innerText = serviceList[i].service
	serviceButtons[i].value = serviceList[i].price
}

serviceButtons.forEach((button) => {
	button.addEventListener("click", addItem)
})

function addItem() {
	// create two new elements to show the services and price
	let newPrice = document.createElement("p")
	let newService = document.createElement("p")
	// create a new element to show the employee ID
	let newEmployee = document.createElement("p")
	// update the displayout with the service and price values
	newPrice.innerText = parseFloat(this.value).toFixed(2)
	newService.innerText = this.innerText
	// update the displayout with the employee ID
	newEmployee.innerText = employee[employeeIndexSelected]
	//append it to the parent div to output display
	priceOutput.appendChild(newPrice)
	servicesOutput.appendChild(newService)
	employeeIdOutput.appendChild(newEmployee)
	// tally up the total so far
	subTotal += parseFloat(this.value)
	subTotalOutput.innerText = subTotal.toFixed(2)
	// calculate the taxes for the subtotal
	let taxes = subTotal * 0.13
	let total = subTotal + taxes
	// display the running Total with taxes
	hstOutput.innerText = taxes.toFixed(2)
	totalOutput.innerText = total.toFixed(2)
}
