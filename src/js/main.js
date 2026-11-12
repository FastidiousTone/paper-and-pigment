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

// On each pass, product (singular) holds the current object. products (plural) is still the whole array. You’ve already got .name right—read it from the singular variable.

for (const product of products) {
	// I can reuse increaseButton. The const inside the loop has its own scope. Inside that loop and its click listeners, increaseButton refers to the current card’s button. The outer variable is separate. This is called shadowing.

	const card = document.querySelector(`[data-product-id="${product.id}"]`);
	const addToBagButton = card.querySelector(`[data-action="add-to-bag"]`);
	const increaseButton = card.querySelector('[data-action="increase"]');
	const decreaseButton = card.querySelector('[data-action="decrease"]');

	addToBagButton.addEventListener('click', () => {
		product.quantity += 1;
		updateProductDisplay(product, card);

		console.log(increaseButton);
	});
	if (increaseButton !== null) {
		increaseButton.addEventListener('click', () => {
			product.quantity += 1;
			updateProductDisplay(product, card);
		});
	}
	if (decreaseButton !== null) {
		decreaseButton.addEventListener('click', () => {
			if (product.quantity > 0) {
				product.quantity -= 1;
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

	console.log(addToBag, quantityControl);
}
