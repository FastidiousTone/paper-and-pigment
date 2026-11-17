import '../css/styles.css';

// variables

const addToBag = document.querySelector('[data-action="add-to-bag"]');
const increaseButton = document.querySelector('[data-action="increase"]');
const decreaseButton = document.querySelector('[data-action="decrease"]');
const quantityCount = document.querySelector('.quantity-count');
const quantityControl = document.querySelector('.quantity-control');

const products = [
	{
		id: 'markers',
		name: 'Botanical marker set',
		priceCents: 2400,
		quantity: 0,
	},
	{
		id: 'sketchbook',
		name: 'Everyday sketchbook',
		priceCents: 1800,
		quantity: 0,
	},
	{
		id: 'paint',
		name: 'Studio gouache palette',
		priceCents: 3200,
		quantity: 0,
	},
	{
		id: 'drawing',
		name: 'Drawing pencil collection',
		priceCents: 1600,
		quantity: 0,
	},
	{
		id: 'accessories',
		name: 'Color study washi tape',
		priceCents: 800,
		quantity: 0,
	},
	{
		id: 'tools',
		name: 'Detail brush trio',
		priceCents: 2200,
		quantity: 0,
	},
];

const bagCountDisplay = document.querySelector('.bag-items');
const emptyBagMessage = document.querySelector('.bag-content');
const orderTotalDisplay = document.querySelector('.order-total');
const confirmOrder = document.querySelector('.confirm-order');
const orderStatus = document.querySelector('.order-status');
const orderDescription = document.querySelector('.order-description');

// On each pass, product (singular) holds the current object. products (plural) is still the whole array. You’ve already got .name right—read it from the singular variable.

for (const product of products) {
	// I can reuse increaseButton. The const inside the loop has its own scope. Inside that loop and its click listeners, increaseButton refers to the current card’s button. The outer variable is separate. This is called shadowing.

	const card = document.querySelector(`[data-product-id="${product.id}"]`);
	const addToBagButton = card.querySelector(`[data-action="add-to-bag"]`);
	const increaseButton = card.querySelector('[data-action="increase"]');
	const decreaseButton = card.querySelector('[data-action="decrease"]');

	addToBagButton.addEventListener('click', () => {
		product.quantity += 1;
		renderBagItems();
		bagCountDisplay.textContent = `${getBagCount()}`;
		updateProductDisplay(product, card);
	});
	if (increaseButton !== null) {
		increaseButton.addEventListener('click', () => {
			product.quantity += 1;
			renderBagItems();
			bagCountDisplay.textContent = `${getBagCount()}`;
			updateProductDisplay(product, card);
		});
	}
	if (decreaseButton !== null) {
		decreaseButton.addEventListener('click', () => {
			if (product.quantity > 0) {
				product.quantity -= 1;
				renderBagItems();
				bagCountDisplay.textContent = `${getBagCount()}`;

				updateProductDisplay(product, card);
			}
		});
	}
	updateProductDisplay(product, card);
}

// Functions

function updateProductDisplay(product, card) {
	const quantityCount = card.querySelector('.quantity-count');

	if (quantityCount === null) {
		return;
	}

	quantityCount.textContent = product.quantity;
	const addToBag = card.querySelector('[data-action="add-to-bag"]');
	const quantityControl = card.querySelector('.quantity-control');
	if (product.quantity === 0) {
		addToBag.hidden = false;
		quantityControl.hidden = true;
	} else {
		addToBag.hidden = true;
		quantityControl.hidden = false;
	}
}

function getBagCount() {
	let total = 0;
	for (const product of products) {
		// Add this product's quantity to the running total.
		total += product.quantity;
	}
	return total;
}

// orderTotalCents is the sum for the whole bag, which is calculated on the line just above.
function getOrderTotalCents() {
	let total = 0;
	for (const product of products) {
		// Adding each product’s subtotal
		total += product.priceCents * product.quantity;
	}

	return total;
}

function renderBagItems() {
	// The start of the function is a good spot: it clears the old confirmation once every time the bag rerenders, even when the bag is empty. If it was after the function’s closing }, it would run when the script loads instead of each time the bag rerenders.
	orderStatus.textContent = '';

	// use document instead of card in the below variable. The list belongs to the shared bag, outside the individual product cards.
	const bagList = document.querySelector('.bag-list');
	// The replaceChildren() method replaces all existing child nodes of a DOM element with a new set of nodes or text strings in a single operation. Calling it with no arguments removes every child inside the element.
	bagList.replaceChildren();
	for (const product of products) {
		if (product.quantity > 0) {
			const li = document.createElement('li');
			li.classList.add('bag-item');
			// Below holds the price multiplied by the quantity. Also subTotalCents belongs to one product row and is only available inside that row’s block.
			const subtotalCents = product.priceCents * product.quantity;
			const formattedSubtotal = formatCurrency(subtotalCents);

			const itemName = document.createElement('p');
			itemName.classList.add('item-name');
			itemName.textContent = product.name;

			const itemCount = document.createElement('p');
			itemCount.classList.add('item-count');
			itemCount.textContent = `x ${product.quantity}`;

			const subTotal = document.createElement('p');
			subTotal.classList.add('item-subtotal');
			subTotal.textContent = formattedSubtotal;

			const itemPrice = document.createElement('p');
			itemPrice.classList.add('item-price');
			const formattedUnitPrice = formatCurrency(product.priceCents);

			itemPrice.textContent = `@ ${formattedUnitPrice}`;

			const itemDescription = document.createElement('div');
			itemDescription.classList.add('item-description');

			const itemInfo = document.createElement('div');
			itemInfo.classList.add('item-info');

			// classList.add() takes the class name 'bag-close-icon', without the dot. The dot is only used when writing a selector like .bag-close-icon.
			const removeButton = document.createElement('button');
			removeButton.classList.add('bag-close-icon');
			removeButton.innerHTML = `
			<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="m6 6 12 12M18 6 6 18" />
    	</svg>`;
			removeButton.type = 'button';
			removeButton.setAttribute('aria-label', `Remove ${product.name}`);

			removeButton.addEventListener('click', () => {
				product.quantity = 0;
				renderBagItems();
				bagCountDisplay.textContent = `${getBagCount()}`;
				const card = document.querySelector(`[data-product-id="${product.id}"]`);
				updateProductDisplay(product, card);
			});

			itemDescription.append(itemCount);
			itemDescription.append(itemPrice);
			itemDescription.append(subTotal);
			li.append(itemName);
			itemInfo.append(itemDescription);
			itemInfo.append(removeButton);
			li.append(itemInfo);

			bagList.appendChild(li);
		}
	}

	if (getBagCount() > 0) {
		emptyBagMessage.hidden = true;
		confirmOrder.hidden = false;
		orderDescription.hidden = false;
	} else {
		emptyBagMessage.hidden = false;
		confirmOrder.hidden = true;
		orderDescription.hidden = true;
	}

	const orderTotalCents = getOrderTotalCents();
	const formattedOrderTotal = formatCurrency(orderTotalCents);
	orderTotalDisplay.textContent = formattedOrderTotal;
}

// Turns subtotalCents into a display string.
function formatCurrency(amountCents) {
	const formattedAmount = (amountCents / 100).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	return formattedAmount;
}

console.log(formatCurrency(3200));

// Keep both variables local. renderBagItems() needs the current total each time it renders, and the click handler needs the current total each time you click. A top-level const initialized when the page loads would capture the starting total and stay at $0.00.

// If I want to reduce duplication later, share the formatting function and keep the totals local.

confirmOrder.addEventListener('click', () => {
	const orderTotalCents = getOrderTotalCents();
	const formattedOrderTotal = formatCurrency(orderTotalCents);

	// The order of operations is right: you save the total before resetting the quantities, rebuild the bag once after the loop, then write the confirmation after renderBagItems() so it doesn’t get cleared.

	for (const product of products) {
		product.quantity = 0;

		// The loop is correct. It resets each product’s quantity and updates its card to show Add to bag. You also saved the order total before resetting anything, so the confirmation still has the original amount.
		const card = document.querySelector(`[data-product-id="${product.id}"]`);
		updateProductDisplay(product, card);
	}

	// The 2x lines of code below rebuild the bag and update the heading.
	renderBagItems();
	bagCountDisplay.textContent = `${getBagCount()}`;
	orderStatus.textContent = `Practice order confirmed. Total: ${formattedOrderTotal}`;
});
